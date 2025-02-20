export default (arr: string[]): string[] =>
  [...arr].sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" }),
  );
