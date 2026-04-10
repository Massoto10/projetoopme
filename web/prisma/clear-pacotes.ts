/**
 * Remove todos os pacotes do banco (cascade nas tabelas filhas)
 * e apaga arquivos em uploads/pacotes.
 *
 * Uso: npx tsx prisma/clear-pacotes.ts
 */
import "dotenv/config";
import { rm } from "fs/promises";
import { join } from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const antes = await prisma.pacote.count();
  await prisma.pacote.deleteMany({});
  console.log(
    `Removidos ${antes} pacote(s) e dados relacionados (CNPJs, hospitais, contemplações, anexos).`,
  );

  const pacotesDir = join(process.cwd(), "uploads", "pacotes");
  try {
    await rm(pacotesDir, { recursive: true, force: true });
    console.log("Pasta uploads/pacotes apagada (PDFs locais).");
  } catch (e) {
    console.warn("Aviso ao apagar uploads/pacotes:", e);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
