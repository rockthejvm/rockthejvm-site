import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: z
    .object({
      domain: z.string().url(),
      icon: z.string(),
      title: z.string(),
    })
    .strict(),
});
