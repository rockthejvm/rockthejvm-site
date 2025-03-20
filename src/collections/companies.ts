import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export default defineCollection({
  loader: file("src/data/companies.yaml"),
  schema: z
    .object({
      id: z.string(),
      name: z.string(),
      website: z.string().url(),
    })
    .strict(),
});
