import capitalize from "./capitalize";

export default (tag: string): string =>
  tag
    .split("-")
    .map((word, index) => (index === 0 ? word : capitalize(word)))
    .join("");
