"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PROPERTIES = [
    {
        id: "1",
        title: "Choti Haveli",
        location: "C-Scheme, Jaipur",
        slug: "choti-haveli",
        image: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=3264&auto=format&fit=crop",
        specs: "4 Bedrooms | Sleeps 8",
        tagline: "HERITAGE LUXURY"
    },
    {
        id: "2",
        title: "The Kukas Villa",
        location: "Jaipur Outskirts",
        slug: "the-kukas-villa",
        image: "/images/kukas/night-view-cover.jpg",
        specs: "3 Bedrooms | Sleeps 6",
        tagline: "MODERN FARMHOUSE"
    }
];

interface PropertyGridProps {
    properties?: any[]; // Using any for MVP flexibility
}

export function PropertyGrid({ properties: fetchedProperties }: PropertyGridProps) {
    // Determine which properties to show (Fetched or Mock)
    const displayProperties = fetchedProperties && fetchedProperties.length > 0
        ? fetchedProperties.map(p => ({
            id: p._id,
            title: p.title,
            location: p.location,
            image: p.image || "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=3270&auto=format&fit=crop", // Fallback image
            slug: p.slug,
            specs: p.specs || "Luxury Villa",
            tagline: "LUXURY STAY" // Default tagline since not fetched yet
        }))
        : PROPERTIES;

    return (
        <section className="py-24 bg-stayra-ivory" id="properties">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-stayra-charcoal mb-4">Our Curated Collection</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-sans">
                        Discover our handpicked selection of exclusive properties.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {displayProperties.map((property, index) => (
                        <Link
                            href={`/properties/${property.slug}`}
                            key={property.id}
                            className="group block relative overflow-hidden"
                        >
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
