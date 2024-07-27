import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: ({ image }) =>
    z
      .object({
        article: reference("articles").optional(),
        author: reference("authors").default("daniel-ciocirlan"),
        canonicalUrl: z.string().url(),
        excerpt: z.string(),
        thumbnail: z
          .object({
            image: image()
              .refine((image) => image.width >= 1200 && image.height >= 630, {
                message: "Thumbnail must be at least 1200x630",
              })
              .refine((image) => image.width / image.height === 1.91, {
                message: "Thumbnail aspect ratio must be 1.91:1",
              }),
            alt: z.string(),
          })
          .strict()
          .optional(),
        publishedDate: z.date(),
        title: z
          .string()
          .min(30, "Title must be at least 30 characters")
          .max(70, "Title must be at most 70 characters"),
        series: reference("seriess").optional(),
        tags: z.array(z.string()),
      })
      .strict(),
});
