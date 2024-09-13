import { defineCollection, z } from "astro:content";

export default defineCollection({
	type: "data",
	schema: ({ image }) =>
		z
			.object({
				description: z.string(),
				image: image(),
				name: z.string(),
				packages: z
					.array(
						z
							.object({
								pricingPlanId: z.number().positive(),
							})
							.strict(),
					)
					.min(1, "At least one package is required"),
			})
			.strict(),
});
