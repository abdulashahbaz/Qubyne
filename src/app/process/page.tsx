import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs, principles, processSteps } from "@/content/process";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Process",
  description:
    "How Qubyne turns an idea into a launched product in four steps (define, design, build, launch), with a weekly demo and a go / no-go decision at the end of every step.",
  path: "/process",
});

const columns = [
  { key: "whatHappens", label: "What happens" },
  { key: "outputs", label: "What comes out" },
  { key: "signals", label: "What we look for" },
] as const;

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }}
      />

      <PageHero
        eyebrow="Process"
        title="How an idea becomes a business."
        lead="Four steps, each ending in a go / no-go. This is exactly how we decide what gets built, how it gets built, and what earns a launch."
      />

      {processSteps.map((step) => (
        <Section
          key={step.name}
          labelledBy={`step-${step.number}`}
          className="border-t border-line"
          containerClassName="grid gap-10 lg:grid-cols-12 lg:gap-16"
        >
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <p className="font-mono text-eyebrow text-ink-subtle uppercase">
                <span className="text-accent">{step.number}</span> · {step.weeks}
              </p>
              <h2 id={`step-${step.number}`} className="mt-5 text-h2">
                {step.name}
              </h2>
              <p className="mt-5 text-lead text-ink-muted">{step.summary}</p>
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-4 lg:col-span-8">
            <div className="grid gap-4 md:grid-cols-3">
              {columns.map((col) => (
                <div key={col.key} className="rounded-card border border-line bg-surface p-6 shadow-card">
                  <h3 className="font-mono text-eyebrow text-ink-subtle uppercase">{col.label}</h3>
                  <ul className="mt-5 space-y-3.5">
                    {step[col.key].map((item) => (
                      <li key={item} className="flex gap-3 text-[0.9375rem] text-ink-muted">
                        <Icon name="check" className="mt-0.5 size-4 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-4 rounded-card border border-accent-line bg-surface p-6">
              <span className="font-mono text-eyebrow whitespace-nowrap text-accent uppercase">Go / no-go</span>
              <p className="text-ink">{step.gate}</p>
            </div>
          </Reveal>
        </Section>
      ))}

      <Section labelledBy="principles-title" className="border-t border-line">
        <Reveal>
          <SectionHeading
            id="principles-title"
            eyebrow="Ways of working"
            title="How we run every product."
            lead="The process only works with some ground rules. These are ours."
          />
        </Reveal>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal
              as="li"
              key={p.title}
              delay={i * 80}
              className="rounded-card border border-line bg-surface p-8 shadow-card"
            >
              <h3 className="text-h3">{p.title}</h3>
              <p className="mt-3 text-ink-muted">{p.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section labelledBy="faq-title" className="border-t border-line" containerClassName="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <SectionHeading id="faq-title" eyebrow="FAQ" title="Questions we get asked." />
        </Reveal>
        <Reveal delay={100} className="lg:col-span-8">
          <div className="divide-y divide-line border-y border-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-6 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 rounded-sm text-h3">
                  {f.q}
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink-muted transition-colors duration-(--duration-base) group-hover:text-ink">
                    <Icon name="plus" className="size-4 transition-transform duration-(--duration-base) ease-smooth group-open:rotate-45" />
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl text-ink-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </Section>

      <CtaSection />
    </>
  );
}
