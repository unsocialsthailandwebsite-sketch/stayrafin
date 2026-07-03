import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { HeroGallery } from "@/components/property/hero-gallery";
import { PropertyContent } from "@/components/property/content";
import { FloatingCTA } from "@/components/property/floating-cta";
import { client } from "@/sanity/client";
import { WeatherWidget } from "@/components/ui/weather-widget";
import { CategorizedGallery } from "@/components/property/categorized-gallery";
import { ScrollableGallery } from "@/components/property/scrollable-gallery";
import { StayraExperienceCard } from "@/components/ui/stayra-experience-card";
import { MapSection } from "@/components/property/map-section";
import { MobilePropertyCTA } from "@/components/property/mobile-property-cta";
import { MOCK_PROPERTIES } from "@/data/mock-properties";
import { PropertyReviews } from "@/components/property/property-reviews";

export async function generateStaticParams() {
    try {
        const slugs = await client.fetch<{ slug: { current: string } }[]>(`*[_type == "property"]{ slug }`);
        const fetchedSlugs = slugs.map((item) => item.slug.current);
        const allSlugs = Array.from(new Set([...fetchedSlugs, "choti-haveli", "kankas-house"]));
        return allSlugs.map((slug) => ({ slug }));
    } catch (e) {
        return [
            { slug: "choti-haveli" },
            { slug: "kankas-house" }
        ];
    }
}

// Revalidate data every 60 seconds
export const revalidate = 60;

async function getProperty(slug: string) {
    const query = `*[_type == "property" && slug.current == $slug][0]{
        title,
        location,
        specs,
        price,
        description,
        features,
        "images": gallery[].asset->url,
        "gallerySections": gallerySections[]{
            title,
            "images": images[].asset->url
        },
        "whatsapp": *[_type == "siteSettings"][0].whatsappNumber,
        "phone": *[_type == "siteSettings"][0].contactPhone
    }`;

    const property = await client.fetch(query, { slug });
    return property;
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Try fetch from Sanity
    let property = await getProperty(slug);

    // Fallback to MOCK_PROPERTIES if Sanity fails or returns null
    // AND Force override for mock routes to use latest details
    if (!property || slug === 'choti-haveli' || slug === 'kankas-house') {
        // If property exists but we want to override specific fields, we merge.
        if (property && (slug === 'choti-haveli' || slug === 'kankas-house')) {
            const mock = MOCK_PROPERTIES[slug];
            property = {
                ...property,
                location: mock.location,
                specs: mock.specs,
                features: mock.features,
                description: mock.description,
                mapUrl: mock.mapUrl,
            };

            // Override images specifically for all mock properties except choti-haveli
            if (slug !== 'choti-haveli' && mock && mock.images && mock.images.length > 0) {
                property.images = mock.images;
            }
        } else {
            property = MOCK_PROPERTIES[slug];
        }
    }

    if (!property) {
        notFound();
    }

    // Sanitize/Default data
    const images = property.images || [];
    const gallerySections = property.gallerySections || [];
    const whatsapp = property.whatsapp || "917340031394";
    const phone = property.phone || "+91 73400 31394";
    const reviews = MOCK_PROPERTIES[slug]?.reviews || [];

    // Filter out unwanted amenities (Temporary fix as requested by user)
    const unwantedFeatures = [
        "Sangeet & Cocktail Party Venue",
        "Farm Stay (12-15 guests)",
        "Aravalli Hill Views"
    ];

    if (property.features) {
        property.features = property.features.filter((f: string) => !unwantedFeatures.includes(f));
    }

    // Weather Logic: Default to Jaipur, switch to Kukas if location mentions it
    const isKukas = property.location?.toLowerCase().includes("kukas");
    const weatherLat = isKukas ? 27.0562 : 26.9124;
    const weatherLng = isKukas ? 75.9363 : 75.7873;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Gallery */}
            <HeroGallery images={images} />

            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8 border-b border-gray-100 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <div className="text-sm text-gray-400 mb-2 font-mono">Home / Our Collection / {property.title}</div>
                        <h1 className="font-serif text-4xl md:text-5xl text-stayra-charcoal mb-2 font-bold">{property.title}</h1>
                        <p className="text-stayra-gold font-medium tracking-wide">📍 {property.location} | {property.specs}</p>
                    </div>
                    <Button variant="outline" className="border-stayra-green text-stayra-green hover:bg-stayra-green hover:text-white transition-colors uppercase text-xs tracking-widest font-bold px-6 py-4 rounded-none w-fit">
                        Download Catalogue
                    </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <PropertyContent
                            description={property.description || ""}
                            amenities={property.features || []}
                        />

                        {/* Scrollable Gallery for ALL properties */}
                        {images.length > 0 && (
                            <div className="my-12 border-t border-b border-gray-100 py-8 relative z-10">
                                <ScrollableGallery images={images} title="Photo Gallery" />
                            </div>
                        )}

                        <div className="mt-12">
                            <StayraExperienceCard />
                        </div>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="hidden lg:block">
                        <FloatingCTA
                            propertyName={property.title}
                            whatsapp={whatsapp}
                            phone={phone}
                        />
                    </div>
                </div>
            </div>

            {/* Guest Reviews Section */}
            <PropertyReviews reviews={reviews} />

            {/* Categorized Gallery REMOVED as per request */}

            {/* Map and Weather Section */}
            <div className="border-t border-gray-100 bg-stayra-ivory/30">
                <div className="container mx-auto px-4 py-12">
                    <h2 className="font-serif text-3xl text-stayra-charcoal mb-8">Location & Weather</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                        {/* Map */}
                        <div className="rounded-xl overflow-hidden shadow-sm border border-gray-100 h-[400px]">
                            <MapSection
                                mapUrl={property.mapUrl || (isKukas ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.400553760447!2d75.8753!3d27.0367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDAyJzEyLjEiTiA3NcKwNTInMzEuMSJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.0!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDU0JzQ0LjYiTiA3NcKwNDcnMTQuMyJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin")}
                                title={`Location of ${property.title}`}
                            />
                        </div>

                        {/* Weather */}
                        <div className="h-full">
                            <WeatherWidget latitude={weatherLat} longitude={weatherLng} locationName={isKukas ? "Kukas, Jaipur" : "Jaipur City"} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Sticky CTA */}
            <MobilePropertyCTA propertyName={property.title} whatsapp={whatsapp} />



        </div >
    );
}


