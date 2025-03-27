import { defineCollection, z } from "astro:content";
import { YOUTUBE_API_KEY } from "astro:env/server";

const params = {
  part: "snippet",
  channelId: "UCRS4DvO9X7qaqVYUW2_dwOw",
  maxResults: "6",
  order: "date",
  type: "video",
};

const YoutubeVideoSchema = z.object({
  id: z.object({
    videoId: z.string(),
  }),
  snippet: z.object({
    title: z.string(),
  }),
});

const YoutubeDataSchema = z.object({
  items: z.array(YoutubeVideoSchema),
});

const apiUrl = "https://www.googleapis.com/youtube/v3/search";

export default defineCollection({
  loader: async () => {
    const response = await fetch(
      apiUrl + "?" + new URLSearchParams({ ...params, key: YOUTUBE_API_KEY }),
    );
    const responseData = await response.json();
    const { items } = YoutubeDataSchema.parse(responseData);
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
