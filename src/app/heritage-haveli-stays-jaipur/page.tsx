import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BreadcrumbSchema, FAQSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = {
    title: "Heritage-Style Haveli Stays in Jaipur — Private Homes",
    description: "Stay in a heritage-style Rajasthani haveli in Jaipur. Private homes with gardens, a chef on call and exclusive use — the character of a haveli, the comfort of a new build.",
    alternates: { canonical: "/heritage-haveli-stays-jaipur" },
    openGraph: {
        title: "Heritage-Style Haveli Stays in Jaipur — Private Homes",
        description: "Stay in a heritage-style Rajasthani haveli in Jaipur. Private homes with gardens, a chef on call and exclusive use — the character of a haveli, the comfort of a new build.",
        url: "https://www.stayra.co/heritage-haveli-stays-jaipur",
    },
};

const faqs = [
    { question: "What is a haveli?", answer: "A haveli is a traditional Indian townhouse or mansion, typically built around one or more inner courtyards. Rajasthani havelis are known for carved facades, jharokha windows and thick walls that keep interiors cool in the desert climate." },
    { question: "Is Choti Haveli an original heritage building?", answer: "No, and we would rather say so plainly. Choti Haveli is a one-bedroom home built in the Rajasthani haveli tradition inside the Emaar Greens gated community on Ajmer Road. You get the design language — the arches, the carved detail, the garden — with modern plumbing, wiring and a fully equipped kitchen from day one." },
    { question: "Is Choti Haveli an entire private property?", answer: "Yes. Choti Haveli is let privately to a single booking, with its own garden, indoor fish pond and fully equipped private kitchen. You are not sharing the property with other guests." },
    { question: "How many people does the haveli sleep?", answer: "Choti Haveli is a one-bedroom property sleeping two, which suits couples and honeymooners. For larger groups, Kankas House on Delhi Road offers four bedrooms and a private pool." },
    { question: "Are meals available at the haveli?", answer: "Yes. A chef on call prepares meals privately in the villa kitchen, including Rajasthani specialities. Candlelight dinner setups in the garden can be arranged on request through the concierge." }
];

export default function Page() {
    return (
        <div className="min-h-screen bg-stayra-ivory pt-32 pb-24">
            <BreadcrumbSchema
                items={[
                    { name: "Heritage Haveli Stays", path: "/heritage-haveli-stays-jaipur" },
                ]}
            />
            <FAQSchema faqs={faqs} />

            {/* Hero */}
            <div className="container mx-auto px-4 max-w-4xl text-center mb-16 space-y-6">
                <span className="text-stayra-gold uppercase tracking-[0.2em] text-sm font-medium">Rajasthani Heritage</span>
                <h1 className="font-serif text-4xl md:text-6xl text-stayra-green leading-tight">
                    Heritage-Style Haveli Stays in Jaipur
                </h1>
                <p className="font-sans text-lg text-stayra-charcoal/80 max-w-2xl mx-auto">
                    Rajasthani design, private gardens and exclusive use — without sharing the property with a hotel&rsquo;s worth of other guests.
                </p>
            </div>

            {/* Body */}
            <div className="container mx-auto px-4 max-w-3xl space-y-10">
                <section className="space-y-4">
                    <h2 className="font-serif text-3xl text-stayra-green">Haveli Hotel vs Private Haveli</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">Most heritage stays in Jaipur are hotels: a beautiful old building converted into twenty rooms, with a shared courtyard, a restaurant and a lobby. You get the architecture but not the intimacy.</p>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">A private haveli is the whole building, for your group only. The garden is yours at sunrise, it is still yours at midnight, and meals are cooked for you rather than served to a dining room.</p>
                </section>
                <section className="space-y-4">
                    <h2 className="font-serif text-3xl text-stayra-green">Heritage Building or Heritage Style?</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">It is worth being clear about the difference, because plenty of listings are not. An original haveli is a period mansion, often two or three centuries old, restored at considerable expense. A heritage-style home is built new in the same tradition — the arches, the carved detail, the courtyard logic — with modern plumbing, wiring and insulation behind it.</p>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed"><Link href="/properties/choti-haveli" className="text-stayra-gold underline underline-offset-2">Choti Haveli</Link> is the second kind, and we think that is a feature rather than an apology. You get the character without the draughts, the damp or the temperamental hot water — a private garden, a tranquil indoor fish pond, a fully equipped private kitchen, and a gated community across 23 acres of greenery with round-the-clock security.</p>
                </section>
                <section className="space-y-4">
                    <h2 className="font-serif text-3xl text-stayra-green">Who a Heritage-Style Haveli Suits</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">Couples, honeymooners and small families get the most from a haveli stay. The scale is intimate rather than sprawling, and the character is in the detail — arches, garden corners and quiet mornings rather than acres of lawn.</p>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">For a larger group needing bedrooms and outdoor space, <Link href="/properties/kankas-house" className="text-stayra-gold underline underline-offset-2">Kankas House</Link> on Delhi Road is the better fit. For a destination wedding or celebration, see our guide to <Link href="/blogs/destination-wedding-villas-jaipur" className="text-stayra-gold underline underline-offset-2">destination wedding villas in Jaipur</Link>.</p>
                </section>
                <section className="space-y-4">
                    <h2 className="font-serif text-3xl text-stayra-green">Location and Sightseeing</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">Ajmer Road keeps you close to Jaipur airport and within comfortable reach of Amber Fort, Hawa Mahal, the City Palace and Jantar Mantar. Our concierge can arrange private guided tours and skip-the-line entries, or you can follow our <Link href="/blogs/ultimate-3-day-jaipur-luxury-itinerary" className="text-stayra-gold underline underline-offset-2">3-day Jaipur luxury itinerary</Link>.</p>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed">Read more on the architecture and history in our piece on <Link href="/blogs/heritage-homes-jaipur" className="text-stayra-gold underline underline-offset-2">heritage homes in Jaipur</Link>.</p>
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
