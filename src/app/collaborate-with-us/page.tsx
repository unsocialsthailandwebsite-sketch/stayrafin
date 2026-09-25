import type { Metadata } from "next";
import { CollaborateContent } from "@/components/collaborate/collaborate-content";

export const metadata: Metadata = {
  title: "Collaborate With Us — Creators, Influencers & Brand Partners | Stayra",
  description:
    "Collaborate with Stayra as a content creator, influencer or brand partner. Clear terms for stays, deliverables, usage rights and co-hosted events across our Jaipur properties.",
  alternates: { canonical: "/collaborate-with-us" },
  openGraph: {
    title: "Collaborate With Us — Creators, Influencers & Brand Partners | Stayra",
    description:
      "Clear terms for creators, influencers and brand partners collaborating with Stayra in Jaipur — what's provided, what's asked for, and how it works.",
  },
};

export default function CollaboratePage() {
  return <CollaborateContent />;
}
