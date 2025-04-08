import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/pages/_data/testimonials" }),
  schema: ({ image }) =>
    z
      .object({
        company: z
          .object({
            entity: reference("companies"),
            role: z.string(),
          })
          .strict(),
        profile: z.string().url(),
        location: z
          .object({
            city: z.string(),
            country: z.string(),
          })
          .strict(),
        name: z.string(),
        ordinal: z.number().int().positive(),
        photo: image(),
      })
      .strict(),
});
