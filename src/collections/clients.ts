import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: ({ image }) =>
    z
      .object({
        name: z.string(),
        website: z.string().url(),
        logo: image().refine(
          (image) => image.width >= 300 && image.height >= 300,
          {
            message: "Logo must be at least 300x300px",
          },
        ),
      })
      .strict(),
});
