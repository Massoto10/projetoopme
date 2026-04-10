-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'COLABORADOR');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password_hash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'COLABORADOR',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pacotes" (
    "id" TEXT NOT NULL,
    "nome_pacote" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_by_id" TEXT NOT NULL,

    CONSTRAINT "pacotes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pacote_cnpjs" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "pacote_id" TEXT NOT NULL,

    CONSTRAINT "pacote_cnpjs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pacote_hospitais" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "pacote_id" TEXT NOT NULL,

    CONSTRAINT "pacote_hospitais_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pacote_contemplacoes" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" TEXT NOT NULL,
    "pacote_id" TEXT NOT NULL,

    CONSTRAINT "pacote_contemplacoes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pacote_anexos" (
    "id" TEXT NOT NULL,
    "nome_original" TEXT NOT NULL,
    "caminho" TEXT NOT NULL,
    "mime_type" TEXT NOT NULL,
    "tamanho_bytes" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pacote_id" TEXT NOT NULL,

    CONSTRAINT "pacote_anexos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "pacote_cnpjs_pacote_id_cnpj_key" ON "pacote_cnpjs"("pacote_id", "cnpj");

-- AddForeignKey
ALTER TABLE "pacotes" ADD CONSTRAINT "pacotes_created_by_id_fkey" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pacote_cnpjs" ADD CONSTRAINT "pacote_cnpjs_pacote_id_fkey" FOREIGN KEY ("pacote_id") REFERENCES "pacotes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pacote_hospitais" ADD CONSTRAINT "pacote_hospitais_pacote_id_fkey" FOREIGN KEY ("pacote_id") REFERENCES "pacotes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pacote_contemplacoes" ADD CONSTRAINT "pacote_contemplacoes_pacote_id_fkey" FOREIGN KEY ("pacote_id") REFERENCES "pacotes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pacote_anexos" ADD CONSTRAINT "pacote_anexos_pacote_id_fkey" FOREIGN KEY ("pacote_id") REFERENCES "pacotes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
