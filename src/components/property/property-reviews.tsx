"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Review {
    name: string;
    location: string;
    rating: number;
    text: string;
    date: string;
}

interface PropertyReviewsProps {
    reviews?: Review[];
}

export function PropertyReviews({ reviews = [] }: PropertyReviewsProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    if (!reviews || reviews.length === 0) return null;

    const shouldScroll = reviews.length > 3;

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 350;
            const container = scrollContainerRef.current;
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="py-16 border-t border-gray-100 bg-stayra-ivory/10">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <span className="text-stayra-gold font-sans text-xs tracking-[0.2em] uppercase font-semibold">
                            Guest Experiences
                        </span>
                        <h2 className="font-serif text-3xl md:text-4xl text-stayra-charcoal mt-2">
                            What Guests Say
                        </h2>
                    </div>

                    {shouldScroll && (
                        <div className="flex gap-2">
                            <button
                                onClick={() => scroll("left")}
                                className="p-3 bg-white border border-gray-200 hover:border-stayra-gold rounded-full transition-all hover:scale-105 shadow-sm text-stayra-charcoal hover:text-stayra-gold"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={() => scroll("right")}
                                className="p-3 bg-white border border-gray-200 hover:border-stayra-gold rounded-full transition-all hover:scale-105 shadow-sm text-stayra-charcoal hover:text-stayra-gold"
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    )}
                </div>

                {/* Reviews Container */}
                <div
                    ref={scrollContainerRef}
                    className={`
                        ${shouldScroll 
                            ? "flex overflow-x-auto gap-6 pb-6 pt-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-stayra-gold/20" 
                            : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        }
                    `}
                    style={{ scrollbarWidth: "thin" }}
                >
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className={`
                                bg-white p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between snap-start
                                ${shouldScroll ? "flex-shrink-0 w-[290px] sm:w-[360px]" : "w-full"}
                            `}
                        >
                            <div>
                                {/* Rating */}
                                <div className="flex gap-1 text-stayra-gold mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <Quote className="w-8 h-8 text-stayra-gold/10 mb-2" />
                                <p className="text-gray-600 font-light italic leading-relaxed text-sm mb-6">
                                    "{review.text}"
                                </p>
                            </div>

                            <div className="border-t border-gray-50 pt-4 flex justify-between items-center">
                                <div>
                                    <h4 className="font-serif text-stayra-charcoal font-bold text-sm">
                                        {review.name}
                                    </h4>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                                        {review.location}
                                    </p>
                                </div>
                                <span className="text-[10px] text-gray-400 font-mono">
                                    {review.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
