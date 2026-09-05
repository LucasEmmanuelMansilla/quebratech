"use client";

import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { getCopy } from "@/content/marketing";
import type { Audience } from "@/content/types";
import { scrollToId } from "@/lib/scroll";

type HeroSectionProps = {
  audience: Audience;
};

export function HeroSection({ audience }: HeroSectionProps) {
  const { hero } = getCopy(audience);
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-primary pt-28 text-white sm:pt-32"
    >
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-tertiary/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-10 h-64 w-64 rounded-full bg-quaternary/20 blur-3xl" />

      <Container className="relative grid items-center gap-12 pb-16 lg:grid-cols-[1.15fr_0.85fr] lg:pb-20">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-tertiary">
            {hero.eyebrow}
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              variant="accent"
              size="lg"
              onClick={() => scrollToId("contacto")}
            >
              {hero.primaryCta}
              <ArrowRight size={18} />
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => scrollToId("soluciones")}
            >
              {hero.secondaryCta}
            </Button>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-3">
            {hero.proofPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/85"
              >
                <CheckCircle2
                  className="mt-0.5 shrink-0 text-tertiary"
                  size={16}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-tertiary/30 via-transparent to-quaternary/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5 p-4 shadow-2xl shadow-black/30 backdrop-blur-sm">
            <Image
              src="/banner.svg"
              alt="Ilustración de producto digital Quebratech"
              width={520}
              height={420}
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </Container>

      <div className="h-16 bg-gradient-to-b from-primary to-surface sm:h-24" />
    </section>
  );
}
