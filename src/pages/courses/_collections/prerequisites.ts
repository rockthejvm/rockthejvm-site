import { file } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
  loader: file("src/pages/courses/_data/prerequisites.yaml"),
  schema: z
    .object({
      id: z.string(),
      title: z.string(),
      nodes: z.array(reference("courses")),
      edges: z.array(
        z.object({
          from: reference("courses"),
          to: reference("courses"),
          optional: z.boolean().default(false),
        }),
      ),
    })
    .strict(),
});
