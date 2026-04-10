import { mkdir, unlink } from "fs/promises";
import { join } from "path";

export const UPLOADS_PACOTES_DIR = join(process.cwd(), "uploads", "pacotes");

export const MAX_PDF_BYTES = 10 * 1024 * 1024;

export function pacoteAnexoDir(pacoteId: string): string {
  return join(UPLOADS_PACOTES_DIR, pacoteId);
}

export async function ensurePacoteDir(pacoteId: string): Promise<string> {
  const dir = pacoteAnexoDir(pacoteId);
  await mkdir(dir, { recursive: true });
  return dir;
}

export async function safeUnlink(path: string): Promise<void> {
  try {
    await unlink(path);
  } catch {
    /* arquivo já removido */
  }
}
