import type { PodcastEpisode } from "@/types/PodcastEpisode";
import { PauseIcon, PlayIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef, useState } from "react";

function formatTime(seconds: number): string {
  if (!isFinite(seconds) || seconds < 0) return "0:00";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  if (h > 0)
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function formatDate(isoString: string): string {
  return new Date(isoString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

function formatDuration(duration: string): string {
  const parts = duration.split(":");
  if (parts.length === 3) {
    const h = parseInt(parts[0], 10);
    const m = parseInt(parts[1], 10);
    return h > 0 ? `${h}h ${m}m` : `${m} min`;
  }
  if (parts.length === 2) {
    return `${parseInt(parts[0], 10)} min`;
  }
  return duration;
}

interface Props {
  episode: PodcastEpisode;
}

export default function PodcastCard({ episode }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTimeUpdate = () => setCurrentTime(audio.currentTime);
    const onDurationChange = () => setAudioDuration(audio.duration);
    const onEnded = () => setIsPlaying(false);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("durationchange", onDurationChange);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("durationchange", onDurationChange);
      audio.removeEventListener("ended", onEnded);
    };
  }, []);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const time = (parseFloat(e.target.value) / 100) * audioDuration;
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const progress = audioDuration > 0 ? (currentTime / audioDuration) * 100 : 0;

  return (
    <article className="card-shadow card-shadow-color flex flex-col overflow-hidden rounded-2xl bg-secondary">
      {episode.thumbnailUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={episode.thumbnailUrl}
            alt={episode.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h2 className="mt-2 line-clamp-3 text-xl font-semibold leading-6 md:text-2xl lg:min-h-28 lg:text-3xl">
          <a href={`/podcast/${episode.guid}`} className="text-content-2">
            {episode.title}
          </a>
        </h2>
        <p className="mt-4 text-content-2">
          {formatDate(episode.publishedDate)}&nbsp;•&nbsp;
          {formatDuration(episode.duration)}
        </p>
        <div className="mt-auto pt-4">
          {/* Full-width inline audio player */}
          <div className="flex w-full items-center gap-2">
            <button
              type="button"
              onClick={handlePlayPause}
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-1 text-white transition-colors hover:bg-accent-2"
              aria-label={isPlaying ? "Pause episode" : "Play episode"}
            >
              {isPlaying ? (
                <PauseIcon className="size-4" />
              ) : (
                <PlayIcon className="size-4" />
              )}
            </button>
            <span className="w-10 shrink-0 text-right text-xs tabular-nums text-content-2">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progress}
              onChange={handleSeek}
              className="h-1 flex-1 cursor-pointer accent-accent-1"
              aria-label="Seek audio"
            />
            <span className="w-10 shrink-0 text-xs tabular-nums text-content-2">
              {formatTime(audioDuration)}
            </span>
          </div>
          {/* preload="none" so we don't download audio until the user presses play */}
          <audio ref={audioRef} src={episode.audioUrl} preload="none" />
        </div>
      </div>
    </article>
  );
}
