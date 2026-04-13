"use client";

import { useId, useMemo, useState } from "react";
import { normalizeCnpj } from "@/lib/cnpj";

export type PacoteHospitalBuscaItem = {
  id: string;
  nome: string;
  /** CNPJ como no cadastro (normalmente 14 dígitos), usado no filtro. */
  cnpj: string;
  cnpjLabel: string;
  observacao: string;
};

const inputCls =
  "w-full border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400";

type Props = {
  items: PacoteHospitalBuscaItem[];
  /** Mensagem quando `items` está vazio (antes de filtrar). */
  emptyListMessage: string;
  /** Mensagem quando o filtro não encontra nenhum hospital. */
  filteredEmptyMessage?: string;
};

export function PacoteHospitaisBuscaCnpj({
  items,
  emptyListMessage,
  filteredEmptyMessage = "Nenhum hospital ou fornecedor corresponde ao CNPJ informado.",
}: Props) {
  const baseId = useId();
  const inputId = `${baseId}-busca-cnpj`;
  const [busca, setBusca] = useState("");

  const filtrados = useMemo(() => {
    const q = normalizeCnpj(busca);
    if (!q) return items;
    return items.filter((row) => normalizeCnpj(row.cnpj).includes(q));
  }, [items, busca]);

  if (items.length === 0) {
    return <p className="mt-4 text-sm text-neutral-500">{emptyListMessage}</p>;
  }

  return (
    <div className="mt-3 space-y-3">
      <div>
        <label
          htmlFor={inputId}
          className="text-xs font-medium text-neutral-600"
        >
          Buscar por CNPJ
        </label>
        <input
          id={inputId}
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Com ou sem formatação"
          autoComplete="off"
          className={`mt-1 ${inputCls}`}
        />
      </div>

      {filtrados.length === 0 ? (
        <p className="text-sm text-neutral-500">{filteredEmptyMessage}</p>
      ) : (
        <ul className="space-y-3 text-sm leading-snug text-neutral-800">
          {filtrados.map((row) => (
            <li
              key={row.id}
              className="border-b border-neutral-100 pb-3 last:border-0"
            >
              <span className="font-medium text-neutral-900">{row.nome}</span>
              <span className="mt-1 block text-sm text-neutral-600">
                CNPJ {row.cnpjLabel}
              </span>
              <p className="mt-2 whitespace-pre-wrap text-sm text-neutral-700">
                <span className="font-medium text-neutral-800">
                  Observação:{" "}
                </span>
                {row.observacao.trim() ? row.observacao.trim() : "—"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
