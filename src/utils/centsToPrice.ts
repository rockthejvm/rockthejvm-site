export default (cents: number, currency: string, fractionDigits = 0): string =>
  (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: Math.max(fractionDigits, 2),
  });

export function splitPrice(formatted: string): { whole: string; frac: string } {
  const dotIdx = formatted.indexOf(".");
  return dotIdx >= 0
    ? { whole: formatted.slice(0, dotIdx), frac: formatted.slice(dotIdx) }
    : { whole: formatted, frac: "" };
}
