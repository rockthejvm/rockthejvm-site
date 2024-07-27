import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        description: z.string(),
        image: image(),
        name: z.string(),
        price: z.number(),
      })
      .strict(),
});
