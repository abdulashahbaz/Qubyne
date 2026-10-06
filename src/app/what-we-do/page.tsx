import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { capabilities } from "@/content/capabilities";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "What we do",
  description:
    "The four disciplines Qubyne uses to build and launch its own software products: product strategy, design, engineering, and launch & growth, all in one team.",
  path: "/what-we-do",
});

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="Everything between an idea and a business."
        lead="We don't sell services. These are the four disciplines we use on every product we build and launch ourselves, and why we keep them under one roof."
      >
        <nav aria-label="Capabilities on this page">
          <ul className="flex flex-wrap gap-2">
            {capabilities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`#${c.slug}`}
                  className="inline-flex h-11 items-center gap-2 rounded-pill border border-line-strong bg-surface px-5 text-[0.9375rem] font-medium text-ink transition-colors duration-(--duration-base) hover:border-ink-subtle hover:bg-raised"
                >
                  <Icon name={c.icon} className="size-4 text-accent" />
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {capabilities.map((capability, i) => (
        <Section
          key={capability.slug}
          id={capability.slug}
          labelledBy={`${capability.slug}-title`}
          className="border-t border-line"
          containerClassName="grid gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="flex items-center gap-3 font-mono text-eyebrow text-ink-subtle uppercase">
                <span className="flex size-12 items-center justify-center rounded-control bg-accent-soft text-accent">
                  <Icon name={capability.icon} className="size-6" />
                </span>
                <span>
                  <span className="text-accent">0{i + 1}</span> / {capability.name}
                </span>
              </p>
              <h2 id={`${capability.slug}-title`} className="mt-8 text-h2">
                <span className="sr-only">{capability.name}: </span>
                {capability.headline}
              </h2>
              <p className="mt-6 text-lead text-ink-muted">{capability.description}</p>
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-4 lg:col-span-7">
            <div className="rounded-card border border-line bg-surface p-7 shadow-card sm:p-9">
              <h3 className="font-mono text-eyebrow text-ink-subtle uppercase">What this covers</h3>
              <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {capability.covers.map((item) => (
                  <li key={item} className="flex gap-3 text-ink">
                    <Icon name="check" className="mt-0.5 size-5 shrink-0 text-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-card border border-line bg-surface p-7 shadow-card">
                <h3 className="font-mono text-eyebrow text-ink-subtle uppercase">Questions we answer</h3>
                <ul className="mt-5 space-y-4 text-ink-muted">
                  {capability.questions.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-card border border-line bg-surface p-7 shadow-card">
                <h3 className="font-mono text-eyebrow text-ink-subtle uppercase">How it runs</h3>
                <dl className="mt-5 space-y-4">
                  {capability.details.map((row) => (
                    <div key={row.label}>
                      <dt className="text-sm text-ink-subtle">{row.label}</dt>
                      <dd className="mt-0.5 font-medium text-ink">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </Section>
      ))}

      <CtaSection />
    </>
  );
}
