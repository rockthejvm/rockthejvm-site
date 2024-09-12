import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        archived: z.boolean().default(false), // TODO
        bundledCourses: z
          .array(reference("courses"))
          .min(2, "At least 2 courses are required for a bundle")
          .optional(),
        benefits: z
          .object({
            hours: z.number().positive(),
            linesOfCode: z.number().int().positive(),
            rest: z.array(z.string()).optional(), // TODO
          })
          .strict()
          .optional(),
        category: reference("courseCategories"),
        collaborators: z
          .array(
            z
              .object({
                author: reference("authors"),
                biography: z
                  .string()
                  .refine(
                    (excerpt) =>
                      excerpt ? /^<p>[\s\S]*<\/p>$/.test(excerpt) : true,
                    {
                      message:
                        "Excerpt must be an HTML string wrapped in <p> tags",
                      path: ["excerpt"],
                    },
                  ),
              })
              .strict(),
          )
          .optional(),
        description: z.string(),
        excerpt: z
          .string()
          .refine(
            (excerpt) => (excerpt ? /^<p>[\s\S]*<\/p>$/.test(excerpt) : true),
            {
              message: "Excerpt must be an HTML string wrapped in <p> tags",
              path: ["excerpt"],
            },
          ),
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
        features: z
          .object({
            one: image(),
            two: image().optional(),
            three: image().optional(),
            four: image().optional(),
            five: image().optional(),
          })
          .strict()
          .optional(),
        image: image(),
        instructors: z
          .array(reference("authors"))
          .min(1, "At least 1 instructor is required")
          .default(["daniel-ciocirlan"]),
        pricingPlanId: z.number().int().positive(),
        question: z
          .object({
            image: image(),
            text: z.string(),
          })
          .strict()
          .optional(),
        technologies: z
          .array(
            z.object({
              title: z.string(),
              description: z.string(),
              image: image(),
            }),
          )
          .optional(),
        title: z.string(),
        videoId: z.string().optional(),
      })
      .strict()
      .refine(
        (data) =>
          (data.benefits && !data.bundledCourses) ||
          (!data.benefits && data.bundledCourses),
        {
          message:
            "Either benefits or bundledCourses must be provided, but not both",
          path: ["benefits", "bundledCourses"],
        },
      ),
});
