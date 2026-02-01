"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
    heading?: string;
    subheading?: string;
}

export function HeroSection({ heading, subheading }: HeroSectionProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background (Parallax) */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                >
                    {/* Reliable Stock Video: Luxury Interior from Mixkit */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-living-room-with-a-fireplace-and-large-windows-4154-large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
            >
                <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    {heading || "Experience the Art of Living"}
                </h1>
                <p className="font-sans text-lg md:text-xl tracking-wide text-white/90 mb-10 max-w-2xl mx-auto">
                    {subheading || "Jaipur's Premier Luxury Rental Collection"}
                </p>
                <Button
                    size="lg"
                    className="bg-white text-stayra-charcoal hover:bg-gray-100 px-8 py-6 text-sm tracking-[0.2em] font-bold"
                    onClick={() => document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    EXPLORE OUR COLLECTION
                </Button>
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
