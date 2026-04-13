/**
 * Sincroniza a coluna `checksum` em `_prisma_migrations` com o SHA-256 dos bytes
 * exatos de cada `migration.sql` (igual ao que o Prisma usa ao rodar migrate).
 *
 * Use quando o Prisma acusar: "migration was modified after it was applied"
 * (comum no Windows por CRLF vs LF — use também `prisma/migrations/.gitattributes`).
 *
 * Uso: yarn db:repair-checksums
 */
import "dotenv/config";
import { createHash } from "node:crypto";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { PrismaClient } from "@prisma/client";

const migrationsDir = join(process.cwd(), "prisma", "migrations");

function sha256MigrationFile(sqlPath: string): string {
  const buf = readFileSync(sqlPath);
  return createHash("sha256").update(buf).digest("hex");
}

async function main() {
  const prisma = new PrismaClient();
  try {
    const dirs = readdirSync(migrationsDir, { withFileTypes: true })
      .filter((e) => e.isDirectory())
      .map((e) => e.name);

    for (const name of dirs) {
      const sqlPath = join(migrationsDir, name, "migration.sql");
      if (!existsSync(sqlPath)) continue;

      const checksum = sha256MigrationFile(sqlPath);

      const updated = await prisma.$executeRaw`
        UPDATE "_prisma_migrations"
        SET checksum = ${checksum}
        WHERE migration_name = ${name}
      `;
      console.log(`${name}: checksum atualizado (${updated} linha(s))`);
    }

    console.log("\nPronto. Rode: yarn db:migrate");
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
