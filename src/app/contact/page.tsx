import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Qubyne about early access, partnerships, press or joining the team. A real person reads every message.",
  path: "/contact",
});

// TODO(placeholder): confirm these describe what really happens when someone writes to you.
const nextSteps = [
  { title: "A real person reads it", body: "Every message is read by someone on the team, never by a script or an auto-responder." },
  { title: "You get a straight answer", body: "We'll reply honestly, even if the answer is \u201cnot right now\u201d." },
  { title: "Early access comes first", body: "If you asked for early access, you'll hear from us when the first beta opens." },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Say hello."
        lead="Early access, a partnership, press, or a question about what we're building. Send us a note."
      />

      <Section className="pt-0 sm:pt-0" containerClassName="grid gap-12 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-7">
          <div className="rounded-card border border-line bg-surface p-6 shadow-card sm:p-10">
            <ContactForm />
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-5">
          <h2 className="font-mono text-eyebrow text-ink-subtle uppercase">What to expect</h2>
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
