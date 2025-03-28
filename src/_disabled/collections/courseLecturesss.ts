import { defineCollection, getCollection, z } from "astro:content";

export default defineCollection({
  loader: async () => {
    const courses = await getCollection("courses");
    const meme = await Promise.all(
      courses.map(async ({ data: { pricingPlanId } }) => {
        const response = await fetch(
          `https://rtjvm-teachable-worker.andrei-023.workers.dev/curriculum/${pricingPlanId}`,
        );
        const responseData = await response.json();

        return responseData;
      }),
    );
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
