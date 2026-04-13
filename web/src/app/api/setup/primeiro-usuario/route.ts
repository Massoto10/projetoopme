import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { primeiroUsuarioSchema } from "@/lib/validators";

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const parsed = primeiroUsuarioSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { email, name, password } = parsed.data;

  try {
    const user = await prisma.$transaction(async (tx) => {
      const count = await tx.user.count();
      if (count > 0) return null;

      const passwordHash = await bcrypt.hash(password, 12);
      return tx.user.create({
        data: { email, name, passwordHash, role: "ADMIN" },
        select: {
          id: true,
          email: true,
          name: true,
          role: true,
          createdAt: true,
        },
      });
    });

    if (!user) {
      return NextResponse.json(
        { error: "Cadastro não disponível." },
        { status: 403 },
      );
    }

    return NextResponse.json(user, { status: 201 });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002") {
      return NextResponse.json(
        { error: "E-mail já cadastrado" },
        { status: 409 },
      );
    }
    throw e;
  }
}
