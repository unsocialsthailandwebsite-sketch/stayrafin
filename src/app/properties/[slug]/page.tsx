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

    "kankas-house": {
        title: "Kankas House",
        location: "Bagwara, Delhi Road, Jaipur",
        specs: "4 Bedrooms | Private Pool | Hill Views",
        price: "Price on Request",
        description: `Nestled amidst the quiet embrace of Jaipur's forested hills, Kankas House is a sanctuary where nature's calm meets timeless elegance. The villa welcomes you with earthy interiors that radiate elemental charm, combining warmth and grandeur in every detail. Designed for both relaxation and togetherness, this retreat unfolds into open lawns and picturesque sit-outs, inviting guests to pause, breathe, and admire the surrounding views.

At its heart lies a private pool, perfect for leisurely swims or basking afternoons under the soft Rajasthani sun. As dusk descends, the ambience transforms—crackling bonfires and aromatic barbecue evenings create the ideal setting to bond with loved ones beneath a starlit sky. Indoors, a thoughtful selection of board and indoor games ensures that joy and laughter never fade, no matter the hour. Whether seeking solitude, shared moments, or simply a deeper connection with nature, Kankas House promises a stay that feels both luxurious and soulfully grounding.

<strong>The Space</strong>
Kankas House stands out as one of the top villas in Jaipur due to its serene, secluded location amidst forest and hill views, earthy interiors with elemental grandeur, private pool to relax and unwind, manicured lawn with picturesque sit-outs, and barbecue/bonfire services to bond with loved ones.

<strong>Bedrooms</strong>
The villa features 4 spacious, well-furnished bedrooms (2 on the ground floor, 2 on the first floor). Each bedroom is equipped with AC, TV, Wi-Fi, and single mattress, complete with ensuite bathrooms and attached balconies.

<strong>Bathrooms</strong>
There are 4 attached bathrooms and 1 common bathroom. All bathrooms feature geysers, towels, and basic toiletries. One of the bathrooms also features a bathtub.

<strong>Living & Dining</strong>
The villa has a spacious living room equipped with AC, TV, Wi-Fi, a sound system, a game console, and a dining area to enjoy delicious meals.

<strong>Lawn & Pool</strong>
Step outside to a manicured lawn (20x20 sq. ft) that can seat up to 50 people, perfect for outdoor gatherings. Unwind in the private outdoor pool (10 ft x 20 ft, depth 4.5 ft) or lounge in the open garden sit-out space.`,
        features: [
            "Secluded location amidst forest & hill views",
            "Earthy interiors with elemental grandeur",
            "Private outdoor swimming pool (10ft x 20ft)",
            "Manicured lawn & open garden sit-out space",
            "Outdoor BBQ & bonfire setup",
            "4 spacious bedrooms with attached balconies",
            "4 ensuite bathrooms + 1 common bathroom",
            "Bathtub in bathroom",
            "Air conditioning & TV in all rooms",
            "High-speed WiFi & Sound system",
            "Indoor & board games (with game console)",
            "Daily housekeeping & toiletries",
            "On-site parking available"
        ],
        images: [
            "https://a0.muscache.com/im/pictures/hosting/Hosting-1492613314913436518/original/4f523614-7a53-496a-abd3-08d190cd3147.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/75712882-d545-4300-b81d-3712673047b6.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/9276b2bf-52b6-43a2-8b40-b617c5347176.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/73653bf7-e972-44a4-9924-d0b47f098280.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/1c2a9fe1-ce5a-4d87-a19e-92096ddd44d6.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/826e74e7-c2d1-4e35-9f61-6e09ec0ae2e0.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/2676bc64-9834-426e-96fb-7c26d66cfc13.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/ddf4c780-9acb-4cd6-a36b-bb38296c85e7.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/d44eddf4-daac-48d4-8630-1cbb2e648e22.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/ed5b3545-9979-4fa6-8b30-8a66d538d8b3.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/d9cf01b7-f1e9-417d-95a7-014626399c68.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/51cdc42e-4316-49b7-883b-7b96196cf62a.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/24176e49-3f42-42e9-970c-bb4a4a5d3236.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/7090ac4f-9084-4361-8a3d-9553e7aa7f4d.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/bfb8d458-fd2d-40bc-a744-7b99d6805632.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/e993dd33-9979-4fc3-bcbf-0812297b720f.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/5a92a987-b864-4997-9cdb-e0305f4b5519.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/0216b83e-c586-4030-82b3-ea5f318f3dc1.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/47dc60ec-59cc-4764-a219-b2695b9d0c32.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/e494bc4b-c3a1-4c1e-b268-b08348737269.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/783f28bf-656e-401e-884f-fc50f611c11b.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/89b99163-1d05-4398-9062-87e1e23b6f58.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/434a5405-416d-4b68-9e2c-9665b52fbb94.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/58df1f5b-8436-4154-85d6-18d880e665de.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/2b4888fa-5268-44b4-b9be-e0a0fba41ce3.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/928bf148-fb0d-40ad-9b33-71ac17aa5647.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/5c3cce0a-9263-4793-9505-a3ef1c989b92.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/c2ae21de-6e4e-4438-a19d-8573f93b297d.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/16772c28-bfa5-4da4-8ca6-518c8ec05633.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/1528138c-a063-4bc5-8539-407a424ec23d.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/3be87fe9-1097-4d06-9ed5-a88d3d169732.jpeg",
            "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTQ5MjYxMzMxNDkxMzQzNjUxOA==/original/5b1ec11b-13a3-49c3-ba7d-451affd029b3.jpeg"
        ],
        gallerySections: [],
        mapUrl: "https://maps.google.com/maps?q=27.07375,75.88969&z=15&output=embed"
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

            // Override images specifically for Kankas House (using custom list)
            if (slug === 'kankas-house') {
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
            <MobilePropertyCTA propertyName={property.title} whatsapp={whatsapp} />



        </div >
    );
}


