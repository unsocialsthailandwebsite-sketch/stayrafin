import type { Metadata } from "next";
import { PartnerContent } from "@/components/partner/partner-content";

export const metadata: Metadata = {
  title: "Partner With Us — List Your Jaipur Villa or Haveli | Stayra",
  description:
    "Partner with Stayra to have your Jaipur villa or haveli-style home professionally managed — pricing, guest vetting, daily operations and transparent payouts, handled end to end.",
  alternates: { canonical: "/partner-with-us" },
  openGraph: {
    title: "Partner With Us — List Your Jaipur Villa or Haveli | Stayra",
    description:
      "We manage two homes in Jaipur like our own. See how we can do the same for yours — pricing, guest vetting, daily operations and transparent payouts.",
  },
};

export default function PartnerPage() {
  return <PartnerContent />;
}
