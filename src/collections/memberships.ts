import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: ({ image }) =>
    z
      .object({
        description: z.string(),
        image: image(),
        minutesRead: z.string().optional(), // automatically added by remark-reading-time
        name: z.string(),
        packages: z
          .array(
            z
              .object({
                frequency: z.enum(["monthly", "yearly"]),
                name: z.string(),
                price: z.number().positive(),
              })
              .strict(),
          )
          .min(1, "At least one package is required"),
      })
      .strict(),
});
