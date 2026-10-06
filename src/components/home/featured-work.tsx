import { CaseStudyCard } from "@/components/case-study-card";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { caseStudies } from "@/content/work";

export function FeaturedWork() {
  return (
    <Section labelledBy="work-title" className="border-t border-line">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <Reveal>
          <SectionHeading
            id="work-title"
            eyebrow="Featured work"
            title="Products we've taken from idea to launch."
          />
        </Reveal>
        <Reveal delay={100}>
          <ButtonLink href="/work" variant="secondary" arrow>
            All case studies
          </ButtonLink>
        </Reveal>
      </div>

      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study, i) => (
          <Reveal as="li" key={study.slug} delay={i * 100}>
            <CaseStudyCard study={study} />
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
