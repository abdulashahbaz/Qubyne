import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";

type CtaSectionProps = {
  title?: string;
  lead?: string;
};

/** Closing call to action, reused at the bottom of every marketing page. */
export function CtaSection({
  title = "Have a product in mind?",
  // TODO(placeholder): "two business days" is a response-time promise. Confirm you can keep it.
  lead = "Tell us what you're building. We'll reply within two business days with honest thoughts, even if the honest answer is that you don't need us yet.",
}: CtaSectionProps) {
  return (
    <section aria-labelledby="cta-title" className="pb-section">
      <Container>
        <Reveal className="relative isolate overflow-hidden rounded-card border border-line bg-surface px-6 py-16 text-center shadow-pop sm:px-12 sm:py-24">
          <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-80" />
          <div
            aria-hidden="true"
            className="glow-radial absolute top-1/2 left-1/2 -z-10 h-[28rem] w-[min(60rem,150%)] -translate-x-1/2 -translate-y-1/2 opacity-80"
          />
          <h2 id="cta-title" className="mx-auto max-w-3xl text-h1">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lead text-ink-muted">{lead}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg" arrow>
              Start a project
            </ButtonLink>
            <ButtonLink href={`mailto:${site.email}`} size="lg" variant="secondary">
              {site.email}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
