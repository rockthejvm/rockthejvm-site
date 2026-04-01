import type { PodcastEpisode } from "@/types/PodcastEpisode";
import {
  PODCAST_AUDIO_FEED_URL,
  PODCAST_VIDEO_FEED_URL,
} from "astro:env/server";
import { XMLParser } from "fast-xml-parser";
import { micromark } from "micromark";
import { gfm, gfmHtml } from "micromark-extension-gfm";
import sanitizeHtml from "sanitize-html";

interface RssGuid {
  "#text": string;
  isPermaLink?: string;
}

interface RssEnclosure {
  url: string;
  length?: string;
  type?: string;
}

interface RssItem {
  guid?: string | RssGuid;
  title?: string;
  description?: string;
  pubDate?: string;
  enclosure?: RssEnclosure;
  "itunes:episode"?: number | string;
  "itunes:duration"?: string;
  "itunes:image"?: { href: string };
}

interface RssFeed {
  rss?: {
    channel?: {
      item?: RssItem[];
    };
  };
}

function extractGuidText(raw: string | RssGuid | undefined): string {
  if (typeof raw === "string") return raw;
  if (typeof raw === "object" && raw !== null) return raw["#text"] ?? "";
  return "";
}

export async function fetchPodcastFeed(): Promise<PodcastEpisode[]> {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "",
    textNodeName: "#text",
    isArray: (_name, jPath) => jPath === "rss.channel.item",
  });

  const [audioRes, videoRes] = await Promise.all([
    fetch(PODCAST_AUDIO_FEED_URL),
    fetch(PODCAST_VIDEO_FEED_URL),
  ]);

  if (!audioRes.ok || !videoRes.ok) {
    throw new Error(
      `Failed to fetch podcast feeds (audio: ${audioRes.status}, video: ${videoRes.status})`,
    );
  }

  const [audioXml, videoXml] = await Promise.all([
    audioRes.text(),
    videoRes.text(),
  ]);

  const audioData = parser.parse(audioXml) as RssFeed;
  const videoData = parser.parse(videoXml) as RssFeed;

  const audioItems: RssItem[] = audioData?.rss?.channel?.item ?? [];
  const videoItems: RssItem[] = videoData?.rss?.channel?.item ?? [];

  // Build map: base UUID → video enclosure URL
  const videoMap = new Map<string, string>();
  for (const item of videoItems) {
    const uuid = extractGuidText(item.guid).replace(/-video$/, "");
    const videoUrl = item.enclosure?.url ?? "";
    if (uuid && videoUrl) videoMap.set(uuid, videoUrl);
  }

  const episodes: PodcastEpisode[] = audioItems.map((item) => {
    const uuid = extractGuidText(item.guid).replace(/-audio$/, "");
    const rawDescription = item.description ?? "";
    const htmlDescription = sanitizeHtml(
      micromark(rawDescription, {
        extensions: [gfm()],
        htmlExtensions: [gfmHtml()],
      }),
      {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        allowedAttributes: {
          ...sanitizeHtml.defaults.allowedAttributes,
          img: ["src", "alt", "width", "height", "loading"],
        },
      },
    );
    const thumbnailHref = item["itunes:image"]?.href ?? "";

    return {
      guid: uuid,
      episodeNumber: Number(item["itunes:episode"] ?? 0),
      title: item.title ?? "",
      description: htmlDescription,
      publishedDate: new Date(item.pubDate ?? "").toISOString(),
      audioUrl: item.enclosure?.url ?? "",
      videoUrl: videoMap.get(uuid) ?? null,
      thumbnailUrl: thumbnailHref || null,
      duration: item["itunes:duration"] ?? "",
    };
  });

  // Newest first
  return episodes.sort(
    (a, b) =>
      new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime(),
  );
}
