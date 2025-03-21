import { file } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  loader: file("src/data/courseCategories.yaml"),
  schema: ({ image }) =>
    z
      .object({
        id: z.string(),
        color: z.string(),
        description: z.string().optional(),
        members: z
          .array(reference("courses"))
          .min(1, "At least 1 member is required for a series"),
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
        logo: image(),
        name: z.string(),
      })
      .strict(),
});
