"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronRight } from "lucide-react";

interface GallerySection {
    title: string;
    images: string[];
}

interface CategorizedGalleryProps {
    sections: GallerySection[];
}

export function CategorizedGallery({ sections }: CategorizedGalleryProps) {
    const [activeSection, setActiveSection] = useState(0);

    if (!sections || sections.length === 0) return null;

    return (
        <section className="py-16 bg-gray-50/50">
            <div className="container mx-auto px-4">
                <h2 className="font-serif text-3xl text-stayra-charcoal mb-8">Gallery</h2>

                {/* Tabs */}
                <div className="flex flex-wrap gap-4 mb-8">
                    {sections.map((section, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveSection(idx)}
                            className={`px-6 py-2 rounded-full text-sm tracking-wide transition-all ${activeSection === idx
                                    ? "bg-stayra-charcoal text-white shadow-md"
                                    : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                                }`}
                        >
                            {section.title}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    key={activeSection}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {sections[activeSection].images.map((img, imgIdx) => (
                        <div key={imgIdx} className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
                            <img
                                src={img}
                                alt={`${sections[activeSection].title} - View ${imgIdx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
