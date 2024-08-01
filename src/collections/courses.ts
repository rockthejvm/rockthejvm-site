import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        archived: z.boolean().default(false),
        authors: z
          .array(reference("authors"))
          .min(1, "At least 1 author is required")
          .default(["daniel-ciocirlan"]),
        bundledCourses: z
          .array(reference("courses"))
          .min(2, "At least 2 courses are required for a bundle")
          .optional(),
        benefits: z
          .object({
            hours: z.number().positive(),
            linesOfCode: z.number().int().positive(),
            numExamples: z.number().int().positive(),
            rest: z.array(z.string()).optional(),
          })
          .strict(),
        description: z.string(),
        faqs: z.array(
          z
            .object({
              question: z.string(),
              answer: z.string(),
            })
            .strict(),
        ),
        grouping: z.object({
          category: reference("categories"),
          ordinal: z.number().int().positive().optional(),
        }),
        image: image(),
        minutesRead: z.string().optional(), // automatically added by remark-reading-time
        price: z.number().positive().optional(),
        purchaseUrl: z.string().url(),
        title: z.string(),
      })
      .strict(),
});
