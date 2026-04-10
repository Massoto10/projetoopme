import { auth } from "@/auth";
import { NextResponse } from "next/server";

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const session = req.auth;

  if (pathname === "/login" && session?.user) {
    const home =
      session.user.role === "ADMIN" ? "/dashboard" : "/pacotes";
    return NextResponse.redirect(new URL(home, req.nextUrl));
  }

  if (pathname.startsWith("/colaboradores")) {
    if (!session?.user) {
      const login = new URL("/login", req.url);
      login.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(login);
    }
    if (session.user.role !== "ADMIN") {
      return NextResponse.redirect(new URL("/pacotes", req.url));
    }
    return NextResponse.next();
  }

  if (
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/pacotes") ||
    pathname.startsWith("/api/pacotes") ||
    pathname.startsWith("/api/hospitais")
  ) {
    if (!session?.user) {
      const login = new URL("/login", req.url);
      login.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(login);
    }
    if (
      pathname.startsWith("/dashboard") &&
      session.user.role !== "ADMIN"
    ) {
      return NextResponse.redirect(new URL("/pacotes", req.url));
    }
    if (
      pathname === "/pacotes/novo" &&
      session.user.role !== "ADMIN"
    ) {
      return NextResponse.redirect(new URL("/pacotes", req.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/colaboradores")) {
    if (!session?.user) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }
    if (session.user.role !== "ADMIN") {
      return NextResponse.json({ error: "Proibido" }, { status: 403 });
    }
    return NextResponse.next();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    "/login",
    "/dashboard",
    "/dashboard/:path*",
    "/pacotes/:path*",
    "/colaboradores/:path*",
    "/api/pacotes/:path*",
    "/api/hospitais",
    "/api/colaboradores/:path*",
  ],
};
