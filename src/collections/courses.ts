import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        archived: z.boolean().default(false),
        bundledCourses: z.array(reference("courses")).optional(),
        category: reference("categories"),
        description: z.string(),
        image: image(),
        name: z.string(),
        ordinal: z.number().int().positive().optional(),
        price: z.number().positive().optional(),
      })
      .strict(),
});
