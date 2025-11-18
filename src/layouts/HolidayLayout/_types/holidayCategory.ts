import type { CollectionEntry } from "astro:content";

export interface HolidayCategory {
  category: string;
  description: string;
  courses: {
    course: CollectionEntry<"courses">;
    prices: { old: number; new: number };
  }[];
}
