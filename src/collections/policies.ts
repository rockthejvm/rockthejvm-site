import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export default defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/policies" }),
  schema: z
    .object({
      description: z.string(),
      title: z.string(),
    })
    .strict(),
});
