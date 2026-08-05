import type { Metadata } from "next";
import { AboutContent } from "@/components/about/about-content";

export const metadata: Metadata = {
    title: "About Stayra — Luxury Villa & Heritage Stay Sanctuary in Jaipur",
    description:
        "Learn about Stayra's philosophy of curated luxury villa rentals and restored heritage havelis in Jaipur. Privacy, authentic soul, and bespoke concierge service.",
    alternates: { canonical: "/about" },
    openGraph: {
        title: "About Stayra — Luxury Villa & Heritage Stay Sanctuary in Jaipur",
        description:
            "Learn about Stayra's philosophy of curated luxury villa rentals and restored heritage havelis in Jaipur.",
        url: "/about",
    },
};

export default function AboutPage() {
    return <AboutContent />;
}
