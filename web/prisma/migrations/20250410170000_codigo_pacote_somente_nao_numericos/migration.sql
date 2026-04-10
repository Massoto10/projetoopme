-- Atualiza apenas pacotes cujo código não é só dígitos; preserva códigos já numéricos.
-- Novos códigos = (maior código numérico existente) + sequência, sem colisão.
WITH max_num AS (
  SELECT COALESCE(
    (
      SELECT MAX(codigo_pacote::bigint)
      FROM pacotes
      WHERE codigo_pacote ~ '^[0-9]+$'
        AND length(codigo_pacote) <= 18
    ),
    0
  ) AS m
),
non_numeric AS (
  SELECT p.id, p.created_at
  FROM pacotes p
  WHERE p.codigo_pacote !~ '^[0-9]+$' OR p.codigo_pacote IS NULL
),
ranked AS (
  SELECT
    nn.id,
    (mn.m + ROW_NUMBER() OVER (ORDER BY nn.created_at))::text AS new_code
  FROM non_numeric nn
  CROSS JOIN max_num mn
)
UPDATE pacotes p
SET codigo_pacote = r.new_code
FROM ranked r
WHERE p.id = r.id;
