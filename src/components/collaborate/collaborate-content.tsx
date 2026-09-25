"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Camera,
  Star,
  Briefcase,
  MessageSquare,
  CheckCircle2,
  FileText,
  Send,
  Gift,
  MessageCircle,
  Mail,
  Check,
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
  "Hi, I'd like to collaborate with Stayra as a creator, influencer or brand partner.";
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const tracks = [
  {
    icon: Camera,
    title: "Content Creators",
    audience: "Photographers, videographers, filmmakers",
    gives: "A complimentary stay, full access to shoot both properties, and a feature across our own Instagram and website with credit.",
    asks: "An agreed shot list before you arrive, and edited deliverables within a window we settle on together.",
  },
  {
    icon: Star,
    title: "Influencers",
    audience: "Creators with an engaged travel, lifestyle or food audience",
    gives: "A complimentary or discounted stay, a personal code for your audience, and a feature on our channels.",
    asks: "A confirmed set of deliverables before you book, and a heads-up before you publish so we can coordinate.",
  },
  {
    icon: Briefcase,
    title: "Brand & B2B Partners",
    audience: "Brands, event curators, experience providers",
    gives: "Access to our properties as a shoot location or event venue, cross-promotion, and a direct line for repeat work.",
    asks: "A clear brief on what you need from the space, and coverage of any extra setup, catering or crew costs.",
  },
];

const termsRows = [
  {
    label: "Format",
    creators: "Comped stay, with paid commissions for specific briefs",
    influencers: "Comped or discounted stay, tied to reach and deliverables",
    brands: "Venue access, co-hosted events, or a longer partnership",
  },
  {
    label: "What's Provided",
    creators: "Full property access, meals during the stay, a point of contact on-site",
    influencers: "The stay, a personal discount code, support with content ideas",
    brands: "The property or a section of it, our team's support on-site, cross-promotion",
  },
  {
    label: "What We Ask For",
    creators: "An agreed shot list, edited deliverables, credit to Stayra where relevant",
    influencers: "Confirmed deliverables before booking, honest coverage, a posting heads-up",
    brands: "A written brief, coverage of extra costs beyond a standard stay, mutual credit",
  },
  {
    label: "Usage Rights",
    creators: "You keep ownership; we may reshare on our channels with credit",
    influencers: "You publish on your own channels; we may reshare with credit",
    brands: "Agreed case by case in a simple written scope, before anything is shot",
  },
];

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Pitch",
    description:
      "Send your portfolio, channel links or brand brief on WhatsApp or email. Tell us what you have in mind.",
  },
  {
    number: "02",
    icon: CheckCircle2,
    title: "Fit Check",
    description:
      "We look at whether your work and audience genuinely fit Stayra — honestly, and quickly.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Terms Agreed",
    description:
      "Dates, deliverables and usage rights confirmed in writing before anything is booked.",
  },
  {
    number: "04",
    icon: Camera,
    title: "Stay & Shoot",
    description:
      "You get the run of the property, with our team on hand for anything you need on-site.",
  },
  {
    number: "05",
    icon: Send,
    title: "Content Delivered",
    description:
      "You send over what was agreed, within the window we settled on together.",
  },
  {
    number: "06",
    icon: Gift,
    title: "Feature & Payout",
    description:
      "We feature your work on our channels, and any commission or code activation follows.",
  },
];

const fitChecklist = [
  "An audience or brief genuinely interested in travel, design, food or hospitality",
  "A portfolio that shows an eye for real spaces, not just heavily staged content",
  "Based in or willing to travel to Jaipur for the stay or shoot",
  "Comfortable agreeing deliverables and timelines upfront, in writing",
  "Work that looks like something we'd be glad to put our name next to",
];

const faqs = [
  {
    q: "Do I need to be based in India or Jaipur to collaborate?",
    a: "No. Plenty of our collaborators travel in from elsewhere — we just ask you cover your own travel to Jaipur unless we've agreed otherwise for a specific project.",
  },
  {
    q: "Is it a paid collaboration or a stay in exchange for content?",
    a: "Both exist. Most creators and influencers work on a stay-for-content basis; paid commissions and brand partnerships are agreed separately, based on the brief.",
  },
  {
    q: "Who owns the content I create?",
    a: "You do. We only ask for permission to reshare it on our own channels, with credit to you.",
  },
  {
    q: "Can I bring a partner, assistant or extra guest for the shoot?",
    a: "Yes, tell us in advance so we can plan around it — most stays are built for two, so extra people may mean an adjusted arrangement.",
  },
  {
    q: "Do you cover professional gear, drones, or lighting setups?",
    a: "You bring your own equipment. If a shoot needs anything specific from us — extra power points, an early check-in, a particular room prepped — just flag it upfront.",
  },
  {
    q: "What if my content style doesn't match Stayra's brand?",
    a: "We'll tell you honestly before agreeing to anything. We're looking for a fit, not just a following — better to find out early than after a shoot.",
  },
  {
    q: "Is there a minimum audience size or engagement rate to qualify?",
    a: "There's no fixed number. We look at whether your audience is genuinely interested in travel, design or food, and whether your work already looks like something we'd want to be associated with.",
  },
  {
    q: "How far in advance should I apply?",
    a: "A few weeks' notice gives us time to check availability and align on deliverables properly. Last-minute requests are harder to accommodate.",
  },
  {
    q: "Do brand partners get exclusive use of the property?",
    a: "For events and shoots, yes — we block the property for your booked window. Ongoing partnerships are scoped individually.",
  },
  {
    q: "What happens after I deliver the content?",
    a: "We review it against what was agreed, and once it's confirmed, any commission or code activation follows on the schedule we agreed upfront.",
  },
  {
    q: "Can I reapply if I wasn't a fit the first time?",
    a: "Absolutely. Audiences and portfolios change — if the fit isn't right today, we're happy to look again later.",
  },
  {
    q: "How do I actually get started?",
    a: "Message us on WhatsApp or send a short email with your portfolio or channel links. We'll reply honestly, even if it's a no.",
  },
];

