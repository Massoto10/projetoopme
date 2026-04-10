"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useId, useState } from "react";

export type PacoteDetailsHospital = { nome: string; cnpjLabel: string };

export type PacoteDetailsContemplacao = {
  codigo: string;
  descricaoPreview: string;
};

type Props = {
  pacoteId: string;
  codigoPacote: string;
  nomePacote: string;
  hospitais: PacoteDetailsHospital[];
  contemplacoes: PacoteDetailsContemplacao[];
  pdfCount: number;
  canManage: boolean;
};

export function PacoteRowDetailsDialog({
  pacoteId,
  codigoPacote,
  nomePacote,
  hospitais,
  contemplacoes,
  pdfCount,
  canManage,
}: Props) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const titleId = useId();

  const close = useCallback(() => {
    setOpen(false);
    setError(null);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close]);

  async function handleDelete() {
    const msg = `Excluir o pacote "${nomePacote}"? Esta ação não pode ser desfeita.`;
    if (!window.confirm(msg)) return;
    setError(null);
    setDeleting(true);
    try {
      const res = await fetch(`/api/pacotes/${pacoteId}`, { method: "DELETE" });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(
          typeof data.error === "string"
            ? data.error
            : "Não foi possível excluir.",
        );
        setDeleting(false);
        return;
      }
      close();
      router.push("/pacotes");
      router.refresh();
    } catch {
      setError("Erro de rede.");
    }
    setDeleting(false);
  }

  return (
    <div className="inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
      >
        Abrir
      </button>

      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 text-left">
          <button
            type="button"
            className="absolute inset-0 bg-black/45"
            aria-label="Fechar visualização"
            onClick={close}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 flex max-h-[min(92vh,48rem)] w-full max-w-3xl flex-col border border-neutral-300 bg-white text-left shadow-xl sm:rounded-sm"
          >
            <div className="flex shrink-0 items-start justify-between gap-3 border-b border-neutral-200 px-4 py-4 sm:px-5">
              <div className="min-w-0">
                <p id={titleId} className="text-sm font-semibold text-neutral-900">
                  Detalhes do pacote
                </p>
                <p className="mt-1 font-mono text-sm text-neutral-700">
                  {codigoPacote}
                </p>
                <p className="mt-1 text-sm leading-snug text-neutral-600">
                  {nomePacote}
                </p>
              </div>
              <button
                type="button"
                onClick={close}
                className="shrink-0 border border-neutral-300 bg-white px-2.5 py-1 text-sm text-neutral-700 hover:bg-neutral-50"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4 sm:px-5">
              <section className="pb-5">
                <h3 className="text-[0.7rem] font-semibold uppercase tracking-wide text-neutral-500">
                  Hospitais
                </h3>
                <ul className="mt-3 space-y-3 text-sm leading-snug text-neutral-800">
                  {hospitais.length === 0 ? (
                    <li className="text-neutral-500">Nenhum</li>
                  ) : (
                    hospitais.map((h, i) => (
                      <li
                        key={`${h.nome}-${i}`}
                        className="border-b border-neutral-100 pb-3 last:border-0"
                      >
                        <span className="font-medium text-neutral-900">{h.nome}</span>
                        <span className="mt-1 block text-sm text-neutral-600">
                          CNPJ {h.cnpjLabel}
                        </span>
                      </li>
                    ))
                  )}
                </ul>
              </section>

              <section className="border-t border-neutral-200 pt-5 pb-5">
                <h3 className="text-[0.7rem] font-semibold uppercase tracking-wide text-neutral-500">
                  Contemplações
                </h3>
                <ul className="mt-3 space-y-4 text-sm text-neutral-800">
                  {contemplacoes.length === 0 ? (
                    <li className="text-neutral-500">Nenhuma</li>
                  ) : (
                    contemplacoes.map((c, i) => (
                      <li
                        key={`${c.codigo}-${i}`}
                        className="border-b border-neutral-100 pb-4 last:border-0"
                      >
                        <span className="font-mono text-sm font-semibold text-neutral-900">
                          {c.codigo}
                        </span>
                        <p className="mt-1.5 whitespace-pre-wrap text-sm leading-relaxed text-neutral-700">
                          {c.descricaoPreview}
                        </p>
                      </li>
                    ))
                  )}
                </ul>
              </section>

              <section className="border-t border-neutral-200 pt-5">
                <h3 className="text-[0.7rem] font-semibold uppercase tracking-wide text-neutral-500">
                  PDFs
                </h3>
                <p className="mt-2 text-sm text-neutral-700">
                  <span className="font-medium tabular-nums text-neutral-900">
                    {pdfCount}
                  </span>
                  {pdfCount === 1
                    ? " arquivo PDF anexado"
                    : " arquivos PDF anexados"}
                  <span className="text-neutral-500">
                    {" "}
                    — lista completa na página do pacote.
                  </span>
                </p>
              </section>
            </div>

            {error && (
              <p className="shrink-0 border-t border-red-100 bg-red-50 px-4 py-2 text-xs text-red-800 sm:px-5">
                {error}
              </p>
            )}

            <div className="shrink-0 flex flex-wrap items-center justify-start gap-2 border-t border-neutral-200 bg-neutral-50 px-4 py-3 sm:px-5">
              <button
                type="button"
                onClick={close}
                className="border border-neutral-300 bg-white px-3 py-1.5 text-sm font-medium text-neutral-800 hover:bg-neutral-100"
              >
                Fechar
              </button>
              {canManage ? (
                <>
                  <Link
                    href={`/pacotes/${pacoteId}`}
                    className="border border-neutral-800 bg-neutral-800 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-neutral-900"
                    onClick={close}
                  >
                    Editar
                  </Link>
                  <button
                    type="button"
                    disabled={deleting}
                    onClick={() => void handleDelete()}
                    className="border border-red-700 bg-white px-3 py-1.5 text-sm font-medium text-red-800 hover:bg-red-50 disabled:opacity-50"
                  >
                    {deleting ? "Excluindo…" : "Excluir"}
                  </button>
                </>
              ) : (
                <Link
                  href={`/pacotes/${pacoteId}`}
                  className="border border-neutral-800 bg-neutral-800 px-3 py-1.5 text-center text-sm font-medium text-white hover:bg-neutral-900"
                  onClick={close}
                >
                  Ver pacote
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
