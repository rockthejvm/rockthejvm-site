export const zip = <T, U>(a: T[], b: U[]): [T, U][] =>
  a.map((k, i) => [k, b[i]]);
