/**
 * Importa hospitais a partir de TSV (cnpj\tnome), uma linha por registro.
 * - Normaliza CNPJ para 14 dígitos (aceita formatação com . / -)
 * - Ignora linhas duplicadas no arquivo e CNPJs já existentes no banco (skipDuplicates)
 *
 * Uso: npx tsx prisma/import-hospitais.ts [caminho/arquivo.tsv]
 * Padrão: prisma/data/hospitais-carga.tsv
 */
import "dotenv/config";
import * as fs from "fs";
import * as path from "path";
import { PrismaClient } from "@prisma/client";

function normalizeCnpjDigits(raw: string): string | null {
  const d = raw.replace(/\D/g, "");
  if (d.length === 14) return d;
  return null;
}

function parseTsv(content: string): Map<string, string> {
  const byCnpj = new Map<string, string>();
  const lines = content.split(/\r?\n/);
  let carry = "";

  for (let line of lines) {
    line = line.trimEnd();
    if (!line && !carry) continue;

    const combined = carry ? `${carry}\n${line}` : line;
    const tab = combined.indexOf("\t");
    if (tab === -1) {
      carry = combined;
      continue;
    }

    const cnpjRaw = combined.slice(0, tab).trim();
    const nome = combined.slice(tab + 1).trim().replace(/^"|"$/g, "");
    carry = "";

    const digits = normalizeCnpjDigits(cnpjRaw);
    if (!digits) {
      console.warn(`Ignorado (CNPJ inválido): ${cnpjRaw.slice(0, 40)}…`);
      continue;
    }
    if (!nome) continue;
    if (!byCnpj.has(digits)) byCnpj.set(digits, nome);
  }

  return byCnpj;
}

async function main() {
  const fileArg = process.argv[2];
  const defaultFile = path.join(process.cwd(), "prisma", "data", "hospitais-carga.tsv");
  const tsvPath = path.resolve(fileArg ?? defaultFile);

  if (!fs.existsSync(tsvPath)) {
    console.error(`Arquivo não encontrado: ${tsvPath}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(tsvPath, "utf8");
  const byCnpj = parseTsv(raw);

  const data = [...byCnpj.entries()].map(([cnpj, nome]) => ({ cnpj, nome }));

  console.log(`Únicos no arquivo: ${data.length}`);

  const prisma = new PrismaClient();
  try {
    const result = await prisma.hospital.createMany({
      data,
      skipDuplicates: true,
    });
    console.log(`Inseridos (novos): ${result.count}`);
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
