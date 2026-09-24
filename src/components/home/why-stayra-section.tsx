"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { Paintbrush, ChefHat, Sparkles, BadgeCheck, ArrowUpRight } from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
};

const features: Feature[] = [
  {
    title: "Designer Interiors",
    description:
      "Every villa is styled floor to ceiling — art, linens, furniture — and personally walked through before it joins our collection.",
    icon: Paintbrush,
  },
  {
    title: "Homecrafted Hospitality",
    description:
      "A private chef cooking to your hours, daily housekeeping, and a caretaker on site around the clock.",
    icon: ChefHat,
  },
  {
    title: "Personalized Experience",
    description:
      "Bonfires, candlelight dinners, birthday setups — arranged around the evening you actually want, not a fixed package.",
    icon: Sparkles,
  },
  {
    title: "Direct & Transparent",
    description:
      "Private pools and on-site staff, booked straight with us — no platform commission, no middlemen.",
    icon: BadgeCheck,
  }
];

/**
 * Editorial index list, not a card grid: a thin-ruled list of rows (like a
 * boutique magazine's contents page) rather than the boxed/blocked treatment
 * used elsewhere. Each row slides in from the left as it scrolls into view;
 * on hover the ring around the icon and the number both warm from grey to
 * gold, the title gets an underline that draws in, and a small arrow slides
 * into place — all understated, no filled dark panels.
 */
function FeatureRow({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group grid grid-cols-[auto_auto_1fr_auto] sm:grid-cols-[64px_64px_1fr_auto] items-center gap-5 sm:gap-8 py-8 border-b border-gray-200 last:border-0"
    >
      <span className="font-serif text-3xl sm:text-4xl text-stayra-gold/25 group-hover:text-stayra-gold transition-colors duration-500 tabular-nums">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="w-14 h-14 rounded-full border border-gray-300 group-hover:border-stayra-gold flex items-center justify-center text-stayra-charcoal group-hover:text-stayra-gold transition-all duration-500 group-hover:rotate-12 group-hover:scale-105">
        <Icon className="w-6 h-6" strokeWidth={1.5} />
      </div>

      <div>
        <h3 className="font-serif text-xl sm:text-2xl text-stayra-charcoal mb-2 inline-block">
          {feature.title}
          <span className="block h-[1px] bg-stayra-gold w-0 group-hover:w-full transition-all duration-500" />
        </h3>
        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl">
          {feature.description}
        </p>
      </div>

      <ArrowUpRight
        className="hidden sm:block w-5 h-5 text-stayra-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500"
        strokeWidth={1.5}
      />
    </motion.div>
  );
}

export const WhyStayraSection = () => {
  return (
    <section className="bg-stayra-ivory/30 py-24 md:py-32 border-t border-b border-gray-100/60">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">THE STAYRA DIFFERENCE</span>
          <h2 className="text-3xl md:text-5xl font-serif text-stayra-charcoal mb-4">
            Why Stayra
          </h2>
          <div className="w-12 h-[1px] bg-stayra-gold mx-auto mb-6" />
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg font-sans leading-relaxed">
            The details that make a stay feel like your own home, not a hotel room.
          </p>
        </div>

        <div className="border-t border-gray-200">
          {features.map((feature, index) => (
            <FeatureRow key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
