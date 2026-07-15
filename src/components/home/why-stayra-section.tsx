"use client";

import { motion } from "framer-motion";
import { Home, Utensils, Sliders, Gem } from "lucide-react";

const features = [
    {
        title: "Designer Homes",
        description: "Curated sanctuaries designed with fine art, bespoke furniture, and architectural beauty.",
        icon: Home,
    },
    {
        title: "Homecrafted Hospitality",
        description: "Warm, personalized service featuring private chefs, dedicated housekeeping, and local tastes.",
        icon: Utensils,
    },
    {
        title: "Personalized Experience",
        description: "Tailored stays designed around your preferences, from curated itineraries to private events.",
        icon: Sliders,
    },
    {
        title: "Exclusive Perks",
        description: "Access to premium club membership advantages, private pools, and hidden retreats.",
        icon: Gem,
    }
];

export const WhyStayraSection = () => {
    return (
        <section className="bg-stayra-ivory/40 py-20 md:py-28 border-t border-b border-gray-100/60">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="mb-16 text-center">
                    <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">THE STAYRA DIFFERENCE</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-stayra-charcoal mb-4">
                        Why Stayra
                    </h2>
                    <div className="w-12 h-[1px] bg-stayra-gold mx-auto mb-6" />
                    <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-sans leading-relaxed">
                        Beautifully crafted luxury, thoughtfully designed with care. We redefine the art of hospitality.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="group bg-white p-8 md:p-10 border border-gray-100/80 hover:border-stayra-gold/30 hover:shadow-xl transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-[3px] bg-stayra-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                
                                <div className="w-16 h-16 rounded-full bg-stayra-ivory flex items-center justify-center text-stayra-gold group-hover:bg-stayra-green group-hover:text-white transition-all duration-500 mb-8 shadow-sm">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-serif text-stayra-charcoal mb-4 group-hover:text-stayra-green transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed font-sans font-light">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
