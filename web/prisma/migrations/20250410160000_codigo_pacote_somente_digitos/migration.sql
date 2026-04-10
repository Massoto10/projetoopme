-- Normaliza todos os códigos para sequência numérica (1, 2, 3… por data de criação).
-- Migrações posteriores (170000) corrigem apenas linhas que ainda não forem só dígitos.
WITH ranked AS (
  SELECT id, (ROW_NUMBER() OVER (ORDER BY created_at))::text AS new_code
  FROM pacotes
)
UPDATE pacotes p
SET codigo_pacote = r.new_code
FROM ranked r
WHERE p.id = r.id;
