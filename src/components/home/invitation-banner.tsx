import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Full-width clickable banner sitting under the property grid.
 * The headline is baked into the artwork, so nothing is overlaid on top of it —
 * only a caption and CTA in the lower left, clear of the subject.
 *
 * On mobile the image now sits at its own ~16:9 ratio (see below), which is
 * shorter than the old fixed-height band and leaves less room to overlay text
 * without colliding with the baked-in "THE INVITATION" headline. Rather than
 * risk that overlap, the caption and CTA move below the image on mobile —
 * still reads as one card, just not layered on the artwork. Desktop keeps the
 * original overlay treatment, since the wider frame there gives it room.
 */
export function InvitationBanner() {
    return (
        <section className="bg-stayra-ivory">
            <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <Link
                    href="/properties/kankas-house"
                    aria-label="The Invitation — view Kankas House"
                    className="group block rounded-xl md:rounded-2xl overflow-hidden bg-stayra-charcoal focus:outline-none focus-visible:ring-2 focus-visible:ring-stayra-gold focus-visible:ring-offset-2"
                >
                    <div className="relative overflow-hidden">
                        <img
                            src="/the-invitation.jpg"
                            alt="A guest reading with a glass of wine in the garden at Kankas House, Jaipur"
                            loading="lazy"
                            // The artwork's own aspect ratio (~1.79:1) is essentially 16:9, so the
                            // container matches that on every breakpoint instead of forcing a fixed
                            // mobile height — the previous h-[46vh] band, paired with an off-center
                            // crop to compensate, was cutting the left half of the baked-in
                            // "THE INVITATION" headline clean off on phones.
                            className="w-full aspect-[16/9] object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
                        />

                        {/* Desktop-only scrim + overlaid caption — the wider frame here leaves
                            clear space below the headline for it. */}
                        <div className="hidden md:block absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/25 to-transparent pointer-events-none" />
                        <div className="hidden md:flex absolute left-10 right-10 bottom-9 items-end justify-between gap-4">
                            <div>
                                <p className="text-xs uppercase tracking-[0.28em] text-white/70 mb-2">
                                    Kankas House · Delhi Road, Jaipur
                                </p>
                                <p className="font-serif text-2xl text-white max-w-md leading-snug">
                                    Four bedrooms, a private pool and a chef who works to your hours.
                                </p>
                            </div>

                            <span className="inline-flex items-center gap-2 bg-white/95 text-stayra-charcoal px-5 py-3 text-xs uppercase tracking-[0.18em] font-bold transition-colors group-hover:bg-white">
                                View the villa
                                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </div>
                    </div>

                    {/* Mobile-only caption, below the image rather than on top of it. */}
                    <div className="md:hidden px-5 py-5 flex flex-wrap items-end justify-between gap-4">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.28em] text-white/60 mb-2">
                                Kankas House · Delhi Road, Jaipur
                            </p>
                            <p className="font-serif text-lg text-white max-w-md leading-snug">
                                Four bedrooms, a private pool and a chef who works to your hours.
                            </p>
                        </div>

                        <span className="inline-flex items-center gap-2 bg-white/95 text-stayra-charcoal px-4 py-2.5 text-[10px] uppercase tracking-[0.18em] font-bold">
                            View the villa
                            <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                    </div>
                </Link>
            </div>
        </section>
    );
}
