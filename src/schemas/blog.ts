import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: z
    .object({
      title: z.string(),
      excerpt: z.string(),
      pubDate: z.date(),
      updatedDate: z.date().optional(),
      tags: z.array(z.string()),
      author: reference("authors").default("daniel-ciocirlan"),
    })
    .strict(),
});
