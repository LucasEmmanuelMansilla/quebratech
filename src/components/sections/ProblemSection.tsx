import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { painPoints, painSection } from "@/content/marketing";

export function ProblemSection() {
  return (
    <section id="problemas" className="bg-surface py-16 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={painSection.eyebrow}
          title={painSection.title}
          description={painSection.description}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {painPoints.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.id} className="bg-white">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-secondary">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary/70 sm:text-base">
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
