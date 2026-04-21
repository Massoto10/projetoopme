import type { Prisma } from "@prisma/client";
import { normalizeCnpj } from "@/lib/cnpj";

/** Primeiro valor de query string (Next pode entregar string | string[]). */
export function firstQueryParam(
  v: string | string[] | undefined,
): string {
  if (typeof v === "string") return v;
  if (Array.isArray(v) && v[0] !== undefined) return v[0];
  return "";
}

/** Separa códigos TUSS (filtro da listagem) por vírgula, ponto e vírgula ou espaço. */
export function parseContemplacaoCodigos(raw: string): string[] {
  const s = raw.trim();
  if (!s) return [];
  return s
    .split(/[,;\s]+/)
    .map((t) => t.trim())
    .filter(Boolean);
}

export function buildPacoteListWhere(input: {
  codigoPacote: string;
  cnpj: string;
  contemplacaoCodigos: string;
}): Prisma.PacoteWhereInput {
  const clauses: Prisma.PacoteWhereInput[] = [];

  const codigo = input.codigoPacote.trim();
  if (codigo) {
    clauses.push({ codigoPacote: { contains: codigo } });
  }

  const cnpjDigits = normalizeCnpj(input.cnpj);
  if (cnpjDigits.length > 0) {
    clauses.push({
      hospitais: {
        some: {
          hospital: { cnpj: { contains: cnpjDigits } },
        },
      },
    });
  }

  for (const token of parseContemplacaoCodigos(input.contemplacaoCodigos)) {
    clauses.push({
      contemplacoes: {
        some: {
          codigo: { contains: token, mode: "insensitive" },
        },
      },
    });
  }

  if (clauses.length === 0) return {};
  return { AND: clauses };
}
