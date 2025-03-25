import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

export default defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "src/pages/memberships/_data" }),
  schema: ({ image }) =>
    z
      .object({
        description: z.string(),
        image: image().default("./images/image.png"),
        name: z.string(),
        packages: z
          .array(
            z
              .object({
                pricingPlanId: z.number().positive(),
              })
              .strict(),
          )
          .min(1, "At least one package is required"),
      })
      .strict(),
});
