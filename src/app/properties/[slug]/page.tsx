import { notFound } from "next/navigation";
import type { Metadata } from "next";

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
import { PropertySchema, BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data";

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

const SEO_TITLES: Record<string, string> = {
    "choti-haveli": "Chotti Haveli — Heritage Haveli Stay on Ajmer Road, Jaipur",
    "kankas-house": "Kankas House — 4BHK Private Pool Villa, Delhi Road Jaipur",
};

const SEO_DESCRIPTIONS: Record<string, string> = {
    "choti-haveli":
        "Stay in a restored Rajasthani haveli at Emaar Greens, Ajmer Road. Private garden, tranquil indoor fish pond, home-cooked meals. Book direct.",
    "kankas-house":
        "Private 4-bedroom villa in the Aravalli foothills near Jaipur: pool with waterfall, in-house chef and caretaker on site. Book direct, no platform commission.",
};

/**
 * Per-property geo coordinates and room facts for VacationRental schema.
 * Coordinates are taken from each property's Google Maps embed.
 */
const PROPERTY_GEO: Record<string, { latitude: number; longitude: number }> = {
    "choti-haveli": { latitude: 26.7909, longitude: 75.6322 },
    "kankas-house": { latitude: 27.07375, longitude: 75.88969 },
};

const PROPERTY_STREET: Record<string, string> = {
    "choti-haveli": "Emaar Jaipur Greens, Ajmer Road",
    "kankas-house": "Bagwara, Delhi Road",
};

/**
 * Short descriptor used in section headings and image alt text, so those carry
 * the location and property type rather than generic labels like "Gallery image 3".
 */
const PROPERTY_DESCRIPTOR: Record<string, string> = {
    "choti-haveli": "Heritage Haveli on Ajmer Road, Jaipur",
    "kankas-house": "4BHK Private Pool Villa on Delhi Road, Jaipur",
};

const PROPERTY_ROOMS: Record<string, { bedrooms: number; occupancy: number }> = {
    "choti-haveli": { bedrooms: 1, occupancy: 2 },
    "kankas-house": { bedrooms: 4, occupancy: 12 },
};

type PropertySpace = { name: string; meta: string; detail: string; imageIndex: number };

const PROPERTY_SPACES: Record<string, PropertySpace[]> = {
    "kankas-house": [
        {
            "name": "Bedroom One",
            "imageIndex": 8,
            "meta": "Ground floor · King · Ensuite",
            "detail": "Opens onto the lawn, a few steps from the water. Wake up, walk out, swim."
        },
        {
            "name": "Bedroom Two",
            "imageIndex": 7,
            "meta": "Ground floor · King · Ensuite",
            "detail": "Garden-facing, with its own sit-out. The quietest room in the house."
        },
        {
            "name": "Bedroom Three",
            "imageIndex": 21,
            "meta": "First floor · King · Ensuite",
            "detail": "A freestanding bathtub set against the window, with the Aravallis beyond it."
        },
        {
            "name": "Bedroom Four",
            "imageIndex": 10,
            "meta": "First floor · King · Ensuite",
            "detail": "A private balcony that catches the sunrise over the hills."
        },
        {
            "name": "The Hall",
            "imageIndex": 4,
            "meta": "Ground floor · Living",
            "detail": "Runs the width of the house. Deep seating, tall windows, and the pool just outside them."
        },
        {
            "name": "The Lounge",
            "imageIndex": 11,
            "meta": "First floor · Living",
            "detail": "Board games, cards and a console — and the best light in the house for the forty minutes before sunset."
        },
        {
            "name": "The Pool",
            "imageIndex": 1,
            "meta": "Outdoor · Private",
            "detail": "Ten by twenty feet, fed by a cascading waterfall, lit after dark."
        },
        {
            "name": "The Lawn",
            "imageIndex": 27,
            "meta": "Outdoor · Garden",
            "detail": "Barbecue, bonfire and open-air film screenings. Room for thirty to fifty for a daytime celebration."
        },
        {
            "name": "The Rooftop Patio",
            "imageIndex": 24,
            "meta": "Outdoor · Terrace",
            "detail": "Open to the sky with the hills on every side. Best at dusk."
        }
    ],
};

const PROPERTY_SERVICES: Record<string, { name: string; tag: string; detail: string }[]> = {
    "kankas-house": [
        {
            "name": "In-House Chef",
            "tag": "On site, 8am to 10pm",
            "detail": "A chef lives at the house and cooks from 8am to 10pm. Rajasthani, North Indian, or something plainer for the children. No buffet hours — you decide when to eat. Earlier breakfasts and later dinners are no trouble with a little notice."
        },
        {
            "name": "Caretaker",
            "tag": "On site, around the clock",
            "detail": "Someone is always here. A spare shawl at midnight, the bonfire lit, directions in the morning — ask rather than work it out yourself."
        },
        {
            "name": "Chauffeur on Call",
            "tag": "On request",
            "detail": "Amer is about half an hour away and the old city closer to an hour in traffic. Airport transfers arranged."
        },
        {
            "name": "Event Set-Up",
            "tag": "On request",
            "detail": "Décor, seating and lighting for birthdays, anniversaries and small gatherings on the lawn."
        },
        {
            "name": "Candlelight Dinner",
            "tag": "On request",
            "detail": "Laid out beside the pool or on the lawn, for two."
        },
        {
            "name": "Celebrations",
            "tag": "On request",
            "detail": "Cake, flowers and the parts of an evening you would rather not organise yourself."
        }
    ],
};

const PROPERTY_NEARBY: Record<string, { name: string; note: string; distance: string }[]> = {
    "kankas-house": [
        {
            "name": "Amer Fort",
            "note": "The big one. Go at opening, or come back for the evening light show.",
            "distance": "13 km"
        },
        {
            "name": "Panna Meena ka Kund",
            "note": "The symmetrical stepwell behind Amer. Empty early, busy by ten.",
            "distance": "14 km"
        },
        {
            "name": "Jaigarh Fort",
            "note": "Above Amer, holding the largest wheeled cannon ever built.",
            "distance": "15 km"
        },
        {
            "name": "Jal Mahal",
            "note": "The palace standing in Man Sagar lake. Best in the last hour of light.",
            "distance": "17 km"
        },
        {
            "name": "Hawa Mahal",
            "note": "The pink lattice facade on Badi Chaupar, in the old city.",
            "distance": "21 km"
        },
        {
            "name": "City Palace and Jantar Mantar",
            "note": "The royal quarter. Set aside half a day for both.",
            "distance": "21 km"
        },
        {
            "name": "Johari and Bapu Bazaar",
            "note": "Jewellery, block-printed textiles and juttis. Bargain properly.",
            "distance": "22 km"
        },
        {
            "name": "Albert Hall Museum",
            "note": "In Ram Niwas Garden, and worth seeing again once it is lit at night.",
            "distance": "23 km"
        },
        {
            "name": "Nahargarh Fort",
            "note": "The ridge above Jaipur. People come for the view down over the city.",
            "distance": "23 km"
        },
        {
            "name": "Jamwa Ramgarh Sanctuary",
            "note": "Forest and the old dam east of the house. Leopard country, and good birding.",
            "distance": "25 km"
        }
    ],
};

const PROPERTY_FAQS: Record<string, { question: string; answer: string }[]> = {
    "kankas-house": [
        {
            "question": "How many guests can Kankas House sleep?",
            "answer": "The villa has four bedrooms, each with a king bed and an ensuite bathroom, and sleeps up to 12 guests. There are five bathrooms in total — four ensuite and one common."
        },
        {
            "question": "Is the whole villa private?",
            "answer": "Yes. Bookings are for the entire house. You will not share the pool, the lawn or the living spaces with anyone else."
        },
        {
            "question": "Where exactly is Kankas House?",
            "answer": "Bagwara, on Delhi Road, in the Aravalli foothills north of Jaipur. Amer Fort is about 13 km away, roughly half an hour, and the old city about 21 km, closer to an hour once traffic builds."
        },
        {
            "question": "Is there a cook at the villa?",
            "answer": "Yes. A chef lives at the house and cooks from 8am to 10pm, so there are no fixed mealtimes to work around. Rajasthani, North Indian, or something simpler for the children — tell the kitchen what you want and when. If you would like breakfast before eight or dinner after ten, let us know in advance and it is arranged. A caretaker is also on site."
        },
        {
            "question": "Can we host a birthday or anniversary at Kankas House?",
            "answer": "Yes. The lawns comfortably hold thirty to fifty daytime guests for a celebration. Event set-up, décor and catering can be arranged with prior notice."
        },
        {
            "question": "Is the swimming pool private?",
            "answer": "Yes. The pool measures ten by twenty feet, is fed by a cascading waterfall and is lit at night. It is unsupervised, so children should always be accompanied by an adult."
        },
        {
            "question": "What are the check-in and check-out times?",
            "answer": "Check-in is from 2pm and check-out is by 11am. Later check-out is often possible — please ask."
        },
        {
            "question": "Is parking available?",
            "answer": "Yes, on site and free of charge."
        },
        {
            "question": "Is Wi-Fi available at the villa?",
            "answer": "Yes. High-speed Wi-Fi runs throughout the house, along with air conditioning and a television in every bedroom."
        },
        {
            "question": "What is there to do in the evening?",
            "answer": "Bonfires and barbecues on the lawn, board games and a console in the first-floor lounge, and open-air film screenings under the stars. All can be set up on request."
        },
        {
            "question": "How do I book Kankas House?",
            "answer": "Message us on WhatsApp or write to info@stayra.co. Booking direct means no platform commission and the best available rate."
        }
    ],
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const property = (await getProperty(slug)) || MOCK_PROPERTIES[slug];
    if (!property) return {};

    const title = SEO_TITLES[slug] ?? `${property.title} — Luxury Villa in Jaipur`;
    const description =
        SEO_DESCRIPTIONS[slug] ??
        (typeof property.description === "string" && property.description
            ? property.description.slice(0, 158)
            : "A curated Stayra luxury stay in Jaipur. Private chef, concierge and direct booking on WhatsApp.");
    const firstImage = property.images?.[0];

    return {
        title,
        description,
        alternates: { canonical: `/properties/${slug}` },
        openGraph: {
            title,
            description,
            ...(firstImage ? { images: [firstImage] } : {}),
        },
    };
}

async function getProperty(slug: string) {
    try {
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
    } catch {
        return null;
    }
}

export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const spaces = PROPERTY_SPACES[slug] ?? [];
    const services = PROPERTY_SERVICES[slug] ?? [];
    const faqs = PROPERTY_FAQS[slug] ?? [];
    const nearby = PROPERTY_NEARBY[slug] ?? [];

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
                brochureUrl: mock.brochureUrl,
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
    const brochureUrl = property.brochureUrl || MOCK_PROPERTIES[slug]?.brochureUrl || "/brochure.pdf";
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

    const descriptor = PROPERTY_DESCRIPTOR[slug] ?? "Luxury Villa in Jaipur";
    const photoLabel = `${property.title} — ${descriptor}`;

    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbSchema
                items={[
                    { name: "Our Properties", path: "/properties" },
                    { name: property.title, path: `/properties/${slug}` },
                ]}
            />
            <PropertySchema
                name={property.title}
                slug={slug}
                description={typeof property.description === "string" ? property.description : undefined}
                images={images}
                amenities={property.features || []}
                geo={PROPERTY_GEO[slug]}
                streetAddress={PROPERTY_STREET[slug]}
                bedrooms={PROPERTY_ROOMS[slug]?.bedrooms}
                occupancy={PROPERTY_ROOMS[slug]?.occupancy}
            />
            <BreadcrumbSchema
                items={[
                    { name: "Our Collection", path: "/properties" },
                    { name: property.title, path: `/properties/${slug}` },
                ]}
            />
            {/* Hero Gallery */}
            <HeroGallery images={images} propertyName={photoLabel} />

            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8 border-b border-gray-100 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <div className="text-sm text-gray-400 mb-2 font-mono">Home / Our Collection / {property.title}</div>
                        <h1 className="font-serif text-4xl md:text-5xl text-stayra-charcoal mb-2 font-bold">{property.title}</h1>
                        <p className="text-stayra-gold font-medium tracking-wide">📍 {property.location} | {property.specs}</p>
                    </div>
                    <a
                        href={brochureUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-flex items-center justify-center border border-stayra-green text-stayra-green hover:bg-stayra-green hover:text-white transition-colors uppercase text-xs tracking-widest font-bold px-6 py-4 rounded-none w-fit cursor-pointer"
                    >
                        Download Catalogue
                    </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <PropertyContent
                            description={property.description || ""}
                            amenities={property.features || []}
                            aboutHeading={`About ${property.title} — ${descriptor}`}
                            amenitiesHeading={`Amenities at ${property.title}`}
                        />

                        {/* Scrollable Gallery for ALL properties */}
                        {images.length > 0 && (
                            <div className="my-12 border-t border-b border-gray-100 py-8 relative z-10">
                                <ScrollableGallery
                                    images={images}
                                    title={`Photos of ${property.title}`}
                                    propertyName={photoLabel}
                                />
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
                            brochureUrl={brochureUrl}
                        />
                    </div>
                </div>
            </div>

            {/* Guest Reviews Section */}
            {spaces.length > 0 && (
                <section className="border-t border-gray-100 bg-white">
                    <div className="max-w-7xl mx-auto px-4 py-16">
                        <h2 className="font-serif text-3xl text-stayra-charcoal">The Spaces</h2>
                        <p className="text-gray-500 mt-2 mb-10">Room by room, floor by floor.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                            {spaces.map((space) => (
                                <div key={space.name} className="group">
                                    {images[space.imageIndex] && (
                                        <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-gray-100 mb-4">
                                            <img
                                                src={images[space.imageIndex]}
                                                alt={`${photoLabel} — ${space.name}`}
                                                loading="lazy"
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    )}
                                    <h3 className="font-serif text-xl text-stayra-charcoal">{space.name}</h3>
                                    <p className="text-[11px] uppercase tracking-widest text-stayra-gold mt-1">{space.meta}</p>
                                    <p className="text-gray-600 leading-relaxed mt-3">{space.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {services.length > 0 && (
                <section className="border-t border-gray-100 bg-stayra-ivory/40">
                    <div className="max-w-7xl mx-auto px-4 py-16">
                        <h2 className="font-serif text-3xl text-stayra-charcoal">The Stayra Experience</h2>
                        <p className="text-gray-500 mt-2 mb-10">Some of it is always here. The rest we arrange with notice.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
                            {services.map((service) => (
                                <div key={service.name} className="border-t border-stayra-gold/40 pt-5">
                                    <h3 className="font-serif text-xl text-stayra-charcoal">{service.name}</h3>
                                    <p className="text-[11px] uppercase tracking-widest text-stayra-gold mt-1">{service.tag}</p>
                                    <p className="text-gray-600 leading-relaxed mt-3">{service.detail}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <PropertyReviews reviews={reviews} />

            {/* Categorized Gallery REMOVED as per request */}

            {/* Map and Weather Section */}
            <div className="border-t border-gray-100 bg-stayra-ivory/30">
                <div className="container mx-auto px-4 py-12">
                    <h2 className="font-serif text-3xl text-stayra-charcoal mb-8">
                        {property.title} Location &amp; Weather in Jaipur
                    </h2>
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
            {nearby.length > 0 && (
                <section className="border-t border-gray-100 bg-white">
                    <div className="max-w-7xl mx-auto px-4 py-16">
                        <h2 className="font-serif text-3xl text-stayra-charcoal">Nearby</h2>
                        <p className="text-gray-500 mt-2 mb-10">Approximate road distances from the gate.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14">
                            {nearby.map((place) => (
                                <div key={place.name} className="flex items-baseline justify-between gap-6 border-b border-gray-100 py-4">
                                    <div>
                                        <h3 className="text-stayra-charcoal font-medium">{place.name}</h3>
                                        <p className="text-gray-500 text-sm mt-1">{place.note}</p>
                                    </div>
                                    <span className="text-stayra-gold text-sm whitespace-nowrap shrink-0">{place.distance}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-gray-500 mt-8">Jaipur International Airport is roughly 36 km and Jaipur Junction 29 km. Delhi Road runs past the gate, so the drive in is straightforward.</p>
                    </div>
                </section>
            )}

            {faqs.length > 0 && (
                <>
                    <FAQSchema faqs={faqs} />
                    <section className="border-t border-gray-100 bg-white">
                        <div className="max-w-4xl mx-auto px-4 py-16">
                            <h2 className="font-serif text-3xl text-stayra-charcoal mb-10">Frequently Asked Questions</h2>
                            <div className="divide-y divide-gray-100 border-t border-gray-100">
                                {faqs.map((faq) => (
                                    <details key={faq.question} className="group py-5">
                                        <summary className="flex items-start justify-between gap-8 cursor-pointer list-none font-medium text-stayra-charcoal">
                                            <span>{faq.question}</span>
                                            <span className="text-stayra-gold text-2xl leading-none shrink-0 transition-transform duration-200 group-open:rotate-45">+</span>
                                        </summary>
                                        <p className="text-gray-600 leading-relaxed mt-3 pr-12">{faq.answer}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            <MobilePropertyCTA propertyName={property.title} whatsapp={whatsapp} brochureUrl={brochureUrl} />



        </div >
    );
}


