"use client";

import { Wallet, Eye, Users2, ShieldCheck, MessageCircle } from "lucide-react";

const perks = [
  {
    title: "Zero Cost To List",
    description:
      "No listing fees, no setup costs. We invest in styling, photography and marketing before you earn a single rupee.",
    icon: Wallet,
  },
  {
    title: "We Run Everything",
    description:
      "Housekeeping, maintenance, guest support and pricing — our on-ground team manages the entire operation, every day.",
    icon: Users2,
  },
  {
    title: "Verified Guests Only",
    description:
      "Every booking is checked and confirmed before check-in, so your home always stays in safe hands.",
    icon: ShieldCheck,
  },
  {
    title: "Full Transparency",
    description:
      "Real-time visibility into every booking and payout. No hidden platform cuts, ever.",
    icon: Eye,
  },
];

const WHATSAPP_NUMBER = "917340031394";
const WHATSAPP_MESSAGE =
  "Hi, I own a property in Jaipur and would like to explore partnering with Stayra.";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export function HomeownerSection() {
  return (
    <section className="bg-white py-24 md:py-32 border-t border-gray-100/60">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: pitch */}
          <div>
            <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">
              FOR HOMEOWNERS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-stayra-charcoal mb-6 leading-tight">
              Own a Home Worth Sharing?
            </h2>
            <p className="text-gray-500 text-base md:text-lg font-sans leading-relaxed mb-4 max-w-xl">
              Partner with Stayra and turn your villa or haveli into a
              sought-after luxury stay — without lifting a finger. We invest
              in the styling, photography, marketing and staffing upfront,
              and our on-ground team runs the property day to day: guests,
              housekeeping, maintenance and pricing.
            </p>
            <p className="text-gray-500 text-base md:text-lg font-sans leading-relaxed mb-8 max-w-xl">
              You keep full ownership. No listing fees, no long contracts,
              no hidden platform cuts — just a dedicated team that treats
              your home the way we&apos;d treat our own.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-8 py-4 rounded-md transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat With Us on WhatsApp
            </a>
          </div>

          {/* Right: property photo + icon-card grid */}
          <div>
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] mb-6 shadow-lg">
              <img
                src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/75712882-d545-4300-b81d-3712673047b6.jpeg"
                alt="The private pool at Kankas House, a Stayra-managed villa in Jaipur"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((perk, index) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-[#1A3C34] text-white p-5 rounded-xl border-t border-l border-white/15 border-b-4 border-r-4 border-[#0d1e1a] shadow-[0_10px_20px_-10px_rgba(0,0,0,0.4),_0_8px_0_0_#0d1e1a] hover:-translate-y-[4px] transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-stayra-gold group-hover:bg-stayra-gold group-hover:text-[#1A3C34] transition-all duration-300 mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-serif text-white mb-2 group-hover:text-stayra-gold transition-colors duration-300">
                      {perk.title}
                    </h3>
                    <p className="text-white/70 text-xs leading-relaxed font-sans font-light">
                      {perk.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
