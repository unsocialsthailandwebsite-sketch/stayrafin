import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = {
    title: "Luxury Villas in Jaipur — Private Pool & Heritage Rentals",
    description: "Rent a luxury villa in Jaipur with a private pool, chef on call and concierge. Handpicked heritage havelis and pool villas, booked direct with no platform fees.",
    alternates: { canonical: "/luxury-villas-jaipur" },
    openGraph: {
        title: "Luxury Villas in Jaipur — Private Pool & Heritage Rentals",
        description: "Rent a luxury villa in Jaipur with a private pool, chef on call and concierge. Handpicked heritage havelis and pool villas, booked direct with no platform fees.",
        url: "https://www.stayra.co/luxury-villas-jaipur",
    },
};

const faqs = [
    { question: "How much does a luxury villa in Jaipur cost per night?", answer: "Rates vary by property, season and group size. Peak season runs October to March, and weekend and festival dates carry a premium. Booking direct with Stayra avoids the 12-18% service fee that online platforms add, so message our concierge on WhatsApp for a current direct rate." },
    { question: "Do Stayra villas have private pools?", answer: "Kankas House has a private pool exclusively for guests of the villa. Choti Haveli is a heritage haveli with a private garden, indoor fish pond and lawn area rather than a pool. Confirm with our concierge when booking." },
    { question: "Is a chef included with the villa?", answer: "Yes, a chef on call is available at both properties and prepares meals privately in the villa kitchen. This typically costs far less than restaurant dining for a group and lets you eat on your own schedule." },
    { question: "How far are the villas from Jaipur airport?", answer: "Choti Haveli on Ajmer Road is the closer of the two to the airport and the old city. Kankas House near Bagwara on Delhi Road is further out in the hills. Airport transfers and a chauffeur on call can be arranged for either." },
    { question: "Can I host a birthday or small event at the villa?", answer: "Events and celebrations are permitted at select properties with prior written approval, and additional fees may apply. Contact the concierge with your guest count and dates before making arrangements." }
];

export default function Page() {
    return (
        <div className="min-h-screen bg-stayra-ivory pt-32 pb-24">
            <BreadcrumbSchema
                items={[
                    { name: "Luxury Villas in Jaipur", path: "/luxury-villas-jaipur" },
                ]}
            />
            <FAQSchema faqs={faqs} />

            {/* Hero */}
            <div className="container mx-auto px-4 max-w-4xl text-center mb-16 space-y-6">
                <span className="text-stayra-gold uppercase tracking-[0.2em] text-sm font-medium">Jaipur, Rajasthan</span>
                <h1 className="font-serif text-4xl md:text-6xl text-stayra-green leading-tight">
                    Luxury Villas in Jaipur
                </h1>
                <p className="font-sans text-lg text-stayra-charcoal/80 max-w-2xl mx-auto">
                    Private pool villas and restored heritage havelis, each with a chef on call, concierge support and airport transfers — booked directly with the people who run them.
                </p>
            </div>

            {/* Body */}
            <div className="container mx-auto px-4 max-w-3xl space-y-10">
                <section className="space-y-4">
                    <h2 className="font-serif text-3xl text-stayra-green">What Makes a Villa &lsquo;Luxury&rsquo; in Jaipur</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">Jaipur has no shortage of properties calling themselves luxury villas. The ones worth booking share four things: a genuinely private pool, staff who live on site, a full kitchen with a chef available, and enough land that you never hear a neighbour.</p>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">Stayra curates for exactly that. Every property in the collection is visited, vetted and managed by us rather than listed on our behalf — which is why there are two of them rather than two hundred.</p>
                </section>
                <section className="space-y-4">
                    <h2 className="font-serif text-3xl text-stayra-green">Where to Stay: Ajmer Road vs Delhi Road</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed"><strong>Ajmer Road</strong> is closest to the airport and the old city. <Link href="/properties/choti-haveli" className="text-stayra-gold underline underline-offset-2">Choti Haveli</Link> sits inside Emaar Greens, a gated community spread across 23 acres of greenery — a restored Rajasthani haveli with a private garden and indoor fish pond. Best for couples and small families who want heritage character within easy reach of Amber Fort and Hawa Mahal.</p>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed"><strong>Delhi Road and Kukas</strong> take you into forested hills. <Link href="/properties/kankas-house" className="text-stayra-gold underline underline-offset-2">Kankas House</Link> at Bagwara is the group property: four bedrooms, private pool, sprawling lawns and space for bonfires. Best for reunions, birthdays and weekend groups driving down from Delhi.</p>
                </section>
                <section className="space-y-4">
                    <h2 className="font-serif text-3xl text-stayra-green">What Is Included</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">Every Stayra stay includes a chef on call preparing meals in your private kitchen, daily housekeeping, high-speed WiFi and 24/7 caretaker support. Airport transfers, chauffeur on call, candlelight dinner setups and curated local experiences are arranged through our concierge on request.</p>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">For a longer read on how villas compare to hotels for a Jaipur trip, see our guide to <Link href="/blogs/villa-vs-hotel-jaipur" className="text-stayra-gold underline underline-offset-2">villas versus hotels in Jaipur</Link>.</p>
                </section>
                <section className="space-y-4">
                    <h2 className="font-serif text-3xl text-stayra-green">Booking Direct</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">Online travel platforms add roughly 12&ndash;18% in guest service fees on top of the nightly rate. Booking direct with Stayra removes that, and puts you in contact with the team who actually manage the property — so early check-ins, dietary requirements and celebration setups get answered in minutes.</p>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">Browse the full <Link href="/properties" className="text-stayra-gold underline underline-offset-2">Stayra collection</Link> or message our concierge on WhatsApp for live availability and a direct rate.</p>
                </section>

            </div>

            {/* Properties CTA */}
            <div className="container mx-auto px-4 max-w-3xl mt-16">
                <div className="bg-white p-10 rounded-2xl border border-stayra-gold/10 text-center space-y-6">
                    <h2 className="font-serif text-3xl text-stayra-green">Our Jaipur Collection</h2>
                    <p className="font-sans text-stayra-charcoal/80">
                        Two handpicked properties, booked direct with no platform fees.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/properties/choti-haveli">
                            <Button variant="outline" className="w-full sm:w-auto border-stayra-green text-stayra-green hover:bg-stayra-green hover:text-white uppercase text-xs tracking-widest">
                                Choti Haveli
                            </Button>
                        </Link>
                        <Link href="/properties/kankas-house">
                            <Button variant="outline" className="w-full sm:w-auto border-stayra-green text-stayra-green hover:bg-stayra-green hover:text-white uppercase text-xs tracking-widest">
                                Kankas House
                            </Button>
                        </Link>
                        <Link href="/properties">
                            <Button className="w-full sm:w-auto bg-stayra-green text-white hover:bg-stayra-green/90 uppercase text-xs tracking-widest">
                                View All
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* FAQ */}
            <div className="container mx-auto px-4 max-w-3xl mt-16">
                <h2 className="font-serif text-3xl text-stayra-green mb-8 text-center">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div key={faq.question} className="bg-white p-6 rounded-xl border border-stayra-gold/10">
                            <h3 className="font-serif text-lg text-stayra-green mb-2">{faq.question}</h3>
                            <p className="font-sans text-stayra-charcoal/80 text-sm leading-relaxed">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
