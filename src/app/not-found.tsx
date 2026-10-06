import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section-heading";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section aria-labelledby="not-found-title" className="py-section">
      <Container>
        <Eyebrow>Error 404</Eyebrow>
        <h1 id="not-found-title" className="mt-5 max-w-3xl text-h1">
          This page didn&rsquo;t make it to launch.
        </h1>
        <p className="mt-6 max-w-xl text-lead text-ink-muted">
          The link may be broken or the page may have moved. Head back to the homepage or see what we&rsquo;ve built.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/" size="lg" arrow>
            Back to home
          </ButtonLink>
          <ButtonLink href="/work" size="lg" variant="secondary">
            See our work
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
