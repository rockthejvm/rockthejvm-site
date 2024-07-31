import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: z
    .object({
      description: z.string(),
      minutesRead: z.string().optional(), // automatically added by remark-reading-time
      title: z.string(),
    })
    .strict(),
});
