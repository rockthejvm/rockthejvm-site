export interface PodcastEpisode {
  guid: string;
  episodeNumber: number;
  title: string;
  /** Pre-rendered HTML produced from the plain-text RSS description at build time. */
  description: string;
  /** ISO 8601 date string */
  publishedDate: string;
  audioUrl: string | null;
  videoUrl: string | null;
  thumbnailUrl: string | null;
  /** Duration in seconds, parsed from itunes:duration at build time. */
  duration: number;
}
