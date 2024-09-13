import { unique } from "@utils/unique";
import { defineCollection, reference, z } from "astro:content";

export default defineCollection({
	type: "content",
	schema: ({ image }) =>
		z
			.object({
				articles: unique(z.array(reference("articles")), "articles"),
				courses: unique(z.array(reference("courses")), "courses"),
				description: z
					.string()
					.max(200, "Description must be at most 200 characters"),
				excerpt: z.string(),
				heroImage: z
					.object({
						image: image()
							.refine((image) => image.width >= 1200 && image.height >= 630, {
								message: "Hero image must be at least 1200x630",
							})
							.refine((image) => image.width / image.height === 1.91, {
								message: "Hero image aspect ratio must be 1.91:1",
							}),
						alt: z.string(),
					})
					.strict(),
				publishedDate: z.date(),
				title: z
					.string()
					.min(30, "Title must be at least 30 characters")
					.max(70, "Title must be at most 70 characters"),
				// videos: unique(z.array(reference("videos")), "videos"),
			})
			.strict(),
});
