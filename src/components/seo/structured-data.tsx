/* JSON-LD structured data components */

function JsonLd({ data }: { data: object }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

export function OrganizationSchema() {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "LodgingBusiness",
                "@id": "https://www.stayra.co/#organization",
                name: "Stayra",
                alternateName: "Stayra Hospitality",
                description:
                    "Curated collection of luxury private villas and restored heritage havelis for rent in Jaipur, Rajasthan, with private chef, concierge and airport transfers.",
                url: "https://www.stayra.co",
                logo: "https://www.stayra.co/logo.png",
                image: "https://www.stayra.co/images/about-luxury-interior.png",
                telephone: "+91-73400-31394",
                email: "info@stayra.co",
                priceRange: "$$$",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Jaipur",
                    addressRegion: "Rajasthan",
                    addressCountry: "IN",
                },
                geo: {
                    "@type": "GeoCoordinates",
                    latitude: 26.9124,
                    longitude: 75.7873,
                },
                areaServed: [
                    { "@type": "City", name: "Jaipur" },
                    { "@type": "State", name: "Rajasthan" },
                    { "@type": "Country", name: "India" },
                ],
                knowsAbout: [
                    "Luxury Villa Rental",
                    "Heritage Haveli Stays",
                    "Private Pool Villas",
                    "Farm Stays",
                    "Destination Weddings",
                ],
                amenityFeature: [
                    { "@type": "LocationFeatureSpecification", name: "Private Chef", value: true },
                    { "@type": "LocationFeatureSpecification", name: "Concierge Service", value: true },
                    { "@type": "LocationFeatureSpecification", name: "Airport Transfers", value: true },
                    { "@type": "LocationFeatureSpecification", name: "Private Pool", value: true },
                ],
                sameAs: [
                    "https://www.instagram.com/stayra.in/",
                    "https://www.youtube.com/@Stayraexperience",
                ],
            }}
        />
    );
}

export function WebSiteSchema() {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.stayra.co/#website",
                url: "https://www.stayra.co",
                name: "Stayra",
                publisher: { "@id": "https://www.stayra.co/#organization" },
                inLanguage: "en-IN",
            }}
        />
    );
}

export function BreadcrumbSchema({
    items,
}: {
    items: { name: string; url: string }[];
}) {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: items.map((item, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    name: item.name,
                    item: item.url,
                })),
            }}
        />
    );
}

export function PropertySchema({
    name,
    slug,
    description,
    images,
    bedrooms,
    occupancy,
    amenities,
}: {
    name: string;
    slug: string;
    description?: string;
    images?: string[];
    bedrooms?: number;
    occupancy?: number;
    amenities?: string[];
}) {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "VacationRental",
                name,
                url: `https://www.stayra.co/properties/${slug}`,
                ...(description ? { description } : {}),
                ...(images && images.length ? { image: images.slice(0, 8) } : {}),
                containsPlace: {
                    "@type": "Accommodation",
                    ...(occupancy
                        ? { occupancy: { "@type": "QuantitativeValue", value: occupancy } }
                        : {}),
                    ...(bedrooms ? { numberOfBedrooms: bedrooms } : {}),
                },
                ...(amenities && amenities.length
                    ? {
                          amenityFeature: amenities.map((a) => ({
                              "@type": "LocationFeatureSpecification",
                              name: a,
                              value: true,
                          })),
                      }
                    : {}),
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Jaipur",
                    addressRegion: "Rajasthan",
                    addressCountry: "IN",
                },
                brand: { "@type": "Brand", name: "Stayra" },
            }}
        />
    );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: faq.answer,
                    },
                })),
            }}
        />
    );
}

export function BlogPostingSchema({
    title,
    description,
    slug,
    datePublished,
    authorName,
    image,
}: {
    title: string;
    description: string;
    slug: string;
    datePublished: string;
    authorName: string;
    image: string;
}) {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: title,
                description,
                url: `https://www.stayra.co/blogs/${slug}`,
                datePublished,
                image,
                author: {
                    "@type": "Person",
                    name: authorName,
                },
                publisher: {
                    "@type": "Organization",
                    name: "Stayra",
                    logo: {
                        "@type": "ImageObject",
                        url: "https://www.stayra.co/logo.png",
                    },
                },
            }}
        />
    );
}

