import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: z
    .object({
      color: z.string().regex(/^bg-/),
      name: z.string(),
      ordinal: z.number().int().positive(),
    })
    .strict(),
});
