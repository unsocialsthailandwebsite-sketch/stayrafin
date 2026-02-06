"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PropertyCard } from "@/components/home/property-card";

const PROPERTIES = [
    {
        id: "1",
        title: "Choti Haveli",
        location: "C-Scheme, Jaipur",
        slug: "choti-haveli",
        images: [
            "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=3264&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=3270&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=3270&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?q=80&w=3269&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=3253&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=3274&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=3174&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=3270&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3270&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=3270&auto=format&fit=crop"
        ],
        specs: "4 Bedrooms | Sleeps 8",
        tagline: "HERITAGE LUXURY"
    },
    {
        id: "2",
        title: "The Kukas Villa",
        location: "Jaipur Outskirts",
        slug: "the-kukas-villa",
        images: [
            "/images/kukas/night-view-cover.jpg",
            "/images/kukas/exterior-front.jpg",
            "/images/kukas/garden-wide.jpg",
            "/images/kukas/bedroom.jpg",
            "/images/kukas/estate-view.jpg",
            "/images/kukas/bathroom.jpg",
            // Duplicating specifically because user requested more images and we might not have 10 unique files for Kukas yet
            // If we have more in public folder we can use them, but safe to reuse for demo or use unsplash fillers if needed.
            // I will use Unsplash for the remaining ones to ensure 10 distinct scrollable items.
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=3270&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?q=80&w=3270&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=3250&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=3270&auto=format&fit=crop"
        ],
        specs: "3 Bedrooms | Sleeps 6",
        tagline: "MODERN FARMHOUSE"
    }
];

interface PropertyGridProps {
    properties?: any[]; // Using any for MVP flexibility
}

export function PropertyGrid({ properties: fetchedProperties }: PropertyGridProps) {
    // Determine which properties to show (Fetched or Mock)
    const displayProperties = fetchedProperties && fetchedProperties.length > 0
        ? fetchedProperties.map(p => ({
            id: p._id,
            title: p.title,
            location: p.location,
            images: (p.gallery && p.gallery.length > 0) ? p.gallery : (p.image ? [p.image, ...[
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=3270&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=3270&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?q=80&w=3269&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=3253&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=3274&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=3174&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=3270&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3270&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=3270&auto=format&fit=crop"
            ]] : [
                "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=3264&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=3270&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=3270&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600596542815-2a4d9f6facb8?q=80&w=3269&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=3253&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=3274&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=3174&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=3270&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=3270&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=3270&auto=format&fit=crop"
            ]),
            slug: p.slug,
            specs: p.specs || "Luxury Villa",
            tagline: "LUXURY STAY"
        }))
        : PROPERTIES;

    return (
        <section className="py-24 bg-stayra-ivory" id="properties">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-stayra-charcoal mb-4">Our Curated Collection</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-sans">
                        Discover our handpicked selection of exclusive properties.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {displayProperties.map((property, index) => (
                        <PropertyCard key={property.id} property={property} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
