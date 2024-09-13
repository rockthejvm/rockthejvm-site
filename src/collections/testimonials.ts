import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
	type: "content",
	schema: ({ image }) =>
		z
			.object({
				company: z
					.object({
						entity: reference("companies"),
						role: z.string(),
					})
					.strict(),
				link: z.string().url(),
				location: z
					.object({
						city: z.string(),
						country: z.string(),
					})
					.strict(),
				name: z.string(),
				photo: image().refine(
					(image) => image.width >= 200 && image.height >= 200,
					{
						message: "Photo must be at least 200x200px",
					},
				),
				ordinal: z.number().int().positive(),
			})
			.strict(),
});
