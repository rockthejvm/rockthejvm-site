import { z } from "astro/zod";
import { TEACHABLE_API_KEY } from "astro:env/server";

export const TeachablePricingPlanSchema = z.object({
  pricing_plan: z.object({
    currency: z.string(),
    price: z.number().int().nonnegative(),
    course_id: z.number().int().nonnegative(),
  }),
});

type TeachablePricingPlan = z.infer<
  typeof TeachablePricingPlanSchema
>["pricing_plan"];

const MAX_ATTEMPTS = 5,
  BASE_DELAY_MS = 500,
  sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms)),
  isRetryable = (status: number) => status === 429 || status >= 500;

const fetchPricingPlan = async (
  pricingPlanId: number,
  apiKey: string,
): Promise<TeachablePricingPlan> => {
  const url = `https://developers.teachable.com/v1/pricing_plans/${pricingPlanId}`;

  for (let attempt = 1; ; attempt++) {
    let status: number | undefined;
    let retryAfterMs: number | undefined;

    try {
      const response = await fetch(url, {
        method: "GET",
        headers: { accept: "application/json", apiKey },
      });
      status = response.status;

      if (response.ok) {
        return TeachablePricingPlanSchema.parse(await response.json())
          .pricing_plan;
      }

      const retryAfter = Number(response.headers.get("retry-after"));
      retryAfterMs =
        Number.isFinite(retryAfter) && retryAfter > 0
          ? retryAfter * 1000
          : undefined;
    } catch (error) {
      if (status !== undefined) {
        throw error;
      }
    }

    if (
      attempt >= MAX_ATTEMPTS ||
      (status !== undefined && !isRetryable(status))
    ) {
      throw new Error(
        `Teachable pricing plan ${pricingPlanId} failed: ${status ?? "network error"} after ${attempt} attempt(s)`,
      );
    }

    await sleep(retryAfterMs ?? BASE_DELAY_MS * 2 ** (attempt - 1));
  }
};

// Many pages need the same plans; fetch each plan once per build.
const pricingPlanCache = new Map<number, Promise<TeachablePricingPlan>>();

export const getTeachablePricingPlan = async (pricingPlanId: number) => {
  if (TEACHABLE_API_KEY === undefined) {
    return null;
  }

  let pending = pricingPlanCache.get(pricingPlanId);

  if (pending === undefined) {
    pending = fetchPricingPlan(pricingPlanId, TEACHABLE_API_KEY);
    pricingPlanCache.set(pricingPlanId, pending);
    pending.catch(() => pricingPlanCache.delete(pricingPlanId));
  }

  return pending;
};
