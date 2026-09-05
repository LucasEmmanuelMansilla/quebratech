import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SolutionsSection } from "@/components/sections/SolutionsSection";
import type { Audience } from "@/content/types";

type LandingPageProps = {
  audience: Audience;
};

export function LandingPage({ audience }: LandingPageProps) {
  return (
    <>
      <Header audience={audience} />
      <main className="flex-1">
        <HeroSection audience={audience} />
        <ProblemSection audience={audience} />
        <SolutionsSection audience={audience} />
        <ProcessSection audience={audience} />
        <DifferentialsSection audience={audience} />
        <CtaSection audience={audience} />
        <ContactSection audience={audience} />
      </main>
      <Footer audience={audience} />
    </>
  );
}
