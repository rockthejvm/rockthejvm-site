import site from "@/data/site.json";
import type { CurriculumSection } from "@/types/Curriculum";
import { z } from "astro/zod";

const CurriculumSectionSchema = z.array(
  z.object({
    id: z.number().int().nonnegative(),
    name: z.string(),
    lectures: z.array(
      z.object({
        id: z.number().int().nonnegative(),
        name: z.string().optional(),
        media_duration: z.number().int().nonnegative(),
      }),
    ),
  }),
);

export const fetchCurriculumSections = async (
  pricingPlanId: number,
): Promise<CurriculumSection[]> => {
  try {
    const response = await fetch(
      `${site.workers.teachable}/curriculum/${pricingPlanId}`,
    );

    if (!response.ok) {
      return [];
    }

    return CurriculumSectionSchema.parse(await response.json());
  } catch {
    return [];
  }
};

export const countCurriculumLectures = (
  sections: CurriculumSection[],
): number => sections.reduce((sum, section) => sum + section.lectures.length, 0);
