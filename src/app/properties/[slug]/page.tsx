import { notFound } from "next/navigation";
import { HeroGallery } from "@/components/property/hero-gallery";
import { PropertyContent } from "@/components/property/content";
import { FloatingCTA } from "@/components/property/floating-cta";
import { client } from "@/sanity/client";
import { WeatherWidget } from "@/components/ui/weather-widget";
import { CategorizedGallery } from "@/components/property/categorized-gallery";
import { ScrollableGallery } from "@/components/property/scrollable-gallery";
import { StayraExperienceCard } from "@/components/ui/stayra-experience-card";

// Revalidate data every 60 seconds
export const revalidate = 60;

// Mock Data for fallback if Sanity mock hasn't been migrated yet
const MOCK_PROPERTIES: any = {
    "choti-haveli": {
        title: "Choti Haveli",
        location: "C-Scheme, Jaipur",
        specs: "4 Bedrooms | Heritage Home | City Center",
        price: "Price on Request",
        description: `Choti Haveli is a restored heritage home in the heart of Jaipur. Experience the charm of traditional Rajasthani architecture combined with modern luxury. Located in C-Scheme, it offers a peaceful retreat while being close to the city's vibrant culture and attractions.`,
        features: [
            "Restored Heritage Haveli",
            "Located in prime C-Scheme area",
            "4 Luxury Bedrooms",
            "Traditional Courtyard",
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
        gallerySections: []
    },
    "the-kukas-villa": {
        title: "The Kukas Villa",
        location: "Kukas, Jaipur",
        specs: "3 Bedrooms | 27,784 sq ft | Private Pool",
        price: "Price on Request",
        description: `The Kukas Villa by Stayra is a true escape into nature, space, and stillness. Surrounded by the raw beauty of the Aravalli ranges and lush greenery on all sides, the villa offers an atmosphere that’s rare to find — no traffic noise, no city chaos, just calm.

Built on a 27,784 sq ft private estate, this fully independent villa is ideal for families, groups, celebrations, and guests who value privacy and open spaces.

Welcome to a pet-friendly 3BHK private villa in Kukas, Jaipur, where every bedroom opens to its own private balcony, and outdoor living takes centre stage. Spend your afternoons by the private swimming pool with a gentle waterfall, host memorable gatherings in the huge garden, or unwind in the private cabana as the day slows down.

The king bedroom features a window-side sitting area, a favourite spot for guests to enjoy mountain views and beautiful sunsets, especially from the second bedroom balcony as the sun dips behind the Aravallis.`,
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
            "Secure indoor parking for up to 8 cars",
            "Zomato & Swiggy delivery available"
        ],
        images: [
            "/images/kukas/night-view-cover.jpg",
            "/images/kukas/exterior-front.jpg",
            "/images/kukas/bedroom.jpg",
            "/images/kukas/garden-wide.jpg",
            "/images/kukas/estate-view.jpg",
            "/images/kukas/bathroom.jpg"
        ],
        gallerySections: []
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
    if (!property) {
        property = MOCK_PROPERTIES[slug];
    }

    if (!property) {
        notFound();
    }

    // Sanitize/Default data
    const images = property.images || [];
    const gallerySections = property.gallerySections || [];
    const whatsapp = property.whatsapp || "917340031394";
    const phone = property.phone || "+91 73400 31394";

    // Weather Logic: Default to Jaipur, switch to Kukas if location mentions it
    const isKukas = property.location?.toLowerCase().includes("kukas");
    const weatherLat = isKukas ? 27.0367 : 26.9124;
    const weatherLng = isKukas ? 75.8753 : 75.7873;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Gallery */}
            <HeroGallery images={images} />

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
                            description={property.description || ""}
                            amenities={property.features || []}
                        />
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

            {/* Categorized Gallery Section */}
            {gallerySections.length > 0 && (
                <div className="border-t border-gray-100">
                    <CategorizedGallery sections={gallerySections} />
                </div>
            )}

            {/* Scrollable Gallery for ALL properties */}
            {images.length > 0 && (
                <div className="border-t border-gray-100">
                    <ScrollableGallery images={images} title="Property Gallery" />
                </div>
            )}

            {/* Mobile Sticky CTA */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 z-40">
                <FloatingCTA
                    propertyName={property.title}
                    whatsapp={whatsapp}
                    phone={phone}
                />
            </div>

            <WeatherWidget
                locationName={property.location || "Jaipur"}
                latitude={weatherLat}
                longitude={weatherLng}
            />
        </div>
    );
}


