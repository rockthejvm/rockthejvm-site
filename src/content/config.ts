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
            url: z.string(),
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
  authors: defineCollection({
    type: "data",
    schema: ({ image }) =>
      z
        .object({
          name: z.string(),
          bio: z.string(),
          email: z.string().email(),
          role: z.enum(["Co-Founder"]),
          avatar: image(),
        })
        .strict(),
  }),
};
// TODO: validate that the dates are not in the future
// TODO: validate that the date is in ISO format
