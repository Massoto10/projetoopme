import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/api-auth";
import { ensurePacoteDir, MAX_PDF_BYTES } from "@/lib/uploads";

type Ctx = { params: Promise<{ id: string }> };

export async function POST(req: Request, ctx: Ctx) {
  const authResult = await requireAdmin();
  if ("error" in authResult) return authResult.error;

  const { id: pacoteId } = await ctx.params;
  const pacote = await prisma.pacote.findUnique({ where: { id: pacoteId } });
  if (!pacote) {
    return NextResponse.json({ error: "Pacote não encontrado" }, { status: 404 });
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ error: "Formulário inválido" }, { status: 400 });
  }

  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Arquivo ausente" }, { status: 400 });
  }

  if (file.type !== "application/pdf") {
    return NextResponse.json(
      { error: "Apenas PDF é permitido" },
      { status: 400 },
    );
  }

  if (file.size > MAX_PDF_BYTES) {
    return NextResponse.json(
      { error: `Arquivo acima do limite de ${MAX_PDF_BYTES / 1024 / 1024} MB` },
      { status: 400 },
    );
  }

  const buf = Buffer.from(await file.arrayBuffer());
  if (buf.length > MAX_PDF_BYTES) {
    return NextResponse.json({ error: "Arquivo muito grande" }, { status: 400 });
  }

  const safeName = file.name.replace(/[^\w.\-()\s\u00C0-\u024F]/g, "_").slice(0, 200);
  const stored = `${randomUUID()}.pdf`;
  const relative = `pacotes/${pacoteId}/${stored}`;
  const dir = await ensurePacoteDir(pacoteId);
  const abs = join(dir, stored);

  await writeFile(abs, buf);

  const row = await prisma.pacoteAnexo.create({
    data: {
      pacoteId,
      nomeOriginal: safeName || "documento.pdf",
      caminho: relative,
      mimeType: "application/pdf",
      tamanhoBytes: buf.length,
    },
    select: {
      id: true,
      nomeOriginal: true,
      tamanhoBytes: true,
      createdAt: true,
    },
  });

  return NextResponse.json(row, { status: 201 });
}
