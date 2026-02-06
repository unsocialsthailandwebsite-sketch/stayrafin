import { HeroSection } from "@/components/home/hero-section";
import { PhilosophySection } from "@/components/home/philosophy-section";
import { PropertyGrid } from "@/components/home/property-grid";
import { ExperienceGrid } from "@/components/home/experience-grid";
import { StayraExperienceBanner } from "@/components/home/stayra-experience-banner";
import { BookingBar } from "@/components/home/booking-bar";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { StatsSection } from "@/components/home/stats-section";
import { WhyStayraSection } from "@/components/home/why-stayra-section";
import { VideoSection } from "@/components/home/video-section";
import { client } from "@/sanity/client";

// Revalidate data every 60 seconds
export const revalidate = 60;

async function getData() {
  const settingsQuery = `*[_type == "siteSettings"][0]{
    heroHeading,
    heroSubheading
  }`;

  const propertiesQuery = `*[_type == "property"]{
    _id,
    title,
    "slug": slug.current,
    location,
    type,
    price,
    "image": mainImage.asset->url,
    "gallery": gallery[].asset->url,
    specs
  }`;
  const [settings, properties] = await Promise.all([
    client.fetch(settingsQuery),
    client.fetch(propertiesQuery)
  ]);

  return { settings, properties };
}

export default async function Home() {
  const { settings, properties } = await getData();

  return (
    <main className="min-h-screen bg-stayra-ivory">
      <HeroSection
        heading={settings?.heroHeading}
        subheading={settings?.heroSubheading}
      />
      <div className="relative z-20 -mt-20">
        <BookingBar />
      </div>
      {/* Pass fetched properties to grid, falling back to mock inside if empty */}
      <PropertyGrid properties={properties} />
      <VideoSection />
      <ExperienceGrid />
      <StayraExperienceBanner />
      <TestimonialsSection />
      <StatsSection />
      <WhyStayraSection />
    </main>
  );
}
