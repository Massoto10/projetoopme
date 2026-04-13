/**
 * Aplica no Postgres as colunas da migration
 * `20260413120000_texto_contemplacao_observacao_hospital` sem passar por `migrate dev`.
 *
 * Use quando:
 * - `migrate dev` falha (checksum) ou não roda, e
 * - o app quebra com "column texto_contemplacao does not exist".
 *
 * Depois rode (uma vez):
 *   npx prisma migrate resolve --applied 20260413120000_texto_contemplacao_observacao_hospital
 *
 * Uso: yarn db:apply-contemplacao-columns
 */
import "dotenv/config";
import { PrismaClient } from "@prisma/client";

async function main() {
  const prisma = new PrismaClient();
  try {
    await prisma.$executeRawUnsafe(
      `ALTER TABLE "pacotes" ADD COLUMN IF NOT EXISTS "texto_contemplacao" TEXT NOT NULL DEFAULT ''`,
    );
    await prisma.$executeRawUnsafe(
      `ALTER TABLE "pacote_hospitais" ADD COLUMN IF NOT EXISTS "observacao" TEXT`,
    );
    console.log(
      "OK: colunas texto_contemplacao (pacotes) e observacao (pacote_hospitais) estão no banco.",
    );
    console.log(
      "\nPróximo passo (registrar a migration no histórico do Prisma):\n" +
        "  npx prisma migrate resolve --applied 20260413120000_texto_contemplacao_observacao_hospital\n" +
        "\nDepois: yarn db:migrate",
    );
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
