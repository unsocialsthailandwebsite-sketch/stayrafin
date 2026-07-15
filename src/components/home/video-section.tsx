"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const COLLAGE_IMAGES = [
    {
        src: "https://a0.muscache.com/im/pictures/hosting/Hosting-1492613314913436518/original/4f523614-7a53-496a-abd3-08d190cd3147.jpeg",
        alt: "Kankas House Twilight Pool",
        className: "col-span-2 row-span-1 md:col-span-2 md:row-span-2"
    },
    {
        src: "https://cdn.sanity.io/images/1tjvajrl/production/e15abc6a1533ef147337803f1e9b45b6bae51980-1280x960.jpg",
        alt: "Choti Haveli Main Exterior",
        className: "col-span-1 row-span-1"
    },
    {
        src: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/75712882-d545-4300-b81d-3712673047b6.jpeg",
        alt: "Kankas House Living Room",
        className: "col-span-1 row-span-1"
    },
    {
        src: "https://cdn.sanity.io/images/1tjvajrl/production/cb2ef8c7eb4ed5f05fbb700ddddb35cc043b1acc-1279x960.jpg",
        alt: "Choti Haveli Courtyard Dining",
        className: "col-span-1 row-span-1"
    },
    {
        src: "https://cdn.sanity.io/images/1tjvajrl/production/f2a0fd7eb023e7ebf81ce4fca03f86cdcab3f8d8-1280x960.heif",
        alt: "Choti Haveli Seating Area",
        className: "col-span-1 row-span-1"
    }
];

export function VideoSection() {
    return (
        <section className="relative min-h-[80vh] min-h-[600px] w-full overflow-hidden bg-[#1A3C34] flex items-center justify-center py-20">
            {/* Immersive Grid Collage (Background) */}
            <div className="absolute inset-0 z-0 grid grid-cols-2 md:grid-cols-4 grid-rows-3 md:grid-rows-2 h-full w-full gap-1.5 p-1.5 group/grid">
                {COLLAGE_IMAGES.map((img, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: idx * 0.1 }}
                        className={`relative overflow-hidden cursor-pointer transition-all duration-500 group/item ${img.className} hover:!opacity-100 group-hover/grid:opacity-60`}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover/item:scale-105"
                        />
                        {/* Blend overlay */}
                        <div className="absolute inset-0 bg-[#1A3C34]/30 mix-blend-multiply transition-opacity duration-500 group-hover/item:opacity-10" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C34]/40 via-transparent to-transparent opacity-80" />
                    </motion.div>
                ))}
            </div>

            {/* Central Experience Branding Card */}
            <div className="relative z-20 max-w-lg mx-4 py-8 pointer-events-none">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="bg-[#1A3C34]/90 backdrop-blur-md border border-white/10 px-8 py-10 md:px-12 md:py-14 text-center shadow-[0_24px_50px_rgba(0,0,0,0.5)] relative pointer-events-auto"
                >
                    <div className="absolute top-4 left-4 right-4 bottom-4 border border-stayra-gold/20 pointer-events-none" />
                    <span className="text-stayra-gold text-xs uppercase tracking-[0.3em] font-bold mb-3 block">CURATED COLLECTIVE</span>
                    <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 leading-tight">
                        The Stayra Experience
                    </h2>
                    <p className="text-white/70 text-sm font-sans tracking-wide leading-relaxed">
                        A seamless blend of heritage aesthetics, modern comforts, and personalized service in Jaipur.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
