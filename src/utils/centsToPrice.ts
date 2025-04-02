export default (cents: number, currency: string): string =>
  (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
