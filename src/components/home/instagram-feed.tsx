"use client";

import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613553507747-9f5312f48df9?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600596542815-e32cbee30df3?q=80&w=600&auto=format&fit=crop"
];

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

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                    {posts.map((post, index) => (
                        <div key={index} className="aspect-square relative group overflow-hidden cursor-pointer">
                            <img
                                src={post}
                                alt="Instagram Post"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <Instagram className="text-white h-8 w-8" />
                            </div>
                        </div>
                    ))}
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
