"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PropertyCardProps {
    property: {
        id: string;
        title: string;
        location: string;
        slug: string;
        images: string[];
        specs: string;
        tagline: string;
    };
    index: number;
}

export function PropertyCard({ property, index }: PropertyCardProps) {
    const [currentImage, setCurrentImage] = useState(0);
    // Limit to first 8 images for the card carousel to prevent dot overflow and performance issues
    const displayImages = property.images.slice(0, 8);

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImage((prev) => (prev + 1) % displayImages.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentImage((prev) => (prev - 1 + displayImages.length) % displayImages.length);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group block relative"
        >
            <div className="relative overflow-hidden aspect-[4/3] mb-6 shadow-lg rounded-2xl group-hover:shadow-2xl transition-all duration-500 ease-out">
                {/* Image Carousel */}
                <Link href={`/properties/${property.slug}`} className="block w-full h-full relative">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentImage}
                            src={displayImages[currentImage]}
                            alt={`${property.title} - View ${currentImage + 1}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </Link>

                {/* Navigation Arrows - Visible on Group Hover */}
                {displayImages.length > 1 && (
                    <>
                        <button
                            onClick={prevImage}
                            className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-white/30 backdrop-blur-md border border-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-105 z-20 text-white hover:text-stayra-charcoal shadow-sm"
                            aria-label="Previous image"
                        >
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                            onClick={nextImage}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-white/30 backdrop-blur-md border border-white/50 rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:scale-105 z-20 text-white hover:text-stayra-charcoal shadow-sm"
                            aria-label="Next image"
                        >
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </>
                )}

                {/* Dots indicator */}
                {displayImages.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {displayImages.map((_, idx) => (
                            <div
                                key={idx}
                                className={`h-1.5 rounded-full shadow-sm transition-all duration-300 ${idx === currentImage ? "w-6 bg-white" : "w-1.5 bg-white/60 hover:bg-white/80"
                                    }`}
                            />
                        ))}
                    </div>
                )}
            </div>

            {/* Content Body - Also clickable via Link wrapping whole logic or just title? 
                Structure: The Link wrapper for standard navigation is usually best on Title/Container.
                Here I wrapped the Image. Let's wrap the Text too or provide a 'View Details' link.
            */}
            <Link href={`/properties/${property.slug}`} className="block text-center md:text-left">
                <p className="font-sans text-xs tracking-[0.2em] text-stayra-gold uppercase mb-2">
                    {property.tagline}
                </p>
                <h3 className="font-serif text-3xl text-stayra-charcoal mb-2 group-hover:text-stayra-gold transition-colors">
                    {property.title}
                </h3>
                <p className="text-gray-500 font-light mb-4 text-sm">
                    {property.location}
                </p>
                <div className="inline-flex items-center text-sm font-medium text-stayra-charcoal group-hover:text-stayra-gold transition-colors">
                    View Details <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            </Link>
        </motion.div>
    );
}
