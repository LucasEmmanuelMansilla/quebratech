import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getCopy } from "@/content/marketing";
import type { Audience } from "@/content/types";

type DifferentialsSectionProps = {
  audience: Audience;
};

export function DifferentialsSection({ audience }: DifferentialsSectionProps) {
  const { differentials, differentialsSection } = getCopy(audience);
  return (
    <section className="bg-surface py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={differentialsSection.eyebrow}
          title={differentialsSection.title}
          description={differentialsSection.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {differentials.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className="h-full">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-quaternary/10 text-quaternary">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-secondary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary/70">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
