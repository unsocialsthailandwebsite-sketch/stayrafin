import { PropertyGrid } from "@/components/home/property-grid";
import { client } from "@/sanity/client";

import { PropertyListSchema, BreadcrumbSchema } from "@/components/seo/structured-data";

export const metadata = {
    title: "Villas in Jaipur — Private Pool & Heritage Homes",
    description:
        "Explore Stayra's handpicked Jaipur villas: Chotti Haveli, a restored heritage home on Ajmer Road, and Kankas House, a 4BHK private pool villa on Delhi Road.",
    alternates: { canonical: "/properties" },
    openGraph: {
        title: "Villas in Jaipur — Private Pool & Heritage Homes",
        description:
            "Explore Stayra's handpicked Jaipur villas: Chotti Haveli, a restored heritage home on Ajmer Road, and Kankas House, a 4BHK private pool villa on Delhi Road.",
        url: "/properties",
    },
};

// Revalidate every 60s
export const revalidate = 60;

async function getProperties() {
    try {
        return await client.fetch(`
            *[_type == "property"]{
                _id,
                title,
                "slug": slug.current,
                location,
                type,
                price,
                "image": mainImage.asset->url,
                specs
            }
        `);
    } catch {
        return [];
    }
}

export default async function PropertiesPage() {
    const properties = await getProperties();

    return (
        <main className="pt-24 pb-16">
            <PropertyListSchema
                properties={(properties || []).map((p: { title: string; slug: string }) => ({
                    name: p.title,
                    slug: p.slug,
                }))}
            />
            <BreadcrumbSchema items={[{ name: "Our Collection", path: "/properties" }]} />
            <div className="container mx-auto px-4 mb-12 text-center">
                <h1 className="font-serif text-4xl md:text-6xl text-stayra-charcoal mb-4">
                    Luxury Villas &amp; Heritage Homes in Jaipur
                </h1>
                <p className="text-gray-500 max-w-2xl mx-auto font-sans">
                    Discover our handpicked selection of exclusive properties, each offering a unique story of luxury and comfort.
                </p>
                <div className="text-gray-500 max-w-3xl mx-auto font-sans mt-6 space-y-4 text-left md:text-center">
                    <p>
                        Stayra is a small, curated collection of private villas and restored heritage havelis in and
                        around Jaipur — booked directly, never through a listing site. Every home comes with a private
                        chef on call, daily housekeeping, airport transfers and a concierge who answers in under two hours.
                    </p>
                    <p>
                        Choose Kankas House, a four-bedroom villa with a private pool, open lawns and bonfire and
                        barbecue evenings in the forested hills off Delhi Road, sleeping up to ten. Or Choti Haveli,
                        a restored one-bedroom heritage haveli on Ajmer Road built for two. Whether you are planning
                        a family weekend from Delhi, a small celebration with friends, or a quiet anniversary, there
                        is a house that fits.
                    </p>
                </div>
            </div>
            <PropertyGrid properties={properties} />
        </main>
    );
}
