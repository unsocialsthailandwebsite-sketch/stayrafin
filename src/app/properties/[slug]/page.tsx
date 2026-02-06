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

// Revalidate data every 60 seconds
export const revalidate = 60;

// Mock Data for fallback if Sanity mock hasn't been migrated yet
const MOCK_PROPERTIES: any = {
    "choti-haveli": {
        title: "Choti Haveli",
        location: "Emaar Green, Ajmer Road",
        specs: "1 Room & Lawn | Sleeps 2-4",
        price: "Price on Request",
        description: `Choti Haveli is a restored heritage home. Experience the charm of traditional Rajasthani architecture combined with modern luxury. Located in Emaar Green, Ajmer Road, it offers a peaceful retreat while being accessible to the city.

<strong>The Space</strong>
This heritage property features a lawn, intricate carvings, and a rooftop terrace that offers panoramic views of the surroundings.

<strong>Bedroom</strong>
One spacious bedroom, uniquely designed with period furniture and modern amenities to ensure a comfortable stay.

<strong>Kitchen</strong>
Enjoy home-cooked Rajasthani meals prepared with fresh, local ingredients.`,
        features: [
            "Restored Heritage Haveli",
            "Located in Emaar Green, Ajmer Road",
            "1 Luxury Bedroom",
            "Lawn area",
            "Rooftop Terrace",
            "Home-cooked Rajasthani meals",
            "High-speed WiFi",
            "Daily Housekeeping",
            "Concierge Service"
        ],
        images: [
            "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=3264&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=3270&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=3270&auto=format&fit=crop"
        ],
        gallerySections: [],
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14234.67794364024!2d75.6322!3d26.7909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b001a96d0f7%3A0xca04df41d0abd1ff!2sEmaar%20Jaipur%20Greens!5e0!3m2!1sen!2sin"
    },
    "the-kukas-villa": {
        title: "The Kukas Villa",
        location: "Kukas, Delhi Road",
        specs: "3 Bedrooms | 27,784 sq ft | Private Pool",
        price: "Price on Request",
        description: `The Kukas Villa by Stayra is a true escape into nature, space, and stillness. Surrounded by the raw beauty of the Aravalli ranges and lush greenery on all sides, the villa offers an atmosphere that’s rare to find — no traffic noise, no city chaos, just calm.

Built on a 27,784 sq ft private estate, this fully independent villa is ideal for families, groups, celebrations, and guests who value privacy and open spaces.

<strong>The Space</strong>
Welcome to a pet-friendly 3BHK private villa in Kukas, Jaipur, where every bedroom opens to its own private balcony, and outdoor living takes centre stage. Spend your afternoons by the private swimming pool with a gentle waterfall, host memorable gatherings in the huge garden, or unwind in the private cabana as the day slows down.

<strong>Master Bedroom</strong>
The king bedroom features a window-side sitting area, a favourite spot for guests to enjoy mountain views and beautiful sunsets, especially from the second bedroom balcony as the sun dips behind the Aravallis.

<strong>Kitchen & Dining</strong>
A fully equipped kitchen is available for your convenience, along with a spacious dining area that opens up to the garden views.`,
        features: [
            "27,784 sq ft fully private green estate",
            "Uninterrupted Aravalli hill views & complete silence",
            "Huge garden suitable for gatherings up to 200 people",
            "Private swimming pool for 10–12 guests with waterfall",
            "Outdoor BBQ & large grill setup",
            "Traditional Rajasthani-style grill for authentic dishes",
            "Private cabana seating in the garden",
            "Chef available on call (advance request required)",
            "Private car available on call",
            "3 spacious bedrooms with private balconies",
            "King room with window-side sitting for sunset & mountain views",
            "42-inch TV in all bedrooms",
            "3 attached bathrooms + 1 common bathroom",
            "Pet-friendly environment",
            "Score indoor parking for up to 8 cars",
            "Zomato & Swiggy delivery available"
        ],
        images: Array.from({ length: 35 }, (_, i) => `/images/kukas-villa/kukas-${i + 1}.png`),
        gallerySections: [],
        mapUrl: "https://maps.google.com/maps?q=27.0562668,75.936313&z=15&output=embed"
    }
};

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
    // AND Force override for Choti Haveli to use latest MOCK details instead of outdated Sanity data
    if (!property || slug === 'choti-haveli' || slug === 'the-kukas-villa') {
        // If property exists but we want to override specific fields, we merge.
        if (property && (slug === 'choti-haveli' || slug === 'the-kukas-villa')) {
            const mock = MOCK_PROPERTIES[slug];
            property = {
                ...property,
                location: mock.location,
                specs: mock.specs,
                features: mock.features,
                description: mock.description,
                mapUrl: mock.mapUrl,
            };

            // Override images specifically for Kukas Villa (using local files)
            if (slug === 'the-kukas-villa') {
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
            <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-40">
                <FloatingCTA
                    propertyName={property.title}
                    whatsapp={whatsapp}
                    phone={phone}
                />
            </div>


        </div>
    );
}


