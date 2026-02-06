"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

interface MapSectionProps {
    mapUrl: string;
    title?: string;
}

export function MapSection({ mapUrl, title = "Location" }: MapSectionProps) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex items-center gap-2 mb-6">
                    <MapPin className="w-5 h-5 text-stayra-gold" />
                    <h2 className="font-serif text-3xl text-stayra-charcoal">{title}</h2>
                </div>

                <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md border border-gray-100">
                    <iframe
                        src={mapUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="mt-4 flex justify-end">
                    <Button variant="outline" className="gap-2" asChild>
                        <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                            Open in Google Maps
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}
