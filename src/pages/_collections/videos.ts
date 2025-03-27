import { defineCollection, z } from "astro:content";
import { YOUTUBE_API_KEY } from "astro:env/server";

const params = {
  part: "snippet",
  channelId: "UCRS4DvO9X7qaqVYUW2_dwOw",
  maxResults: 6,
  order: "date",
  type: "video",
};

interface YoutubeVideo {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
  };
}

interface YoutubeData {
  items: YoutubeVideo[];
}

const apiUrl = "https://www.googleapis.com/youtube/v3/search";

export default defineCollection({
  loader: async () => {
    const response = await fetch(
      apiUrl + "?" + new URLSearchParams({ ...params, key: YOUTUBE_API_KEY }),
    );
    const { items }: YoutubeData = await response.json();
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
