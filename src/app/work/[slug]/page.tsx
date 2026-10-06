import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { Eyebrow, SectionHeading } from "@/components/ui/section-heading";
import { getService } from "@/content/services";
import { caseStudies, getCaseStudy } from "@/content/work";
import { pageMetadata } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

// Only slugs from content/work.ts exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  return pageMetadata({
    title: `${study.title}: ${study.category} case study`,
    description: study.summary,
    path: `/work/${study.slug}`,
    image: false, // this segment has its own opengraph-image.tsx
  });
}

/**
 * The single, reusable case study template. Everything on the page comes from
 * the CaseStudy entry in src/content/work.ts.
 */
export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];

  const facts = [
    { label: "Client", value: study.client },
    { label: "Year", value: study.year },
    { label: "Duration", value: study.duration },
    { label: "Services", value: study.services.map((s) => getService(s).name).join(", ") },
  ];

  return (
    <>
      <article>
        <header className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16">
          <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[32rem]" />
          <div
            aria-hidden="true"
            className="glow-radial pointer-events-none absolute top-[-22rem] left-1/2 h-[36rem] w-[min(76rem,170vw)] -translate-x-1/2"
          />
          <Container className="relative">
            <Reveal onLoad>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-[0.9375rem] font-medium text-ink-muted transition-colors duration-(--duration-base) hover:text-ink"
              >
                <Icon name="arrow-right" className="size-4 rotate-180" />
                All work
              </Link>
            </Reveal>
            <Reveal onLoad delay={60}>
              <Eyebrow className="mt-10">
                Case study · {study.category}
              </Eyebrow>
              <h1 className="mt-5 text-display">{study.title}</h1>
              <p className="mt-8 max-w-3xl text-lead text-ink-muted">{study.tagline}</p>
            </Reveal>
            <Reveal onLoad delay={120}>
              <dl className="mt-12 grid gap-x-8 gap-y-6 border-t border-line pt-8 sm:grid-cols-2 lg:grid-cols-4">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="font-mono text-eyebrow text-ink-subtle uppercase">{f.label}</dt>
                    <dd className="mt-2 font-medium text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </Container>
        </header>

        <Container>
          <Reveal className="overflow-hidden rounded-card border border-line bg-canvas shadow-pop">
            <Image
              src={study.cover.src}
              alt={study.cover.alt}
              width={1600}
              height={1000}
              priority
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="aspect-[16/10] w-full object-cover"
            />
          </Reveal>
        </Container>

        <Section labelledBy="challenge-title" containerClassName="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <SectionHeading id="challenge-title" eyebrow="The challenge" title="Where we started." />
          </Reveal>
          <Reveal delay={100} className="space-y-6 text-lead text-ink-muted lg:col-span-8">
            {study.challenge.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </Section>

        <Section labelledBy="approach-title" className="border-t border-line">
          <Reveal>
            <SectionHeading id="approach-title" eyebrow="Our approach" title="How we got there." />
          </Reveal>
          <ol className="mt-14 grid gap-4 md:grid-cols-2">
            {study.approach.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 80}
                className="rounded-card border border-line bg-surface p-8 shadow-card sm:p-10"
              >
                <p className="flex items-center justify-between font-mono text-eyebrow uppercase">
                  <span className="text-accent">0{i + 1}</span>
                  <Link
                    href={`/services#${step.service}`}
                    className="text-ink-subtle transition-colors duration-(--duration-base) hover:text-ink"
                  >
                    {getService(step.service).name}
                  </Link>
                </p>
                <h3 className="mt-8 text-h3">{step.title}</h3>
                <p className="mt-4 text-ink-muted">{step.body}</p>
              </Reveal>
            ))}
          </ol>
        </Section>

        <section aria-labelledby="results-title" className="border-y border-line bg-surface">
          <Container className="py-section">
            <Reveal>
              <SectionHeading id="results-title" eyebrow="Results" title="What changed." />
            </Reveal>
            <dl className="mt-14 grid gap-px overflow-hidden rounded-card border border-line bg-line sm:grid-cols-3">
              {study.outcomes.map((o, i) => (
                <Reveal key={o.label} delay={i * 80} className="flex flex-col-reverse justify-end gap-3 bg-canvas p-8 sm:p-10">
                  <dt className="text-ink-muted">{o.label}</dt>
                  <dd className="text-h1 text-accent">{o.value}</dd>
                </Reveal>
              ))}
            </dl>
          </Container>
        </section>

        <Section containerClassName="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal as="figure" className="lg:col-span-8">
            <blockquote>
              <p className="text-h2 text-balance">&ldquo;{study.quote.text}&rdquo;</p>
            </blockquote>
            <figcaption className="mt-8 text-ink-muted">
              <span className="font-medium text-ink">{study.quote.name}</span>, {study.quote.role}
            </figcaption>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-4">
            <h2 className="font-mono text-eyebrow text-ink-subtle uppercase">Built with</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {study.stack.map((tech) => (
                <li key={tech} className="rounded-pill border border-line-strong px-4 py-2 text-[0.9375rem] text-ink-muted">
                  {tech}
                </li>
              ))}
            </ul>
          </Reveal>
        </Section>
      </article>

      <Section labelledBy="next-title" className="border-t border-line">
        <Reveal>
          <h2 id="next-title" className="font-mono text-eyebrow text-ink-subtle uppercase">
            Next case study
          </h2>
          <Link
            href={`/work/${next.slug}`}
            className="group mt-6 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <span>
              <span className="block font-mono text-eyebrow text-accent uppercase">{next.category}</span>
              <span className="mt-3 block text-h1 transition-colors duration-(--duration-base) group-hover:text-accent">
                {next.title}
              </span>
              <span className="mt-4 block max-w-xl text-ink-muted">{next.tagline}</span>
            </span>
            <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-colors duration-(--duration-base) group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
              <Icon name="arrow-right" className="size-5" />
            </span>
          </Link>
        </Reveal>
      </Section>

      <CtaSection title="Have a product like this in mind?" />
    </>
  );
}
