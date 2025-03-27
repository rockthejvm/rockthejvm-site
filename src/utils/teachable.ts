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

const TeachableLectureSchema = z.object({
  id: z.number().int().nonnegative(),
  position: z.number().int().nonnegative(),
  is_published: z.boolean(),
});

export const TeachableCourseSchema = z.object({
  course: z.object({
    lecture_sections: z.array(
      z.object({
        lectures: z.array(TeachableLectureSchema),
      }),
    ),
  }),
});

export const getTeachableCourse = async (courseId: number) => {
  const options = {
      method: "GET",
      headers: { accept: "application/json", apiKey: TEACHABLE_API_KEY },
    },
    response = await fetch(
      `https://developers.teachable.com/v1/courses/${courseId}`,
      options,
    ),
    responseData = await response.json(),
    {
      course: { lecture_sections },
    } = TeachableCourseSchema.parse(responseData);

  return lecture_sections;
};
