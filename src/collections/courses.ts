import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        archived: z.boolean().default(false),
        bundledCourses: z
          .array(reference("courses"))
          .min(2, "At least 2 courses are required for a bundle")
          .optional(),
        benefits: z
          .object({
            hours: z.number(),
            linesOfCode: z.number().int(),
            numExamples: z.number().int(),
            rest: z.array(z.string()).optional(),
          })
          .strict()
          .optional(),
        description: z.string(),
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
        grouping: z.object({
          category: reference("categories"),
          ordinal: z.number().int().positive().optional(),
        }),
        image: image(),
        minutesRead: z.string().optional(), // automatically added by remark-reading-time
        price: z.number().positive().optional(),
        title: z.string(),
      })
      .strict(),
});
