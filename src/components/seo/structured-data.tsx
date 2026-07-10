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
                "@type": "Organization",
                name: "Stayra",
                url: "https://stayra.co",
                logo: "https://stayra.co/logo.png",
                telephone: "+91-73400-31394",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Jaipur",
                    addressRegion: "Rajasthan",
                    addressCountry: "IN",
                },
                sameAs: [
                    "https://www.instagram.com/stayra.in/",
                    "https://www.youtube.com/@Stayraexperience",
                ],
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
                url: `https://stayra.co/properties/${slug}`,
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
