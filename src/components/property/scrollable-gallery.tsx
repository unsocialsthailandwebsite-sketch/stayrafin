"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollableGalleryProps {
    images: string[];
    title?: string;
}

export function ScrollableGallery({ images, title = "Gallery" }: ScrollableGalleryProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return;
        const { current } = scrollRef;
        const scrollAmount = current.clientWidth * 0.8;
        current.scrollBy({
            left: direction === "right" ? scrollAmount : -scrollAmount,
            behavior: "smooth",
        });
    };

    const nextImage = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((prev) => (prev! + 1) % images.length);
    };

    const prevImage = () => {
        if (lightboxIndex === null) return;
        setLightboxIndex((prev) => (prev! - 1 + images.length) % images.length);
    };

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="font-serif text-3xl text-stayra-charcoal">{title}</h2>
                    <div className="flex gap-2">
                        <button
                            onClick={() => scroll("left")}
                            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 text-gray-600" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5 text-gray-600" />
                        </button>
                    </div>
                </div>

                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
                >
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            onClick={() => setLightboxIndex(idx)}
                            className="flex-none w-[300px] md:w-[400px] aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group snap-center"
                        >
                            <img
                                src={img}
                                alt={`Gallery image ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    >
                        <button
                            onClick={() => setLightboxIndex(null)}
                            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white"
                        >
                            <X className="h-8 w-8" />
                        </button>
                        <button
                            onClick={prevImage}
                            className="absolute left-4 p-2 text-white/80 hover:text-white"
                        >
                            <ChevronLeft className="h-8 w-8" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-4 p-2 text-white/80 hover:text-white"
                        >
                            <ChevronRight className="h-8 w-8" />
                        </button>

                        <div className="relative max-h-screen max-w-full p-4">
                            <motion.img
                                key={lightboxIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                src={images[lightboxIndex]}
                                alt="Fullscreen view"
                                className="max-h-[90vh] max-w-full object-contain mx-auto"
                            />
                            <div className="absolute bottom-[-10px] left-0 right-0 text-center text-white/50 text-sm">
                                {lightboxIndex + 1} / {images.length}
                            </div>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
