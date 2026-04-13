import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Monorepo: app em `web/` com Git na raiz — evita bundle incompleto no deploy (Vercel).
  outputFileTracingRoot: path.join(__dirname, ".."),
};

export default nextConfig;