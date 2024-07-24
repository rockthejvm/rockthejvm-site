import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        authors: reference("authors").default("daniel-ciocirlan"),
        description: z
          .string()
          .max(200, "Description must be at most 200 characters")
          .optional(),
        excerpt: z.string(),
        heroImage: image().optional(),
        publishedDate: z.date(),
        series: reference("seriess").optional(),
        summary: z.string().optional(),
        tags: z.array(z.string()),
        title: z
          .string()
          .min(30, "Title must be at least 30 characters")
          .max(70, "Title must be at most 70 characters"),
        updatedDate: z.date().optional(),
        video: z.string().url().optional(),
      })
      .strict(),
});
