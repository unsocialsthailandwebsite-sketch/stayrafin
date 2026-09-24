"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  heading?: string;
  subheading?: string;
}

// Base layer behind the hero video. If the video is still loading, fails, or the
// browser blocks autoplay, these keep the hero from falling back to flat black.
// On mobile they also show through the video's letterbox bars (see below), so
// the screen is never empty even where the landscape footage doesn't reach.
const SLIDE_IMAGES = [
  // Starting with Kankas House twilight facade shot
  "https://a0.muscache.com/im/pictures/hosting/Hosting-1492613314913436518/original/4f523614-7a53-496a-abd3-08d190cd3147.jpeg",
  // Choti Haveli main exterior
  "https://cdn.sanity.io/images/1tjvajrl/production/e15abc6a1533ef147337803f1e9b45b6bae51980-1280x960.jpg",
  // Kankas House living room
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/75712882-d545-4300-b81d-3712673047b6.jpeg",
  // Choti Haveli heritage bedroom
  "https://cdn.sanity.io/images/1tjvajrl/production/4dbb06866de0df7ad6825ef3b32e558185cda76a-1279x960.heif",
  // Kankas House sprawling green lawn
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/9276b2bf-52b6-43a2-8b40-b617c5347176.jpeg",
  // Choti Haveli courtyard dining
  "https://cdn.sanity.io/images/1tjvajrl/production/cb2ef8c7eb4ed5f05fbb700ddddb35cc043b1acc-1279x960.jpg",
  // Kankas House top balcony view
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/73653bf7-e972-44a4-9924-d0b47f098280.jpeg",
  // Choti Haveli heritage carvings
  "https://cdn.sanity.io/images/1tjvajrl/production/a8f8d1dbdbd97b85486018b681a91b9a89c158b6-1279x960.jpg",
  // Kankas House bedroom
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/1c2a9fe1-ce5a-4d87-a19e-92096ddd44d6.jpeg",
  // Choti Haveli outdoor seating twilight
  "https://cdn.sanity.io/images/1tjvajrl/production/f2a0fd7eb023e7ebf81ce4fca03f86cdcab3f8d8-1280x960.heif"
];

export function HeroSection({ heading, subheading }: HeroSectionProps) {
  const ref = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  /**
   * React does not reliably write the `muted` attribute to the DOM, and iOS
   * refuses to autoplay anything it considers unmuted — which is what puts the
   * native play button on screen. Set the property directly before playing,
   * then retry on the events where mobile browsers tend to defer playback.
   */
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = () => {
      v.muted = true;
      v.defaultMuted = true;
      v.volume = 0;
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(() => { });
    };

    tryPlay();
    v.addEventListener("loadedmetadata", tryPlay);
    v.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);
    // Last resort: the first touch or scroll counts as a user gesture.
    window.addEventListener("touchstart", tryPlay, { once: true, passive: true });
    window.addEventListener("scroll", tryPlay, { once: true, passive: true });

    return () => {
      v.removeEventListener("loadedmetadata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
    };
  }, []);

  return (
    <section ref={ref} className="relative w-full overflow-hidden flex items-center justify-center aspect-[3/2] md:aspect-auto md:min-h-[100dvh]">
      {/* Background (Parallax) */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        {/* Fallback image layer, desktop only. Desktop keeps the full-bleed
            object-cover video, so this only shows for the instant before the
            video has a frame ready — it's fully hidden underneath otherwise.
            On mobile the video is letterboxed (object-contain, since the
            footage is landscape and phone screens are portrait) and a solid
            backdrop is used instead (below), so nothing but the video itself
            is ever visible on phones — no second photo mixed in. */}
        <div className="absolute inset-0 hidden md:block">
          <AnimatePresence>
            <motion.img
              key={currentSlide}
              src={SLIDE_IMAGES[currentSlide]}
              alt="Stayra Curated Luxury Living"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Looping hero video. Muted + inline so mobile browsers allow autoplay.
            The footage is landscape (3:2). Rather than force it into a portrait
            phone viewport and either crop it or letterbox it, the section itself
            is now locked to a 3:2 band on mobile — so the video fills its
            container exactly, edge to edge, with nothing else around it. Desktop
            keeps the original full-bleed, full-viewport-height treatment. */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          disablePictureInPicture
          preload="auto"
          poster="/stayra-hero-poster.jpg"
          aria-hidden="true"
          tabIndex={-1}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none [&::-webkit-media-controls]:hidden [&::-webkit-media-controls-start-playback-button]:hidden"
        >
          <source src="/stayra-hero.mp4" type="video/mp4" />
        </video>

        {/* Light gradients — only needed on the full-height desktop treatment,
            where the header and scroll cue sit directly over the footage. On
            the short mobile band there's nothing overlaid on the video, so a
            scrim there would just dull a large share of a small banner. */}
        <div className="hidden md:block absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/45 to-transparent z-10 pointer-events-none" />
        <div className="hidden md:block absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/35 to-transparent z-10 pointer-events-none" />
      </motion.div>

      {/* Heading kept for search engines and screen readers, hidden visually so
          the footage carries the hero on its own. */}
      <h1 className="sr-only">
        {heading || "Luxury Villas & Heritage Stays in Jaipur"}
        {" — "}
        {subheading || "Experience the Art of Living — Jaipur's premier private villa collection"}
      </h1>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-3 md:bottom-12 left-1/2 -translate-x-1/2 z-20 text-white cursor-pointer"
        onClick={() => {
          document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <ChevronDown className="h-8 w-8 opacity-80" />
      </motion.div>
    </section >
  );
}
