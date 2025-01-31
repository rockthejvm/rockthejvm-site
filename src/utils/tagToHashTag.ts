import capitalizeFirstChar from "./capitalizeFirstChar";

export default (tag: string): string =>
  tag
    .split("-")
    .map((word, index) => (index === 0 ? word : capitalizeFirstChar(word)))
    .join("");
