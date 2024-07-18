import { z, defineCollection } from "astro:content";

export const collections = {
  posts: defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string().min(50, "Title should be at least 50 characters").max(60, "Title should not exceed 60 characters"),
      pubDate: z.date(),
      description: z.string().min(140, "Description should be at least 140 characters").max(160, "Description should not exceed 160 characters"),
      author: z.string(),
      // image: image(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }).strict(),
      tags: z.array(z.string()).min(1, "At least one tag is required"),
    }).strict(),
}),
};
