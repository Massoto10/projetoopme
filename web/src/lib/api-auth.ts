import { auth } from "@/auth";
import type { Role } from "@prisma/client";

export async function requireUser() {
  const session = await auth();
  if (!session?.user?.id) {
    return { error: Response.json({ error: "Não autorizado" }, { status: 401 }) };
  }
  return { session };
}

export async function requireAdmin() {
  const r = await requireUser();
  if ("error" in r) return r;
  if (r.session.user.role !== "ADMIN") {
    return { error: Response.json({ error: "Proibido" }, { status: 403 }) };
  }
  return { session: r.session };
}

export function isAdmin(role: Role): boolean {
  return role === "ADMIN";
}
