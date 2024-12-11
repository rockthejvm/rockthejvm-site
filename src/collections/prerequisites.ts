import { defineCollection, reference, z } from "astro:content";
import type { ZodType } from "astro:schema";

const courseNode: ZodType = z.object({
  value: reference("courses"),
  children: z.array(z.lazy((): ZodType => courseNode)),
});

export default defineCollection({
  type: "data",
  schema: z
    .object({
      title: z.string(),
      root: courseNode,
    })
    .strict(),
});
