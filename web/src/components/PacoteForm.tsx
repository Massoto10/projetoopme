"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { formatCnpjDisplay, isValidCnpjDigits, normalizeCnpj } from "@/lib/cnpj";

const inputCls =
  "w-full border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400";

export type ContemplacaoRow = { codigo: string; descricao: string };

/** Hospital já vinculado ao pacote (cadastro global). */
export type PacoteHospitalInForm = { id: string; nome: string; cnpj: string };

export type PacoteFormInitial = {
  codigoPacote: string;
  nomePacote: string;
  hospitais: PacoteHospitalInForm[];
  contemplacoes: ContemplacaoRow[];
};

type ApiHospital = { id: string; nome: string; cnpj: string };

export function PacoteForm({
  pacoteId,
  initial,
  readOnly,
}: {
  pacoteId?: string;
  initial?: PacoteFormInitial;
  readOnly?: boolean;
}) {
  const router = useRouter();
  const [codigoPacote, setCodigoPacote] = useState(
    initial?.codigoPacote ?? "",
  );
  const [nomePacote, setNomePacote] = useState(
    initial?.nomePacote ?? "",
  );
  const [hospitais, setHospitais] = useState<PacoteHospitalInForm[]>(
    initial?.hospitais ?? [],
  );
  const [contemplacoes, setContemplacoes] = useState<ContemplacaoRow[]>(
    initial?.contemplacoes?.length
      ? initial.contemplacoes
      : [{ codigo: "", descricao: "" }],
  );

  const [buscaCnpj, setBuscaCnpj] = useState("");
  const [buscando, setBuscando] = useState(false);
  const [buscaResultado, setBuscaResultado] = useState<{
    exact: ApiHospital | null;
    suggestions: ApiHospital[];
  } | null>(null);

  /** Painel explícito: criar hospital (CNPJ + nome), sempre acessível pelo botão. */
  const [painelCriarHospital, setPainelCriarHospital] = useState(false);
  const [criarHospitalCnpj, setCriarHospitalCnpj] = useState("");
  const [criarHospitalNome, setCriarHospitalNome] = useState("");
  const [criando, setCriando] = useState(false);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function buildPayload() {
    return {
      codigoPacote: codigoPacote.trim(),
      nomePacote: nomePacote.trim(),
      hospitalIds: hospitais.map((h) => h.id),
      contemplacoes: contemplacoes
        .filter((c) => c.codigo.trim() || c.descricao.trim())
        .map((c) => ({
          codigo: c.codigo.trim(),
          descricao: c.descricao.trim(),
        })),
    };
  }

  function adicionarHospital(h: ApiHospital) {
    setHospitais((prev) => {
      if (prev.some((x) => x.id === h.id)) return prev;
      return [...prev, { id: h.id, nome: h.nome, cnpj: h.cnpj }];
    });
    setBuscaResultado(null);
    setBuscaCnpj("");
    setPainelCriarHospital(false);
    setCriarHospitalCnpj("");
    setCriarHospitalNome("");
  }

  async function handleBuscarCnpj() {
    setError(null);
    const digits = normalizeCnpj(buscaCnpj);
    if (!digits) {
      setBuscaResultado(null);
      setError("Digite o CNPJ para buscar.");
      return;
    }
    setBuscando(true);
    setBuscaResultado(null);
    try {
      const res = await fetch(
        `/api/hospitais?cnpj=${encodeURIComponent(digits)}`,
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(
          typeof data.error === "string" ? data.error : "Falha na busca.",
        );
        setBuscando(false);
        return;
      }
      setBuscaResultado({
        exact: data.exact ?? null,
        suggestions: Array.isArray(data.suggestions) ? data.suggestions : [],
      });
      if (data.exact || (data.suggestions && data.suggestions.length > 0)) {
        setPainelCriarHospital(false);
      }
      if (
        !data.exact &&
        (!data.suggestions || data.suggestions.length === 0) &&
        isValidCnpjDigits(digits)
      ) {
        setPainelCriarHospital(true);
        setCriarHospitalCnpj(buscaCnpj);
        setCriarHospitalNome("");
      }
    } catch {
      setError("Erro de rede na busca.");
    }
    setBuscando(false);
  }

  async function handleCriarHospital() {
    setError(null);
    const digits = normalizeCnpj(criarHospitalCnpj);
    if (!isValidCnpjDigits(digits)) {
      setError("Informe um CNPJ válido (14 dígitos) para cadastrar o hospital.");
      return;
    }
    const nome = criarHospitalNome.trim();
    if (!nome) {
      setError("Informe o nome do hospital.");
      return;
    }
    setCriando(true);
    try {
      const res = await fetch("/api/hospitais", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cnpj: digits, nome }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(
          typeof data.error === "string"
            ? data.error
            : "Não foi possível cadastrar.",
        );
        setCriando(false);
        return;
      }
      adicionarHospital(data as ApiHospital);
    } catch {
      setError("Erro de rede ao cadastrar.");
    }
    setCriando(false);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (readOnly) return;
    setError(null);
    setLoading(true);
    const body = buildPayload();
    try {
      const url = pacoteId ? `/api/pacotes/${pacoteId}` : "/api/pacotes";
      const method = pacoteId ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(
          typeof data.error === "string"
            ? data.error
            : "Não foi possível salvar. Verifique os campos.",
        );
        setLoading(false);
        return;
      }
      if (!pacoteId && data.id) {
        router.push(`/pacotes/${data.id}`);
        router.refresh();
        return;
      }
      router.refresh();
    } catch {
      setError("Erro de rede.");
    }
    setLoading(false);
  }

  if (readOnly) {
    const payload = buildPayload();
    return (
      <div className="space-y-5">
        <Field label="Código do pacote">
          <p className="font-mono text-sm text-neutral-900">
            {payload.codigoPacote || "—"}
          </p>
        </Field>
        <Field label="Nome do pacote">
          <p className="text-sm text-neutral-900">{payload.nomePacote || "—"}</p>
        </Field>
        <Field label="Hospitais">
          <ul className="list-inside list-disc text-sm text-neutral-800">
            {hospitais.length ? (
              hospitais.map((h, i) => (
                <li key={`${h.id}-${i}`}>
                  {h.nome} — CNPJ{" "}
                  {isValidCnpjDigits(h.cnpj)
                    ? formatCnpjDisplay(h.cnpj)
                    : h.cnpj}
                </li>
              ))
            ) : (
              <li className="list-none text-neutral-500">Nenhum</li>
            )}
          </ul>
        </Field>
        <Field label="Contemplações">
          <div className="overflow-x-auto border border-neutral-300">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-neutral-300 bg-neutral-100">
                <tr>
                  <th className="px-3 py-2 text-xs font-semibold uppercase text-neutral-700">
                    Código
                  </th>
                  <th className="px-3 py-2 text-xs font-semibold uppercase text-neutral-700">
                    Descrição
                  </th>
                </tr>
              </thead>
              <tbody>
                {payload.contemplacoes.length ? (
                  payload.contemplacoes.map((c, i) => (
                    <tr key={`${c.codigo}-${i}`} className="border-t border-neutral-200">
                      <td className="px-3 py-2 align-top">{c.codigo}</td>
                      <td className="px-3 py-2 align-top whitespace-pre-wrap">
                        {c.descricao}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={2} className="px-3 py-2 text-neutral-500">
                      Nenhuma
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Field>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div
          className="border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900"
          role="alert"
        >
          {error}
        </div>
      )}
      <Field
        label="Código do pacote"
        hint="Único no sistema. Apenas números, sem espaços."
      >
        <input
          required
          value={codigoPacote}
          onChange={(e) =>
            setCodigoPacote(e.target.value.replace(/\D/g, ""))
          }
          autoComplete="off"
          inputMode="numeric"
          pattern="[0-9]*"
          className={`${inputCls} font-mono`}
        />
      </Field>
      <Field label="Nome do pacote">
        <input
          required
          value={nomePacote}
          onChange={(e) => setNomePacote(e.target.value)}
          className={inputCls}
        />
      </Field>

      <Field
        label="Hospitais"
        hint="Busque pelo CNPJ ou use o botão Cadastrar novo hospital para incluir um cadastro que ainda não existe na base."
      >
        <div className="space-y-4 border border-neutral-300 bg-neutral-50/50 p-4">
          <div className="flex flex-col gap-2 lg:flex-row lg:flex-wrap lg:items-end">
            <div className="min-w-0 flex-1">
              <label className="text-xs font-medium text-neutral-600">
                CNPJ (busca)
              </label>
              <input
                value={buscaCnpj}
                onChange={(e) => setBuscaCnpj(e.target.value)}
                placeholder="00.000.000/0001-00"
                autoComplete="off"
                className={`mt-1 ${inputCls}`}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                disabled={buscando}
                onClick={() => void handleBuscarCnpj()}
                className="border border-neutral-800 bg-neutral-800 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-900 disabled:opacity-50"
              >
                {buscando ? "Buscando…" : "Buscar"}
              </button>
              <button
                type="button"
                onClick={() => {
                  setError(null);
                  setPainelCriarHospital(true);
                  setCriarHospitalCnpj(buscaCnpj);
                  setCriarHospitalNome("");
                }}
                className="border border-neutral-400 bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100"
              >
                Cadastrar novo hospital
              </button>
            </div>
          </div>

          {buscaResultado?.exact && (
            <div className="rounded border border-neutral-200 bg-white p-3 text-sm">
              <p className="font-medium text-neutral-900">
                {buscaResultado.exact.nome}
              </p>
              <p className="mt-1 text-xs text-neutral-600">
                CNPJ{" "}
                {formatCnpjDisplay(buscaResultado.exact.cnpj)}
              </p>
              <button
                type="button"
                onClick={() => adicionarHospital(buscaResultado.exact!)}
                className="mt-2 text-sm font-medium text-neutral-900 underline"
              >
                Incluir no pacote
              </button>
            </div>
          )}

          {buscaResultado &&
            !buscaResultado.exact &&
            buscaResultado.suggestions.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-medium text-neutral-600">
                  Resultados (prefixo)
                </p>
                <ul className="max-h-48 space-y-2 overflow-y-auto">
                  {buscaResultado.suggestions.map((s) => (
                    <li
                      key={s.id}
                      className="flex flex-wrap items-center justify-between gap-2 border border-neutral-200 bg-white px-3 py-2 text-sm"
                    >
                      <span>
                        <span className="font-medium text-neutral-900">
                          {s.nome}
                        </span>
                        <span className="ml-2 font-mono text-xs text-neutral-600">
                          {formatCnpjDisplay(s.cnpj)}
                        </span>
                      </span>
                      <button
                        type="button"
                        onClick={() => adicionarHospital(s)}
                        className="text-sm font-medium text-neutral-900 underline"
                      >
                        Incluir
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          {painelCriarHospital && (
            <div className="border border-neutral-400 bg-white p-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <p className="text-sm font-semibold text-neutral-900">
                  Novo hospital na base
                </p>
                <button
                  type="button"
                  className="text-xs text-neutral-600 underline hover:text-neutral-900"
                  onClick={() => {
                    setPainelCriarHospital(false);
                    setCriarHospitalCnpj("");
                    setCriarHospitalNome("");
                  }}
                >
                  Fechar
                </button>
              </div>
              <p className="mt-1 text-xs text-neutral-600">
                Preencha CNPJ (14 dígitos) e nome. O hospital será salvo e já entra neste pacote.
              </p>
              <label className="mt-3 block text-xs font-medium text-neutral-600">
                CNPJ
              </label>
              <input
                value={criarHospitalCnpj}
                onChange={(e) => setCriarHospitalCnpj(e.target.value)}
                placeholder="00.000.000/0001-00"
                autoComplete="off"
                className={`mt-1 ${inputCls}`}
              />
              <label className="mt-3 block text-xs font-medium text-neutral-600">
                Nome do hospital
              </label>
              <input
                value={criarHospitalNome}
                onChange={(e) => setCriarHospitalNome(e.target.value)}
                placeholder="Nome oficial / razão social"
                className={`mt-1 ${inputCls}`}
              />
              <button
                type="button"
                disabled={criando}
                onClick={() => void handleCriarHospital()}
                className="mt-3 border border-neutral-800 bg-neutral-800 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-900 disabled:opacity-50"
              >
                {criando ? "Salvando…" : "Salvar hospital e incluir no pacote"}
              </button>
            </div>
          )}

          <div>
            <p className="text-xs font-medium text-neutral-600">
              No pacote ({hospitais.length})
            </p>
            {hospitais.length === 0 ? (
              <p className="mt-2 text-sm text-neutral-500">
                Nenhum hospital incluído. Busque ou cadastre um novo hospital acima.
              </p>
            ) : (
              <ul className="mt-2 space-y-2">
                {hospitais.map((h) => (
                  <li
                    key={h.id}
                    className="flex flex-wrap items-center justify-between gap-2 border border-neutral-200 bg-white px-3 py-2 text-sm"
                  >
                    <span>
                      <span className="font-medium text-neutral-900">
                        {h.nome}
                      </span>
                      <span className="ml-2 font-mono text-xs text-neutral-600">
                        {isValidCnpjDigits(h.cnpj)
                          ? formatCnpjDisplay(h.cnpj)
                          : h.cnpj}
                      </span>
                    </span>
                    <button
                      type="button"
                      onClick={() =>
                        setHospitais((prev) => prev.filter((x) => x.id !== h.id))
                      }
                      className="text-sm text-neutral-700 underline"
                    >
                      Remover
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Field>

      <Field label="Contemplações (código e descrição)">
        <div className="space-y-3">
          {contemplacoes.map((row, i) => (
            <div
              key={i}
              className="grid gap-3 border border-neutral-300 bg-neutral-50/50 p-4"
            >
              <input
                placeholder="Código"
                required
                value={row.codigo}
                onChange={(e) => {
                  const next = [...contemplacoes];
                  next[i] = { ...next[i], codigo: e.target.value };
                  setContemplacoes(next);
                }}
                className={inputCls}
              />
              <textarea
                placeholder="Descrição"
                required
                rows={3}
                value={row.descricao}
                onChange={(e) => {
                  const next = [...contemplacoes];
                  next[i] = { ...next[i], descricao: e.target.value };
                  setContemplacoes(next);
                }}
                className={inputCls}
              />
              <button
                type="button"
                onClick={() =>
                  setContemplacoes(contemplacoes.filter((_, j) => j !== i))
                }
                className="text-left text-sm text-neutral-700 underline"
              >
                Remover contemplação
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() =>
              setContemplacoes([
                ...contemplacoes,
                { codigo: "", descricao: "" },
              ])
            }
            className="text-sm text-neutral-800 underline"
          >
            + Adicionar contemplação
          </button>
        </div>
      </Field>
      <div className="flex flex-wrap gap-2 border-t border-neutral-200 pt-4">
        <button
          type="submit"
          disabled={loading}
          className="border border-neutral-800 bg-neutral-800 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-900 disabled:opacity-50"
        >
          {loading ? "Salvando…" : pacoteId ? "Atualizar pacote" : "Criar pacote"}
        </button>
        <button
          type="button"
          onClick={() => {
            setCodigoPacote("");
            setNomePacote("");
            setHospitais([]);
            setContemplacoes([{ codigo: "", descricao: "" }]);
            setBuscaCnpj("");
            setBuscaResultado(null);
            setPainelCriarHospital(false);
            setCriarHospitalCnpj("");
            setCriarHospitalNome("");
          }}
          className="border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-50"
        >
          Limpar
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-800">
        {label}
      </label>
      {hint && (
        <p className="mt-1 text-xs text-neutral-600">{hint}</p>
      )}
      <div className="mt-2">{children}</div>
    </div>
  );
}
