import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin, requireUser } from "@/lib/api-auth";
import {
  isCodigoPacoteUniqueError,
  isPacoteCreatedByFkError,
} from "@/lib/prisma-errors";
import {
  observacaoForPacoteHospital,
  pacotePayloadSchema,
} from "@/lib/validators";

export async function GET() {
  const authResult = await requireUser();
  if ("error" in authResult) return authResult.error;

  const rows = await prisma.pacote.findMany({
    orderBy: { updatedAt: "desc" },
    include: {
      _count: {
        select: {
          hospitais: true,
          contemplacoes: true,
          anexos: true,
        },
      },
      createdBy: { select: { name: true, email: true } },
    },
  });

  return NextResponse.json(
    rows.map((p) => ({
      id: p.id,
      codigoPacote: p.codigoPacote,
      nomePacote: p.nomePacote,
      situacao: p.situacao,
      updatedAt: p.updatedAt,
      createdAt: p.createdAt,
      autor: p.createdBy,
      counts: p._count,
    })),
  );
}

export async function POST(req: Request) {
  const authResult = await requireAdmin();
  if ("error" in authResult) return authResult.error;

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
    const pacote = await prisma.pacote.create({
      data: {
        codigoPacote,
        nomePacote,
        situacao,
        textoContemplacao,
        createdById: authResult.session.user.id,
        hospitais: {
          create: hospitalIds.map((hospitalId) => ({
            hospital: { connect: { id: hospitalId } },
            observacao: observacaoForPacoteHospital(
              hospitalObservacoes,
              hospitalId,
            ),
          })),
        },
        contemplacoes: {
          create: contemplacoes.map((c) => ({
            codigo: c.codigo,
            descricao: c.descricao,
          })),
        },
      },
    });
    return NextResponse.json({ id: pacote.id }, { status: 201 });
  } catch (e) {
    if (isCodigoPacoteUniqueError(e)) {
      return NextResponse.json(
        { error: "Já existe um pacote com este código." },
        { status: 409 },
      );
    }
    if (isPacoteCreatedByFkError(e)) {
      return NextResponse.json(
        {
          error:
            "Seu usuário não existe mais neste banco (sessão antiga ou banco recriado). Saia da conta, rode yarn db:seed se necessário e faça login de novo.",
        },
        { status: 401 },
      );
    }
    throw e;
  }
}
