import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: ({ image }) =>
    z
      .object({
        biography: z.string().optional(),
        canonicalUrl: z.string().url().optional(),
        company: z
          .object({
            entity: reference("companies"),
            role: z.string(),
          })
          .strict()
          .optional(),
        guestPlug: z.string().optional(),
        location: z
          .object({
            city: z.string().optional(),
            country: z.string(),
          })
          .strict()
          .optional(),
        name: z.string(),
        photo: image().refine(
          (image) => image.width >= 460 && image.height >= 460,
          {
            message: "Photo must be at least 460x460px",
          },
        ),
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
  z
    .string()
    .regex(/^@/, `${field} should start with the '@' symbol`)
    .optional();
