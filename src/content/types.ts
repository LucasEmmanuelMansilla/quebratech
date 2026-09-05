import type { LucideIcon } from "lucide-react";

export type Audience = "comercios" | "pymes";

export type NavItem = {
  id: string;
  label: string;
};

export type Solution = {
  id: string;
  problem: string;
  title: string;
  description: string;
  outcomes: string[];
  icon: LucideIcon;
};

export type PainPoint = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Differential = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HeroCopy = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  proofPoints: string[];
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
  description: string;
};

export type CtaCopy = {
  title: string;
  description: string;
  button: string;
};

export type ContactSectionCopy = {
  eyebrow: string;
  title: string;
  description: string;
  successMessage: string;
  errorMessage: string;
};

export type ContactFormCopy = {
  companyLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitLabel: string;
};

export type SeoCopy = {
  title: string;
  description: string;
  keywords: string[];
};

export type MarketingCopy = {
  audience: Audience;
  homeHref: string;
  sourceLabel: string;
  seo: SeoCopy;
  navItems: NavItem[];
  headerCta: string;
  hero: HeroCopy;
  painSection: SectionIntro;
  painPoints: PainPoint[];
  solutionsSection: SectionIntro;
  solutions: Solution[];
  processSection: SectionIntro;
  processSteps: ProcessStep[];
  differentialsSection: SectionIntro;
  differentials: Differential[];
  ctaSection: CtaCopy;
  contactSection: ContactSectionCopy;
  contactForm: ContactFormCopy;
  footer: {
    blurb: string;
  };
};
