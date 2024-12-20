import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  type: "data",
  schema: ({ image }) =>
    z
      .object({
        description: z.string().optional(),
        image: image().optional(),
        members: z.union([
          z
            .array(reference("articles"))
            .min(1, "At least 1 member is required for a series"),
          z
            .array(reference("courses"))
            .min(1, "At least 1 member is required for a series"),
          // z
          //   .array(reference("videos"))
          //   .min(1, "At least 1 member is required for a series"),
        ]),
        title: z.string(),
      })
      .strict(),
});
