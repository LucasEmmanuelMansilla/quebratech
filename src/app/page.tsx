import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";

/**
 * Landing composition root.
 * Sections stay presentational; page orchestrates the narrative flow.
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionsSection />
        <ProcessSection />
        <DifferentialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
