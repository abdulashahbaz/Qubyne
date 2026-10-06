import { CaseStudyCard } from "@/components/case-study-card";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { caseStudies } from "@/content/work";
import { pageMetadata } from "@/lib/seo";

const hasWork = caseStudies.length > 0;

export const metadata = pageMetadata({
  title: "Work",
  description: hasWork
    ? "The products Qubyne has designed, built and launched, and what we learned along the way."
    : "Qubyne is building its first products. Their stories will appear here as each one launches.",
  path: "/work",
  noindex: !hasWork, // an empty page shouldn't compete in search results
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title={hasWork ? "Products we've launched." : "Our first products are on the way."}
        lead={
          hasWork
            ? "What we built, why, and what happened after launch."
            : "We're heads-down building. When a product launches, its story (what we made, why, and how it went) will live here."
        }
      />

      <Section className="pt-0 sm:pt-0">
        {hasWork ? (
          <ul aria-label="Case studies" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, i) => (
              <Reveal as="li" key={study.slug} delay={i * 100}>
                <CaseStudyCard study={study} priority headingLevel="h2" />
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal className="rounded-card border border-dashed border-line-strong bg-surface px-6 py-16 text-center sm:py-24">
            <h2 className="mx-auto max-w-xl text-h3">Nothing to show yet, and we&rsquo;d rather say so than make something up.</h2>
            <p className="mx-auto mt-4 max-w-lg text-ink-muted">
              Want to hear first when something ships? Tell us and we&rsquo;ll let you know. In the meantime, here&rsquo;s how
              we decide what gets built.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact" arrow>
                Get in touch
              </ButtonLink>
              <ButtonLink href="/process" variant="secondary">
                How we build
              </ButtonLink>
            </div>
          </Reveal>
        )}
      </Section>

      {hasWork && <CtaSection />}
    </>
  );
}
