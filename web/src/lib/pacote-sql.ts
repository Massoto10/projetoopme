import { randomUUID } from "node:crypto";
import type { Prisma } from "@prisma/client";
import type { PacoteSituacaoValue } from "@/lib/pacote-situacao";

/**
 * Atualiza campos escalares em `pacotes` via SQL para não depender do Prisma
 * Client gerado ter `texto_contemplacao` (útil quando `prisma generate` falhou).
 */
export async function sqlUpdatePacoteCadastro(
  tx: Prisma.TransactionClient,
  pacoteId: string,
  input: {
    codigoPacote: string;
    nomePacote: string;
    textoContemplacao: string;
    situacao: PacoteSituacaoValue;
  },
): Promise<void> {
  await tx.$executeRaw`
    UPDATE pacotes
    SET
      codigo_pacote = ${input.codigoPacote},
      nome_pacote = ${input.nomePacote},
      texto_contemplacao = ${input.textoContemplacao},
      situacao = ${input.situacao}::"PacoteSituacao",
      updated_at = NOW()
    WHERE id = ${pacoteId}
  `;
}

/** Insere uma linha em pacote_hospitais com observação opcional (NULL no banco). */
export async function sqlInsertPacoteHospital(
  tx: Prisma.TransactionClient,
  input: {
    pacoteId: string;
    hospitalId: string;
    observacao: string | null;
  },
): Promise<void> {
  const id = randomUUID();
  if (input.observacao === null) {
    await tx.$executeRaw`
      INSERT INTO pacote_hospitais (id, pacote_id, hospital_id, observacao)
      VALUES (${id}, ${input.pacoteId}, ${input.hospitalId}, NULL)
    `;
  } else {
    await tx.$executeRaw`
      INSERT INTO pacote_hospitais (id, pacote_id, hospital_id, observacao)
      VALUES (${id}, ${input.pacoteId}, ${input.hospitalId}, ${input.observacao})
    `;
  }
}
