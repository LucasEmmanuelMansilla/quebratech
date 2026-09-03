import { Check } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { solutions, solutionsSection } from "@/content/marketing";

export function SolutionsSection() {
  return (
    <section id="soluciones" className="bg-white py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={solutionsSection.eyebrow}
          title={solutionsSection.title}
          description={solutionsSection.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <Card
                key={solution.id}
                className="relative overflow-hidden border-neutral-darker/50 bg-gradient-to-br from-white to-neutral-lighter/60"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-primary/5" />
                <p className="text-sm font-semibold text-tertiary-darker">
                  {solution.problem}
                </p>
                <div className="mt-4 flex items-start gap-3">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                    <Icon size={20} aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-secondary">
                      {solution.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-secondary/70 sm:text-base">
                      {solution.description}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-2 border-t border-neutral-darker/40 pt-5">
                  {solution.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex items-center gap-2 text-sm text-secondary/80"
                    >
                      <Check
                        className="shrink-0 text-tertiary-darker"
                        size={16}
                        aria-hidden
                      />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
