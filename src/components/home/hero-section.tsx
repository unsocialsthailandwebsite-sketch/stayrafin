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

    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background (Parallax) */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                {/* Placeholder for Video - Using a high quality image for now */}
                <div
                    className="w-full h-full bg-cover bg-center"
                    style={{
                        backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=3270&auto=format&fit=crop')"
                    }}
                />
                {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover">
            <source src="/hero-curated-luxury.mp4" type="video/mp4" />
        </video> */}
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ opacity }}
                className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto"
            >
            </motion.div>
        </motion.div>

            {/* Scroll Indicator */ }
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
