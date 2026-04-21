import Link from "next/link";
import { auth } from "@/auth";

export default async function DashboardPage() {
  const session = await auth();
  const isAdmin = session?.user?.role === "ADMIN";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-lg font-semibold text-neutral-900">Painel</h1>
        <p className="mt-1 max-w-2xl text-sm text-neutral-600">
          Consulta de pacotes e anexos. Administradores gerenciam cadastros e,
          em breve, duplicidades.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <Link
          href="/pacotes"
          className="border border-neutral-300 bg-white p-5 hover:border-neutral-400"
        >
          <h2 className="text-sm font-semibold text-neutral-900">Pacotes</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Listagem, cadastro e edição: hospitais (cadastro por CNPJ),
            códigos TUSS e documentos PDF.
          </p>
        </Link>
        {isAdmin ? (
          <Link
            href="/colaboradores"
            className="border border-neutral-300 bg-white p-5 hover:border-neutral-400"
          >
            <h2 className="text-sm font-semibold text-neutral-900">
              Colaboradores
            </h2>
            <p className="mt-2 text-sm text-neutral-600">
              Gestão de contas de colaboradores e administradores.
            </p>
          </Link>
        ) : (
          <div className="border border-dashed border-neutral-300 bg-neutral-50 p-5">
            <h2 className="text-sm font-semibold text-neutral-500">
              Colaboradores
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Acesso restrito a administradores.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
