/* JSON-LD structured data components */

import { SITE_URL, absoluteUrl } from "@/lib/site";

/**
 * Google's holiday-rental structured data rejects HTML inside `description`.
 * Property copy is authored with inline tags, so strip them before emitting.
 */
function stripHtml(value: string) {
    return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function JsonLd({ data }: { data: object }) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

const ORG_ID = `${SITE_URL}/#organization`;

export function OrganizationSchema() {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": ["Organization", "LodgingBusiness"],
                        "@id": ORG_ID,
                        name: "Stayra",
                        legalName: "Stayra Hospitality Pvt. Ltd.",
                        url: SITE_URL,
                        logo: {
                            "@type": "ImageObject",
                            url: absoluteUrl("/logo.png"),
                        },
                        image: absoluteUrl("/logo.png"),
                        description:
                            "Stayra curates private luxury villa rentals and restored heritage havelis in Jaipur, with private chef, concierge and airport transfers.",
                        telephone: "+91-73400-31394",
                        email: "info@stayra.co",
                        priceRange: "$$$",
                        areaServed: {
                            "@type": "City",
                            name: "Jaipur",
                        },
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
                    },
                    {
                        "@type": "WebSite",
                        "@id": `${SITE_URL}/#website`,
                        url: SITE_URL,
                        name: "Stayra",
                        publisher: { "@id": ORG_ID },
                        inLanguage: "en-IN",
                    },
                ],
            }}
        />
    );
}

export function WebSiteSchema() {
    return null;
}

/** Breadcrumb trail. Pass items in order, excluding the site root. */
export function BreadcrumbSchema({
    items,
}: {
    items: { name: string; path: string }[];
}) {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: SITE_URL,
                    },
                    ...items.map((item, i) => ({
                        "@type": "ListItem",
                        position: i + 2,
                        name: item.name,
                        item: absoluteUrl(item.path),
                    })),
                ],
            }}
        />
    );
}

/** Listing page: tells Google the collection and its members. */
export function PropertyListSchema({
    properties,
}: {
    properties: { name: string; slug: string }[];
}) {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "ItemList",
                name: "Stayra Villas in Jaipur",
                numberOfItems: properties.length,
                itemListElement: properties.map((p, i) => ({
                    "@type": "ListItem",
                    position: i + 1,
                    url: absoluteUrl(`/properties/${p.slug}`),
                    name: p.name,
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
    geo,
    streetAddress,
    petsAllowed,
}: {
    name: string;
    slug: string;
    description?: string;
    images?: string[];
    bedrooms?: number;
    occupancy?: number;
    amenities?: string[];
    geo?: { latitude: number; longitude: number };
    streetAddress?: string;
    petsAllowed?: boolean;
}) {
    return (
        <JsonLd
            data={{
                "@context": "https://schema.org",
                "@type": "VacationRental",
                "@id": absoluteUrl(`/properties/${slug}/#lodging`),
                name,
                url: absoluteUrl(`/properties/${slug}`),
                // Required by Google's holiday-rental spec, and it must be Text —
                // a PropertyValue object is rejected as "Invalid value type".
                identifier: slug,
                ...(description ? { description: stripHtml(description) } : {}),
                ...(images && images.length ? { image: images.slice(0, 8) } : {}),
                containsPlace: {
                    "@type": "Accommodation",
                    ...(occupancy
                        ? { occupancy: { "@type": "QuantitativeValue", value: occupancy } }
                        : {}),
                    ...(bedrooms ? { numberOfBedrooms: bedrooms } : {}),
                },
                ...(bedrooms ? { numberOfRooms: bedrooms } : {}),
                ...(typeof petsAllowed === "boolean" ? { petsAllowed } : {}),
                checkinTime: "14:00",
                checkoutTime: "11:00",
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
                    ...(streetAddress ? { streetAddress } : {}),
                    addressLocality: "Jaipur",
                    addressRegion: "Rajasthan",
                    addressCountry: "IN",
                },
                ...(geo
                    ? {
                          geo: {
                              "@type": "GeoCoordinates",
                              latitude: geo.latitude,
                              longitude: geo.longitude,
                          },
                      }
                    : {}),
                brand: { "@type": "Brand", name: "Stayra" },
                provider: { "@id": ORG_ID },
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
    dateModified,
    authorName,
    image,
}: {
    title: string;
    description: string;
    slug: string;
    datePublished: string;
    dateModified?: string;
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
                url: absoluteUrl(`/blogs/${slug}`),
                mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": absoluteUrl(`/blogs/${slug}`),
                },
                datePublished,
                dateModified: dateModified ?? datePublished,
                image,
                author: {
                    "@type": "Person",
                    name: authorName,
                },
                publisher: { "@id": ORG_ID },
            }}
        />
    );
}
