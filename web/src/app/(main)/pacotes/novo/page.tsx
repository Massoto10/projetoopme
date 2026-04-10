import Link from "next/link";
import { PacoteForm } from "@/components/PacoteForm";

export default function NovoPacotePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div>
        <Link
          href="/pacotes"
          className="text-sm text-neutral-700 underline hover:text-neutral-900"
        >
          ← Voltar à lista
        </Link>
        <h1 className="mt-3 text-lg font-semibold text-neutral-900">
          Novo pacote
        </h1>
        <p className="mt-1 text-sm text-neutral-600">
          Após salvar, os PDFs podem ser enviados na ficha do pacote.
        </p>
      </div>
      <PacoteForm />
    </div>
  );
}
