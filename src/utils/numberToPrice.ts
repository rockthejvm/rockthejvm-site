export const numberToPrice = (x: number): string =>
  x % 1 === 0 ? x.toFixed(0) : x.toFixed(2);
