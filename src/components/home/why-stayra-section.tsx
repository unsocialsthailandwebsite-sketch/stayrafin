"use client";

import type { ComponentType } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Home, Utensils, Sliders, Gem } from "lucide-react";

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

/**
 * Each card tracks the cursor to render a soft gold spotlight that follows the
 * pointer (a subtle "premium" touch used sparingly across luxury sites), on
 * top of a staggered scroll-reveal, a gently floating icon, and a title
 * underline that grows on hover. Cards live in their own component (rather
 * than being inlined in the .map below) because useMotionValue/useMotionTemplate
 * are hooks — each card needs its own mouse-position state.
 */
function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const Icon = feature.icon;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  const spotlight = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, rgba(212,175,120,0.18), transparent 70%)`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className="group relative overflow-hidden bg-[#1A3C34] text-white p-8 md:p-10 rounded-2xl border-t border-l border-white/15 border-b-4 border-r-4 border-[#0d1e1a] shadow-[0_12px_24px_-10px_rgba(0,0,0,0.4),_0_10px_0_0_#0d1e1a] transition-shadow duration-300 hover:shadow-[0_20px_32px_-8px_rgba(0,0,0,0.5),_0_14px_0_0_#0d1e1a] flex flex-col items-center text-center cursor-pointer"
    >
      {/* cursor-tracking gold spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: spotlight }}
      />

      {/* faint decorative index number */}
      <span className="absolute top-3 right-5 font-serif text-6xl text-white/[0.06] select-none pointer-events-none">
        {String(index + 1).padStart(2, "0")}
      </span>

      <motion.div
        className="relative w-16 h-16 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-stayra-gold group-hover:bg-stayra-gold group-hover:text-[#1A3C34] transition-colors duration-300 mb-8 shadow-inner"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }}
      >
        <Icon className="w-7 h-7 transition-transform duration-500 group-hover:rotate-6" />
      </motion.div>

      <h3 className="relative text-2xl font-serif text-white mb-3 group-hover:text-stayra-gold transition-colors duration-300">
        {feature.title}
      </h3>
      <span className="relative block w-8 h-[2px] bg-stayra-gold/40 mb-4 group-hover:w-16 group-hover:bg-stayra-gold transition-all duration-500" />
      <p className="relative text-white/70 text-sm leading-relaxed font-sans font-light">
        {feature.description}
      </p>
    </motion.div>
  );
}

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
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
