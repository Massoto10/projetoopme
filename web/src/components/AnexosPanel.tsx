"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type Anexo = {
  id: string;
  nomeOriginal: string;
  tamanhoBytes: number;
  createdAt: string;
};

export function AnexosPanel({
  pacoteId,
  anexos,
  canManage,
  showHeading = true,
}: {
  pacoteId: string;
  anexos: Anexo[];
  canManage: boolean;
  /** Quando falso, omite o título (útil dentro de um painel já titulado). */
  showHeading?: boolean;
}) {
  const router = useRouter();
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const fd = new FormData();
      fd.set("file", file);
      const res = await fetch(`/api/pacotes/${pacoteId}/anexos`, {
        method: "POST",
        body: fd,
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(typeof data.error === "string" ? data.error : "Falha no envio");
        setUploading(false);
        return;
      }
      router.refresh();
    } catch {
      setError("Erro de rede.");
    }
    setUploading(false);
  }

  async function removeAnexo(anexoId: string) {
    if (!confirm("Remover este PDF?")) return;
    setError(null);
    const res = await fetch(
      `/api/pacotes/${pacoteId}/anexos/${anexoId}`,
      { method: "DELETE" },
    );
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(typeof data.error === "string" ? data.error : "Falha ao remover");
      return;
    }
    router.refresh();
  }

  function formatSize(n: number) {
    if (n < 1024) return `${n} B`;
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
    return `${(n / 1024 / 1024).toFixed(1)} MB`;
  }

  return (
    <section className="space-y-3">
      {showHeading ? (
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
          Anexos (PDF)
        </h2>
      ) : null}
      {error && (
        <p className="text-sm text-red-800" role="alert">
          {error}
        </p>
      )}
      {canManage && (
        <div>
          <label className="inline-flex cursor-pointer items-center gap-2 border border-dashed border-neutral-400 bg-white px-3 py-2 text-sm font-medium text-neutral-800 hover:border-neutral-500">
            {uploading ? "Enviando…" : "Selecionar PDF"}
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              disabled={uploading}
              onChange={onFile}
            />
          </label>
          <p className="mt-1 text-xs text-neutral-600">
            Limite 10 MB. Somente PDF.
          </p>
        </div>
      )}
      <ul className="divide-y divide-neutral-200 border border-neutral-300 bg-white">
        {anexos.length === 0 ? (
          <li className="px-4 py-5 text-sm text-neutral-600">
            Nenhum anexo.
          </li>
        ) : (
          anexos.map((a) => (
            <li
              key={a.id}
              className="flex flex-wrap items-center justify-between gap-3 px-4 py-3"
            >
              <div>
                <a
                  href={`/api/pacotes/${pacoteId}/anexos/${a.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-neutral-900 underline"
                >
                  {a.nomeOriginal}
                </a>
                <p className="text-xs text-neutral-600">
                  {formatSize(a.tamanhoBytes)} ·{" "}
                  {new Date(a.createdAt).toLocaleString("pt-BR")}
                </p>
              </div>
              {canManage && (
                <button
                  type="button"
                  onClick={() => removeAnexo(a.id)}
                  className="text-sm text-neutral-700 underline"
                >
                  Remover
                </button>
              )}
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
