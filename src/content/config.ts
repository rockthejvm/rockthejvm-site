import { z, defineCollection, reference } from "astro:content";

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: z
      .object({
        title: z
          .string()
          .min(50, "Title should be at least 50 characters")
          .max(60, "Title should not exceed 60 characters"),
        publishedDate: z.date(),
        lastUpdatedDate: z.date().optional(),
        description: z
          .string()
          .min(140, "Description should be at least 140 characters")
          .max(160, "Description should not exceed 160 characters"),
        author: reference("authors"),
        // image: image(),
        image: z
          .object({
            url: z.string().url(),
            alt: z.string(),
          })
          .strict(),
        tags: z.array(z.string()).min(1, "At least one tag is required"),
        // relatedPosts: z.array(reference("posts")).optional(),
      })
      .strict()
      .refine(
        (data) => {
          if (
            data.lastUpdatedDate &&
            data.lastUpdatedDate < data.publishedDate
          ) {
            return false;
          }
          return true;
        },
        {
          message:
            "lastUpdatedDate must be greater than or equal to publishedDate",
          path: ["lastUpdatedDate"],
        }
      ),
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
        avatar: z
          .object({
            url: z.string().url(),
            alt: z.string(),
          })
          .strict(),
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