export function CollaborateContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-stayra-ivory">
      {/* Hero */}
      <section className="relative min-h-[60vh] md:min-h-[85vh] w-full overflow-hidden flex items-end">
        <img
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/c2ae21de-6e4e-4438-a19d-8573f93b297d.jpeg"
          alt="A sunset outdoor screening and chef's flambe at Kankas House"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />
        <div className="relative z-10 container mx-auto px-4 max-w-4xl pb-16 md:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-4 block">
              FOR CREATORS &amp; BRAND PARTNERS
            </span>
            <h1 className="font-serif text-4xl md:text-6xl text-white leading-[1.1] mb-5 max-w-2xl">
              Come Shoot Something
              <br />
              Worth Keeping.
            </h1>
            <p className="text-white/80 text-base md:text-lg font-sans max-w-xl leading-relaxed mb-8">
              Two homes in Jaipur built for the kind of light good
              photographers chase, and a team that actually reads your pitch
              instead of leaving you on read.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-stayra-gold text-white hover:bg-stayra-gold/90 px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Pitch a Collaboration
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

      {/* Who We Work With */}
      <section className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">
              WHO WE WORK WITH
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-stayra-charcoal mb-4">
              Three Ways In.
            </h2>
            <div className="w-12 h-[1px] bg-stayra-gold mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tracks.map((track, index) => {
              const Icon = track.icon;
              return (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-stayra-ivory/40 rounded-2xl p-8 border border-gray-100 h-full flex flex-col"
                >
                  <div className="w-12 h-12 rounded-full bg-white border border-stayra-gold/30 flex items-center justify-center text-stayra-gold mb-5">
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-stayra-charcoal mb-1">
                    {track.title}
                  </h3>
                  <p className="text-stayra-gold text-xs uppercase tracking-widest font-semibold mb-5">
                    {track.audience}
                  </p>
                  <div className="space-y-4 pt-5 border-t border-gray-200/70 mt-auto">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stayra-charcoal/50 block mb-1">
                        What You Get
                      </span>
                      <p className="text-stayra-charcoal/70 text-sm leading-relaxed">
                        {track.gives}
                      </p>
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-stayra-charcoal/50 block mb-1">
                        What We Ask For
                      </span>
                      <p className="text-stayra-charcoal/70 text-sm leading-relaxed">
                        {track.asks}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Terms at a Glance */}
      <section className="py-24 md:py-32 bg-stayra-ivory/40 border-t border-b border-gray-100/60">
        <div className="container mx-auto px-4 max-w-6xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">
              TERMS AT A GLANCE
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-stayra-charcoal mb-4">
              What Each Track Actually Involves.
            </h2>
            <p className="text-stayra-charcoal/60 max-w-xl mx-auto text-base md:text-lg font-sans">
              No fine print you find out about later. This is the shape of
              every collaboration, side by side.
            </p>
          </motion.div>

          {/* Desktop / tablet: full terms table */}
          <motion.div
            {...fadeUp}
            className="hidden md:block overflow-x-auto rounded-2xl shadow-lg border border-gray-100"
          >
            <table className="w-full min-w-[760px] border-collapse bg-white">
              <thead>
                <tr>
                  <th className="text-left font-sans text-xs uppercase tracking-widest text-stayra-charcoal/50 font-semibold py-5 px-6 w-1/4">
                    &nbsp;
                  </th>
                  <th className="text-left font-serif text-base text-stayra-charcoal font-medium py-5 px-6 w-1/4 border-l border-gray-100">
                    Content Creators
                  </th>
                  <th className="text-left font-serif text-base text-stayra-charcoal font-medium py-5 px-6 w-1/4 border-l border-gray-100">
                    Influencers
                  </th>
                  <th className="text-left font-serif text-base text-stayra-charcoal font-medium py-5 px-6 w-1/4 border-l border-gray-100 rounded-tr-2xl">
                    Brand &amp; B2B Partners
                  </th>
                </tr>
              </thead>
              <tbody>
                {termsRows.map((row, index) => (
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
                      <p className="text-stayra-charcoal/70 text-sm leading-relaxed">
                        {row.creators}
                      </p>
                    </td>
                    <td className="py-5 px-6 align-top border-l border-gray-100">
                      <p className="text-stayra-charcoal/70 text-sm leading-relaxed">
                        {row.influencers}
                      </p>
                    </td>
                    <td
                      className={`py-5 px-6 align-top border-l border-gray-100 ${
                        index === termsRows.length - 1
                          ? "rounded-br-2xl"
                          : ""
                      }`}
                    >
                      <p className="text-stayra-charcoal/70 text-sm leading-relaxed">
                        {row.brands}
                      </p>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile: stacked terms cards, no sideways scrolling */}
          <div className="md:hidden space-y-4">
            {termsRows.map((row, index) => (
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
                    <span className="text-[11px] uppercase tracking-widest text-stayra-gold font-semibold block mb-1.5">
                      Content Creators
                    </span>
                    <p className="text-stayra-charcoal/70 text-sm leading-relaxed">
                      {row.creators}
                    </p>
                  </div>
                  <div className="px-5 py-4">
                    <span className="text-[11px] uppercase tracking-widest text-stayra-gold font-semibold block mb-1.5">
                      Influencers
                    </span>
                    <p className="text-stayra-charcoal/70 text-sm leading-relaxed">
                      {row.influencers}
                    </p>
                  </div>
                  <div className="px-5 py-4">
                    <span className="text-[11px] uppercase tracking-widest text-stayra-gold font-semibold block mb-1.5">
                      Brand &amp; B2B Partners
                    </span>
                    <p className="text-stayra-charcoal/70 text-sm leading-relaxed">
                      {row.brands}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Workflow */}
      <section id="how-it-works" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeUp} className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">
              HOW IT WORKS
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-stayra-charcoal mb-4">
              From Pitch to Feature.
            </h2>
            <p className="text-stayra-charcoal/60 max-w-xl mx-auto text-base md:text-lg font-sans">
              Six steps, start to finish. Nothing agreed after the fact.
            </p>
          </motion.div>

          <div className="relative">
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
                    className="relative flex gap-6 md:gap-8"
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

      {/* Fit Checklist */}
      <section className="py-24 md:py-32 bg-stayra-ivory/40 border-t border-b border-gray-100/60">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div {...fadeUp} className="text-center mb-14">
            <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">
              WHAT MAKES A GOOD FIT
            </span>
            <h2 className="font-serif text-3xl md:text-5xl text-stayra-charcoal mb-4">
              No Follower Minimum. Just a Real Fit.
            </h2>
            <p className="text-stayra-charcoal/60 max-w-xl mx-auto text-base md:text-lg font-sans">
              We don&apos;t gate this by a number. Here&apos;s what we&apos;re
              actually looking for.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
            <ul className="space-y-5">
              {fitChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-stayra-gold mt-0.5 shrink-0" />
                  <span className="text-stayra-charcoal/80 text-base leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Real Homes, Real Stories — Trust */}
      <section className="py-24 md:py-32 bg-[#1A3C34] text-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <motion.div {...fadeUp}>
              <span className="text-xs uppercase tracking-[0.25em] text-stayra-gold font-bold mb-3 block">
                WHY SHOOT WITH US
              </span>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
                Real Homes, Real Stories.
                <br />
                Nothing Staged for the Camera.
              </h2>
              <p className="text-white/70 text-base md:text-lg font-sans leading-relaxed mb-4">
                We don&apos;t dress up a room for a shoot and let it go back
                to being ordinary once you&apos;ve left. What you photograph
                is what a guest actually gets — the same light, the same
                details, the same two homes we run ourselves.
              </p>
              <p className="text-white/70 text-base md:text-lg font-sans leading-relaxed">
                That&apos;s easier to shoot honestly, and it&apos;s why the
                content that comes out of a Stayra stay tends to hold up.
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
                  src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/928bf148-fb0d-40ad-9b33-71ac17aa5647.jpeg"
                  alt="A picnic spread laid out on the lawn at Kankas House"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[3/4] shadow-lg">
                <img
                  src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/3be87fe9-1097-4d06-9ed5-a88d3d169732.jpeg"
                  alt="Skewers grilling poolside at night at Kankas House"
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
              QUESTIONS CREATORS &amp; PARTNERS ASK
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-stayra-charcoal">
              Before You Pitch, Read This.
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
            Let&apos;s Start a Conversation.
          </h2>
          <p className="text-stayra-charcoal/60 text-base md:text-lg font-sans">
            Send your portfolio, channel links or brand brief. We read every
            pitch ourselves, and we&apos;ll reply honestly either way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#1A3C34] text-white hover:bg-[#1A3C34]/90 px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href="mailto:info@stayra.co"
              className="inline-flex items-center justify-center gap-2 border border-[#1A3C34] text-[#1A3C34] hover:bg-[#1A3C34] hover:text-white px-8 py-4 rounded-full text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email a Proposal
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
