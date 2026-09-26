import Link from "next/link";

/**
 * Full-width lifestyle banner sitting between the "Your Trusted Stay Partner"
 * pillars and the "Our Curated Collection" property grid.
 *
 * Deliberately kept identical across breakpoints (same aspect ratio, same
 * caption placement) rather than the split desktop-overlay / mobile-stacked
 * treatment used elsewhere on the homepage — the ask here was for one
 * consistent look on mobile and desktop, not two different ones.
 *
 * Clickable through to Kankas House — the villa this evening was shot at —
 * same pattern as the Invitation banner further down the page.
 */
export function OutdoorCinemaBanner() {
  return (
    <section className="bg-stayra-ivory">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <Link
          href="/properties/kankas-house"
          aria-label="The Stayra Evening — view Kankas House"
          className="group block rounded-xl md:rounded-2xl overflow-hidden bg-stayra-charcoal shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-stayra-gold focus-visible:ring-offset-2"
        >
          <img
            src="/outdoor-cinema-night.jpg"
            alt="A couple watching an open-air movie over a private candlelit dinner on the lawn, with a chef grilling nearby at Kankas House"
            loading="lazy"
            className="w-full aspect-[1080/566] object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
          <div className="px-5 py-6 md:px-10 md:py-8 text-center">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-stayra-gold font-bold mb-2">
              The Stayra Evening · Kankas House
            </p>
            <p className="font-serif text-lg md:text-2xl text-white max-w-xl mx-auto leading-snug">
              A private chef, an open-air screening, and a lawn that turns into
              your own cinema after dark.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
}
