-- Adiciona código único do pacote; registros antigos recebem código derivado do id
ALTER TABLE "pacotes" ADD COLUMN "codigo_pacote" TEXT;

UPDATE "pacotes" SET "codigo_pacote" = id WHERE "codigo_pacote" IS NULL;

ALTER TABLE "pacotes" ALTER COLUMN "codigo_pacote" SET NOT NULL;

CREATE UNIQUE INDEX "pacotes_codigo_pacote_key" ON "pacotes"("codigo_pacote");
