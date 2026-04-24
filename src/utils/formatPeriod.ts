export function formatPeriod(startISO: string, endISO: string | null): string {
  const start = new Date(startISO);
  const end = endISO ? new Date(endISO) : null;

  const format = (date: Date) =>
    date.toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });

  const startText = format(start);
  const endText = end ? format(end) : "Present";

  return `${startText} – ${endText}`;
}
