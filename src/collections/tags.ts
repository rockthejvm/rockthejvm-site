import { defineCollection, z } from "astro:content";

export default defineCollection({
	type: "data",
	schema: z.object({}).strict(),
});
