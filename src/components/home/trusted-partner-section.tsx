"use client";

import { Compass, HeartHandshake, ShieldCheck } from "lucide-react";

const pillars = [
  {
    title: "Handpicked Villas",
    description:
      "Every property is personally visited and inspected before it joins our collection — no exceptions.",
    icon: Compass,
  },
  {
    title: "Dedicated Concierge",
    description:
      "A real person on WhatsApp for planning, requests and anything that comes up during your stay.",
    icon: HeartHandshake,
  },
  {
    title: "Verified & Spotless",
    description:
      "Quality-checked before every check-in, so the villa in the photos is the villa you get.",
    icon: ShieldCheck,
  },
];

export function TrustedPartnerSection() {
  return (
    <section className="bg-white py-20 md:py-24 border-t border-gray-100/60">
      <div className="container mx-auto px-4 max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-stayra-charcoal mb-3">
          Your Trusted Stay Partner
        </h2>
        <div className="w-12 h-[1px] bg-stayra-gold mx-auto mb-14" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-14">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-stayra-ivory border border-stayra-gold/30 flex items-center justify-center text-stayra-gold mb-5">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-stayra-charcoal mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-[220px] mx-auto">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
