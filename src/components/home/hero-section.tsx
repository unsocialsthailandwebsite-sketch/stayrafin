"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
    heading?: string;
    subheading?: string;
}

const SLIDE_IMAGES = [
    // Starting with Kankas House twilight facade shot
    "https://a0.muscache.com/im/pictures/hosting/Hosting-1492613314913436518/original/4f523614-7a53-496a-abd3-08d190cd3147.jpeg",
    // Choti Haveli main exterior
    "https://cdn.sanity.io/images/1tjvajrl/production/e15abc6a1533ef147337803f1e9b45b6bae51980-1280x960.jpg",
    // Kankas House living room
    "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/75712882-d545-4300-b81d-3712673047b6.jpeg",
    // Choti Haveli heritage bedroom
    "https://cdn.sanity.io/images/1tjvajrl/production/4dbb06866de0df7ad6825ef3b32e558185cda76a-1279x960.heif",
    // Kankas House sprawling green lawn
    "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/9276b2bf-52b6-43a2-8b40-b617c5347176.jpeg",
    // Choti Haveli courtyard dining
    "https://cdn.sanity.io/images/1tjvajrl/production/cb2ef8c7eb4ed5f05fbb700ddddb35cc043b1acc-1279x960.jpg",
    // Kankas House top balcony view
    "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/73653bf7-e972-44a4-9924-d0b47f098280.jpeg",
    // Choti Haveli heritage carvings
    "https://cdn.sanity.io/images/1tjvajrl/production/a8f8d1dbdbd97b85486018b681a91b9a89c158b6-1279x960.jpg",
    // Kankas House bedroom
    "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/1c2a9fe1-ce5a-4d87-a19e-92096ddd44d6.jpeg",
    // Choti Haveli outdoor seating twilight
    "https://cdn.sanity.io/images/1tjvajrl/production/f2a0fd7eb023e7ebf81ce4fca03f86cdcab3f8d8-1280x960.heif"
];

export function HeroSection({ heading, subheading }: HeroSectionProps) {
    const ref = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section ref={ref} className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
            {/* Background (Parallax Slideshow) */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/45 z-10" />
                <AnimatePresence>
                    <motion.img
                        key={currentSlide}
                        src={SLIDE_IMAGES[currentSlide]}
                        alt="Stayra Curated Luxury Living"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </AnimatePresence>
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                style={{ opacity }}
                className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
            >
                <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                    {heading || "Experience the Art of Living"}
                </h1>
                <p className="font-sans text-base md:text-xl tracking-wide text-white/90 mb-8 md:mb-10 max-w-2xl mx-auto drop-shadow-md">
                    {subheading || "Jaipur's Premier Luxury Rental Collection"}
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                        size="lg"
                        className="bg-white text-stayra-charcoal hover:bg-gray-100 px-6 py-6 md:px-8 text-xs md:text-sm tracking-[0.2em] font-bold shadow-xl hover:shadow-2xl transition-all"
                        onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        EXPLORE OUR COLLECTION
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white cursor-pointer"
                onClick={() => {
                    document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <ChevronDown className="h-8 w-8 opacity-80" />
            </motion.div>
        </section >
    );
}
