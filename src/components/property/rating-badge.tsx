"use client";

import { Star } from "lucide-react";

/**
 * Small "★ 4.7 / 5 | 5 Reviews" badge for the property header, computed live
 * from the reviews already stored per property (see MOCK_PROPERTIES).
 *
 * Clicking it scrolls to the reviews section. That section (property-reviews.tsx)
 * doesn't carry an id, so — same trick PropertySectionNav already uses on this
 * page — we find it by its heading text ("What Guests Say") rather than
 * threading an id/ref through the tree just for this one link.
 */

interface Review {
  rating: number;
}

interface RatingBadgeProps {
  reviews: Review[];
}

const HEADER_OFFSET = 104;

export function RatingBadge({ reviews }: RatingBadgeProps) {
  if (!reviews || reviews.length === 0) return null;

  const avg = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
  // Round to 1 decimal, but don't print a trailing ".0" as "5.0" if it reads
  // cleaner as "5" — reviews here are small integer ratings, so this mostly
  // matters for the all-5-star case.
  const rounded = Math.round(avg * 10) / 10;

  const scrollToReviews = () => {
    const headings = Array.from(document.querySelectorAll("h2"));
    const target = headings.find((h) => {
      const txt = (h.textContent || "").trim().toLowerCase();
      return txt.includes("what guests say") || txt.includes("guest experiences");
    });
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToReviews}
      className="inline-flex items-center gap-1.5 mt-2 text-sm text-stayra-charcoal hover:text-stayra-gold transition-colors cursor-pointer"
    >
      <Star className="h-4 w-4 fill-stayra-gold text-stayra-gold" />
      <span className="font-bold">{rounded}</span>
      <span className="text-gray-400">/ 5</span>
      <span className="text-gray-300">|</span>
      <span className="underline underline-offset-2 decoration-gray-300">
        {reviews.length} {reviews.length === 1 ? "Review" : "Reviews"}
      </span>
    </button>
  );
}
