/**
 * Lê prisma/data/pacotes-carga.tsv (ou pacotes-carga-*.tsv): codigo\tnome\tcnpj
 * - Um registro de pacote por código TUSS; agrega todos os CNPJs distintos.
 * - Cria pacote (sem linhas de contemplação por código) com vínculos; texto_contemplacao = nome.
 *   Novos pacotes ficam com situação ATIVO (default do banco / Prisma).
 *   Se já existir, só acrescenta hospitais.
 *
 * Uso: npx tsx prisma/import-pacotes-carga.ts
 */
import "dotenv/config";
import * as fs from "fs";
import * as path from "path";
import { PrismaClient } from "@prisma/client";

const DATA_DIR = path.join(process.cwd(), "prisma", "data");

function loadTsvBodies(): string {
  const names = fs
    .readdirSync(DATA_DIR)
    .filter((n) => /^pacotes-carga.*\.tsv$/i.test(n))
    .sort();
  if (names.length === 0) {
    throw new Error(
      `Nenhum pacotes-carga*.tsv em ${DATA_DIR}. Rode: node prisma/extract-pacotes-tsv.cjs`,
    );
  }
  return names.map((n) => fs.readFileSync(path.join(DATA_DIR, n), "utf8")).join("\n");
}

function normalizeCnpjDigits(raw: string): string | null {
  const d = raw.replace(/\D/g, "");
  return d.length === 14 ? d : null;
}

function parseTsvRows(raw: string): Array<{ codigo: string; nome: string; cnpj: string }> {
  const rows: Array<{ codigo: string; nome: string; cnpj: string }> = [];
  const lines = raw.split(/\r?\n/);
  let carry = "";

  for (let line of lines) {
    line = line.trimEnd();
    if (!line && !carry) continue;

    const combined = carry ? `${carry}\n${line}` : line;
    const parts = combined.split("\t");
    if (parts.length < 3) {
      carry = combined;
      continue;
    }

    const codigoRaw = parts[0].trim();
    const cnpjRaw = parts[parts.length - 1].trim();
    const nomeRaw = parts.slice(1, -1).join("\t").trim();
    carry = "";

    const codigo = codigoRaw.replace(/\D/g, "");
    if (!codigo || !nomeRaw) continue;
    const cnpj = normalizeCnpjDigits(cnpjRaw);
    if (!cnpj) {
      console.warn(`Ignorado (CNPJ inválido) código ${codigoRaw}: ${cnpjRaw.slice(0, 24)}…`);
      continue;
    }

    const nome = nomeRaw.slice(0, 500);
    rows.push({ codigo, nome, cnpj });
  }

  return rows;
}

function aggregate(
  rows: Array<{ codigo: string; nome: string; cnpj: string }>,
): Map<string, { nome: string; cnpjs: Set<string> }> {
  const map = new Map<string, { nome: string; cnpjs: Set<string> }>();
  for (const r of rows) {
    const cur = map.get(r.codigo);
    if (!cur) {
      map.set(r.codigo, { nome: r.nome, cnpjs: new Set([r.cnpj]) });
    } else {
      cur.cnpjs.add(r.cnpj);
      if (r.nome.length > cur.nome.length) cur.nome = r.nome;
    }
  }
  return map;
}

async function main() {
  const raw = loadTsvBodies();
  const rows = parseTsvRows(raw);
  const byCodigo = aggregate(rows);

  console.log(`Linhas válidas: ${rows.length} → pacotes únicos: ${byCodigo.size}`);

  const prisma = new PrismaClient();
  try {
    const admin = await prisma.user.findFirst({
      where: { role: "ADMIN" },
      orderBy: { createdAt: "asc" },
      select: { id: true },
    });
    if (!admin) throw new Error("Nenhum usuário ADMIN no banco. Rode o seed.");

    const hospitals = await prisma.hospital.findMany({
      select: { id: true, cnpj: true },
    });
    const cnpjToId = new Map(hospitals.map((h) => [h.cnpj, h.id]));

    let created = 0;
    let updatedLinks = 0;
    let skippedNoHospital = 0;

    for (const [codigo, { nome, cnpjs }] of byCodigo) {
      const hospitalIds = [...cnpjs]
        .map((c) => cnpjToId.get(c))
        .filter((id): id is string => Boolean(id));
      const missing = [...cnpjs].filter((c) => !cnpjToId.has(c));
      if (missing.length) {
        console.warn(
          `  [${codigo}] CNPJs sem cadastro em hospitais (${missing.length}): ${missing.slice(0, 4).join(", ")}${missing.length > 4 ? "…" : ""}`,
        );
      }

      if (hospitalIds.length === 0) {
        skippedNoHospital++;
        continue;
      }

      let pacote = await prisma.pacote.findUnique({
        where: { codigoPacote: codigo },
        select: { id: true, nomePacote: true },
      });

      if (!pacote) {
        await prisma.pacote.create({
          data: {
            codigoPacote: codigo,
            nomePacote: nome,
            textoContemplacao: nome,
            createdById: admin.id,
            hospitais: {
              create: hospitalIds.map((hospitalId) => ({ hospitalId })),
            },
          },
        });
        created++;
        continue;
      }

      if (nome.length > pacote.nomePacote.length) {
        await prisma.pacote.update({
          where: { id: pacote.id },
          data: { nomePacote: nome },
        });
      }

      const existing = await prisma.pacoteHospital.findMany({
        where: { pacoteId: pacote.id },
        select: { hospitalId: true },
      });
      const have = new Set(existing.map((e) => e.hospitalId));
      const toAdd = hospitalIds.filter((id) => !have.has(id));
      if (toAdd.length > 0) {
        await prisma.pacoteHospital.createMany({
          data: toAdd.map((hospitalId) => ({
            pacoteId: pacote!.id,
            hospitalId,
          })),
          skipDuplicates: true,
        });
        updatedLinks += toAdd.length;
      }
    }

    console.log(
      `Concluído: ${created} pacote(s) criado(s), ${updatedLinks} vínculo(s) novo(s), ${skippedNoHospital} código(s) ignorados (sem hospital no banco).`,
    );
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
