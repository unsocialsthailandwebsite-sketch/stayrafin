import { HeroSection } from "@/components/home/hero-section";
import { BookingBar } from "@/components/home/booking-bar";
import { WelcomeSection } from "@/components/home/welcome-section";
import { PropertyGrid } from "@/components/home/property-grid";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { VideoSection } from "@/components/home/video-section";
import { ExperienceGrid } from "@/components/home/experience-grid";
import { InstagramFeed } from "@/components/home/instagram-feed";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <BookingBar />
      <WelcomeSection />
      <PropertyGrid />
      <VideoSection />
      <ExperienceGrid />
      <TestimonialsSection />
      <InstagramFeed />
    </main>
  );
}
