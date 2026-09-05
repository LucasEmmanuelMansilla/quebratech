import type { Metadata } from "next";
import { LandingPage } from "@/components/landing/LandingPage";
import { getCopy } from "@/content/marketing";

const copy = getCopy("pymes");

export const metadata: Metadata = {
  title: {
    absolute: copy.seo.title,
  },
  description: copy.seo.description,
  keywords: copy.seo.keywords,
  openGraph: {
    title: copy.seo.title,
    description: copy.seo.description,
  },
};

export default function PymesPage() {
  return <LandingPage audience="pymes" />;
}
