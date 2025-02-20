import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export default defineCollection({
  loader: file("src/data/difficulties.yaml"),
  schema: z
    .object({
      id: z.string(),
      name: z.string(),
    })
    .strict(),
});
