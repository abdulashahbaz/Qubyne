import { CaseStudyCard } from "@/components/case-study-card";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { caseStudies } from "@/content/work";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Work",
  description:
    "Case studies from Qubyne: a browser-based video editor, a finance SaaS and an offline-first team workspace, each taken from first workshop to public launch.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="Products we've taken from idea to launch."
        lead="A creative tool, a SaaS platform and a productivity app: different markets, the same approach. Start narrow, design for clarity, ship early."
      />

      <Section className="pt-0 sm:pt-0">
        <ul aria-label="Case studies" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, i) => (
            <Reveal as="li" key={study.slug} delay={i * 100}>
              <CaseStudyCard study={study} priority headingLevel="h2" />
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaSection />
    </>
  );
}
