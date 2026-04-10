"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const field =
  "mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400";

type UserRow = {
  id: string;
  email: string;
  name: string;
  role: "ADMIN" | "COLABORADOR";
  createdAt: string;
};

export default function ColaboradoresPage() {
  const [rows, setRows] = useState<UserRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    role: "COLABORADOR" as "ADMIN" | "COLABORADOR",
  });
  const [creating, setCreating] = useState(false);

  async function load() {
    setError(null);
    const res = await fetch("/api/colaboradores");
    if (!res.ok) {
      setError("Não foi possível carregar a lista.");
      setLoading(false);
      return;
    }
    const data = await res.json();
    setRows(data);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  async function criar(e: React.FormEvent) {
    e.preventDefault();
    setCreating(true);
    setError(null);
    const res = await fetch("/api/colaboradores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(typeof data.error === "string" ? data.error : "Falha ao criar");
      setCreating(false);
      return;
    }
    setForm({ email: "", name: "", password: "", role: "COLABORADOR" });
    await load();
    setCreating(false);
  }

  async function excluir(id: string) {
    if (!confirm("Excluir este usuário? Esta ação não pode ser desfeita.")) {
      return;
    }
    setError(null);
    const res = await fetch(`/api/colaboradores/${id}`, { method: "DELETE" });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(typeof data.error === "string" ? data.error : "Falha ao excluir");
      return;
    }
    await load();
  }

  return (
    <div className="space-y-8">
      <div>
        <Link
          href="/dashboard"
          className="text-sm text-neutral-700 underline hover:text-neutral-900"
        >
          ← Painel
        </Link>
        <h1 className="mt-3 text-lg font-semibold text-neutral-900">
          Colaboradores
        </h1>
        <p className="mt-1 text-sm text-neutral-600">
          Cadastro de usuários. Senha inicial com no mínimo 8 caracteres.
        </p>
      </div>

      <section className="border border-neutral-300 bg-white p-5">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-700">
          Novo usuário
        </h2>
        <form onSubmit={criar} className="mt-4 grid gap-4 sm:grid-cols-2">
          {error && (
            <div
              className="sm:col-span-2 border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900"
              role="alert"
            >
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-neutral-800">
              Nome
            </label>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={field}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-800">
              E-mail
            </label>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={field}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-800">
              Senha inicial
            </label>
            <input
              required
              type="password"
              minLength={8}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className={field}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-800">
              Perfil
            </label>
            <select
              value={form.role}
              onChange={(e) =>
                setForm({
                  ...form,
                  role: e.target.value as "ADMIN" | "COLABORADOR",
                })
              }
              className={field}
            >
              <option value="COLABORADOR">Colaborador</option>
              <option value="ADMIN">Administrador</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={creating}
              className="border border-neutral-800 bg-neutral-800 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-900 disabled:opacity-50"
            >
              {creating ? "Criando…" : "Criar usuário"}
            </button>
          </div>
        </form>
      </section>

      <section className="border border-neutral-300 bg-white">
        <h2 className="border-b border-neutral-300 bg-neutral-100 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-neutral-700">
          Usuários cadastrados
        </h2>
        {loading ? (
          <p className="p-5 text-sm text-neutral-600">Carregando…</p>
        ) : (
          <ul className="divide-y divide-neutral-200">
            {rows.map((u) => (
              <li
                key={u.id}
                className="flex flex-wrap items-center justify-between gap-3 px-5 py-4"
              >
                <div>
                  <p className="text-sm font-medium text-neutral-900">
                    {u.name}
                  </p>
                  <p className="text-sm text-neutral-600">{u.email}</p>
                  <p className="text-xs text-neutral-600">
                    {u.role === "ADMIN" ? "Administrador" : "Colaborador"} ·{" "}
                    {new Date(u.createdAt).toLocaleDateString("pt-BR")}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/colaboradores/${u.id}`}
                    className="border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-800 hover:bg-neutral-50"
                  >
                    Editar
                  </Link>
                  <button
                    type="button"
                    onClick={() => excluir(u.id)}
                    className="border border-neutral-300 bg-white px-3 py-1.5 text-sm text-neutral-800 hover:bg-neutral-100"
                  >
                    Excluir
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
