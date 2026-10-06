import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/content/process";

export function HowWeWork() {
  return (
    <Section labelledBy="process-title" className="border-t border-line">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <Reveal>
          <SectionHeading
            id="process-title"
            eyebrow="How we work"
            title="How an idea becomes a business."
            lead="Four steps, and a go / no-go at the end of each one."
          />
        </Reveal>
        <Reveal delay={100}>
          <ButtonLink href="/process" variant="secondary" arrow>
            See the full process
          </ButtonLink>
        </Reveal>
      </div>

      <ol className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <Reveal as="li" key={step.name} delay={i * 90} className="border-t border-line-strong pt-6">
            <p className="flex items-baseline justify-between font-mono text-eyebrow text-ink-subtle uppercase">
              <span className="text-accent">{step.number}</span>
              <span>{step.weeks}</span>
            </p>
            <h3 className="mt-6 text-h3">{step.name}</h3>
            <p className="mt-3 text-ink-muted">{step.short}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
