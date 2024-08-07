import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        author: reference("authors").default("daniel-ciocirlan"),
        canonicalUrl: z.string().url().optional(),
        category: reference("article-categories"),
        description: z
          .string()
          .max(200, "Description must be at most 200 characters")
          .optional(),
        excerpt: z.string(),
        heroImage: z
          .object({
            image: image()
              .refine((image) => image.width >= 1200 && image.height >= 630, {
                message: "Hero image must be at least 1200x630",
              })
              .refine((image) => image.width / image.height === 1.91, {
                message: "Hero image aspect ratio must be 1.91:1",
              }),
            alt: z.string(),
          })
          .strict()
          .optional(),
        publishedDate: z.date(),
        tags: z.array(z.string()),
        title: z
          .string()
          .min(30, "Title must be at least 30 characters")
          .max(70, "Title must be at most 70 characters"),
        updatedDate: z.date().optional(),
        video: reference("videos").optional(),
      })
      .strict()
      .refine(
        (data) => !data.updatedDate || data.updatedDate >= data.publishedDate,
        {
          message: "Updated date must be on or after the published date",
        },
      ),
});
