"use client";

import { motion } from "framer-motion";
import { Home, Utensils, Sliders, Gem } from "lucide-react";

const features = [
  {
    title: "Designer Interiors",
    description:
      "Every villa is styled floor to ceiling — art, linens, furniture — and personally walked through before it joins our collection.",
    icon: Home,
  },
  {
    title: "Homecrafted Hospitality",
    description:
      "A private chef cooking to your hours, daily housekeeping, and a caretaker on site around the clock.",
    icon: Utensils,
  },
  {
    title: "Personalized Experience",
    description:
      "Bonfires, candlelight dinners, birthday setups — arranged around the evening you actually want, not a fixed package.",
    icon: Sliders,
  },
  {
    title: "Direct & Transparent",
    description:
      "Private pools and on-site staff, booked straight with us — no platform commission, no middlemen.",
    icon: Gem,
  }
];

export const WhyStayraSection = () => {
  return (
    <section className="bg-stayra-ivory/30 py-24 md:py-32 border-t border-b border-gray-100/60">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-20 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">THE STAYRA DIFFERENCE</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stayra-charcoal mb-4">
            Why Stayra
          </h2>
          <div className="w-12 h-[1px] bg-stayra-gold mx-auto mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-sans leading-relaxed">
            The details that make a stay feel like your own home, not a hotel room.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-[#1A3C34] text-white p-8 md:p-10 rounded-2xl border-t border-l border-white/15 border-b-4 border-r-4 border-[#0d1e1a] shadow-[0_12px_24px_-10px_rgba(0,0,0,0.4),_0_10px_0_0_#0d1e1a] hover:-translate-y-[6px] hover:shadow-[0_20px_32px_-8px_rgba(0,0,0,0.5),_0_14px_0_0_#0d1e1a] active:translate-y-[2px] active:shadow-[0_6px_12px_-4px_rgba(0,0,0,0.3),_0_6px_0_0_#0d1e1a] transition-all duration-300 flex flex-col items-center text-center cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/[0.02] to-white/[0.08] pointer-events-none rounded-2xl" />

                <div className="w-16 h-16 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-stayra-gold group-hover:bg-stayra-gold group-hover:text-[#1A3C34] transition-all duration-300 mb-8 shadow-inner">
                  <Icon className="w-7 h-7 transition-transform duration-500 group-hover:rotate-6" />
                </div>
                <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-stayra-gold transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed font-sans font-light">
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
