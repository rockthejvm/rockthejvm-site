import type { PodcastEpisode } from "@/types/PodcastEpisode";
import { formatDate, formatDuration } from "@/utils/podcastFormatter";
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

interface Props {
  episode: PodcastEpisode;
}

export default function PodcastCard({ episode }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioDuration, setAudioDuration] = useState(0);
  const [playError, setPlayError] = useState(false);
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

  const handlePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    setPlayError(false);
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setPlayError(true);
      }
    }
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
          {playError && (
            <p className="mt-1 text-xs text-red-500" role="alert">
              Unable to play audio. Please try again.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
