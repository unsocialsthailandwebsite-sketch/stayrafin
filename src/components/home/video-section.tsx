"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

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

      {/* Blend overlay — same treatment the collage tiles used, so the video
          reads as background rather than foreground content. */}
      <div className="absolute inset-0 z-[1] bg-[#1A3C34]/30 mix-blend-multiply pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#1A3C34]/50 via-transparent to-[#1A3C34]/20 pointer-events-none" />

      {/* Central Experience Branding Card */}
      <div className="relative z-20 max-w-lg mx-4 py-8 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-[#1A3C34]/90 backdrop-blur-md border border-white/10 px-8 py-10 md:px-12 md:py-14 text-center shadow-[0_24px_50px_rgba(0,0,0,0.5)] relative pointer-events-auto"
        >
          <div className="absolute top-4 left-4 right-4 bottom-4 border border-stayra-gold/20 pointer-events-none" />
          <span className="text-stayra-gold text-xs uppercase tracking-[0.3em] font-bold mb-3 block">CURATED COLLECTIVE</span>
          <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 leading-tight">
            The Stayra Experience
          </h2>
          <p className="text-white/70 text-sm font-sans tracking-wide leading-relaxed">
            A seamless blend of heritage aesthetics, modern comforts, and personalized service in Jaipur.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
