import { defineCollection, reference, z } from "astro:content";

const CourseNode = z.lazy(() =>
  z.object({
    course: reference("courses"),
    children: z.array(CourseNode),
  }),
);

export default defineCollection({
  type: "data",
  schema: z
    .object({
      title: z.string(),
      root: CourseNode,
    })
    .strict(),
});
