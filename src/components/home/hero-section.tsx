"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mb-6"
                >
                    <span className="font-accent text-sm md:text-md tracking-[0.3em] uppercase text-stayra-gold-light border-b border-stayra-gold-light/30 pb-2">
                        Luxury Villa Resort
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 shadow-black/10 drop-shadow-lg"
                >
                    STAYRA
                    <span className="block text-2xl md:text-4xl mt-4 italic font-light font-sans text-white/90">
                        Curated Luxury Living
                    </span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 1 }}
                >
                    <Button variant="outline" className="mt-8 border-white text-white hover:bg-white hover:text-stayra-green text-lg px-8 py-6 rounded-none tracking-widest backdrop-blur-sm">
                        DISCOVER MORE
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
        </section>
    );
}
