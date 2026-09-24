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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {videos.map((v) => (
          <div key={v.permalink} className="flex justify-center">
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={v.permalink}
              data-instgrm-version="14"
              style={{
                background: "#FFF",
                border: 0,
                borderRadius: "8px",
                boxShadow:
                  "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                margin: 0,
                maxWidth: "540px",
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
