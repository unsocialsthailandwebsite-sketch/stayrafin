"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
    {
        image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop",
        title: "Curated Interiors",
        description: "Every piece tells a story. Our spaces are designed with heritage art and modern comforts.",
    },
    {
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
        title: "Private Sanctuaries",
        description: "Your own slice of paradise. Enjoy complete privacy in our standalone properties.",
    },
    {
        image: "https://images.unsplash.com/photo-1574744030677-789a770b77b7?q=80&w=3270&auto=format&fit=crop",
        title: "24/7 Concierge",
        description: "White-glove service from inquiry to checkout. We are here to fulfill every request.",
    },
];

export function ExperienceGrid() {
    return (
        <section id="experience" className="py-24 px-4 bg-stayra-ivory">
            <div className="container mx-auto">
                <h2 className="font-serif text-3xl md:text-5xl text-center mb-16 text-stayra-charcoal">
                    The Stayra Experience
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="text-center px-6 flex flex-col items-center"
                        >
                            <div className="mb-6 relative w-24 h-24 rounded-full overflow-hidden shadow-md border-2 border-white">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="font-serif text-xl mb-4 text-stayra-charcoal">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 font-light leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
