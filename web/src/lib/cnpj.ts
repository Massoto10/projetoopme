/** Remove formatação e mantém apenas dígitos. */
export function normalizeCnpj(input: string): string {
  return input.replace(/\D/g, "");
}

export function isValidCnpjDigits(digits: string): boolean {
  return /^\d{14}$/.test(digits);
}

/** Formata 14 dígitos para exibição (99.999.999/9999-99). */
export function formatCnpjDisplay(digits: string): string {
  if (!/^\d{14}$/.test(digits)) return digits;
  return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12)}`;
}
