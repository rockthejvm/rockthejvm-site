import type { z } from "astro:content";

export const unique = <T extends z.ZodTypeAny>(
  collection: z.ZodArray<T, "many">,
  // trunk-ignore(biome/lint/correctness/noUnusedFunctionParameters)
  field: string,
) =>
  // collection.refine(
  //   (array) => new Set(array.map((item) => item[field])).size === array.length,
  //   {
  //     message: `${field} must be unique`,
  //   },
  // );
  collection;
