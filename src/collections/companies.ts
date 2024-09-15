import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: z
    .object({
      slug: z.string(),
      title: z.string(),
      website: z.string().url(),
    })
    .strict(),
});
