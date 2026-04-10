import Link from "next/link";
import { auth } from "@/auth";
import { PacoteRowDetailsDialog } from "@/components/PacoteRowDetailsDialog";
import { formatCnpjDisplay, isValidCnpjDigits, normalizeCnpj } from "@/lib/cnpj";
import {
  buildPacoteListWhere,
  firstQueryParam,
} from "@/lib/pacote-list-filters";
import { prisma } from "@/lib/prisma";

type PacotesSearchParams = {
  codigo?: string | string[];
  cnpj?: string | string[];
  contemplacao?: string | string[];
};

export default async function PacotesListPage({
  searchParams,
}: {
  searchParams: Promise<PacotesSearchParams>;
}) {
  const session = await auth();
  const isAdmin = session!.user.role === "ADMIN";

  const sp = await searchParams;
  const filtroCodigo = firstQueryParam(sp.codigo);
  const filtroCnpj = firstQueryParam(sp.cnpj);
  const filtroContemplacao = firstQueryParam(sp.contemplacao);

  const where = buildPacoteListWhere({
    codigoPacote: filtroCodigo,
    cnpj: filtroCnpj,
    contemplacaoCodigos: filtroContemplacao,
  });

  const temFiltros =
    filtroCodigo.trim() !== "" ||
    normalizeCnpj(filtroCnpj) !== "" ||
    filtroContemplacao.trim() !== "";

  const rows = await prisma.pacote.findMany({
    where,
    orderBy: { updatedAt: "desc" },
    include: {
      _count: {
        select: { hospitais: true, contemplacoes: true, anexos: true },
      },
      hospitais: {
        include: {
          hospital: { select: { nome: true, cnpj: true } },
        },
      },
      contemplacoes: {
        orderBy: { codigo: "asc" },
        select: { codigo: true, descricao: true },
      },
    },
  });

  const previewLen = 280;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-lg font-semibold text-neutral-900">Pacotes</h1>
          <p className="mt-1 text-sm text-neutral-600">
            {isAdmin
              ? "Cadastros e anexos."
              : "Consulta aos pacotes cadastrados."}
          </p>
        </div>
        {isAdmin && (
          <Link
            href="/pacotes/novo"
            className="border border-neutral-800 bg-neutral-800 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-900"
          >
            Novo pacote
          </Link>
        )}
      </div>

      <form
        method="GET"
        action="/pacotes"
        className="flex flex-col gap-4 border border-neutral-300 bg-white p-4 sm:flex-row sm:flex-wrap sm:items-end"
      >
        <div className="min-w-[10rem] flex-1">
          <label
            htmlFor="filtro-codigo-pacote"
            className="block text-xs font-medium uppercase tracking-wide text-neutral-600"
          >
            Código do pacote
          </label>
          <input
            id="filtro-codigo-pacote"
            name="codigo"
            type="search"
            defaultValue={filtroCodigo}
            placeholder="Ex.: 98520180"
            autoComplete="off"
            className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400"
          />
        </div>
        <div className="min-w-[12rem] flex-1">
          <label
            htmlFor="filtro-cnpj"
            className="block text-xs font-medium uppercase tracking-wide text-neutral-600"
          >
            CNPJ
          </label>
          <input
            id="filtro-cnpj"
            name="cnpj"
            type="search"
            defaultValue={filtroCnpj}
            placeholder="Com ou sem formatação"
            autoComplete="off"
            className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400"
          />
        </div>
        <div className="min-w-[14rem] flex-[1.2]">
          <label
            htmlFor="filtro-contemplacao"
            className="block text-xs font-medium uppercase tracking-wide text-neutral-600"
          >
            Códigos de contemplação
          </label>
          <input
            id="filtro-contemplacao"
            name="contemplacao"
            type="search"
            defaultValue={filtroContemplacao}
            placeholder="Um ou vários, separados por vírgula"
            autoComplete="off"
            className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="submit"
            className="border border-neutral-800 bg-neutral-800 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-900"
          >
            Filtrar
          </button>
          {temFiltros && (
            <Link
              href="/pacotes"
              className="border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 hover:bg-neutral-50"
            >
              Limpar
            </Link>
          )}
        </div>
      </form>

      {temFiltros && (
        <p className="text-sm text-neutral-600">
          {rows.length === 1
            ? "1 pacote encontrado com os filtros atuais."
            : `${rows.length} pacotes encontrados com os filtros atuais.`}
        </p>
      )}

      <div className="overflow-x-auto overflow-y-visible border border-neutral-300 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-neutral-300 bg-neutral-100">
            <tr>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-700">
                Código
              </th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-700">
                Nome
              </th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-700">
                Resumo
              </th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-neutral-700">
                Atualizado
              </th>
              <th className="px-4 py-3 text-right text-xs font-semibold uppercase tracking-wide text-neutral-700">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-10 text-center text-sm text-neutral-600">
                  {temFiltros
                    ? "Nenhum pacote corresponde aos filtros."
                    : "Nenhum registro."}
                  {!temFiltros && isAdmin && (
                    <>
                      {" "}
                      <Link
                        href="/pacotes/novo"
                        className="font-medium text-neutral-900 underline"
                      >
                        Cadastrar
                      </Link>
                    </>
                  )}
                </td>
              </tr>
            ) : (
              rows.map((p) => (
                <tr key={p.id} className="border-t border-neutral-200">
                  <td className="px-4 py-3 font-mono text-sm text-neutral-900">
                    {p.codigoPacote}
                  </td>
                  <td className="px-4 py-3 font-medium text-neutral-900">
                    {p.nomePacote}
                  </td>
                  <td className="px-4 py-3 text-xs font-normal leading-relaxed text-neutral-500">
                    <span className="tabular-nums text-neutral-600">{p._count.hospitais}</span>
                    {" hospitais "}
                    <span className="text-neutral-300" aria-hidden>
                      ·
                    </span>
                    {" "}
                    <span className="tabular-nums text-neutral-600">{p._count.contemplacoes}</span>
                    {" contemplações "}
                    <span className="text-neutral-300" aria-hidden>
                      ·
                    </span>
                    {" "}
                    <span className="tabular-nums text-neutral-600">{p._count.anexos}</span>
                    {" PDFs"}
                  </td>
                  <td className="px-4 py-3 text-neutral-600">
                    {p.updatedAt.toLocaleString("pt-BR")}
                  </td>
                  <td className="px-4 py-3 text-right align-top">
                    <PacoteRowDetailsDialog
                      pacoteId={p.id}
                      codigoPacote={p.codigoPacote}
                      nomePacote={p.nomePacote}
                      pdfCount={p._count.anexos}
                      canManage={isAdmin}
                      hospitais={p.hospitais.map((h) => ({
                        nome: h.hospital.nome,
                        cnpjLabel: isValidCnpjDigits(h.hospital.cnpj)
                          ? formatCnpjDisplay(h.hospital.cnpj)
                          : h.hospital.cnpj,
                      }))}
                      contemplacoes={p.contemplacoes.map((c) => ({
                        codigo: c.codigo,
                        descricaoPreview:
                          c.descricao.length > previewLen
                            ? `${c.descricao.slice(0, previewLen).trim()}…`
                            : c.descricao,
                      }))}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
