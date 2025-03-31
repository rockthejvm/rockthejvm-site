import { youtube } from "@googleapis/youtube";
import { defineCollection, z } from "astro:content";
import { YOUTUBE_API_KEY } from "astro:env/server";

const YoutubeVideoSchema = z.object({
    id: z.object({
      videoId: z.string(),
    }),
    snippet: z.object({
      title: z.string(),
    }),
  }),
  YoutubeDataSchema = z.object({
    items: z.array(YoutubeVideoSchema),
  }),
  youtubeHandler =
    YOUTUBE_API_KEY !== undefined
      ? youtube({
          version: "v3",
          auth: YOUTUBE_API_KEY,
        })
      : null,
  params = {
    part: "snippet",
    channelId: "UCRS4DvO9X7qaqVYUW2_dwOw",
    maxResults: "6",
    order: "date",
    type: "video",
  };

export default defineCollection({
  loader: async () => {
    if (youtubeHandler === null) {
      return [];
    }

    const { data } = await youtubeHandler.search.list(params),
      { items } = YoutubeDataSchema.parse(data);
    return items.map(({ id: { videoId }, snippet: { title } }) => ({
      id: videoId,
      title,
    }));
  },
  schema: z
    .object({
      id: z.string(),
      title: z.string(),
    })
    .strict(),
});
