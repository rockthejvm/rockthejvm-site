import { defineCollection, reference, z } from "astro:content";

const nodeSchema = reference("courses");

const edgeSchema = z.object({
  from: reference("courses"),
  to: reference("courses"),
  optional: z.boolean().default(false),
});

// const baseTreeNodeSchema = z.object({
//   value: z.string(), // Should be reference but doesn't type check
// });

// export type TreeNode = z.infer<typeof baseTreeNodeSchema> & {
//   children: TreeNode[];
// };

// const treeNodeSchema: z.ZodType<TreeNode> = baseTreeNodeSchema.extend({
//   children: z.lazy(() => treeNodeSchema.array()),
// });

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
