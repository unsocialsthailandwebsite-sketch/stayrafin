"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PropertyCard } from "@/components/home/property-card";
import { MOCK_PROPERTIES } from "@/data/mock-properties";

const PROPERTIES = Object.entries(MOCK_PROPERTIES).map(([slug, value], index) => ({
    id: String(index + 1),
    title: value.title,
    location: value.location,
    slug: slug,
    images: value.images,
    specs: value.specs,
    tagline: value.tagline
}));

interface PropertyGridProps {
    properties?: any[]; // Using any for MVP flexibility
}

export function PropertyGrid({ properties: fetchedProperties }: PropertyGridProps) {
    // Determine which properties to show (Fetched or Mock)
    let displayProperties = fetchedProperties && fetchedProperties.length > 0
        ? fetchedProperties.map(p => {
            const slug = p.slug?.current || p.slug;
            const mock = MOCK_PROPERTIES[slug];
            
            // If mock has images (and it is not choti-haveli), use them so all images are scrollable on homepage,
            // fallback to Sanity gallery or single image
            let images = (slug !== 'choti-haveli' && mock && mock.images && mock.images.length > 0)
                ? mock.images
                : ((p.gallery && p.gallery.length > 0) ? p.gallery : (p.image ? [p.image] : []));

            let location = (mock && mock.location) ? mock.location : p.location;
            let tagline = (mock && mock.tagline) ? mock.tagline : "LUXURY STAY";
            let specs = p.specs || (mock ? mock.specs : "Luxury Villa");

            return {
                id: p._id,
                title: p.title,
                location: location,
                images: images,
                slug: slug,
                specs: specs,
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
