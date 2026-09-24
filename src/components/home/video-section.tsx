"use client";

import { useEffect, useRef } from "react";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  /**
   * Same autoplay-safe pattern as the top hero video (hero-section.tsx):
   * React doesn't reliably write the `muted` attribute to the DOM, and iOS
   * won't autoplay anything it considers unmuted. Set the property directly
   * and retry on the events mobile browsers tend to defer playback until.
   */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      v.muted = true;
      v.defaultMuted = true;
      v.volume = 0;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => {});
    };

    tryPlay();
    v.addEventListener("loadedmetadata", tryPlay);
    v.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);
    window.addEventListener("touchstart", tryPlay, { once: true, passive: true });
    window.addEventListener("scroll", tryPlay, { once: true, passive: true });

    return () => {
      v.removeEventListener("loadedmetadata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
    };
  }, []);

  return (
    <section className="relative min-h-[80vh] min-h-[600px] w-full overflow-hidden bg-[#1A3C34] flex items-center justify-center py-20">
      {/* Full-bleed background video, replacing the previous 5-photo collage. */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        preload="auto"
        poster="/videos/stayra-experience-poster.jpg"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 z-0 w-full h-full object-cover object-center pointer-events-none select-none [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-start-playback-button]:hidden"
      >
        <source src="/videos/stayra-experience.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
