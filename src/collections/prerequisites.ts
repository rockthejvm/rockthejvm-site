import { defineCollection, reference, z } from "astro:content";

const nodeSchema = reference("courses"),
  edgeSchema = z.object({
    from: reference("courses"),
    to: reference("courses"),
    optional: z.boolean().default(false),
  });

export default defineCollection({
  type: "data",
  schema: z
    .object({
      title: z.string(),
      nodes: z.array(nodeSchema),
      edges: z.array(edgeSchema),
    })
    .strict(),
});
