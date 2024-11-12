export const capitalizeFirstChar = (s: string): string =>
  s ? s.charAt(0).toUpperCase() + s.slice(1) : s;
