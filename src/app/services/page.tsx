import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Product strategy, design, engineering and launch & growth from one senior team. Hire Qubyne for the whole journey from idea to launch, or for the phase you need most.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Everything between the idea and the launch."
        lead="Four disciplines, one team. Hire us for the whole journey, or for the phase where you need the most help."
      >
        <nav aria-label="Services on this page">
          <ul className="flex flex-wrap gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`#${s.slug}`}
                  className="inline-flex h-11 items-center gap-2 rounded-pill border border-line-strong bg-surface px-5 text-[0.9375rem] font-medium text-ink transition-colors duration-(--duration-base) hover:border-ink-subtle hover:bg-raised"
                >
                  <Icon name={s.icon} className="size-4 text-accent" />
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PageHero>

      {services.map((service, i) => (
        <Section
          key={service.slug}
          id={service.slug}
          labelledBy={`${service.slug}-title`}
          className="border-t border-line"
          containerClassName="grid gap-12 lg:grid-cols-12 lg:gap-16"
        >
          <Reveal className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <p className="flex items-center gap-3 font-mono text-eyebrow text-ink-subtle uppercase">
                <span className="flex size-12 items-center justify-center rounded-control bg-accent-soft text-accent">
                  <Icon name={service.icon} className="size-6" />
                </span>
                <span>
                  <span className="text-accent">0{i + 1}</span> / {service.name}
                </span>
              </p>
              <h2 id={`${service.slug}-title`} className="mt-8 text-h2">
                <span className="sr-only">{service.name}: </span>
                {service.headline}
              </h2>
              <p className="mt-6 text-lead text-ink-muted">{service.description}</p>
            </div>
          </Reveal>

          <Reveal delay={100} className="space-y-4 lg:col-span-7">
            <div className="rounded-card border border-line bg-surface p-7 shadow-card sm:p-9">
              <h3 className="font-mono text-eyebrow text-ink-subtle uppercase">What you get</h3>
              <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {service.deliverables.map((item) => (
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
                  {service.questions.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-card border border-line bg-surface p-7 shadow-card">
                <h3 className="font-mono text-eyebrow text-ink-subtle uppercase">Typical engagement</h3>
                <dl className="mt-5 space-y-4">
                  {service.typical.map((row) => (
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

      <CtaSection
        title="Not sure which one you need?"
        lead="Most teams start with Strategy and let the scope decide the rest. Tell us where you are and we'll point you to the right phase."
      />
    </>
  );
}
