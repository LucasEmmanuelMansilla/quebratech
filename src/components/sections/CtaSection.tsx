"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ctaSection } from "@/content/marketing";
import { scrollToId } from "@/lib/scroll";

export function CtaSection() {
  return (
    <section className="bg-white py-10 sm:py-14">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-10 text-white shadow-2xl shadow-primary/25 sm:px-10 sm:py-12">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-tertiary/30 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-12 left-10 h-40 w-40 rounded-full bg-quaternary/25 blur-2xl" />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_auto]">
            <div>
              <h2 className="max-w-2xl text-balance text-2xl font-bold tracking-tight sm:text-3xl">
                {ctaSection.title}
              </h2>
              <p className="mt-4 max-w-2xl text-pretty text-sm leading-relaxed text-white/80 sm:text-base">
                {ctaSection.description}
              </p>
            </div>
            <Button
              variant="accent"
              size="lg"
              onClick={() => scrollToId("contacto")}
            >
              {ctaSection.button}
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
