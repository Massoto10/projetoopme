-- AlterTable
ALTER TABLE "pacotes" ADD COLUMN "texto_contemplacao" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "pacote_hospitais" ADD COLUMN "observacao" TEXT;
