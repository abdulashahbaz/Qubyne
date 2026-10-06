import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell Qubyne what you're building. Share a few details about your product and we'll reply with honest thoughts on scope, approach and whether we're the right fit.",
  path: "/contact",
});

const nextSteps = [
  { title: "We read it properly", body: "A senior person reads every message, not a sales script or an auto-responder." },
  { title: "A short call", body: "If it looks like a fit, we'll set up 30 minutes to understand the product, the users and the constraints." },
  { title: "A clear proposal", body: "You get a scoped plan with a fixed price for the first phase, or an honest “not yet” and why." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what you're building."
        lead="A few details are plenty. We'll reply with honest thoughts on scope, approach and whether we're the right team."
      />

      <Section className="pt-0 sm:pt-0" containerClassName="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-7">
          <div className="rounded-card border border-line bg-surface p-6 shadow-card sm:p-10">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-5">
          <h2 className="font-mono text-eyebrow text-ink-subtle uppercase">What happens next</h2>
          <ol className="mt-6 space-y-8">
            {nextSteps.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-line-strong font-mono text-sm text-accent">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-h3">{step.title}</h3>
                  <p className="mt-2 text-ink-muted">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-12 border-t border-line pt-8">
            <h2 className="font-mono text-eyebrow text-ink-subtle uppercase">Prefer email?</h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-block text-h3 text-ink underline decoration-line-strong underline-offset-8 transition-colors duration-(--duration-base) hover:decoration-accent"
            >
              {site.email}
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
