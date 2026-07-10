import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Stayra — Curated Luxury Villas in Jaipur",
    description:
        "Stayra curates India's most characterful private villas and heritage homes, pairing authentic architecture with hotel-grade service and concierge care.",
    alternates: { canonical: "/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return children;
}
