import { PropertyGrid } from "@/components/home/property-grid";

export const metadata = {
    title: "Our Collection - Stayra Luxury Rentals",
    description: "Explore our curated collection of luxury villas in Jaipur.",
};

export default function PropertiesPage() {
    return (
        <main className="pt-24 pb-16">
            <div className="container mx-auto px-4 mb-12 text-center">
                <h1 className="font-serif text-4xl md:text-6xl text-stayra-charcoal mb-4">Our Collection</h1>
                <p className="text-gray-500 max-w-2xl mx-auto font-sans">
                    Discover our handpicked selection of exclusive properties, each offering a unique story of luxury and comfort.
                </p>
            </div>
            <PropertyGrid />
        </main>
    );
}
