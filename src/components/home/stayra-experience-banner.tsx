"use client";

import { Crown } from "lucide-react";

export function StayraExperienceBanner() {
    return (
        <section className="bg-white py-12 px-4">
            <div className="container mx-auto max-w-4xl">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 rounded-2xl bg-[#E6F0EB] border border-[#dcece3]">
                    {/* Icon Circle */}
                    <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-full border border-stayra-green/30 flex items-center justify-center bg-white/50">
                            <Crown className="w-8 h-8 text-stayra-green" strokeWidth={1} />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                        <h3 className="font-serif text-2xl text-stayra-green">Stayra Experience</h3>
                        <p className="text-stayra-charcoal/80 text-sm md:text-base leading-relaxed font-sans max-w-2xl">
                            Enhance your stay with airport transfers, villa bookings, and extra housekeeping.
                            We can arrange spa services, private chefs, or bespoke experiences to make your getaway unforgettable.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
