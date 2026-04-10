import { NextResponse } from "next/server";
import { readFile } from "fs/promises";
import { join } from "path";
import { prisma } from "@/lib/prisma";
import { requireAdmin, requireUser } from "@/lib/api-auth";
import { safeUnlink } from "@/lib/uploads";

type Ctx = { params: Promise<{ id: string; anexoId: string }> };

export async function GET(_req: Request, ctx: Ctx) {
  const authResult = await requireUser();
  if ("error" in authResult) return authResult.error;

  const { id: pacoteId, anexoId } = await ctx.params;
  const anexo = await prisma.pacoteAnexo.findFirst({
    where: { id: anexoId, pacoteId },
  });
  if (!anexo) {
    return NextResponse.json({ error: "Não encontrado" }, { status: 404 });
  }

  const abs = join(process.cwd(), "uploads", anexo.caminho);
  let buf: Buffer;
  try {
    buf = await readFile(abs);
  } catch {
    return NextResponse.json({ error: "Arquivo ausente no disco" }, { status: 404 });
  }

  return new NextResponse(new Uint8Array(buf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${encodeURIComponent(anexo.nomeOriginal)}"`,
      "Cache-Control": "private, no-store",
    },
  });
}

export async function DELETE(_req: Request, ctx: Ctx) {
  const authResult = await requireAdmin();
  if ("error" in authResult) return authResult.error;

  const { id: pacoteId, anexoId } = await ctx.params;
  const anexo = await prisma.pacoteAnexo.findFirst({
    where: { id: anexoId, pacoteId },
  });
  if (!anexo) {
    return NextResponse.json({ error: "Não encontrado" }, { status: 404 });
  }

  await prisma.pacoteAnexo.delete({ where: { id: anexoId } });
  await safeUnlink(join(process.cwd(), "uploads", anexo.caminho));

  return NextResponse.json({ ok: true });
}
