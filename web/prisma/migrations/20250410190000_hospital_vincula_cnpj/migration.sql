-- Vincula cada hospital a um CNPJ do mesmo pacote
ALTER TABLE "pacote_hospitais" ADD COLUMN "pacote_cnpj_id" TEXT;

UPDATE "pacote_hospitais" AS h
SET "pacote_cnpj_id" = c.id
FROM (
  SELECT DISTINCT ON ("pacote_id") id, "pacote_id"
  FROM "pacote_cnpjs"
  ORDER BY "pacote_id", id ASC
) AS c
WHERE c."pacote_id" = h."pacote_id";

DELETE FROM "pacote_hospitais" WHERE "pacote_cnpj_id" IS NULL;

ALTER TABLE "pacote_hospitais" ALTER COLUMN "pacote_cnpj_id" SET NOT NULL;

ALTER TABLE "pacote_hospitais"
ADD CONSTRAINT "pacote_hospitais_pacote_cnpj_id_fkey"
FOREIGN KEY ("pacote_cnpj_id") REFERENCES "pacote_cnpjs"("id")
ON DELETE CASCADE ON UPDATE CASCADE;
