import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin, requireUser } from "@/lib/api-auth";
import { isValidCnpjDigits, normalizeCnpj } from "@/lib/cnpj";
import { isHospitalCnpjUniqueError } from "@/lib/prisma-errors";
import { hospitalCreateSchema } from "@/lib/validators";

/** Busca hospitais pelo CNPJ (completo ou prefixo). */
export async function GET(req: Request) {
  const authResult = await requireUser();
  if ("error" in authResult) return authResult.error;

  const { searchParams } = new URL(req.url);
  const raw = searchParams.get("cnpj") ?? "";
  const digits = normalizeCnpj(raw);

  if (digits.length === 0) {
    return NextResponse.json(
      { error: "Informe o CNPJ para buscar." },
      { status: 400 },
    );
  }

  if (isValidCnpjDigits(digits)) {
    const exact = await prisma.hospital.findUnique({
      where: { cnpj: digits },
      select: { id: true, nome: true, cnpj: true },
    });
    return NextResponse.json({ exact, suggestions: [] as const });
  }

  const suggestions = await prisma.hospital.findMany({
    where: { cnpj: { startsWith: digits } },
    take: 12,
    orderBy: { cnpj: "asc" },
    select: { id: true, nome: true, cnpj: true },
  });

  return NextResponse.json({ exact: null, suggestions });
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

  const parsed = hospitalCreateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { cnpj, nome } = parsed.data;

  try {
    const hospital = await prisma.hospital.create({
      data: { cnpj, nome },
      select: { id: true, nome: true, cnpj: true },
    });
    return NextResponse.json(hospital, { status: 201 });
  } catch (e) {
    if (isHospitalCnpjUniqueError(e)) {
      return NextResponse.json(
        { error: "Já existe um hospital cadastrado com este CNPJ." },
        { status: 409 },
      );
    }
    throw e;
  }
}
