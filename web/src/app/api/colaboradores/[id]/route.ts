import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/api-auth";
import { colaboradorUpdateSchema } from "@/lib/validators";

type Ctx = { params: Promise<{ id: string }> };

export async function GET(_req: Request, ctx: Ctx) {
  const authResult = await requireAdmin();
  if ("error" in authResult) return authResult.error;

  const { id } = await ctx.params;
  const user = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  if (!user) {
    return NextResponse.json({ error: "Não encontrado" }, { status: 404 });
  }
  return NextResponse.json(user);
}

export async function PATCH(req: Request, ctx: Ctx) {
  const authResult = await requireAdmin();
  if ("error" in authResult) return authResult.error;

  const { id } = await ctx.params;
  const existing = await prisma.user.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: "Não encontrado" }, { status: 404 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const parsed = colaboradorUpdateSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Dados inválidos", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const data = parsed.data;
  if (Object.keys(data).length === 0) {
    return NextResponse.json({ error: "Nada para atualizar" }, { status: 400 });
  }

  if (data.email && data.email !== existing.email) {
    const taken = await prisma.user.findUnique({ where: { email: data.email } });
    if (taken) {
      return NextResponse.json({ error: "E-mail já em uso" }, { status: 409 });
    }
  }

  const update: {
    email?: string;
    name?: string;
    passwordHash?: string;
    role?: "ADMIN" | "COLABORADOR";
  } = {};
  if (data.email !== undefined) update.email = data.email;
  if (data.name !== undefined) update.name = data.name;
  if (data.role !== undefined) update.role = data.role;
  if (data.password) update.passwordHash = await bcrypt.hash(data.password, 12);

  if (update.role === "COLABORADOR" && existing.role === "ADMIN") {
    const admins = await prisma.user.count({ where: { role: "ADMIN" } });
    if (admins <= 1) {
      return NextResponse.json(
        { error: "Não é possível remover o último administrador" },
        { status: 400 },
      );
    }
  }

  const user = await prisma.user.update({
    where: { id },
    data: update,
    select: {
      id: true,
      email: true,
      name: true,
      role: true,
      updatedAt: true,
    },
  });

  return NextResponse.json(user);
}

export async function DELETE(_req: Request, ctx: Ctx) {
  const authResult = await requireAdmin();
  if ("error" in authResult) return authResult.error;

  const { id } = await ctx.params;
  if (id === authResult.session.user.id) {
    return NextResponse.json(
      { error: "Não é possível excluir a própria conta por aqui" },
      { status: 400 },
    );
  }

  const existing = await prisma.user.findUnique({ where: { id } });
  if (!existing) {
    return NextResponse.json({ error: "Não encontrado" }, { status: 404 });
  }

  if (existing.role === "ADMIN") {
    const admins = await prisma.user.count({ where: { role: "ADMIN" } });
    if (admins <= 1) {
      return NextResponse.json(
        { error: "Não é possível excluir o último administrador" },
        { status: 400 },
      );
    }
  }

  await prisma.user.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}
