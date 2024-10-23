import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: z
    .object({
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
      ordinal: z.number().int().positive(),
      logo: z.string().optional() // TODO make this mandatory
    })
    .strict(),
});
