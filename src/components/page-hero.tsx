import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
};

/** Standard top-of-page header for every inner page. Renders the page's only <h1>. */
export function PageHero({ eyebrow, title, lead, children }: PageHeroProps) {
  return (
    <section aria-labelledby="page-title" className="relative overflow-hidden pt-16 pb-12 sm:pt-24 sm:pb-16">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[32rem]" />
      <div
        aria-hidden="true"
        className="glow-radial pointer-events-none absolute top-[-22rem] left-1/2 h-[36rem] w-[min(76rem,170vw)] -translate-x-1/2"
      />
      <Container className="relative">
        <Reveal>
          <SectionHeading as="h1" id="page-title" eyebrow={eyebrow} title={title} lead={lead} className="max-w-4xl" />
        </Reveal>
        {children && (
          <Reveal delay={120} className="mt-10">
            {children}
          </Reveal>
        )}
      </Container>
    </section>
  );
}
