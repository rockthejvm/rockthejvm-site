import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: z
    .object({
      avatar: z.string(),
      company: z.string(),
      link: z.string().url(),
      location: z
        .object({
          city: z.string(),
          country: z.string(),
        })
        .strict(),
      name: z.string(),
      role: z.string(),
    })
    .strict(),
});
