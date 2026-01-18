"use client";

import { motion } from "framer-motion";
import { Gem, ShieldCheck, UserCheck } from "lucide-react";

const features = [
    {
        icon: Gem,
        title: "Curated Interiors",
        description: "Every piece tells a story. Our spaces are designed with heritage art and modern comforts.",
    },
    {
        icon: ShieldCheck,
        title: "Private Sanctuaries",
        description: "Your own slice of paradise. Enjoy complete privacy in our standalone properties.",
    },
    {
        icon: UserCheck,
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
                            className="text-center px-6"
                        >
                            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm border border-stayra-gold/20 text-stayra-gold">
                                <feature.icon className="h-8 w-8" strokeWidth={1.5} />
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
