import type { CollectionEntry } from "astro:content";

export type HolidayCourse = {
  category: string;
  courses: {
    id: CollectionEntry<"courses">;
    productId: number;
    prices: { old: number; new: number };
  }[];
};
