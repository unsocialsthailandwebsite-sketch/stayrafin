"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function WelcomeSection() {
    return (
        <section className="py-20 lg:py-32 bg-stayra-ivory overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Text Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <span className="text-stayra-gold font-accent text-sm tracking-[0.2em] uppercase font-bold">
                                Welcome to Stayra
                            </span>
                            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stayra-green leading-tight">
                                Relax in our <br />
                                <span className="italic font-light text-stayra-gold-muted">Hotel Resort</span>
                            </h2>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-lg font-sans">
                            Experience the ultimate luxury at Stayra, where nature meets sophisticated design.
                            Our handpicked villas offer a sanctuary of peace, privacy, and unparalleled comfort.
                            Whether you seek a romantic getaway or a family retreat, we curate moments that last a lifetime.
                        </p>

                        <div className="grid grid-cols-2 gap-8 py-6">
                            <div className="space-y-2">
                                <h4 className="font-serif text-3xl text-stayra-green">50+</h4>
                                <p className="text-sm uppercase tracking-wide text-gray-500">Luxury Villas</p>
                            </div>
                            <div className="space-y-2">
                                <h4 className="font-serif text-3xl text-stayra-green">10k+</h4>
                                <p className="text-sm uppercase tracking-wide text-gray-500">Happy Guests</p>
                            </div>
                        </div>

                        <Button
                            variant="outline"
                            className="border-stayra-green text-stayra-green hover:bg-stayra-green hover:text-white px-8 py-6 uppercase tracking-widest text-xs font-bold rounded-none flex items-center gap-2"
                        >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>

                    {/* Right: Image Composition */}
                    <div className="relative order-1 lg:order-2">
                        <div className="relative z-10">
                            {/* Main huge image */}
                            <div className="relative h-[600px] w-full overflow-hidden rounded-sm shadow-2xl">
                                {/* Placeholder: Interior Shot */}
                                <img
                                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                                    alt="Luxury Interior"
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Decorative floating image */}
                        <div className="absolute -bottom-12 -left-12 z-20 w-64 h-64 border-8 border-stayra-ivory shadow-xl hidden md:block">
                            {/* Placeholder: Detail Shot */}
                            <img
                                src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=800&auto=format&fit=crop"
                                alt="Detail"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Gold decorative box */}
                        <div className="absolute top-12 -right-12 z-0 w-full h-full border-2 border-stayra-gold/30 rounded-sm hidden md:block" />
                    </div>

                </div>
            </div>
        </section>
    );
}
