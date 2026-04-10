-- Cadastro global de hospitais (CNPJ + nome). Pacotes referenciam hospitais por ID.
DROP TABLE IF EXISTS "pacote_hospitais";
DROP TABLE IF EXISTS "pacote_cnpjs";

CREATE TABLE "hospitais" (
    "id" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "hospitais_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "hospitais_cnpj_key" ON "hospitais"("cnpj");

CREATE TABLE "pacote_hospitais" (
    "id" TEXT NOT NULL,
    "pacote_id" TEXT NOT NULL,
    "hospital_id" TEXT NOT NULL,

    CONSTRAINT "pacote_hospitais_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX "pacote_hospitais_pacote_id_hospital_id_key" ON "pacote_hospitais"("pacote_id", "hospital_id");

ALTER TABLE "pacote_hospitais" ADD CONSTRAINT "pacote_hospitais_pacote_id_fkey" FOREIGN KEY ("pacote_id") REFERENCES "pacotes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "pacote_hospitais" ADD CONSTRAINT "pacote_hospitais_hospital_id_fkey" FOREIGN KEY ("hospital_id") REFERENCES "hospitais"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
