import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: ({ image }) =>
    z
      .object({
        description: z.string(),
        image: image().optional(),
        articles: z.array(reference("articles")),
        title: z.string(),
      })
      .strict(),
});
