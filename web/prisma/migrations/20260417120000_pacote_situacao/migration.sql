-- CreateEnum
CREATE TYPE "PacoteSituacao" AS ENUM ('ATIVO', 'SUSPENSO', 'SUBSTITUIDO', 'CANCELADO');

-- AlterTable
ALTER TABLE "pacotes" ADD COLUMN "situacao" "PacoteSituacao" NOT NULL DEFAULT 'ATIVO';
