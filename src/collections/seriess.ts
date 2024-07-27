import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: ({ image }) =>
    z
      .object({
        canonicalUrl: z.string().url(),
        description: z.string(),
        image: image().optional(),
        members: z.array(reference("articles").or(reference("videos"))),
        title: z.string(),
      })
      .strict(),
});
