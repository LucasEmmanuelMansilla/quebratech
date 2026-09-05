import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCopy } from "@/content/marketing";
import type { Audience } from "@/content/types";

type ProcessSectionProps = {
  audience: Audience;
};

export function ProcessSection({ audience }: ProcessSectionProps) {
  const { processSection, processSteps } = getCopy(audience);
  return (
    <section id="proceso" className="bg-secondary py-16 text-white sm:py-24">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow={processSection.eyebrow}
          title={processSection.title}
          description={processSection.description}
        />

        <ol className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <li
                key={step.step}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-tertiary/40 hover:bg-white/10"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-[family-name:var(--font-anta)] text-3xl text-tertiary">
                    {step.step}
                  </span>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon size={18} aria-hidden />
                  </span>
                </div>
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
