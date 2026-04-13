import { z } from "zod";
import { isValidCnpjDigits, normalizeCnpj } from "@/lib/cnpj";

const contemplacaoSchema = z.object({
  codigo: z.string().min(1).max(64),
  descricao: z.string().min(1).max(8000),
});

/** Código único do pacote: somente dígitos (sem espaços). */
const codigoPacoteField = z
  .string()
  .trim()
  .min(1, "Informe o código do pacote.")
  .max(64, "Código com no máximo 64 caracteres.")
  .refine((s) => /^\d+$/.test(s), "O código deve conter apenas números.");

export const hospitalCreateSchema = z
  .object({
    cnpj: z.string().min(1).max(32),
    nome: z.string().min(1).max(300).trim(),
  })
  .transform((d) => ({
    cnpj: normalizeCnpj(d.cnpj),
    nome: d.nome,
  }))
  .refine((d) => isValidCnpjDigits(d.cnpj), {
    message: "Informe um CNPJ válido (14 dígitos).",
    path: ["cnpj"],
  });

export const pacotePayloadSchema = z.object({
  codigoPacote: codigoPacoteField,
  nomePacote: z.string().min(1).max(500).trim(),
  hospitalIds: z
    .array(z.string().min(1))
    .min(1, "Informe ao menos um hospital.")
    .max(200)
    .transform((ids) => [...new Set(ids)]),
  contemplacoes: z
    .array(contemplacaoSchema)
    .min(1, "Informe ao menos uma contemplação.")
    .max(500),
});

export type PacotePayload = z.infer<typeof pacotePayloadSchema>;

export const colaboradorCreateSchema = z.object({
  email: z.string().email().max(255).toLowerCase().trim(),
  name: z.string().min(1).max(200).trim(),
  password: z.string().min(8).max(128),
  role: z.enum(["COLABORADOR", "ADMIN"]).default("COLABORADOR"),
});

/** Primeiro usuário do sistema (bootstrap); papel ADMIN fixo no servidor. */
export const primeiroUsuarioSchema = colaboradorCreateSchema.omit({
  role: true,
});

export const colaboradorUpdateSchema = z.object({
  email: z.string().email().max(255).toLowerCase().trim().optional(),
  name: z.string().min(1).max(200).trim().optional(),
  password: z
    .union([z.literal(""), z.string().min(8).max(128)])
    .optional(),
  role: z.enum(["COLABORADOR", "ADMIN"]).optional(),
});
