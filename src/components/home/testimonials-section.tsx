"use client";

import { useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { MOCK_PROPERTIES } from "@/data/mock-properties";

export function TestimonialsSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Extract all reviews dynamically from mock properties
    const testimonials = Object.values(MOCK_PROPERTIES)
        .flatMap(prop => prop.reviews || [])
        .map((review, index) => ({
            id: index + 1,
            name: review.name,
            location: review.location,
            rating: review.rating,
            text: review.text,
            // Fallback avatar images for dynamic reviewers
            image: [
                "https://images.unsplash.com/photo-1623091410901-00e2d5b4396e?q=80&w=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
            ][index % 7]
        }));

    const shouldScroll = testimonials.length > 3;

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 380;
            const container = scrollContainerRef.current;
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    if (testimonials.length === 0) return null;

    return (
        <section className="py-24 bg-stayra-green text-white relative overflow-hidden">
            {/* Background Pattern Overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                    <div className="space-y-4">
                        <span className="text-stayra-gold font-sans text-xs tracking-[0.2em] uppercase font-semibold">Testimonials</span>
                        <h2 className="font-serif text-4xl md:text-5xl">What Guests Say</h2>
                    </div>

                    {shouldScroll && (
                        <div className="flex gap-2">
                            <button
                                onClick={() => scroll("left")}
                                className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-stayra-gold rounded-full transition-all hover:scale-105 shadow-sm text-white hover:text-stayra-gold"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="p-3 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-stayra-gold rounded-full transition-all hover:scale-105 shadow-sm text-white hover:text-stayra-gold"
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Testimonials List */}
                <div
                    ref={scrollContainerRef}
                    className={`
                        ${shouldScroll
                            ? "flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-none"
                            : "grid grid-cols-1 md:grid-cols-3 gap-8"
                        }
                    `}
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className={`
                                bg-white/5 backdrop-blur-sm p-8 border border-white/10 rounded-xl hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between snap-start
                                ${shouldScroll ? "flex-shrink-0 w-[290px] sm:w-[380px]" : "w-full"}
                            `}
                        >
                            <div>
                                <div className="flex gap-1 text-stayra-gold mb-6">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <Quote className="w-8 h-8 text-white/10 mb-4" />
                                <p className="text-white/80 font-sans leading-relaxed mb-8 min-h-[90px] text-sm">
                                    "{testimonial.text}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-stayra-gold"
                                />
                                <div>
                                    <h4 className="font-serif text-lg font-bold">{testimonial.name}</h4>
                                    <p className="text-[10px] uppercase tracking-widest text-white/50">{testimonial.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
