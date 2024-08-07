import { unique } from "@utils/unique";
import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: ({ image }) =>
    z
      .object({
        article: reference("articles").optional(),
        author: reference("authors").default("daniel-ciocirlan"),
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
        tags: unique(
          z
            .array(reference("tags"))
            .min(1, "Article must have at least one tag"),
          "tags",
        ),
      })
      .strict(),
});
