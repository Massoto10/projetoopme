-- Limpa TODOS os pacotes e registros ligados (CNPJs, hospitais, contemplações, anexos).
-- Usuários (users) não são afetados.
-- Executar no PostgreSQL, ex.: psql "$DATABASE_URL" -f prisma/sql/clear_pacotes.sql

DELETE FROM "pacotes";
