import { unique } from "@utils/unique";
import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        author: reference("authors").default("daniel-ciocirlan"),
        canonicalUrl: z.string().url().optional(),
        category: reference("articleCategories"),
        description: z
          .string()
          .max(200, "Description must be at most 200 characters")
          .optional(),
        difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),
        excerpt: z.string().refine((excerpt) => !excerpt.endsWith("."), {
          message: "Excerpt must not end with a period",
        }),
        heroImage: z
          .object({
            image: image().refine(
              (image) => image.width >= 1200 && image.height >= 630,
              {
                message: "Hero image must be at least 1200x630",
              },
            ),
            // .refine((image) => image.width / image.height === 1.91, {
            //   message: "Hero image aspect ratio must be 1.91:1",
            // }),
            alt: z.string(),
          })
          .strict()
          .optional(),
        publishedDate: z.date(),
        repositoryUrl: z.string().url().optional(),
        tags: unique(
          z
            .array(reference("tags"))
            .min(1, "Article must have at least one tag")
            .max(10, "Article must have at most ten tags"),
          "tags",
        ),
        title: z
          .string()
          .min(30, "Title must be at least 30 characters")
          .max(70, "Title must be at most 70 characters"),
        updatedDate: z.date().optional(),
        videoId: z.string().optional(),
      })
      .strict()
      .refine(
        (data) => !data.updatedDate || data.updatedDate >= data.publishedDate,
        {
          message: "Updated date must be on or after the published date",
        },
      ),
});
