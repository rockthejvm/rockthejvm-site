import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: ({ image }) =>
    z
      .object({
        description: z.string(),
        image: image().optional(),
        posts: z.array(reference("blog")),
        title: z.string(),
      })
      .strict(),
});
