"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Grid3x3 } from "lucide-react";
import { PropertySectionNav } from "@/components/property/property-section-nav";
import { PropertyFactsBar } from "@/components/property/property-facts-bar";

interface HeroGalleryProps {
    images: string[];
    /** Used for descriptive alt text — generic alts are invisible to image search. */
    propertyName?: string;
}

export function HeroGallery({ images, propertyName = "Stayra luxury villa in Jaipur" }: HeroGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [heroIndex, setHeroIndex] = useState(0);

    const total = images.length;

    const openLightbox = (index: number) => {
        setCurrentImage(index);
        setLightboxOpen(true);
    };

    const nextImage = () => setCurrentImage((p) => (p + 1) % total);
    const prevImage = () => setCurrentImage((p) => (p - 1 + total) % total);

    const nextHero = () => setHeroIndex((p) => (p + 1) % total);
    const prevHero = () => setHeroIndex((p) => (p - 1 + total) % total);

    // Four tiles beside the hero, taken from the images after the current one
    const tiles = Array.from({ length: 4 }, (_, i) => (heroIndex + i + 1) % total);
    const remaining = Math.max(total - 5, 0);

    // Keyboard control while the lightbox is open
    useEffect(() => {
        if (!lightboxOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightboxOpen(false);
            if (e.key === "ArrowRight") nextImage();
            if (e.key === "ArrowLeft") prevImage();
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [lightboxOpen, total]);

    // Guard placed after all hooks so hook order stays stable.
    if (total === 0) return null;

    return (
        <div className="max-w-7xl mx-auto px-4 pt-5">
            {/* Mosaic */}
            <div className="grid grid-cols-1 md:grid-cols-[1.55fr_1fr] gap-2.5 md:h-[540px]">
                {/* Hero image */}
                <div className="relative group rounded-xl overflow-hidden bg-gray-100 h-[52vh] md:h-full">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={heroIndex}
                            src={images[heroIndex]}
                            alt={`${propertyName} — photo ${heroIndex + 1} of ${total}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            onClick={() => openLightbox(heroIndex)}
                            className="w-full h-full object-cover cursor-pointer"
                        />
                    </AnimatePresence>

                    {total > 1 && (
                        <>
                            <button
                                onClick={prevHero}
                                aria-label="Previous photo"
                                className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center bg-white/85 backdrop-blur rounded-full text-stayra-charcoal shadow-md hover:bg-white transition-all md:opacity-0 md:group-hover:opacity-100"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                onClick={nextHero}
                                aria-label="Next photo"
                                className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 grid place-items-center bg-white/85 backdrop-blur rounded-full text-stayra-charcoal shadow-md hover:bg-white transition-all md:opacity-0 md:group-hover:opacity-100"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </>
                    )}

                    {/* Mobile: counter + view all */}
                    <div className="md:hidden absolute bottom-3 left-3 text-xs font-medium text-white bg-black/50 backdrop-blur px-2.5 py-1 rounded-full">
                        {heroIndex + 1} / {total}
                    </div>
                    <button
                        onClick={() => openLightbox(heroIndex)}
                        className="md:hidden absolute bottom-3 right-3 text-xs font-bold text-stayra-charcoal bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow flex items-center gap-1.5"
                    >
                        <Grid3x3 className="h-3 w-3" />
                        All {total} photos
                    </button>
                </div>

                {/* 2 x 2 tiles — desktop only */}
                <div className="hidden md:grid grid-cols-2 grid-rows-2 gap-2.5 h-full">
                    {tiles.map((imgIdx, i) => {
                        const isLast = i === 3;
                        return (
                            <button
                                key={`${imgIdx}-${i}`}
                                onClick={() => (isLast && remaining > 0 ? openLightbox(imgIdx) : setHeroIndex(imgIdx))}
                                className="relative rounded-xl overflow-hidden bg-gray-100 group/tile"
                                aria-label={isLast && remaining > 0 ? `View all ${total} photos` : `Show photo ${imgIdx + 1}`}
                            >
                                <img
                                    src={images[imgIdx]}
                                    alt={`${propertyName} — photo ${imgIdx + 1} of ${total}`}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover/tile:scale-[1.04]"
                                />
                                {isLast && remaining > 0 && (
                                    <span className="absolute inset-0 bg-black/45 flex flex-col items-center justify-center text-white">
                                        <span className="font-serif text-3xl font-bold leading-none">+{remaining}</span>
                                        <span className="text-xs tracking-wide mt-1">More Photos</span>
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Desktop: view all */}
            <div className="hidden md:flex justify-end mt-3">
                <button
                    onClick={() => openLightbox(heroIndex)}
                    className="inline-flex items-center gap-2 border border-stayra-green text-stayra-green hover:bg-stayra-green hover:text-white transition-colors uppercase text-[11px] tracking-widest font-bold px-5 py-2.5"
                >
                    <Grid3x3 className="h-3.5 w-3.5" />
                    View all {total} photos
                </button>
            </div>

            {/* In-page tab nav — sits directly under the gallery */}
            <PropertySectionNav />

            {/* Facts + amenity chips — portals itself under the property title */}
            <PropertyFactsBar />

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                    >
                        <button
                            onClick={() => setLightboxOpen(false)}
                            aria-label="Close gallery"
                            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white z-10"
                        >
                            <X className="h-8 w-8" />
                        </button>
                        <button
                            onClick={prevImage}
                            aria-label="Previous photo"
                            className="absolute left-4 p-2 text-white/80 hover:text-white z-10"
                        >
                            <ChevronLeft className="h-8 w-8" />
                        </button>
                        <button
                            onClick={nextImage}
                            aria-label="Next photo"
                            className="absolute right-4 p-2 text-white/80 hover:text-white z-10"
                        >
                            <ChevronRight className="h-8 w-8" />
                        </button>

                        <motion.img
                            key={currentImage}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            src={images[currentImage]}
                            alt={`${propertyName} — enlarged photo ${currentImage + 1}`}
                            className="max-h-screen max-w-full object-contain"
                        />
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
                            {currentImage + 1} / {total}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
