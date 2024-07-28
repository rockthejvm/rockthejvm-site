import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: ({ image }) =>
    z
      .object({
        bio: z.string().optional(),
        canonicalUrl: z.string().url().optional(),
        guestPlug: z.string().optional(),
        location: z
          .object({
            city: z.string().optional(),
            country: z.string(),
          })
          .strict()
          .optional(),
        name: z.string(),
        photo: image()
          .refine((image) => image.width >= 300 && image.height >= 300, {
            message: "Photo must be at least 300x300px",
          })
          .optional(),
        socials: z
          .object({
            email: z.string().email().optional(),
            facebook: handle("Facebook"),
            github: username("GitHub"),
            linkedin: username("LinkedIn"),
            twitter: handle("Twitter"),
            website: z.string().url().optional(),
            youtube: handle("YouTube"),
          })
          .strict()
          .optional(),
      })
      .strict(),
});

const username = (field: string) =>
  z
    .string()
    .regex(
      /^(?!https?:\/\/)/,
      `${field} should not be a URL, but rather a username`,
    )
    .optional();

const handle = (field: string) =>
  // cannot included the `@` symbol
  z
    .string()
    .regex(/^[^@]+$/, `${field} should not include the '@' symbol`)
    .optional();
