"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function CadastroForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/setup/primeiro-usuario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
          password,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };
      if (!res.ok) {
        setError(data.error ?? "Não foi possível concluir o cadastro.");
        setLoading(false);
        return;
      }
      router.push("/login?contaCriada=1");
    } catch {
      setError("Falha ao cadastrar. Tente novamente.");
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-[26rem] border border-neutral-300 bg-white p-8">
      <h1 className="text-center text-lg font-semibold tracking-tight text-neutral-900">
        Projeto OPME
      </h1>
      <p className="mt-1 text-center text-sm text-neutral-600">
        Cadastro do administrador inicial
      </p>
      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        {error && (
          <div
            className="border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-900"
            role="alert"
          >
            {error}
          </div>
        )}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-800"
          >
            Nome
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-800"
          >
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-neutral-800"
          >
            Senha
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            required
            minLength={8}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400"
          />
          <p className="mt-1 text-xs text-neutral-500">
            Mínimo de 8 caracteres.
          </p>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full border border-neutral-800 bg-neutral-800 py-2.5 text-sm font-medium text-white hover:bg-neutral-900 disabled:opacity-50"
        >
          {loading ? "Cadastrando…" : "Criar conta"}
        </button>
      </form>
    </div>
  );
}
