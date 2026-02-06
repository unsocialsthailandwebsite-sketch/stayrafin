"use client";

import { Crown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StayraExperienceCardProps {
    className?: string;
}

export function StayraExperienceCard({ className }: StayraExperienceCardProps) {
    return (
        <div className={cn("flex flex-col md:flex-row items-center gap-8 p-10 rounded-xl bg-[#FDFBF7] border border-[#D4C5A9]/40 shadow-sm relative overflow-hidden", className)}>
            {/* Decorative Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none" />

            {/* Icon Circle */}
            <div className="flex-shrink-0 relative z-10">
                <div className="w-20 h-20 rounded-full border border-[#D4C5A9] flex items-center justify-center bg-white shadow-sm">
                    <Crown className="w-10 h-10 text-[#BFA05A]" strokeWidth={1} />
                </div>
            </div>

            {/* Content */}
            <div className="space-y-3 text-center md:text-left relative z-10">
                <h3 className="font-serif text-3xl text-stayra-charcoal">The Stayra Promise</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-sans max-w-2xl">
                    Every stay is crafted with care. From seamless airport transfers and private chef services to curated local experiences,
                    we go the extra mile to ensure your Jaipur getaway is nothing short of extraordinary.
                </p>
            </div>
        </div>
    );
}
