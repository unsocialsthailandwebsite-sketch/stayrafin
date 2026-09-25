"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Eye,
  MapPin,
  Camera,
  Target,
  Wallet,
  MessageCircle,
  Check,
  X,
  ChevronDown,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const WHATSAPP_NUMBER = "917340031394";
const WHATSAPP_MESSAGE =
  "Hi, I own a property in Jaipur and would like to explore partnering with Stayra.";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const benefits = [
  {
    icon: TrendingUp,
    title: "Real Revenue, Not Guesswork",
    description:
      "Pricing set by season, demand and what's happening nearby — adjusted in real time, not left on a flat rate.",
  },
  {
    icon: Sparkles,
    title: "We Run It, You Don't",
    description:
      "Housekeeping, a chef on call, maintenance and guest support — handled daily by people on the ground.",
  },
  {
    icon: ShieldCheck,
    title: "Guests Who Respect the Home",
    description:
      "Every booking is reviewed before it's confirmed. No walk-ins, no surprises, no wrong-fit groups.",
  },
  {
    icon: Eye,
    title: "Full Visibility, Always",
    description:
      "Every booking and every payout, visible whenever you want to check. No black box, ever.",
  },
];

const comparison = [
  {
    label: "Pricing",
    self: "One flat rate, set once and forgotten",
    platform: "An algorithm you don't control",
    stayra: "Demand-based pricing, set by people who know the local market",
  },
  {
    label: "Photography & Listing",
    self: "You shoot it, you post it",
    platform: "Buried among thousands of listings",
    stayra: "Professionally styled and positioned as a destination",
  },
  {
    label: "Guest Screening",
    self: "Whoever books, books",
    platform: "Minimal vetting before check-in",
    stayra: "Every enquiry reviewed before it's confirmed",
  },
  {
    label: "Day-to-Day Care",
    self: "You, or hired help, ad hoc",
    platform: "Not the platform's problem",
    stayra: "Daily housekeeping, an on-call chef, maintenance — handled",
  },
  {
    label: "Fees",
    self: "None, but no support either",
    platform: "12–18% in guest service fees, plus your time",
    stayra: "One transparent share, agreed upfront, no hidden cuts",
  },
  {
    label: "Payouts",
    self: "Whenever the guest happens to pay",
    platform: "The platform's schedule, the platform's cut",
    stayra: "Regular payouts, visible in real time",
  },
];

const steps = [
  {
    number: "01",
    icon: MapPin,
    title: "Visit & Assessment",
    description:
      "We walk the property in person — layout, amenities, what makes it worth staying at — before we ever say yes.",
  },
  {
    number: "02",
    icon: Camera,
    title: "Styling & Photography",
    description:
      "We style the home the way it will actually be lived in, then photograph it honestly. No filters that oversell it.",
  },
  {
    number: "03",
    icon: Target,
    title: "Pricing & Listing",
    description:
      "A pricing strategy built around your calendar, the season and what's happening nearby, live across the right channels.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Guest Vetting & Booking",
    description:
      "Every enquiry is screened before it's confirmed. No last-minute surprises, no groups your home wasn't built for.",
  },
  {
    number: "05",
    icon: Sparkles,
    title: "Daily Operations",
    description:
      "Housekeeping, a chef on call, maintenance and guest support — run by our on-ground team, every single day.",
  },
  {
    number: "06",
    icon: Wallet,
    title: "Payouts & Reporting",
    description:
      "You get paid on schedule, with full visibility into every booking. No chasing invoices, no black box.",
  },
];

const faqs = [
  {
    q: "Do I keep ownership of my property?",
    a: "Yes, entirely. We manage the day-to-day operations — the home stays yours.",
  },
  {
    q: "What's the commercial model — revenue share, fixed rent, or something else?",
    a: "A revenue share, agreed with you upfront before the property ever goes live. No fixed rent, and no terms you haven't seen.",
  },
  {
    q: "Are there any upfront costs to list with you?",
    a: "No listing fees. We put in the time for styling, photography and setup ourselves.",
  },
  {
    q: "Is there a minimum contract or lock-in?",
    a: "We walk you through the terms directly on a call. Nothing goes live until you're comfortable with the agreement.",
  },
  {
    q: "Can I block dates for personal use?",
    a: "Yes. Tell us your dates in advance and we hold them for you, no questions asked.",
  },
  {
    q: "Do you also list my property on Airbnb and other platforms?",
    a: "We list wherever it makes sense for visibility, but we always push guests toward booking direct with us — so platform fees don't quietly eat into what you earn.",
  },
  {
    q: "What happens if a guest damages the property?",
    a: "We handle it directly with the guest — assessing the damage and recovering the cost, so you're never the one chasing it down.",
  },
  {
    q: "How do you handle maintenance and upkeep?",
    a: "Routine maintenance and repairs are scheduled and handled by our on-ground team as part of daily operations — the same way we run our own two homes.",
  },
  {
    q: "How often are payouts made, and how transparent is the reporting?",
    a: "Payouts run on a regular schedule agreed upfront, and you can see every booking and what it earned whenever you check in. No black box.",
  },
  {
    q: "Who's my point of contact once I'm onboarded?",
    a: "One person, on WhatsApp, for the life of the partnership — not a rotating support queue.",
  },
  {
    q: "What kind of properties do you take on?",
    a: "Villas and haveli-style homes in and around Jaipur with a private pool or real character, and an owner who cares about upkeep as much as we do.",
  },
  {
    q: "How do I get started?",
    a: "Message us on WhatsApp with your property details and a few photos. We'll set up a site visit from there.",
  },
];

