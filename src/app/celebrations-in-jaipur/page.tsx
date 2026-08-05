import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbSchema } from "@/components/seo/structured-data";

export const metadata: Metadata = {
    title: "Villa for Birthday Parties & Celebrations in Jaipur",
    description:
        "Host a birthday, anniversary or small celebration at Kankas House — a private 4BHK pool villa on Delhi Road, Jaipur. Lawns for 30–50 day guests, bonfire and barbecue, chef on call.",
    alternates: { canonical: "/celebrations-in-jaipur" },
    openGraph: {
        title: "Villa for Birthday Parties & Celebrations in Jaipur",
        description:
            "Private villa celebrations in Jaipur for 30–50 guests — open lawns, private pool, bonfire and barbecue, chef on call. Book direct on WhatsApp.",
        url: "/celebrations-in-jaipur",
    },
};

const WHATSAPP =
    "https://wa.me/917340031394?text=Hi%2C%20I%20would%20like%20to%20plan%20a%20celebration%20at%20a%20Stayra%20villa";

export default function CelebrationsPage() {
    return (
        <main className="min-h-screen bg-stayra-ivory pt-28 pb-20">
            <BreadcrumbSchema items={[{ name: "Celebrations in Jaipur", path: "/celebrations-in-jaipur" }]} />
            <div className="container mx-auto px-4 max-w-3xl">
                <h1 className="font-serif text-4xl md:text-5xl text-stayra-charcoal mb-6">
                    Villa for Birthday Parties &amp; Celebrations in Jaipur
                </h1>
                <p className="font-sans text-lg text-stayra-charcoal/80 leading-relaxed mb-10">
                    Kankas House is a private four-bedroom pool villa in the forested hills off Delhi Road,
                    about an hour from central Jaipur. Ten guests sleep over; the lawns comfortably hold
                    30–50 people for the day. It suits birthdays, anniversaries, milestone dinners and
                    intimate family functions — not large banquet-scale events.
                </p>

                <h2 className="font-serif text-2xl text-stayra-charcoal mb-4">What the villa gives you</h2>
                <ul className="font-sans text-stayra-charcoal/80 space-y-2 mb-10 list-disc pl-5">
                    <li>Open, manicured lawns with picturesque sit-outs for 30–50 day guests</li>
                    <li>A private swimming pool for the group</li>
                    <li>Barbecue and bonfire setup for the evening</li>
                    <li>Four air-conditioned bedrooms, sleeping up to ten overnight</li>
                    <li>A chef on call who cooks on site, plus daily housekeeping</li>
                    <li>Board and indoor games, and complete privacy — the property is yours</li>
                </ul>

                <h2 className="font-serif text-2xl text-stayra-charcoal mb-4">Celebrations this works well for</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed mb-4">
                    Birthday parties where you want a pool and a lawn instead of a banquet hall. Anniversary
                    weekends. Small family get-togethers and reunions. Team offsites for a group that fits in
                    four bedrooms. Pre-wedding gatherings on a modest scale.
                </p>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed mb-10">
                    For two people rather than thirty, <Link href="/properties/choti-haveli" className="text-stayra-gold underline">Choti Haveli</Link>{" "}
                    on Ajmer Road is a restored one-bedroom heritage haveli built for couples, with a private
                    garden and a candlelight dinner setup on request.
                </p>

                <h2 className="font-serif text-2xl text-stayra-charcoal mb-4">Planning and approval</h2>
                <p className="font-sans text-stayra-charcoal/80 leading-relaxed mb-10">
                    Celebrations need prior approval so we can plan staffing, catering and access. Additional
                    charges may apply depending on guest count and setup. Message the concierge with your date
                    and rough numbers and you will usually hear back within two hours.
                </p>

                <div className="flex flex-wrap gap-4">
                    <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="bg-stayra-green text-white px-8 py-4 text-sm tracking-widest font-bold">
                        PLAN YOUR CELEBRATION
                    </a>
                    <Link href="/properties/kankas-house" className="border border-stayra-charcoal/30 text-stayra-charcoal px-8 py-4 text-sm tracking-widest font-bold">
                        SEE KANKAS HOUSE
                    </Link>
                </div>
            </div>
        </main>
    );
}
