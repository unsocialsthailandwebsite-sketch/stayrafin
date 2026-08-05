import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = {
    title: "Book Direct — Private Villas in Jaipur, Without the Listing Site",
    description:
        "Booking a Stayra villa direct means no platform service fee, a named concierge instead of a message thread, and a chef and transfers arranged before you arrive.",
    alternates: { canonical: "/book-direct" },
    openGraph: {
        title: "Book Direct — Private Villas in Jaipur, Without the Listing Site",
        description:
            "No platform service fee, a real concierge, and the same two villas you would find listed elsewhere. Book direct on WhatsApp.",
        url: "/book-direct",
    },
};

const WHATSAPP =
    "https://wa.me/917340031394?text=Hi%2C%20I%20would%20like%20to%20book%20a%20Stayra%20villa%20direct";

export default function BookDirectPage() {
    return (
        <main className="min-h-screen bg-stayra-ivory pt-28 pb-20">
            <BreadcrumbSchema items={[{ name: "Book Direct", path: "/book-direct" }]} />
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="font-serif text-4xl md:text-5xl text-stayra-charcoal mb-6">
                    Book Direct, Not Through a Listing Site
                </h1>
                <p className="font-sans text-lg text-stayra-charcoal/80 leading-relaxed mb-10">
                    Most people find a villa on a booking platform, and platforms are good at discovery. They
                    are less good at the part that decides whether your stay is any good — who cooks, who meets
                    you at the gate, and who picks up the phone when a plan changes at ten at night.
                </p>

                <h2 className="font-serif text-2xl text-stayra-charcoal mb-4">What changes when you book direct</h2>
                <ul className="font-sans text-stayra-charcoal/80 space-y-3 mb-10 list-disc pl-5">
                    <li><strong>No platform service fee.</strong> You are paying for the house, not for the marketplace in between.</li>
                    <li><strong>A named concierge.</strong> One person on WhatsApp who knows your booking. Typical reply time is under two hours.</li>
                    <li><strong>Arranged before arrival.</strong> Chef, airport transfer, chauffeur and any celebration setup are agreed in advance rather than requested on the day.</li>
                    <li><strong>Straight answers about the property.</strong> We manage these houses, so questions about the pool, the road in, or whether the layout suits older parents get an accurate answer.</li>
                </ul>

                <h2 className="font-serif text-2xl text-stayra-charcoal mb-4">What we are not</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed mb-10">
                    Stayra is two houses in and around Jaipur, not a catalogue of hundreds. If your dates are
                    taken or your group is larger than ten staying overnight, we would rather tell you that
                    early than sell you the wrong stay.
                </p>

                <h2 className="font-serif text-2xl text-stayra-charcoal mb-4">The two houses</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed mb-10">
                    <Link href="/properties/kankas-house" className="text-stayra-gold underline">Kankas House</Link>{" "}
                    is a four-bedroom pool villa in the forested hills off Delhi Road, sleeping ten, with lawns
                    that hold 30–50 guests for a{" "}
                    <Link href="/celebrations-in-jaipur" className="text-stayra-gold underline">celebration</Link>.{" "}
                    <Link href="/properties/choti-haveli" className="text-stayra-gold underline">Choti Haveli</Link>{" "}
                    is a restored one-bedroom heritage haveli on Ajmer Road, built for two.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="bg-stayra-green text-white px-8 py-4 text-sm tracking-widest font-bold">
                        BOOK ON WHATSAPP
                    </a>
                    <Link href="/properties" className="border border-stayra-charcoal/30 text-stayra-charcoal px-8 py-4 text-sm tracking-widest font-bold">
                        SEE BOTH VILLAS
                    </Link>
                </div>
            </div>
        </main>
    );
}
