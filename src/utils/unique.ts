import type { ZodArray } from "astro:schema";

export default (array: ZodArray, elements: string) =>
  array.refine((items) => new Set(items).size === items.length, {
    message: `All ${elements} must be unique`,
  });
