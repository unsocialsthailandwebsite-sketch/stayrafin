"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX, Instagram } from "lucide-react";

/**
 * Self-hosted, autoplay-muted-loop video grid.
 *
 * This replaces an earlier version built on Instagram's official blockquote
 * embed. That embed can't autoplay — it's a restriction on the widget itself,
 * not something we could configure around — so once the real clips were
 * available we switched to native <video> tags, which we fully control:
 * small cards, muted autoplay, loop, and a tap-to-unmute toggle, the same
 * pattern Instagram/TikTok use for feed previews.
 *
 * Videos are played/paused via IntersectionObserver so only the ones
 * actually on screen are decoding at once — useful now that there can be
 * several small clips on one page.
 */

export type PropertyVideoItem = {
  /** Path to the (already web-optimized) mp4, e.g. "/videos/kankas-house/foo.mp4". */
  src: string;
  /** Poster frame shown before playback starts. */
  poster: string;
  /** Optional link back to the original Instagram post. */
  instagramUrl?: string;
};

interface PropertyVideosProps {
  videos: PropertyVideoItem[];
  heading: string;
  subheading?: string;
}

export function PropertyVideos({ videos, heading, subheading }: PropertyVideosProps) {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [mutedState, setMutedState] = useState<boolean[]>(() => videos.map(() => true));

  useEffect(() => {
    const els = videoRefs.current.filter(Boolean) as HTMLVideoElement[];
    if (els.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            el.play().catch(() => {
              // Autoplay can be blocked before the first user gesture on some
              // browsers — harmless, the poster frame just stays visible.
            });
          } else {
            el.pause();
          }
        });
      },
      { threshold: 0.4 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [videos]);

  if (videos.length === 0) return null;

  const toggleMute = (i: number) => {
    const el = videoRefs.current[i];
    if (!el) return;
    el.muted = !el.muted;
    setMutedState((prev) => prev.map((m, idx) => (idx === i ? el.muted : m)));
  };

  return (
    <section className="py-12 border-t border-gray-100">
      <h2 className="font-serif text-3xl text-stayra-charcoal mb-2 font-bold">{heading}</h2>
      {subheading && <p className="text-gray-500 mb-10">{subheading}</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
        {videos.map((v, i) => (
          <div
            key={v.src}
            className="group relative aspect-[9/16] w-full max-w-[220px] mx-auto rounded-2xl overflow-hidden bg-black border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              className="h-full w-full object-cover"
              src={v.src}
              poster={v.poster}
              muted
              loop
              playsInline
              preload="metadata"
            />

            <button
              type="button"
              onClick={() => toggleMute(i)}
              aria-label={mutedState[i] ? "Unmute video" : "Mute video"}
              className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              {mutedState[i] ? (
                <VolumeX className="h-3.5 w-3.5" />
              ) : (
                <Volume2 className="h-3.5 w-3.5" />
              )}
            </button>

            {v.instagramUrl && (
              <a
                href={v.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on Instagram"
                className="absolute top-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Instagram className="h-3.5 w-3.5" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
