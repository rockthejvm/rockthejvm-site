import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        authors: reference("authors").default("daniel-ciocirlan"),
        description: z.string().optional(),
        excerpt: z.string(),
        heroImage: image().optional(),
        publishedDate: z.date(),
        series: reference("seriess").optional(),
        summary: z.string().optional(),
        tags: z.array(z.string()),
        title: z.string(),
        updatedDate: z.date().optional(),
        video: z.string().url().optional(),
      })
      .strict(),
});
