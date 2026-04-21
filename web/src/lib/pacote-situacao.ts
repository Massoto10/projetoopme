/** Valores persistidos em `pacotes.situacao` (enum Prisma `PacoteSituacao`). */
export type PacoteSituacaoValue =
  | "ATIVO"
  | "SUSPENSO"
  | "SUBSTITUIDO"
  | "CANCELADO";

export const PACOTE_SITUACAO_VALUES = [
  "ATIVO",
  "SUSPENSO",
  "SUBSTITUIDO",
  "CANCELADO",
] as const satisfies readonly PacoteSituacaoValue[];

export const PACOTE_SITUACAO_OPTIONS: {
  value: PacoteSituacaoValue;
  label: string;
}[] = [
  { value: "ATIVO", label: "Ativo" },
  { value: "SUSPENSO", label: "Suspenso" },
  { value: "SUBSTITUIDO", label: "Substituído" },
  { value: "CANCELADO", label: "Cancelado" },
];

export function labelPacoteSituacao(situacao: string): string {
  const hit = PACOTE_SITUACAO_OPTIONS.find((o) => o.value === situacao);
  return hit?.label ?? situacao;
}

/** Classes para badge na listagem / detalhes (tema neutro legível). */
export function pacoteSituacaoBadgeClass(situacao: PacoteSituacaoValue): string {
  switch (situacao) {
    case "ATIVO":
      return "border border-emerald-200 bg-emerald-50 text-emerald-900";
    case "SUSPENSO":
      return "border border-amber-200 bg-amber-50 text-amber-950";
    case "SUBSTITUIDO":
      return "border border-sky-200 bg-sky-50 text-sky-950";
    case "CANCELADO":
      return "border border-neutral-300 bg-neutral-100 text-neutral-800";
  }
}
