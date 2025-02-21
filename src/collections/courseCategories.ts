import { file } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export default defineCollection({
  loader: file("src/data/courseCategories.yaml"),
  schema: z
    .object({
      id: z.string(),
      color: z.string(),
      faqs: z
        .array(
          z
            .object({
              question: z.string(),
              answer: z.string(),
            })
            .strict(),
        )
        .optional(),
      name: z.string(),
      logo: z.string(),
    })
    .strict(),
});
