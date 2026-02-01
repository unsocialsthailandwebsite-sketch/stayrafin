import { PropertyGrid } from "@/components/home/property-grid";
import { client } from "@/sanity/client";

export const metadata = {
    title: "Our Collection - Stayra Luxury Rentals",
    description: "Explore our curated collection of luxury villas in Jaipur.",
};

// Revalidate every 60s
export const revalidate = 60;

async function getProperties() {
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
}

export default async function PropertiesPage() {
    const properties = await getProperties();

    return (
        <main className="pt-24 pb-16">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h1 className="font-serif text-4xl md:text-6xl text-stayra-charcoal mb-4">Our Collection</h1>
                <p className="text-gray-500 max-w-2xl mx-auto font-sans">
                    Discover our handpicked selection of exclusive properties, each offering a unique story of luxury and comfort.
                </p>
            </div>
            <PropertyGrid properties={properties} />
        </main>
    );
}
