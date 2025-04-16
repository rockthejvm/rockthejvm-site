import { defineCollection, getCollection, z } from "astro:content";
import { workers } from "@/data/site.json";

export default defineCollection({
  loader: async () => {
    const _courses = await getCollection("courses");
    const courses = (await Promise.all(
      _courses.map(async ({ data: { pricingPlanId } }) => {
        const response = await fetch(
          `${workers.teachable}/curriculum/${pricingPlanId}`,
        );
        const responseData = await response.json();

        return responseData;
      }),
    )) as { id: string }[];

    return courses;
  },
  schema: z.array(
    z
      .object({
        id: z.number().int().nonnegative(),
        name: z.string(),
        lectures: z.array(
          z.object({
            id: z.number().int().nonnegative(),
            name: z.string().optional(),
            media_duration: z.number().int().nonnegative(),
          }),
        ),
      })
      .strict(),
  ),
});
