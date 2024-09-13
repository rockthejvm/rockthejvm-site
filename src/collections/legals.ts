import { defineCollection, z } from "astro:content";

export default defineCollection({
	type: "content",
	schema: z
		.object({
			description: z.string(),
			title: z.string(),
		})
		.strict(),
});
