import { z, defineCollection, reference } from "astro:content";

export const collections = {
  blog: defineCollection({
    type: "content",
    schema: z
      .object({
        title: z.string(),
        date: z.date(),
        header: z.object({
          image: z.string(),
        }).strict(),
        tags: z.array(z.string()),
        excerpt: z.string(),
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
            city: z.string(),
            country: z.string(),
          }).optional().strict(),
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
          }).optional().strict(),
        })
        .strict(),
  }),
};
