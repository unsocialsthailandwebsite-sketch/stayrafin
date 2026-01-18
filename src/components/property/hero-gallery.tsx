"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroGalleryProps {
    images: string[];
}

export function HeroGallery({ images }: HeroGalleryProps) {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const openLightbox = (index: number) => {
        setCurrentImage(index);
        setLightboxOpen(true);
    };

    const nextImage = () => setCurrentImage((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImage((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="relative h-[60vh] md:h-[80vh] w-full bg-black">
            {/* Desktop Grid Layout (1 Large, 4 Small) */}
            <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-2 h-full p-2">
                <div
                    className="col-span-2 row-span-2 relative cursor-pointer group"
                    onClick={() => openLightbox(0)}
                >
                    <img src={images[0]} alt="Property Main" className="w-full h-full object-cover transition-opacity group-hover:opacity-90" />
                </div>
                {images.slice(1, 5).map((img, idx) => (
                    <div
                        key={idx}
                        className="relative cursor-pointer group"
                        onClick={() => openLightbox(idx + 1)}
                    >
                        <img src={img} alt={`Property View ${idx + 2}`} className="w-full h-full object-cover transition-opacity group-hover:opacity-90" />
                        {idx === 3 && images.length > 5 && (
                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-medium text-lg">
                                +{images.length - 5} photos
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Mobile Horizontal Scroll */}
            <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory h-full hide-scrollbar">
                {images.map((img, idx) => (
                    <div key={idx} className="snap-center min-w-full h-full relative" onClick={() => openLightbox(idx)}>
                        <img src={img} alt={`Property View ${idx + 1}`} className="w-full h-full object-cover" />
                    </div>
                ))}
                {/* Scroll hint overlay */}
                <div className="absolute bottom-4 right-4 bg-black/60 text-white text-xs px-2 py-1 rounded-full md:hidden">
                    {currentImage + 1} / {images.length}
                </div>
            </div>

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

                        <motion.img
                            key={currentImage}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            src={images[currentImage]}
                            alt="Fullscreen view"
                            className="max-h-screen max-w-full object-contain"
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
