import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        author: reference("authors").default("daniel-ciocirlan"),
        excerpt: z.string(),
        heroImage: image().optional(),
        pubDate: z.date(),
        series: reference("series").optional(),
        tags: z.array(z.string()),
        title: z.string(),
        updatedDate: z.date().optional(),
      })
      .strict(),
});
