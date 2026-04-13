import Link from "next/link";
import { notFound } from "next/navigation";
import { auth } from "@/auth";
import { formatCnpjDisplay, isValidCnpjDigits } from "@/lib/cnpj";
import { prisma } from "@/lib/prisma";
import { AnexosPanel } from "@/components/AnexosPanel";
import { PacoteHospitaisBuscaCnpj } from "@/components/PacoteHospitaisBuscaCnpj";
import { PacoteForm, type PacoteFormInitial } from "@/components/PacoteForm";

type Props = { params: Promise<{ id: string }> };

export default async function PacoteDetailPage({ params }: Props) {
  const { id } = await params;
  const session = await auth();
  const isAdmin = session!.user.role === "ADMIN";

  const pacote = await prisma.pacote.findUnique({
    where: { id },
    include: {
      hospitais: {
        include: { hospital: { select: { id: true, nome: true, cnpj: true } } },
      },
      contemplacoes: true,
      anexos: { orderBy: { createdAt: "asc" } },
      createdBy: { select: { name: true, email: true } },
    },
  });

  if (!pacote) notFound();

  const initial: PacoteFormInitial = {
    codigoPacote: pacote.codigoPacote,
    nomePacote: pacote.nomePacote,
    textoContemplacao: pacote.textoContemplacao ?? "",
    hospitais: pacote.hospitais.length
      ? pacote.hospitais.map((h) => ({
          id: h.hospital.id,
          nome: h.hospital.nome,
          cnpj: h.hospital.cnpj,
          observacao: h.observacao ?? "",
        }))
      : [],
    contemplacoes: pacote.contemplacoes.length
      ? pacote.contemplacoes.map((c) => ({
          codigo: c.codigo,
          descricao: c.descricao,
        }))
      : [{ codigo: "", descricao: "" }],
  };

  const anexos = pacote.anexos.map((a) => ({
    id: a.id,
    nomeOriginal: a.nomeOriginal,
    tamanhoBytes: a.tamanhoBytes,
    createdAt: a.createdAt.toISOString(),
  }));

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/pacotes"
          className="text-sm text-neutral-700 underline hover:text-neutral-900"
        >
          ← Lista de pacotes
        </Link>
        <p className="mt-3 font-mono text-sm text-neutral-700">
          Código: <span className="font-semibold">{pacote.codigoPacote}</span>
        </p>
        <h1 className="mt-1 text-lg font-semibold text-neutral-900">
          {pacote.nomePacote}
        </h1>
        <p className="mt-1 text-sm text-neutral-600">
          Responsável: {pacote.createdBy.name} · Atualizado em{" "}
          {pacote.updatedAt.toLocaleString("pt-BR")}
        </p>
      </div>

      {!isAdmin && (
        <section
          className="border border-neutral-300 bg-white p-5"
          aria-labelledby="sec-fornecedores-obs"
        >
          <h2
            id="sec-fornecedores-obs"
            className="text-sm font-semibold uppercase tracking-wide text-neutral-700"
          >
            Hospitais / fornecedores e observações
          </h2>
          <p className="mt-1 text-xs text-neutral-600">
            Cada observação vale só para este pacote e para o fornecedor indicado.
          </p>
          <PacoteHospitaisBuscaCnpj
            items={pacote.hospitais.map((row) => {
              const cnpj = row.hospital.cnpj;
              return {
                id: row.id,
                nome: row.hospital.nome,
                cnpj,
                cnpjLabel: isValidCnpjDigits(cnpj)
                  ? formatCnpjDisplay(cnpj)
                  : cnpj,
                observacao: row.observacao?.trim() ?? "",
              };
            })}
            emptyListMessage="Nenhum hospital ou fornecedor vinculado a este pacote."
          />
        </section>
      )}

      <section className="space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
          {isAdmin ? "Dados cadastrais" : "Dados do pacote"}
        </h2>
        <div className="border border-neutral-300 bg-white p-5">
          <PacoteForm
            pacoteId={pacote.id}
            initial={initial}
            readOnly={!isAdmin}
          />
        </div>
      </section>

      <div className="border border-neutral-300 bg-white p-5">
        <AnexosPanel
          pacoteId={pacote.id}
          anexos={anexos}
          canManage={isAdmin}
        />
      </div>
    </div>
  );
}