export function PartnerContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-stayra-ivory">
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] w-full overflow-hidden flex items-end">
        <img
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/1c2a9fe1-ce5a-4d87-a19e-92096ddd44d6.jpeg"
          alt="A living room styled and managed by the Stayra team"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl pt-20 md:pt-0 pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-4 block">
              FOR HOMEOWNERS
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white leading-[1.1] mb-5 max-w-2xl">
              Your Home Deserves a Team,
              <br />
              Not a Listing.
            </h1>
            <p className="text-white/80 text-base md:text-lg font-sans max-w-xl leading-relaxed mb-8">
              We run two homes in Jaipur like they&apos;re our own — daily
              housekeeping, a chef on call, guests vetted before they ever
              arrive. If you own a villa or haveli-style home worth doing the
              same for, let&apos;s talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-stayra-gold text-white hover:bg-stayra-gold/90 px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Talk to Us
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white hover:bg-white/10 px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors"
              >
                See How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">
              WHY OWNERS PARTNER WITH US
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-stayra-charcoal mb-4">
              What Changes When We Run It.
            </h2>
            <div className="w-12 h-[1px] bg-stayra-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="w-12 h-12 rounded-full bg-stayra-ivory border border-stayra-gold/30 flex items-center justify-center text-stayra-gold mb-5 group-hover:bg-stayra-gold group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-xl text-stayra-charcoal mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-stayra-charcoal/60 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 md:py-32 bg-stayra-ivory/40 border-t border-b border-gray-100/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">
              THE DIFFERENCE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-stayra-charcoal mb-4">
              Doing It Alone vs. Doing It With Us.
            </h2>
            <p className="text-stayra-charcoal/60 max-w-xl mx-auto text-base md:text-lg font-sans">
              Three ways to run a rental property. Only one of them means you
              stop thinking about it.
            </p>
          </motion.div>

          {/* Desktop / tablet: full comparison table */}
          <motion.div
            {...fadeUp}
            className="hidden md:block overflow-x-auto rounded-2xl shadow-lg border border-gray-100"
          >
            <table className="w-full min-w-[720px] border-collapse bg-white">
              <thead>
                <tr>
                  <th className="text-left font-sans text-xs uppercase tracking-widest text-stayra-charcoal/50 font-semibold py-5 px-6 w-1/4">
                    &nbsp;
                  </th>
                  <th className="text-left font-serif text-base text-stayra-charcoal/70 font-medium py-5 px-6 w-1/4 border-l border-gray-100">
                    Managing It Yourself
                  </th>
                  <th className="text-left font-serif text-base text-stayra-charcoal/70 font-medium py-5 px-6 w-1/4 border-l border-gray-100">
                    Listing on a Platform
                  </th>
                  <th className="text-left font-serif text-base text-white font-medium py-5 px-6 w-1/4 bg-stayra-green rounded-tr-2xl">
                    Partnering With Stayra
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, index) => (
                  <motion.tr
                    key={row.label}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                    className="border-t border-gray-100"
                  >
                    <td className="py-5 px-6 font-serif text-stayra-charcoal font-medium align-top">
                      {row.label}
                    </td>
                    <td className="py-5 px-6 align-top border-l border-gray-100">
                      <div className="flex items-start gap-2 text-stayra-charcoal/60 text-sm leading-relaxed">
                        <X className="w-4 h-4 text-stayra-charcoal/30 shrink-0 mt-0.5" />
                        <span>{row.self}</span>
                      </div>
                    </td>
                    <td className="py-5 px-6 align-top border-l border-gray-100">
                      <div className="flex items-start gap-2 text-stayra-charcoal/60 text-sm leading-relaxed">
                        <X className="w-4 h-4 text-stayra-charcoal/30 shrink-0 mt-0.5" />
                        <span>{row.platform}</span>
                      </div>
                    </td>
                    <td
                      className={`py-5 px-6 align-top bg-stayra-green/5 ${
                        index === comparison.length - 1 ? "rounded-br-2xl" : ""
                      }`}
                    >
                      <div className="flex items-start gap-2 text-stayra-charcoal text-sm leading-relaxed font-medium">
                        <Check className="w-4 h-4 text-stayra-gold shrink-0 mt-0.5" />
                        <span>{row.stayra}</span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile: stacked comparison cards, no sideways scrolling */}
          <div className="md:hidden space-y-4">
            {comparison.map((row, index) => (
              <motion.div
                key={row.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden"
              >
                <div className="px-5 py-3.5 bg-stayra-ivory/70 border-b border-gray-100">
                  <h3 className="font-serif text-base text-stayra-charcoal">
                    {row.label}
                  </h3>
                </div>
                <div className="divide-y divide-gray-100">
                  <div className="px-5 py-4">
                    <span className="text-[11px] uppercase tracking-widest text-stayra-charcoal/40 font-semibold block mb-1.5">
                      Managing It Yourself
                    </span>
                    <div className="flex items-start gap-2 text-stayra-charcoal/60 text-sm leading-relaxed">
                      <X className="w-4 h-4 text-stayra-charcoal/30 shrink-0 mt-0.5" />
                      <span>{row.self}</span>
                    </div>
                  </div>
                  <div className="px-5 py-4">
                    <span className="text-[11px] uppercase tracking-widest text-stayra-charcoal/40 font-semibold block mb-1.5">
                      Listing on a Platform
                    </span>
                    <div className="flex items-start gap-2 text-stayra-charcoal/60 text-sm leading-relaxed">
                      <X className="w-4 h-4 text-stayra-charcoal/30 shrink-0 mt-0.5" />
                      <span>{row.platform}</span>
                    </div>
                  </div>
                  <div className="px-5 py-4 bg-stayra-green/5">
                    <span className="text-[11px] uppercase tracking-widest text-stayra-gold font-semibold block mb-1.5">
                      Partnering With Stayra
                    </span>
                    <div className="flex items-start gap-2 text-stayra-charcoal text-sm leading-relaxed font-medium">
                      <Check className="w-4 h-4 text-stayra-gold shrink-0 mt-0.5" />
                      <span>{row.stayra}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Manage Your Home — Workflow */}
      <section id="how-it-works" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">
              HOW IT WORKS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-stayra-charcoal mb-4">
              How We Manage Your Home.
            </h2>
            <p className="text-stayra-charcoal/60 max-w-xl mx-auto text-base md:text-lg font-sans">
              Six steps, start to finish. No part of it lands back on you.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-6 md:left-8 top-2 bottom-2 w-[1.5px] bg-gradient-to-b from-stayra-gold/60 via-stayra-gold/30 to-transparent hidden sm:block" />

            <div className="space-y-14">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
                    className="relative flex gap-6 md:gap-8 pl-0 sm:pl-0"
                  >
                    <div className="relative z-10 shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-stayra-ivory border-2 border-stayra-gold flex items-center justify-center text-stayra-gold">
                      <Icon className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 pt-1 md:pt-3">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="font-serif text-stayra-gold/50 text-lg font-bold">
                          {step.number}
                        </span>
                        <h3 className="font-serif text-xl md:text-2xl text-stayra-charcoal">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-stayra-charcoal/60 text-sm md:text-base leading-relaxed max-w-xl">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* We Run Two Homes Ourselves — Trust */}
      <section className="py-24 md:py-32 bg-[#1A3C34] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div {...fadeUp}>
              <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">
                WHY TRUST US WITH IT
              </span>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                We Don&apos;t Just Manage Homes.
                <br />
                We Run Two of Our Own.
              </h2>
              <p className="text-white/70 text-base md:text-lg font-sans leading-relaxed mb-4">
                Before Stayra managed anyone else&apos;s home, it managed our
                own. Kankas House and Choti Haveli are run, every day, by the
                same team we&apos;d put on your property — the same
                caretakers, the same chef, the same person who answers
                WhatsApp at 11pm.
              </p>
              <p className="text-white/70 text-base md:text-lg font-sans leading-relaxed">
                That&apos;s not a line we tell owners to sound reassuring.
                It&apos;s the only way we know how to run a home.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-lg translate-y-6">
                <img
                  src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/9276b2bf-52b6-43a2-8b40-b617c5347176.jpeg"
                  alt="A picnic set up by the pool at Kankas House"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-lg">
                <img
                  src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/73653bf7-e972-44a4-9924-d0b47f098280.jpeg"
                  alt="An evening movie setup on the lawn at Kankas House"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">
              QUESTIONS OWNERS ASK
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-stayra-charcoal">
              A Few Things You&apos;re Probably Wondering.
            </h2>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="border border-gray-100 rounded-xl overflow-hidden bg-stayra-ivory/30"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 text-left px-6 py-5"
                  >
                    <span className="font-serif text-base md:text-lg text-stayra-charcoal">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-stayra-gold"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-stayra-charcoal/60 text-sm md:text-base leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-28 px-4 bg-stayra-ivory/40 border-t border-gray-100/60">
        <motion.div
          {...fadeUp}
          className="container mx-auto text-center max-w-xl space-y-6"
        >
          <h2 className="font-serif text-3xl md:text-4xl text-stayra-charcoal">
            Let&apos;s See If It&apos;s a Fit.
          </h2>
          <p className="text-stayra-charcoal/60 text-base md:text-lg font-sans">
            Not every home is right for Stayra, and that&apos;s fine — we&apos;d
            rather tell you early. Send us a few details and photos, and
            we&apos;ll get back to you within a day.
          </p>
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1A3C34] text-white hover:bg-[#1A3C34]/90 px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Message Us on WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
