"use client";

import { useId, useState } from "react";

type Props = {
  title: string;
  subtitle?: string;
  /** Se verdadeiro, o painel inicia expandido. */
  defaultOpen?: boolean;
  children: React.ReactNode;
};

/**
 * Painel expansível (acordeão simples) para agrupar blocos longos na UI.
 */
export function CollapsibleSection({
  title,
  subtitle,
  defaultOpen = false,
  children,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <section className="border border-neutral-300 bg-white">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={contentId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 px-4 py-3 text-left text-neutral-900 hover:bg-neutral-50"
      >
        <span
          className={`flex h-6 w-6 shrink-0 items-center justify-center text-[10px] leading-none text-neutral-600 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          ▼
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold uppercase tracking-wide text-neutral-800">
            {title}
          </span>
          {subtitle ? (
            <span className="mt-1 block text-xs font-normal normal-case text-neutral-600">
              {subtitle}
            </span>
          ) : null}
        </span>
      </button>
      {open ? (
        <div
          id={contentId}
          role="region"
          className="border-t border-neutral-200 px-4 py-4"
        >
          {children}
        </div>
      ) : null}
    </section>
  );
}
