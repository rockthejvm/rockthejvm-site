export const numberToPrice = (x: number): string =>
  x.toFixed(x % 1 === 0 ? 0 : 2);
