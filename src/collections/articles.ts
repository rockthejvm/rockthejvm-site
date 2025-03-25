import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/data/articles" }),
  schema: z
    .object({
      author: reference("authors").default("daniel-ciocirlan"),
      canonicalUrl: z.string().url().optional(),
      category: reference("articleCategories"),
      description: z
        .string()
        .max(200, "Description must be at most 200 characters")
        .optional(),
      difficulty: reference("difficulties"),
      excerpt: z.string().refine((excerpt) => !excerpt.endsWith("."), {
        message: "Excerpt must not end with a period",
      }),
      // heroImage: z
      //   .object({
      //     image: image().refine(
      //       (image) => image.width >= 1200 && image.height >= 630,
      //       {
      //         message: "Hero image must be at least 1200x630",
      //       },
      //     ),
      //     alt: z.string(),
      //   })
      //   .strict()
      //   .optional(),
      publishedDate: z.date(),
      repositoryUrl: z.string().url().optional(),
      tags: z
        .array(reference("tags"))
        .min(1, "Article must have at least one tag")
        .max(10, "Article must have at most ten tags")
        .refine(
          (tags) => tags.length === new Set(tags.map((tag) => tag.id)).size,
          {
            message: "All tags must be unique",
          },
        ),
      title: z.string().max(70, "Title must be at most 70 characters"),
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
