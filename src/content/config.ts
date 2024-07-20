import { string } from "astro/zod";
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
          overlay_color: z.string().optional(),
          overlay_image: z.string().optional(),
        }),
        tags: z.array(z.string()),
        excerpt: z.string(),
        toc: z.boolean().optional(),
        toc_label: z.string().optional(),
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
        city: z.string(),
        country: z.string(),
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
          avatar: z
            .object({
              image: image(),
              alt: z.string(),
            })
            .strict(),
          bio: z.string(),
          email: z.string().email(),
          name: z.string(),
          role: z.enum(["Co-Founder"]),
        })
        .strict(),
  }),
};
// TODO: validate that the dates are not in the future
// TODO: validate that the date is in ISO format
