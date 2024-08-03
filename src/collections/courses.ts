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
            hours: z.number().positive(),
            linesOfCode: z.number().int().positive(),
            examples: z.number().int().positive(),
            rest: z.array(z.string()).optional(),
          })
          .strict()
          .optional(),
        description: z.string(),
        faqs: z.array(
          z
            .object({
              question: z.string(),
              answer: z.string(),
            })
            .strict(),
        ),
        featureSection1: z
          .object({
            imageUrl: z.string(),
            imageAlt: z.string(),
          })
          .optional(),
        featureSection2: z
          .object({
            imageUrl: z.string(),
            imageAlt: z.string(),
          })
          .optional(),
        featureSection3: z
          .object({
            imageUrl: z.string(),
            imageAlt: z.string(),
          })
          .optional(),
        featureSection4: z
          .object({
            imageUrl: z.string(),
            imageAlt: z.string(),
          })
          .optional(),
        featureSection5: z
          .object({
            imageUrl: z.string(),
            imageAlt: z.string(),
          })
          .optional(),
        featureSection6: z
          .object({
            imageUrl: z.string(),
            imageAlt: z.string(),
          })
          .optional(),
        grouping: z.object({
          category: reference("categories"),
          ordinal: z.number().int().positive().optional(),
        }),
        image: image(),
        instructors: z
          .array(reference("authors"))
          .min(1, "At least 1 instructor is required")
          .default(["daniel-ciocirlan"]),
        price: z.number().positive().optional(),
        primaryColor: z.string().optional(),
        purchaseLink: z.string().url(),
        title: z.string(),
      })
      .strict(),
});
