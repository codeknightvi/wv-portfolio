export function getDurationFromISO(startISO: string, endISO?: string): string {
  const start = new Date(startISO);
  const end = endISO ? new Date(endISO) : new Date();

  let totalMonths =
    (end.getUTCFullYear() - start.getUTCFullYear()) * 12 +
    (end.getUTCMonth() - start.getUTCMonth());

  totalMonths = Math.max(totalMonths, 0);

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years && months) return `${years}y ${months}m`;
  if (years) return `${years}y`;
  if (months) return `${months}m`;

  return "Less than 1 month";
}
