import { defineCollection, z } from "astro:content";

const baseTreeNodeSchema = z.object({
  value: z.string(), // Should be reference but doesn't type check
});

export type TreeNode = z.infer<typeof baseTreeNodeSchema> & {
  children: TreeNode[];
};

const treeNodeSchema: z.ZodType<TreeNode> = baseTreeNodeSchema.extend({
  children: z.lazy(() => treeNodeSchema.array()),
});

export default defineCollection({
  type: "data",
  schema: z
    .object({
      title: z.string(),
      root: treeNodeSchema,
    })
    .strict(),
});
