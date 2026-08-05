import type { MetadataRoute } from "next";
import { client } from "@/sanity/client";
import { blogPosts } from "@/data/blog-data";

import { SITE_URL } from "@/lib/site";

const BASE = SITE_URL;

/**
 * Slugs that must never be published, regardless of what the CMS still returns.
 * The Kukas Villa was offloaded and is no longer represented by Stayra.
 */
const DELISTED_SLUGS = new Set(["the-kukas-villa"]);

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        { url: `${BASE}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
        { url: `${BASE}/properties`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
        { url: `${BASE}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE}/blogs`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
        { url: `${BASE}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${BASE}/partner-with-us`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
        { url: `${BASE}/collaborate-with-us`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
        { url: `${BASE}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
        { url: `${BASE}/luxury-villas-jaipur`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
        { url: `${BASE}/farm-stays-near-jaipur`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE}/heritage-haveli-stays-jaipur`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE}/celebrations-in-jaipur`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE}/family-getaways-near-jaipur`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${BASE}/book-direct`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${BASE}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
        { url: `${BASE}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    ];

    // Property pages (Sanity + guaranteed fallbacks)
    let propertySlugs = ["choti-haveli", "kankas-house"];
    try {
        const fetched = await client.fetch<{ slug: { current: string } }[]>(
            `*[_type == "property"]{ slug }`
        );
        propertySlugs = Array.from(
            new Set([...fetched.map((p) => p.slug.current), ...propertySlugs])
        );
    } catch {
        // fall back to the defaults above
    }

    const propertyRoutes: MetadataRoute.Sitemap = propertySlugs
        .filter((slug) => !DELISTED_SLUGS.has(slug))
        .map((slug) => ({
            url: `${BASE}/properties/${slug}`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.9,
        }));

    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${BASE}/blogs/${post.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticRoutes, ...propertyRoutes, ...blogRoutes];
}
