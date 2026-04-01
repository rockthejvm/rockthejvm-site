export interface PodcastEpisode {
  guid: string;
  episodeNumber: number;
  title: string;
  /** Pre-rendered HTML produced from the plain-text RSS description at build time. */
  description: string;
  /** ISO 8601 date string */
  publishedDate: string;
  audioUrl: string;
  videoUrl: string | null;
  thumbnailUrl: string | null;
  /** HH:MM:SS or MM:SS, as provided by itunes:duration */
  duration: string;
}
