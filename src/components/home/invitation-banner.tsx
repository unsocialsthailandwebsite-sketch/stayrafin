import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Full-width clickable banner sitting under the property grid.
 * The headline is baked into the artwork, so nothing is overlaid on top of it —
 * only a caption and CTA in the lower left, clear of the subject.
 */
export function InvitationBanner() {
    return (
        <section className="bg-stayra-ivory">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <Link
                    href="/properties/kankas-house"
                    aria-label="The Invitation — view Kankas House"
                    className="group block relative overflow-hidden rounded-xl md:rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-stayra-gold focus-visible:ring-offset-2"
                >
                    <img
                        src="/the-invitation.jpg"
                        alt="A guest reading with a glass of wine in the garden at Kankas House, Jaipur"
                        loading="lazy"
                        className="w-full h-[46vh] min-h-[280px] md:h-auto md:aspect-[16/9] object-cover object-[70%_center] md:object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                    />

                    {/* Legibility scrim for the caption only — kept off the artwork's own headline */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/25 to-transparent pointer-events-none" />

                    <div className="absolute left-5 right-5 bottom-5 md:left-10 md:bottom-9 flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-white/70 mb-2">
                                Kankas House · Delhi Road, Jaipur
                            </p>
                            <p className="font-serif text-lg md:text-2xl text-white max-w-md leading-snug">
                                Four bedrooms, a private pool and a chef who works to your hours.
                            </p>
                        </div>

                        <span className="inline-flex items-center gap-2 bg-white/95 text-stayra-charcoal px-5 py-3 text-[10px] md:text-xs uppercase tracking-[0.18em] font-bold transition-colors group-hover:bg-white">
                            View the villa
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </div>
                </Link>
            </div>
        </section>
    );
}
