import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-16 pb-section sm:pt-24">
      <div aria-hidden="true" className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[44rem]" />
      <div
        aria-hidden="true"
        className="glow-radial pointer-events-none absolute top-[-20rem] left-1/2 h-[40rem] w-[min(84rem,170vw)] -translate-x-1/2"
      />

      <Container className="relative">
        <Reveal onLoad>
          <Eyebrow>Product studio</Eyebrow>
        </Reveal>

        <Reveal onLoad delay={60}>
          <h1 id="hero-title" className="mt-6 max-w-5xl text-display">
            Software products <span className="text-accent">worth switching to.</span>
          </h1>
        </Reveal>

        <Reveal onLoad delay={120}>
          <p className="mt-8 max-w-2xl text-lead text-ink-muted">
            Qubyne is a product studio. We design, build and launch our own software, from SaaS platforms to creative
            tools and productivity apps, and run every product as a business.
          </p>
        </Reveal>

        <Reveal onLoad delay={180} className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg" arrow>
            Get in touch
          </ButtonLink>
          <ButtonLink href="/process" size="lg" variant="secondary">
            How we build
          </ButtonLink>
        </Reveal>

        <Reveal onLoad delay={260}>
          <HeroVisual />
        </Reveal>
      </Container>
    </section>
  );
}
