import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: ({ image }) =>
    z
      .object({
        bio: z.string().optional(),
        location: z
          .object({
            city: z.string().optional(),
            country: z.string(),
          })
          .strict()
          .optional(),
        name: z.string(),
        photo: image()
          .refine((image) => image.width >= 300, {
            message: "Photo width must be at least 300px",
          })
          .optional(),
        socials: z
          .object({
            email: z.string().email().optional(),
            facebook: z.string().url().optional(),
            github: z.string().url().optional(),
            linkedin: z.string().url().optional(),
            twitter: z.string().url().optional(),
            website: z.string().url().optional(),
            youtube: z.string().url().optional(),
          })
          .strict()
          .optional(),
      })
      .strict(),
});
