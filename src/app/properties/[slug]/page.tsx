import { notFound } from "next/navigation";
import { HeroGallery } from "@/components/property/hero-gallery";
import { PropertyContent } from "@/components/property/content";
import { FloatingCTA } from "@/components/property/floating-cta";

// Mock Data for MVP - will be replaced by Sanity fetch
const PROPERTIES: any = {
    "choti-haveli": {
        title: "Choti Haveli",
        location: "C-Scheme, Jaipur",
        specs: "4 Bedrooms | Sleeps 8",
        images: [
            "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=3264&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=3270&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600596542815-e32cbee30df3?q=80&w=3274&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=3253&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=3270&auto=format&fit=crop"
        ],
        description: `Choti Haveli is a meticulously restored heritage property where colonial elegance meets modern comfort. The living spaces flow seamlessly from the original carved archways into contemporary lounges bathed in natural light.

    Every corner of this sanctuary has been designed to offer a retreat from the bustling city outside. The private courtyard, with its ancient neem tree, provides a cool respite during the day and a magical setting for dinners under the stars.
    
    The interiors feature a curated collection of Rajasthani art and textiles, blending the rich history of Jaipur with the understated luxury of modern living.`,
        amenities: ["WiFi High-Speed", "Pool Private", "Chef Available", "AC Climate Control", "Parking Valet", "Security 24/7"],
        whatsapp: "919876543210",
        phone: "+919876543210"
    },
    "the-kukasola": {
        title: "The Kukasola",
        location: "Jaipur Outskirts",
        specs: "3 Bedrooms | Sleeps 6",
        images: [
            "https://images.unsplash.com/photo-1613553507747-9f5312f48df9?q=80&w=2835&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=3270&auto=format&fit=crop"
        ],
        description: "A modern farmhouse luxury experience...",
        amenities: ["WiFi", "Pool", "Parking"],
        whatsapp: "919876543210",
        phone: "+919876543210"
    }
};

export default function PropertyPage({ params }: { params: { slug: string } }) {
    const property = PROPERTIES[params.slug];

    if (!property) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Gallery */}
            <HeroGallery images={property.images} />

            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8 border-b border-gray-100 pb-8">
                    <div className="text-sm text-gray-400 mb-2 font-mono">Home / Our Collection / {property.title}</div>
                    <h1 className="font-serif text-4xl md:text-5xl text-stayra-charcoal mb-2">{property.title}</h1>
                    <p className="text-stayra-gold font-medium tracking-wide">📍 {property.location} | {property.specs}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <PropertyContent
                            description={property.description}
                            amenities={property.amenities}
                        />
                    </div>

                    {/* Sidebar CTA */}
                    <div className="hidden lg:block">
                        <FloatingCTA
                            propertyName={property.title}
                            whatsapp={property.whatsapp}
                            phone={property.phone}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Sticky CTA */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-40">
                <FloatingCTA
                    propertyName={property.title}
                    whatsapp={property.whatsapp}
                    phone={property.phone}
                />
            </div>
        </div>
    );
}
