import { NextResponse } from "next/server";
import { join } from "path";
import { prisma } from "@/lib/prisma";
import { requireAdmin, requireUser } from "@/lib/api-auth";
import { isCodigoPacoteUniqueError } from "@/lib/prisma-errors";
import {
  observacaoForPacoteHospital,
  pacotePayloadSchema,
} from "@/lib/validators";
import {
  sqlInsertPacoteHospital,
  sqlUpdatePacoteCadastro,
} from "@/lib/pacote-sql";
import { safeUnlink } from "@/lib/uploads";

type Ctx = { params: Promise<{ id: string }> };

async function getPacoteOr404(id: string) {
  return prisma.pacote.findUnique({
    where: { id },
    include: {
      hospitais: {
        include: {
          hospital: { select: { id: true, nome: true, cnpj: true } },
        },
      },
      contemplacoes: true,
      anexos: {
        orderBy: { createdAt: "asc" },
        select: {
          id: true,
          nomeOriginal: true,
          tamanhoBytes: true,
          createdAt: true,
        },
      },
      createdBy: { select: { name: true, email: true } },
    },
  });
}

export async function GET(_req: Request, ctx: Ctx) {
  const authResult = await requireUser();
  if ("error" in authResult) return authResult.error;

  const { id } = await ctx.params;
  const pacote = await getPacoteOr404(id);
  if (!pacote) {
    return NextResponse.json({ error: "Não encontrado" }, { status: 404 });
  }

  return NextResponse.json({
    id: pacote.id,
    codigoPacote: pacote.codigoPacote,
    nomePacote: pacote.nomePacote,
    situacao: pacote.situacao,
    textoContemplacao: pacote.textoContemplacao ?? "",
    createdAt: pacote.createdAt,
    updatedAt: pacote.updatedAt,
    autor: pacote.createdBy,
    hospitais: pacote.hospitais.map((h) => ({
      hospitalId: h.hospital.id,
      nome: h.hospital.nome,
      cnpj: h.hospital.cnpj,
      observacao: h.observacao,
    })),
    contemplacoes: pacote.contemplacoes.map((c) => ({
      id: c.id,
      codigo: c.codigo,
      descricao: c.descricao,
    })),
    anexos: pacote.anexos,
  });
}

export async function PATCH(req: Request, ctx: Ctx) {
  const authResult = await requireAdmin();
  if ("error" in authResult) return authResult.error;

  const { id } = await ctx.params;
  const existing = await prisma.pacote.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: "Não encontrado" }, { status: 404 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const parsed = pacotePayloadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const {
    codigoPacote,
    nomePacote,
    situacao,
    textoContemplacao,
    hospitalIds,
    hospitalObservacoes,
    contemplacoes,
  } = parsed.data;

  const found = await prisma.hospital.count({
    where: { id: { in: hospitalIds } },
  });
  if (found !== hospitalIds.length) {
    return NextResponse.json(
      { error: "Um ou mais hospitais não foram encontrados." },
      { status: 400 },
    );
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.pacoteHospital.deleteMany({ where: { pacoteId: id } });
      await tx.pacoteContemplacao.deleteMany({ where: { pacoteId: id } });
      await sqlUpdatePacoteCadastro(tx, id, {
        codigoPacote,
        nomePacote,
        textoContemplacao,
        situacao,
      });
      for (const hospitalId of hospitalIds) {
        await sqlInsertPacoteHospital(tx, {
          pacoteId: id,
          hospitalId,
          observacao: observacaoForPacoteHospital(
            hospitalObservacoes,
            hospitalId,
          ),
        });
      }
      await tx.pacoteContemplacao.createMany({
        data: contemplacoes.map((c) => ({
          pacoteId: id,
          codigo: c.codigo,
          descricao: c.descricao,
        })),
      });
    });
  } catch (e) {
    if (isCodigoPacoteUniqueError(e)) {
      return NextResponse.json(
        { error: "Já existe um pacote com este código." },
        { status: 409 },
      );
    }
    throw e;
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: Request, ctx: Ctx) {
  const authResult = await requireAdmin();
  if ("error" in authResult) return authResult.error;

  const { id } = await ctx.params;
  const pacote = await prisma.pacote.findUnique({
    where: { id },
    include: { anexos: true },
  });
  if (!pacote) {
    return NextResponse.json({ error: "Não encontrado" }, { status: 404 });
  }

  await prisma.pacote.delete({ where: { id } });

  const root = join(process.cwd(), "uploads");
  for (const a of pacote.anexos) {
    await safeUnlink(join(root, a.caminho));
  }

  return NextResponse.json({ ok: true });
}
