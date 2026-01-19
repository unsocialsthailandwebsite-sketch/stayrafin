"use client";

import Script from "next/script";
import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export function InstagramFeed() {
    return (
        <section id="instagram" className="py-24 px-4 bg-white">
            <div className="container mx-auto text-center">
                <a href="https://www.instagram.com/stayra.in/?hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 mb-8 text-stayra-gold hover:text-stayra-green transition-colors">
                    <Instagram className="h-5 w-5" />
                    <span className="font-medium tracking-widest text-sm uppercase">@stayra.in</span>
                </a>

                <h2 className="font-serif text-3xl md:text-5xl mb-12 text-stayra-charcoal">
                    Follow Our Journey
                </h2>

                {/* Elfsight Widget */}
                <div className="mb-12 min-h-[300px]">
                    <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
                    <div className="elfsight-app-26e5b214-f0e0-4e71-af6a-f7328c7765b4" data-elfsight-app-lazy></div>
                </div>

                <a href="https://www.instagram.com/stayra.in/?hl=en" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="border-stayra-charcoal text-stayra-charcoal hover:bg-stayra-charcoal hover:text-white">
                        Follow Us on Instagram
                    </Button>
                </a>
            </div>
        </section>
    );
}
