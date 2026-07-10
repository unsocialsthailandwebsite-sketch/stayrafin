import type { MetadataRoute } from "next";

// NOTE: Cloudflare's "Block AI bots" feature overrides this file with a
// managed robots.txt. Turn it off in Cloudflare (Security -> Bots) for
// this configuration to take effect.
export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin", "/api"],
            },
        ],
        sitemap: "https://stayra.co/sitemap.xml",
    };
}
