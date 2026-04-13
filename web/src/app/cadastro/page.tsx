import { redirect } from "next/navigation";
import { auth } from "@/auth";
import { prisma } from "@/lib/prisma";
import { CadastroForm } from "./CadastroForm";

export default async function CadastroPage() {
  const session = await auth();
  if (session?.user) {
    redirect(session.user.role === "ADMIN" ? "/dashboard" : "/pacotes");
  }

  const userCount = await prisma.user.count();
  if (userCount > 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#ececee] px-4">
        <div className="w-full max-w-[26rem] border border-neutral-300 bg-white p-8 text-center">
          <h1 className="text-lg font-semibold tracking-tight text-neutral-900">
            Projeto OPME
          </h1>
          <p className="mt-4 text-sm text-neutral-600">
            O cadastro inicial já foi concluído. Use o acesso normal ao sistema.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#ececee] px-4">
      <CadastroForm />
    </div>
  );
}
