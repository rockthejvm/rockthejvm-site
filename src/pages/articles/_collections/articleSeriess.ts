import { file } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  loader: file("src/data/articleSeriess.yaml"),
  schema: ({ image }) =>
    z
      .object({
        id: z.string(),
        description: z.string().optional(),
        image: image().optional(),
        members: z
          .array(reference("articles"))
          .min(1, "At least 1 member is required for a series"),
        title: z.string(),
      })
      .strict(),
});
