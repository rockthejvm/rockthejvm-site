import { z, defineCollection, reference } from "astro:content";

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: z
      .object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().url(),
        tags: z.array(z.string()).min(1, "At least one tag is required"),
        author: reference("authors"),
      })
      .strict(),
  }),
  informationals: defineCollection({
    type: "content",
    schema: z
      .object({
        metaDescription: z.string(),
        metaSiteTitle: z.string(),
        metaTitle: z.string(),
        OGDescription: z.string(),
        OGImage: z.string().url(),
        OGImageAlt: z.string(),
        OGSiteName: z.string(),
        OGTitle: z.string(),
        OGType: z.string(),
        OGURL: z.string().url(),
        title: z.string(),
      })
      .strict(),
  }),
  reviews: defineCollection({
    type: "content",
    schema: z
      .object({
        avatar: z.string(),
        company: z.string(),
        link: z.string().url(),
        location: z.object({
          city: z.string(),
          country: z.string(),
        }).strict(),
        name: z.string(),
        role: z.string(),
      })
      .strict(),
  }),
  authors: defineCollection({
    type: "data",
    schema: ({ image }) =>
      z
        .object({
          bio: z.string().optional(),
          location: z.object({
            city: z.string().optional(),
            country: z.string(),
          }).strict().optional(),
          name: z.string(),
          photo: image().optional(),
          socials: z.object({
            email: z.string().email().optional(),
            facebook: z.string().url().optional(),
            github: z.string().url().optional(),
            linkedin: z.string().url().optional(),
            twitter: z.string().url().optional(),
            website: z.string().url().optional(),
            youtube: z.string().url().optional(),
          }).strict().optional(),
        })
        .strict(),
  }),
};
