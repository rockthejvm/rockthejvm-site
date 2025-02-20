import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export default defineCollection({
  loader: file("src/data/socials.yaml"),
  schema: z
    .object({
      id: z.string(),
      domain: z.string().includes("."),
      icon: z.string().includes(":"),
      name: z.string(),
    })
    .strict(),
});
