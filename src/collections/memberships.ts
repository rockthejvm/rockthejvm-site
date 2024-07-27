import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: z
    .object({
      name: z.string(),
      description: z.string(),
      packages: z
        .array(
          z
            .object({
              frequency: z.enum(["monthly", "yearly"]),
              name: z.string(),
              price: z.number(),
            })
            .strict(),
        )
        .min(1, "At least one package is required"),
    })
    .strict(),
});
