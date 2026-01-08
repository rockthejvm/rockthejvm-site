import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "src/data/courses" }),
  schema: ({ image }) =>
    z
      .object({
        archived: z.boolean().default(false),
        benefits: z
          .object({
            hours: z.number().positive(),
            linesOfCode: z.number().int().positive(),
          })
          .strict()
          .optional(),
        bundledCourses: z
          .array(reference("courses"))
          .min(2, "At least 2 courses are required for a bundle")
          .optional(),
        category: reference("courseCategories"),
        collaborators: z
          .array(
            z
              .object({
                author: reference("authors"),
                biography: z.string(),
              })
              .strict(),
          )
          .optional(),
        description: z
          .string()
          .min(20, "Description must be at least 20 characters")
          .max(500, "Description must be at most 500 characters"), // Recommended is 240 characters
        difficulty: reference("difficulties").optional(),
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
            six: image().optional(),
          })
          .strict()
          .optional(),
        hasGoal: z.boolean().default(true),
        hasSkills: z.boolean().default(true),
        heroImage: image(),
        instructorEnabled: z.boolean().default(true),
        instructors: z
          .array(reference("authors"))
          .min(1, "At least 1 instructor is required")
          .default(["daniel-ciocirlan"]),
        isFree: z.boolean().default(false),
        isPreview: z.boolean().default(false),
        pricingPlanId: z.number().int().nonnegative(),
        publishedDate: z.date().optional(),
        question: z
          .object({
            image: image(),
            text: z.string(),
          })
          .strict()
          .optional(),
        showMembership: z.boolean().default(true),
        tags: z
          .array(reference("tags"))
          .min(1, "Course must have at least one tag")
          .max(10, "Course must have at most ten tags")
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
        updatedDate: z.date().optional(),
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
      )
      .refine(
        (data) =>
          (data.publishedDate && !data.bundledCourses) ||
          (!data.publishedDate && !data.updatedDate && data.bundledCourses),
        {
          message:
            "Either publishedDate/updatedDate or bundledCourses must be provided, but not both",
          path: ["publishedDate", "updatedDate", "bundledCourses"],
        },
      )
      .refine(
        (data) =>
          (data.tags && !data.bundledCourses) ||
          (!data.tags && data.bundledCourses),
        {
          message:
            "Either tags or bundledCourses must be provided, but not both",
          path: ["tags", "bundledCourses"],
        },
      )
      .refine(
        (data) =>
          !data.publishedDate ||
          !data.updatedDate ||
          data.updatedDate >= data.publishedDate,
        {
          message: "Updated date must be on or after the published date",
        },
      ),
});
