import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        includedInMembership: z.boolean().default(true),
        archived: z.boolean().default(false),
        bundledCourses: z
          .array(reference("courses"))
          .min(2, "At least 2 courses are required for a bundle")
          .optional(),
        benefits: z
          .object({
            hours: z.number().positive(),
            linesOfCode: z.number().int().positive(),
          })
          .strict()
          .optional(),
        category: reference("courseCategories"),
        collaborators: z
          .array(
            z
              .object({
                author: reference("authors"),
                biography: z.string(),
                // .refine(
                //   (excerpt) =>
                //     excerpt ? /^<p>[\s\S]*[^.]<\/p>$/.test(excerpt) : true,
                //   {
                //     message:
                //       "Excerpt must be an HTML string wrapped in <p> tags and must not end with a period before the closing </p> tag",
                //     path: ["excerpt"],
                //   },
                // ),
              })
              .strict(),
          )
          .optional(),
        description: z
          .string()
          .min(70, "Description must be at least 70 characters")
          .max(500, "Description must be at most 500 characters"), // Recommended is 240 characters
        difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),
        excerpt: z
          .string()
          .refine(
            (excerpt) =>
              excerpt ? /^<p>[\s\S]*[^.]<\/p>$/.test(excerpt) : true,
            {
              message:
                "Excerpt must be an HTML string wrapped in <p> tags without a period before the closing tag",
              path: ["excerpt"],
            },
          ),
        extra: z
          .object({
            title: z.string().max(70, "Title must be at most 70 characters"),
          })
          .optional(),
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
        heroImage: image(),
        // .refine(
        //   (image) => (image.width / image.height) === (16 / 9),
        //   {
        //     message: "Hero image must have an aspect ratio of 16:9",
        //   },
        // ),
        // .refine(
        //   (image) => image.width >= 1200 && image.height >= 630,
        //   {
        //     message: "Hero image must be at least 1200x630",
        //   },
        // ),
        instructors: z
          .array(reference("authors"))
          .min(1, "At least 1 instructor is required")
          .default(["daniel-ciocirlan"]),
        isFree: z.boolean().default(false),
        isNew: z.boolean().default(false),
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
            z
              .object({
                title: z.string(),
                description: z.string(),
                image: image(),
              })
              .strict(),
          )
          .optional(),
        thanks: z
          .string()
          .refine(
            (thanks) => (thanks ? /^<p>[\s\S]*<\/p>$/.test(thanks) : true),
            {
              message:
                "Special thanks must be an HTML string wrapped in <p> tags without a period before the closing tag",
              path: ["thanks"],
            },
          )
          .optional(),
        title: z
          .string()
          // .min(30, "Title must be at least 30 characters")
          .max(70, "Title must be at most 70 characters"),
        repositoryUrl: z.string().optional(),
        videoId: z.string().optional(),
        hasGoal: z.boolean().default(true),
        hasSkills: z.boolean().default(true),
        instructorEnabled: z.boolean().default(true),
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
      )
      .refine(
        (data) =>
          (data.difficulty && !data.bundledCourses) ||
          (!data.difficulty && data.bundledCourses),
        {
          message:
            "Either difficulty or bundledCourses must be provided, but not both",
          path: ["difficulty", "bundledCourses"],
        },
      ),
});
