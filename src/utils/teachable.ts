import { z } from "astro/zod";
import { TEACHABLE_API_KEY } from "astro:env/server";

export const TeachablePricingPlanSchema = z.object({
  pricing_plan: z.object({
    currency: z.string(),
    price: z.number().int().nonnegative(),
    course_id: z.number().int().nonnegative(),
  }),
});

export const getTeachablePricingPlan = async (pricingPlanId: number) => {
  if (TEACHABLE_API_KEY === undefined) {
    return null;
  }

  const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        apiKey: TEACHABLE_API_KEY,
      },
    },
    response = await fetch(
      `https://developers.teachable.com/v1/pricing_plans/${pricingPlanId}`,
      options,
    ),
    responseData = await response.json(),
    { pricing_plan } = TeachablePricingPlanSchema.parse(responseData);

  return pricing_plan;
};
