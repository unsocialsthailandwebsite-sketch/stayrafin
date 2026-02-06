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
        <div className="relative h-[60vh] md:h-auto md:aspect-[16/9] w-full bg-black overflow-hidden group">
            {/* Banner Slider */}
            <div className="relative h-full w-full">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentImage}
                        src={images[currentImage]}
                        alt={`Property View ${currentImage + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 pointer-events-none" />

                {/* Navigation Arrows */}
                <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white/20 transition-all opacity-0 group-hover:opacity-100"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                    {images.slice(0, 4).map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentImage(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${currentImage === idx ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                                }`}
                        />
                    ))}
                </div>

                {/* Fullscreen Trigger */}
                <Button
                    variant="outline"
                    className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                    onClick={() => openLightbox(currentImage)}
                >
                    View All Photos
                </Button>
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
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
                            {currentImage + 1} / {images.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
