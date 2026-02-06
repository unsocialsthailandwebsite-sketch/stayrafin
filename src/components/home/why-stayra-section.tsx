"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
    {
        title: "Designer Homes",
        image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=3174&auto=format&fit=crop", // Elegant Interior
    },
    {
        title: "Homecrafted Hospitality",
        image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=3270&auto=format&fit=crop", // Warm hospitality / Tea
    },
    {
        title: "Personalized Experience",
        image: "https://images.unsplash.com/photo-1571896349842-6e5a513e610a?q=80&w=3270&auto=format&fit=crop", // Celebration / Decoration
    },
    {
        title: "Exclusive Perks",
        image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=3270&auto=format&fit=crop", // Floating breakfast / Luxury
    }
];

export const WhyStayraSection = () => {
    return (
        <section className="bg-[#F9Fcf9] py-16 md:py-24">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif text-stayra-charcoal mb-4">
                        Why Stayra
                    </h2>
                    <p className="text-gray-600 font-medium">
                        Beautifully crafted luxury, thoughtfully designed with care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
                        >
                            <Image
                                src={feature.image}
                                alt={feature.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 p-6 w-full">
                                <h3 className="text-2xl font-serif text-white mb-2">
                                    {feature.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
