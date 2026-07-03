"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PropertyCard } from "@/components/home/property-card";

const PROPERTIES = [
    {
        id: "1",
        title: "Choti Haveli",
        location: "Emaar Jaipur Greens, Jaipur",
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
        id: "3",
        title: "Kankas House",
        location: "Bagwara, Delhi Road, Jaipur",
        slug: "kankas-house",
        images: [
            "https://a0.muscache.com/im/pictures/hosting/Hosting-1492613314913436518/original/4f523614-7a53-496a-abd3-08d190cd3147.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/75712882-d545-4300-b81d-3712673047b6.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/9276b2bf-52b6-43a2-8b40-b617c5347176.jpeg"
        ],
        specs: "4 Bedrooms | Sleeps 8",
        tagline: "LUXURY VILLA"
    }
];

interface PropertyGridProps {
    properties?: any[]; // Using any for MVP flexibility
}

export function PropertyGrid({ properties: fetchedProperties }: PropertyGridProps) {
    // Determine which properties to show (Fetched or Mock)
    let displayProperties = fetchedProperties && fetchedProperties.length > 0
        ? fetchedProperties.map(p => {
            const slug = p.slug?.current || p.slug;
            let images = (p.gallery && p.gallery.length > 0) ? p.gallery : (p.image ? [p.image, ...[
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
            ]);

            if (slug === 'kankas-house') {
                images = [
                    "https://a0.muscache.com/im/pictures/hosting/Hosting-1492613314913436518/original/4f523614-7a53-496a-abd3-08d190cd3147.jpeg",
                    "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/75712882-d545-4300-b81d-3712673047b6.jpeg",
                    "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/9276b2bf-52b6-43a2-8b40-b617c5347176.jpeg"
                ];
            }

            let location = p.location;
            if (slug === 'choti-haveli') location = "Emaar Jaipur Greens, Jaipur";
            if (slug === 'kankas-house') location = "Bagwara, Delhi Road, Jaipur";

            let tagline = "LUXURY STAY";
            if (slug === 'choti-haveli') tagline = "HERITAGE LUXURY";
            if (slug === 'kankas-house') tagline = "LUXURY VILLA";

            return {
                id: p._id,
                title: p.title,
                location: location,
                images: images,
                slug: slug,
                specs: p.specs || "Luxury Villa",
                tagline: tagline
            };
        })
        : PROPERTIES;

    // Force remove the-kukas-villa and make sure kankas-house is appended
    displayProperties = displayProperties.filter(p => p.slug !== 'the-kukas-villa');

    const hasKankas = displayProperties.some(p => p.slug === 'kankas-house');
    if (!hasKankas) {
        const kankasFallback = PROPERTIES.find(p => p.slug === 'kankas-house');
        if (kankasFallback) {
            displayProperties.push(kankasFallback);
        }
    }

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
