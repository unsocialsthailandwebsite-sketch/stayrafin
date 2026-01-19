"use client";

import { Play } from "lucide-react";

export function VideoSection() {
    return (
        <section className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image (Parallax Placeholder) */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2970&auto=format&fit=crop')" }}
            >
                <div className="absolute inset-0 bg-black/30" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-8 px-4">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto cursor-pointer hover:bg-stayra-gold transition-colors duration-300 group">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center group-hover:scale-90 transition-transform">
                        <Play className="w-5 h-5 md:w-6 md:h-6 text-stayra-green ml-1" fill="currentColor" />
                    </div>
                </div>

                <div className="space-y-2">
                    <span className="text-white/90 font-accent text-sm tracking-[0.3em] uppercase block">
                        Discover
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl text-white">
                        The Stayra Experience
                    </h2>
                </div>
            </div>
        </section>
    );
}
