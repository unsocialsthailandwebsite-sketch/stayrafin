import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = {
    title: "Family Getaways Near Jaipur — Private Pool Villa for Families",
    description:
        "A private 4BHK pool villa in the hills off Delhi Road, an hour from Jaipur. Sleeps ten, with lawns, bonfire, barbecue and a chef on call. Ideal for a family weekend from Delhi.",
    alternates: { canonical: "/family-getaways-near-jaipur" },
    openGraph: {
        title: "Family Getaways Near Jaipur — Private Pool Villa for Families",
        description:
            "Book a whole villa for the family: four bedrooms, private pool, lawns, bonfire and barbecue, chef on call. Direct booking, no hidden fees.",
        url: "/family-getaways-near-jaipur",
    },
};

const WHATSAPP =
    "https://wa.me/917340031394?text=Hi%2C%20I%20am%20planning%20a%20family%20getaway%20near%20Jaipur";

export default function FamilyGetawaysPage() {
    return (
        <main className="min-h-screen bg-stayra-ivory pt-28 pb-20">
            <BreadcrumbSchema items={[{ name: "Family Getaways Near Jaipur", path: "/family-getaways-near-jaipur" }]} />
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="font-serif text-4xl md:text-5xl text-stayra-charcoal mb-6">
                    Family Getaways Near Jaipur
                </h1>
                <p className="font-sans text-lg text-stayra-charcoal/80 leading-relaxed mb-10">
                    Booking a whole villa changes how a family holiday feels. Nobody is split across floors of
                    a hotel, meals happen when your family is hungry rather than when a buffet opens, and
                    children can be loud in a garden that belongs to you for the weekend.
                </p>

                <h2 className="font-serif text-2xl text-stayra-charcoal mb-4">Kankas House — four bedrooms, sleeps ten</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed mb-4">
                    Set in forested hills at Bagwara, off Delhi Road, Kankas House has four air-conditioned
                    bedrooms with ensuite bathrooms and attached balconies — two on the ground floor, two
                    upstairs, which tends to matter when grandparents are travelling.
                </p>
                <ul className="font-sans text-stayra-charcoal/80 space-y-2 mb-10 list-disc pl-5">
                    <li>Private swimming pool and sprawling lawns</li>
                    <li>Barbecue and bonfire setup for the evenings</li>
                    <li>Board games and indoor games for slower afternoons</li>
                    <li>A chef on call cooking on site, and daily housekeeping</li>
                    <li>Airport transfers and a chauffeur on call</li>
                </ul>

                <h2 className="font-serif text-2xl text-stayra-charcoal mb-4">A weekend from Delhi</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed mb-10">
                    Jaipur is close enough to Delhi for a Friday-evening start and far enough to feel like
                    somewhere else. Kankas House sits outside the city, so you trade proximity to the forts
                    for quiet, hills and clean air. Families who want to be closer to Amer and the old city
                    usually build in one day of sightseeing and spend the rest at the villa.
                </p>

                <h2 className="font-serif text-2xl text-stayra-charcoal mb-4">Travelling as a couple instead?</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed mb-10">
                    <Link href="/properties/choti-haveli" className="text-stayra-gold underline">Choti Haveli</Link>{" "}
                    is a restored one-bedroom heritage haveli in a gated community on Ajmer Road, with a
                    private garden and an indoor fish pond. It sleeps two.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="bg-stayra-green text-white px-8 py-4 text-sm tracking-widest font-bold">
                        CHECK AVAILABILITY
                    </a>
                    <Link href="/properties/kankas-house" className="border border-stayra-charcoal/30 text-stayra-charcoal px-8 py-4 text-sm tracking-widest font-bold">
                        SEE KANKAS HOUSE
                    </Link>
                </div>
            </div>
        </main>
    );
}
