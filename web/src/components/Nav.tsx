"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import type { Role } from "@prisma/client";
import type { ReactNode } from "react";
import { useState } from "react";

const links: {
  href: string;
  label: string;
  adminOnly?: boolean;
  icon: ReactNode;
}[] = [
  {
    href: "/dashboard",
    label: "Início",
    adminOnly: true,
    icon: <IconHome />,
  },
  {
    href: "/pacotes",
    label: "Pacotes",
    icon: <IconPackage />,
  },
  {
    href: "/colaboradores",
    label: "Colaboradores",
    adminOnly: true,
    icon: <IconUsers />,
  },
];

export function Nav({
  role,
  displayName,
  children,
}: {
  role: Role;
  displayName: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-[#ececee]">
      <aside
        className={`fixed left-0 top-0 z-40 flex h-screen flex-col border-r border-neutral-300 bg-white transition-[width] duration-200 ease-out ${
          expanded ? "w-56" : "w-[4.25rem]"
        }`}
        aria-label="Menu principal"
        onMouseEnter={() => setExpanded(true)}
        onMouseLeave={() => setExpanded(false)}
      >
        <div className="flex h-14 shrink-0 items-center border-b border-neutral-300 px-3">
          <Link
            href={role === "ADMIN" ? "/dashboard" : "/pacotes"}
            className="flex min-w-0 items-center gap-3 rounded-sm py-2 pl-0.5 pr-2 text-neutral-900"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm bg-neutral-800 text-[10px] font-bold uppercase leading-none text-white">
              OP
            </span>
            <span
              className={`overflow-hidden whitespace-nowrap text-sm font-semibold tracking-tight text-neutral-900 transition-opacity duration-200 ${
                expanded ? "max-w-[12rem] opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              Projeto OPME
            </span>
          </Link>
        </div>

        <nav className="flex flex-1 flex-col gap-1 overflow-y-auto overflow-x-hidden p-2 pt-4">
          {links
            .filter((l) => !l.adminOnly || role === "ADMIN")
            .map((l) => {
              const active =
                l.href === "/dashboard"
                  ? pathname === "/dashboard"
                  : pathname.startsWith(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  title={l.label}
                  className={`flex items-center gap-3 rounded-sm px-2.5 py-2 text-sm font-medium transition-colors ${
                    active
                      ? "border border-neutral-300 bg-neutral-100 text-neutral-900"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  <span className="flex h-5 w-9 shrink-0 items-center justify-center text-current [&>svg]:h-5 [&>svg]:w-5">
                    {l.icon}
                  </span>
                  <span
                    className={`overflow-hidden whitespace-nowrap transition-opacity duration-200 ${
                      expanded ? "max-w-[11rem] opacity-100" : "max-w-0 opacity-0"
                    }`}
                  >
                    {l.label}
                  </span>
                </Link>
              );
            })}
        </nav>

        <div className="mt-auto border-t border-neutral-300 p-2">
          <div className="mb-2 flex items-center gap-3 rounded-sm px-2.5 py-2 text-neutral-600">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-neutral-300 bg-neutral-100 text-[10px] font-semibold text-neutral-800">
              {initials(displayName)}
            </span>
            <div
              className={`min-w-0 flex-1 overflow-hidden transition-opacity duration-200 ${
                expanded ? "max-w-[11rem] opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              <p className="truncate text-sm font-medium text-neutral-900">
                {displayName}
              </p>
              <p className="truncate text-xs text-neutral-600">
                {role === "ADMIN" ? "Administrador" : "Colaborador"}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/login" })}
            title="Sair"
            className="flex w-full items-center gap-3 rounded-sm px-2.5 py-2 text-left text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-900"
          >
            <span className="flex h-5 w-9 shrink-0 items-center justify-center [&>svg]:h-5 [&>svg]:w-5">
              <IconLogOut />
            </span>
            <span
              className={`overflow-hidden whitespace-nowrap transition-opacity duration-200 ${
                expanded ? "max-w-[11rem] opacity-100" : "max-w-0 opacity-0"
              }`}
            >
              Sair
            </span>
          </button>
        </div>
      </aside>

      <main
        className={`min-h-screen transition-[padding] duration-200 ease-out ${
          expanded ? "pl-56" : "pl-[4.25rem]"
        }`}
      >
        <div className="mx-auto w-full max-w-[min(100%,88rem)] px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}

function initials(name: string): string {
  const p = name.trim().split(/\s+/).filter(Boolean);
  if (p.length === 0) return "?";
  if (p.length === 1) return p[0].slice(0, 2).toUpperCase();
  return (p[0][0] + p[p.length - 1][0]).toUpperCase();
}

function IconHome() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconPackage() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="m16.5 9.4-9-5.19" />
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" x2="12" y1="22.08" y2="12" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function IconLogOut() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}
