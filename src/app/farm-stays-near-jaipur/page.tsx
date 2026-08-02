import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = {
    title: "Farm Stays Near Jaipur — Villas in Nature & Forested Hills",
    description: "Looking for a farm stay near Jaipur? Private villas set in forested hills and green acreage, with lawns, bonfires, a chef on call and no crowds. Book direct.",
    alternates: { canonical: "/farm-stays-near-jaipur" },
    openGraph: {
        title: "Farm Stays Near Jaipur — Villas in Nature & Forested Hills",
        description: "Looking for a farm stay near Jaipur? Private villas set in forested hills and green acreage, with lawns, bonfires, a chef on call and no crowds. Book direct.",
        url: "https://www.stayra.co/farm-stays-near-jaipur",
    },
};

const faqs = [
    { question: "How far is a farm stay from Jaipur city?", answer: "Kankas House is located at Bagwara on Delhi Road, set in forested hills outside the city centre. It is comfortably reachable by road from Jaipur airport, and airport transfers or a chauffeur on call can be arranged through the concierge." },
    { question: "Is a farm stay suitable for families with children?", answer: "Yes. Open lawns, a private pool and space to run around usually make villas easier with children than hotel rooms. A chef on call also means meal timings can work around nap and bedtime schedules." },
    { question: "Do you provide bonfire and barbecue setups?", answer: "Bonfire and barbecue evenings are a standard part of the Kankas House experience and are among the things guests mention most. Let the concierge know in advance so it is ready when you arrive." },
    { question: "What is the best season for a farm stay near Jaipur?", answer: "October to March offers the most comfortable weather, with warm days and cool evenings ideal for outdoor dining and bonfires. Summer stays are best suited to properties with a private pool." }
];

export default function Page() {
    return (
        <div className="min-h-screen bg-stayra-ivory pt-32 pb-24">
            <BreadcrumbSchema
                items={[
                    { name: "Home", url: "https://www.stayra.co/" },
                    { name: "Farm Stays Near Jaipur", url: "https://www.stayra.co/farm-stays-near-jaipur" },
                ]}
            />
            <FAQSchema faqs={faqs} />

            {/* Hero */}
            <div className="container mx-auto px-4 max-w-4xl text-center mb-16 space-y-6">
                <span className="text-stayra-gold uppercase tracking-[0.2em] text-sm font-medium">Beyond the Pink City</span>
                <h1 className="font-serif text-4xl md:text-6xl text-stayra-green leading-tight">
                    Farm Stays Near Jaipur
                </h1>
                <p className="font-sans text-lg text-stayra-charcoal/80 max-w-2xl mx-auto">
                    Green acreage, forested hills and open lawns, less than an hour from the city — with the comfort of a properly run private villa rather than a rustic guesthouse.
                </p>
            </div>

            {/* Body */}
            <div className="container mx-auto px-4 max-w-3xl space-y-10">
                <section className="space-y-4">
                    <h2 className="font-serif text-3xl text-stayra-green">Why People Search for a Farm Stay Near Jaipur</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">Jaipur is a loud, dense, wonderful city — and after two days of forts and bazaars, most visitors want green space. A farm stay gives you the quiet, the open sky and the room to breathe, without the four-hour drive that reaching Ranthambore or Udaipur requires.</p>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">The compromise most travellers hit is comfort. Genuine farm stays often mean basic bathrooms and unreliable food. A managed private villa set in acreage gives you the same landscape with staff, a chef and proper plumbing.</p>
                </section>
                <section className="space-y-4">
                    <h2 className="font-serif text-3xl text-stayra-green">What to Look For</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed"><strong>Actual land, not a photo angle.</strong> Ask how many acres and what surrounds the property. A villa on a small plot beside a highway photographs like countryside and sounds like a road.</p>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed"><strong>Outdoor infrastructure.</strong> Lawns are pleasant; a bonfire pit, barbecue setup and outdoor seating are what make the evening.</p>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed"><strong>Staff on site.</strong> Remote means little help nearby. A live-in caretaker and chef matter more the further out you go.</p>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed"><strong>Drive time honestly stated.</strong> Confirm the distance from Jaipur airport in real driving minutes, not kilometres.</p>
                </section>
                <section className="space-y-4">
                    <h2 className="font-serif text-3xl text-stayra-green">Our Pick: Kankas House, Bagwara</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed"><Link href="/properties/kankas-house" className="text-stayra-gold underline underline-offset-2">Kankas House</Link> sits amidst the forested hills of Bagwara on Delhi Road — four bedrooms, a private pool, sprawling lawns and the kind of quiet where you actually hear birds at dawn. Guests consistently mention waking to serene forest views and evenings spent on bonfire, barbecue and board games.</p>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">For something closer to the city with heritage character instead of forest, <Link href="/properties/choti-haveli" className="text-stayra-gold underline underline-offset-2">Choti Haveli</Link> on Ajmer Road sits inside a gated community set across 23 acres of greenery.</p>
                </section>
                <section className="space-y-4">
                    <h2 className="font-serif text-3xl text-stayra-green">Best Time to Visit</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">October to March is the sweet spot: warm days, cold evenings and bonfire weather. Summer months are hot in Rajasthan, which makes a private pool essential rather than a nice-to-have. Read our <Link href="/blogs/winter-in-jaipur" className="text-stayra-gold underline underline-offset-2">guide to winter in Jaipur</Link> for month-by-month detail, or our <Link href="/blogs/best-farm-stays-jaipur" className="text-stayra-gold underline underline-offset-2">farm stays roundup</Link> for more options.</p>
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
