import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: z
    .object({
      color: z.string().regex(/^#[0-9a-f]{6}$/i),
      name: z.string(),
      ordinal: z.number().int().positive(),
    })
    .strict(),
});
