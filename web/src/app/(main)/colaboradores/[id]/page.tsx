"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const field =
  "mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400";

export default function EditarColaboradorPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    email: "",
    name: "",
    password: "",
    role: "COLABORADOR" as "ADMIN" | "COLABORADOR",
  });

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const res = await fetch(`/api/colaboradores/${id}`);
      if (!res.ok) {
        if (!cancelled) setError("Usuário não encontrado");
        if (!cancelled) setLoading(false);
        return;
      }
      const u = await res.json();
      if (!cancelled) {
        setForm({
          email: u.email,
          name: u.name,
          password: "",
          role: u.role,
        });
        setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [id]);

  async function salvar(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    const body: Record<string, unknown> = {
      email: form.email.trim().toLowerCase(),
      name: form.name.trim(),
      role: form.role,
    };
    if (form.password.length > 0) {
      if (form.password.length < 8) {
        setError("Senha deve ter pelo menos 8 caracteres.");
        setSaving(false);
        return;
      }
      body.password = form.password;
    }
    const res = await fetch(`/api/colaboradores/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      setError(typeof data.error === "string" ? data.error : "Falha ao salvar");
      setSaving(false);
      return;
    }
    router.push("/colaboradores");
    router.refresh();
  }

  if (loading) {
    return <p className="text-sm text-neutral-600">Carregando…</p>;
  }

  return (
    <div className="mx-auto max-w-lg space-y-5">
      <Link
        href="/colaboradores"
        className="text-sm text-neutral-700 underline hover:text-neutral-900"
      >
        ← Voltar
      </Link>
      <h1 className="text-lg font-semibold text-neutral-900">
        Editar colaborador
      </h1>
      <form
        onSubmit={salvar}
        className="space-y-4 border border-neutral-300 bg-white p-5"
      >
        {error && (
          <div
            className="border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900"
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
            Nova senha (opcional)
          </label>
          <input
            type="password"
            minLength={8}
            placeholder="Em branco para manter"
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
        <button
          type="submit"
          disabled={saving}
          className="w-full border border-neutral-800 bg-neutral-800 py-2.5 text-sm font-medium text-white hover:bg-neutral-900 disabled:opacity-50"
        >
          {saving ? "Salvando…" : "Salvar alterações"}
        </button>
      </form>
    </div>
  );
}
