/**
 * Extrai o bloco TSV da última mensagem do usuário no histórico Cursor
 * (evita versionar dezenas de milhares de caracteres no repositório).
 *
 * Saída: prisma/data/pacotes-carga.tsv
 * Se não achar no histórico mas o .tsv já existir, encerra com sucesso.
 */
const fs = require("fs");
const path = require("path");

const TRANSCRIPTS_ROOT = path.join(
  process.env.USERPROFILE || "",
  ".cursor",
  "projects",
  "c-Users-masso-Portal-Pacotes",
  "agent-transcripts",
);

function* walkJsonl(dir) {
  if (!fs.existsSync(dir)) return;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) yield* walkJsonl(p);
    else if (ent.name.endsWith(".jsonl")) yield p;
  }
}

function extractBodyFromLine(line) {
  let j;
  try {
    j = JSON.parse(line);
  } catch {
    return null;
  }
  const content = j?.message?.content;
  let text = null;
  if (Array.isArray(content)) {
    const t = content.find((c) => c?.type === "text" && typeof c.text === "string");
    text = t?.text ?? null;
  }
  if (typeof text !== "string") return null;
  const marker = "inclui os cnpjs): ";
  const i = text.indexOf(marker);
  if (i === -1) return null;
  return text
    .slice(i + marker.length)
    .replace(/<\/user_query>\s*$/i, "")
    .trim();
}

const outDir = path.join(__dirname, "data");
const outPath = path.join(outDir, "pacotes-carga.tsv");
const fallbackExists = fs.existsSync(outPath);

let body = null;
for (const file of walkJsonl(TRANSCRIPTS_ROOT)) {
  const content = fs.readFileSync(file, "utf8");
  for (const line of content.split("\n")) {
    if (!line.includes("98520024") || !line.includes("inclui os cnpjs")) continue;
    const b = extractBodyFromLine(line);
    if (b && b.includes("\t") && b.includes("00510149000110")) {
      body = b;
      break;
    }
  }
  if (body) break;
}

if (!body) {
  if (fallbackExists) {
    console.log("Transcript não encontrado; usando arquivo existente:", outPath);
    process.exit(0);
  }
  console.error(
    "Não foi possível extrair a carga. Copie a tabela para prisma/data/pacotes-carga.tsv manualmente.",
  );
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outPath, body, "utf8");
const n = body.split(/\r?\n/).filter((l) => l.trim()).length;
console.log("Escrito", outPath, `(${n} linhas)`);
