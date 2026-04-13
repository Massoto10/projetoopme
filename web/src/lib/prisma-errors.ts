import { Prisma } from "@prisma/client";

/** Violação de unicidade em pacotes.codigo_pacote */
export function isCodigoPacoteUniqueError(error: unknown): boolean {
  if (
    !(error instanceof Prisma.PrismaClientKnownRequestError) ||
    error.code !== "P2002"
  ) {
    return false;
  }
  const target = error.meta?.target;
  const fields = Array.isArray(target)
    ? target
    : typeof target === "string"
      ? [target]
      : [];
  return fields.includes("codigo_pacote");
}

/** Violação de unicidade em hospitais.cnpj */
export function isHospitalCnpjUniqueError(error: unknown): boolean {
  if (
    !(error instanceof Prisma.PrismaClientKnownRequestError) ||
    error.code !== "P2002"
  ) {
    return false;
  }
  const target = error.meta?.target;
  const fields = Array.isArray(target)
    ? target
    : typeof target === "string"
      ? [target]
      : [];
  return fields.includes("cnpj");
}

/** FK pacotes.created_by_id → users (sessão com id obsoleto após reset do banco). */
export function isPacoteCreatedByFkError(error: unknown): boolean {
  if (
    !(error instanceof Prisma.PrismaClientKnownRequestError) ||
    error.code !== "P2003"
  ) {
    return false;
  }
  return error.meta?.constraint === "pacotes_created_by_id_fkey";
}
