import { HeroSection } from "@/components/home/hero-section";
import { PhilosophySection } from "@/components/home/philosophy-section";
import { PropertyGrid } from "@/components/home/property-grid";
import { ExperienceGrid } from "@/components/home/experience-grid";
import { InstagramFeed } from "@/components/home/instagram-feed";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PhilosophySection />
      <PropertyGrid />
      <ExperienceGrid />
      <InstagramFeed />
    </>
  );
}
