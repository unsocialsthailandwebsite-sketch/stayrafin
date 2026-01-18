"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const properties = [
    {
        id: "choti-haveli",
        title: "Choti Haveli",
        location: "Jaipur City Center",
        tagline: "HERITAGE LUXURY",
        image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=3264&auto=format&fit=crop", // Placeholder
    },
    {
        id: "the-kukasola",
        title: "The Kukasola",
        location: "Jaipur Outskirts",
        tagline: "MODERN FARMHOUSE",
        image: "https://images.unsplash.com/photo-1613553507747-9f5312f48df9?q=80&w=2835&auto=format&fit=crop", // Placeholder
    }
];

export function PropertyGrid() {
    return (
        <section id="properties" className="py-24 px-4 bg-white">
            <div className="container mx-auto">
                <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 text-stayra-charcoal">
                    Our Collection
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {properties.map((property, index) => (
                        <Link href={`/properties/${property.id}`} key={property.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group cursor-pointer"
                            >
                                {/* Image Container */}
                                <div className="relative overflow-hidden aspect-[4/3] mb-6 shadow-sm">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className="w-full h-full"
                                    >
                                        <img
                                            src={property.image}
                                            alt={property.title}
                                            className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-90"
                                        />
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="text-center md:text-left">
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
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
