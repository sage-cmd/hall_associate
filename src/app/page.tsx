import { AboutSection } from "@/components/sections/about-section";
import { ConsultationSection } from "@/components/sections/consultation-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PracticeAreasSection } from "@/components/sections/practice-areas-section";

export default function Home() {
  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <PracticeAreasSection />
      <ConsultationSection />
    </main>
  );
}
