import { z } from "astro:content";

export const unique = <T extends z.ZodTypeAny>(
  collection: z.ZodArray<T, "many">,
  field: string,
) =>
  collection.refine(
    (array) => new Set(array.map((item) => item.id)).size === array.length,
    {
      message: `${field} must be unique`,
    },
  );
