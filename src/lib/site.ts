/**
 * Single source of truth for the canonical site origin.
 *
 * IMPORTANT: the apex domain (stayra.co) 301-redirects to www, so every
 * canonical, sitemap entry and JSON-LD `url` must use the www host.
 * Pointing canonicals at a redirecting URL wastes crawl budget and splits
 * indexing signals between the two hosts.
 */
export const SITE_URL = "https://www.stayra.co";

/** Absolute URL helper: absoluteUrl("/properties") -> "https://www.stayra.co/properties" */
export function absoluteUrl(path = "/") {
    return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
