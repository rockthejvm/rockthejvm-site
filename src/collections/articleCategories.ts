import { defineCollection, z } from "astro:content";

export default defineCollection({
	type: "data",
	schema: z
		.object({
			name: z.string(),
			ordinal: z.number().int().positive(),
		})
		.strict(),
});
