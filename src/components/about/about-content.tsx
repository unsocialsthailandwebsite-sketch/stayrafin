"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const WHATSAPP_NUMBER = "917340031394";
const WHATSAPP_MESSAGE = "Hi, I'd love to know more about staying at a Stayra home.";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const homes = [
  {
    name: "Kankas House",
    slug: "kankas-house",
    tagline:
      "A four-bedroom pool villa in the hills off Delhi Road — built for long weekends, bonfire nights, and doing absolutely nothing at all.",
    image:
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1492613314913436518/original/4f523614-7a53-496a-abd3-08d190cd3147.jpeg",
  },
  {
    name: "Choti Haveli",
    slug: "choti-haveli",
    tagline:
      "A haveli-style one-bedroom home on Ajmer Road, built for two — hand-painted doors and a quiet courtyard, made to carry the feel of old Rajasthan.",
    image:
      "https://cdn.sanity.io/images/1tjvajrl/production/e15abc6a1533ef147337803f1e9b45b6bae51980-1280x960.jpg",
  },
];

export function AboutContent() {
  return (
    <div className="min-h-screen bg-stayra-ivory">
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] w-full overflow-hidden flex items-end">
        <img
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-1492613314913436518/original/4f523614-7a53-496a-abd3-08d190cd3147.jpeg"
          alt="Kankas House at dusk, a Stayra-managed pool villa in the hills outside Jaipur"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-4 block">
              OUR STORY
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white leading-[1.1] mb-5 max-w-2xl">
              We Don&apos;t Run Hotels.
              <br />
              We Keep Homes.
            </h1>
            <p className="text-white/80 text-base md:text-lg font-sans max-w-xl leading-relaxed">
              In the hills and heritage lanes around Jaipur, a small team
              looks after two houses like they&apos;re the only two that
              matter. To us, they are.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Idea */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">
              THE IDEA
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-stayra-charcoal">
              It Started With One House Off Delhi Road.
            </h2>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="space-y-6 text-stayra-charcoal/80 text-base md:text-lg font-sans leading-relaxed"
          >
            <p>
              <span className="float-left font-serif text-6xl md:text-7xl text-stayra-gold leading-[0.8] pr-3 pt-1">
                K
              </span>
              ankas House sits where the city gives way to the Aravalli
              foothills — a pool lit up gold after dark, wide lawns built for
              a bonfire, rooms quiet enough to hear the wind move through the
              trees. It was never meant to be a listing. It was meant to be
              looked after.
            </p>
            <p>
              So instead of handing over a set of keys and a lockbox code, we
              kept a team on the ground — the same caretakers, the same
              chef, the same person who still picks up the phone at 11pm
              because a guest can&apos;t find the Wi-Fi password. That
              decision is still the only rule that matters at Stayra: if we
              wouldn&apos;t do it for our own home, we don&apos;t do it here.
            </p>
            <p>
              Not long after, a second home joined — Choti Haveli, a
              haveli-style house on Ajmer Road, built from the ground up to
              carry the feel of old Rajasthan: hand-painted doors, arched
              windows, a courtyard built for quiet mornings. A different
              kind of home, built on the same idea: someone should always
              be looking after it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Two Homes */}
      <section className="py-24 md:py-32 bg-stayra-ivory/40 border-t border-b border-gray-100/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">
              WHAT WE LOOK AFTER
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-stayra-charcoal mb-4">
              Two Homes. Never a Hundred.
            </h2>
            <div className="w-12 h-[1px] bg-stayra-gold mx-auto mb-6" />
            <p className="text-stayra-charcoal/60 max-w-xl mx-auto text-base md:text-lg font-sans">
              We&apos;d rather do two houses properly than fifty adequately.
              Here&apos;s who we&apos;re looking after right now.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {homes.map((home, index) => (
              <motion.div
                key={home.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="group"
              >
                <Link href={`/properties/${home.slug}`}>
                  <div className="relative rounded-xl overflow-hidden aspect-[4/5] mb-5 shadow-lg">
                    <img
                      src={home.image}
                      alt={home.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-2xl text-stayra-charcoal mb-2 inline-block">
                        {home.name}
                        <span className="block h-[1px] bg-stayra-gold w-0 group-hover:w-full transition-all duration-500" />
                      </h3>
                      <p className="text-stayra-charcoal/60 text-sm leading-relaxed max-w-sm">
                        {home.tagline}
                      </p>
                    </div>
                    <ArrowUpRight
                      className="w-5 h-5 text-stayra-gold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 shrink-0 mt-1"
                      strokeWidth={1.5}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto / Quote */}
      <section className="py-28 md:py-36 bg-[#1A3C34] text-white text-center px-4">
        <motion.div {...fadeUp} className="container mx-auto max-w-3xl">
          <div className="w-12 h-[1px] bg-stayra-gold mx-auto mb-10" />
          <h2 className="font-serif text-2xl md:text-4xl leading-snug md:leading-snug italic mb-8">
            &ldquo;A good host remembers how you take your chai on the
            second morning, not just the first. That&apos;s the only kind
            of luxury we&apos;re interested in.&rdquo;
          </h2>
          <p className="font-sans text-xs md:text-sm text-white/60 uppercase tracking-[0.25em]">
            — The Stayra Team
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-28 px-4 bg-white">
        <motion.div
          {...fadeUp}
          className="container mx-auto text-center max-w-xl space-y-8"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-stayra-charcoal">
            Come See for Yourself.
          </h2>
          <p className="text-stayra-charcoal/60 text-base md:text-lg font-sans">
            Two homes, a team that means it, and a WhatsApp number that
            actually gets answered.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center bg-[#1A3C34] text-white hover:bg-[#1A3C34]/90 px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              Explore Properties
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
