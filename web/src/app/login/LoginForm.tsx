"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/dashboard";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email: email.trim().toLowerCase(),
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("E-mail ou senha incorretos.");
        setLoading(false);
        return;
      }
      const next =
        callbackUrl.startsWith("/") && !callbackUrl.startsWith("//")
          ? callbackUrl
          : "/dashboard";
      window.location.href = next;
    } catch {
      setError("Falha ao entrar. Tente novamente.");
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-[26rem] border border-neutral-300 bg-white p-8">
      <h1 className="text-center text-lg font-semibold tracking-tight text-neutral-900">
        Projeto OPME
      </h1>
      <p className="mt-1 text-center text-sm text-neutral-600">
        Acesso ao sistema
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
            htmlFor="email"
            className="block text-sm font-medium text-neutral-800"
          >
            E-mail
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="username"
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
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-900 focus:border-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-400"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full border border-neutral-800 bg-neutral-800 py-2.5 text-sm font-medium text-white hover:bg-neutral-900 disabled:opacity-50"
        >
          {loading ? "Entrando…" : "Entrar"}
        </button>
      </form>
    </div>
  );
}
