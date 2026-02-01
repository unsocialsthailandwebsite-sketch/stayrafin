"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Shield, Heart } from "lucide-react";
import Link from "next/link";

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-stayra-ivory">
            {/* Hero Section */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=3270&auto=format&fit=crop"
                    alt="Serene Villa Atmosphere"
                    fill
                    className="object-cover brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center text-center px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="max-w-4xl space-y-6"
                    >
                        <span className="text-white/90 uppercase tracking-[0.3em] text-sm font-medium">
                            Our Story
                        </span>
                        <h1 className="font-serif text-5xl md:text-7xl text-white leading-tight">
                            More Than a Stay.<br />A Sanctuary.
                        </h1>
                    </motion.div>
                </div>
            </div>

            {/* Our Origin Story */}
            <section className="py-24 px-4 container mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    <motion.div {...fadeIn} className="space-y-6">
                        <h2 className="font-serif text-4xl text-stayra-green">Born from a love for the extraordinary.</h2>
                        <div className="w-20 h-[1px] bg-stayra-gold" />
                        <div className="space-y-4 text-stayra-charcoal/80 text-lg leading-relaxed font-sans">
                            <p>
                                Stayra began with a simple observation: modern travel had lost its soul. In the rush of standardized hotels and impersonal bookings, the magic of <em>being</em> was forgotten.
                            </p>
                            <p>
                                We set out to change that. We didn't want to just offer beds; we wanted to offer moments. The quiet coffee on a heritage balcony, the sun dipping below a private infinity pool, the unseen hands that ensure your dinner is served at the perfect temperature.
                            </p>
                            <p>
                                Today, Stayra is a curated collection of India's most exquisite private villas and heritage homes. We are the bridge between the wild beauty of nature and the refined comfort of luxury.
                            </p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?q=80&w=2641&auto=format&fit=crop"
                            alt="Luxury Interior"
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Our Philosophy / Pillars */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h2 className="font-serif text-4xl text-stayra-green">The Stayra Promise</h2>
                        <p className="text-stayra-charcoal/60 text-lg">Every property in our portfolio is vetted against three non-negotiable pillars.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Shield className="w-8 h-8" />,
                                title: "Uncompromised Privacy",
                                desc: "Your time is yours alone. Our properties are secluded havens where the outside world melts away."
                            },
                            {
                                icon: <Heart className="w-8 h-8" />,
                                title: "Authentic Soul",
                                desc: "We reject the generic. From 100-year-old Havelis to architectural marvels, every Stayra home has a story to tell."
                            },
                            {
                                icon: <Star className="w-8 h-8" />,
                                title: "Impeccable Service",
                                desc: "Hospitality is an art. Our dedicated concierge and on-ground teams ensure your every whim is anticipated."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.2 }}
                                className="text-center space-y-6 group"
                            >
                                <div className="w-16 h-16 rounded-full bg-stayra-ivory flex items-center justify-center mx-auto text-stayra-gold group-hover:bg-stayra-green group-hover:text-white transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <h3 className="font-serif text-2xl text-stayra-charcoal">{item.title}</h3>
                                <p className="text-stayra-charcoal/70 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote / Vision */}
            <section className="py-32 bg-stayra-green text-white text-center px-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-stayra-gold rounded-full blur-3xl" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
                </div>

                <div className="container mx-auto relative z-10 max-w-4xl">
                    <Star className="w-8 h-8 text-stayra-gold mx-auto mb-8" />
                    <h2 className="font-serif text-4xl md:text-6xl leading-tight mb-8">
                        "Luxury is not about what you own, but how you feel. At Stayra, we design for feeling."
                    </h2>
                    <p className="font-sans text-xl text-white/80 uppercase tracking-widest">
                        — The Stayra Team
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 px-4 bg-stayra-ivory">
                <div className="container mx-auto text-center max-w-2xl space-y-8">
                    <h2 className="font-serif text-4xl text-stayra-green">Ready to experience it yourself?</h2>
                    <p className="text-stayra-charcoal/70 text-lg">
                        The perfect escape is waiting for you. All you have to do is arrive.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/properties">
                            <Button size="lg" className="bg-stayra-green text-white hover:bg-stayra-green/90 px-8 py-6 rounded-full text-base tracking-widest uppercase">
                                Explore Properties
                            </Button>
                        </Link>
                        <Link href="/contact">
                            <Button size="lg" variant="outline" className="border-stayra-green text-stayra-green hover:bg-stayra-green hover:text-white px-8 py-6 rounded-full text-base tracking-widest uppercase">
                                Contact Concierge
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
