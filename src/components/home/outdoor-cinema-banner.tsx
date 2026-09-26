/**
 * Full-width lifestyle banner sitting between the "Your Trusted Stay Partner"
 * pillars and the "Our Curated Collection" property grid.
 *
 * Deliberately kept identical across breakpoints (same aspect ratio, same
 * caption placement) rather than the split desktop-overlay / mobile-stacked
 * treatment used elsewhere on the homepage — the ask here was for one
 * consistent look on mobile and desktop, not two different ones.
 */
export function OutdoorCinemaBanner() {
  return (
    <section className="bg-stayra-ivory">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="rounded-xl md:rounded-2xl overflow-hidden bg-stayra-charcoal shadow-lg">
          <img
            src="/outdoor-cinema-night.jpg"
            alt="A couple watching an open-air movie over a private candlelit dinner on the lawn, with a chef grilling nearby at a Stayra villa"
            loading="lazy"
            className="w-full aspect-[1080/566] object-cover object-center"
          />
          <div className="px-5 py-6 md:px-10 md:py-8 text-center">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-stayra-gold font-bold mb-2">
              The Stayra Evening
            </p>
            <p className="font-serif text-lg md:text-2xl text-white max-w-xl mx-auto leading-snug">
              A private chef, an open-air screening, and a lawn that turns into
              your own cinema after dark.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
