"use client";

import { useEffect } from "react";
import Script from "next/script";

/**
 * Renders a grid of real Instagram posts/reels using Instagram's official
 * blockquote embed markup. Instagram's own embed.js script scans the page
 * for ".instagram-media" blocks and swaps each one for the actual embedded
 * player — we just need the script loaded, and to re-run it whenever the
 * list of videos changes (e.g. after client-side navigation between
 * property pages, when embed.js may already be cached from a prior visit).
 *
 * Sizing: Instagram's embed spec enforces a 326px minimum width, so that's
 * the floor here — cards target 340px instead of Instagram's near-full-width
 * default, for a tighter, gallery-style grid. Instagram's own iframe content
 * (header, caption, like/comment row) can't be restyled since it's
 * cross-origin — the outer card wrapper below is what gives it a clean,
 * on-brand frame (border, radius, shadow) instead of Instagram's default look.
 *
 * Autoplay: the official embed does not support it — that's an Instagram
 * platform restriction on the widget itself, not something this component
 * can work around. Visitors see a static preview and click through to play.
 */

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

export type InstagramVideo = { permalink: string };

interface InstagramVideosProps {
  videos: InstagramVideo[];
  heading: string;
  subheading?: string;
}

export function InstagramVideos({ videos, heading, subheading }: InstagramVideosProps) {
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, [videos]);

  if (videos.length === 0) return null;

  return (
    <section className="py-12 border-t border-gray-100">
      <h2 className="font-serif text-3xl text-stayra-charcoal mb-2 font-bold">{heading}</h2>
      {subheading && <p className="text-gray-500 mb-10">{subheading}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
        {videos.map((v) => (
          <div
            key={v.permalink}
            className="w-full max-w-[340px] rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white"
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={v.permalink}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: 0,
                boxShadow: "none",
                margin: 0,
                maxWidth: "340px",
                minWidth: "326px",
                padding: 0,
                width: "100%",
              }}
            />
          </div>
        ))}
      </div>

      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds.process()}
      />
    </section>
  );
}
