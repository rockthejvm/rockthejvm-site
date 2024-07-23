import { defineCollection, z } from "astro:content";

export default defineCollection({
  type: "content",
  schema: z
    .object({
      metaDescription: z.string(),
      metaSiteTitle: z.string(),
      metaTitle: z.string(),
      OGDescription: z.string(),
      OGImage: z.string().url(),
      OGImageAlt: z.string(),
      OGSiteName: z.string(),
      OGTitle: z.string(),
      OGType: z.string(),
      OGURL: z.string().url(),
      title: z.string(),
    })
    .strict(),
});
