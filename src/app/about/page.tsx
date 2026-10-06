import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities } from "@/content/capabilities";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Qubyne is a product studio that builds and launches its own software. One team owns strategy, design, engineering and launch, and runs every product as a business.",
  path: "/about",
});

// TODO(placeholder): draft beliefs. These describe how Qubyne works; confirm each one is true.
const beliefs = [
  {
    title: "Build what we'd use",
    body: "We start from problems we have, or ones we've watched real people struggle with. We don't take client briefs and we don't build things nobody asked for.",
  },
  {
    title: "Ship to learn",
    body: "A real product in real hands teaches more in a week than a quarter of planning. We put something usable in front of people early, and let what we learn decide what comes next.",
  },
  {
    title: "Craft is a feature",
    body: "Speed, polish and small details are what make people choose one product over another. We treat them as requirements, not decoration.",
  },
  {
    title: "Honest about what works",
    body: "Most ideas don't deserve to become products. We'd rather kill one in week two than spend a year proving it was never going to work.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We build the products we'd want to use."
        lead="Qubyne is a product studio. We make our own software and launch each product as a business, with one team owning everything from the first idea to the first paying customer."
      />

      <Section labelledBy="story-title" className="border-t border-line" containerClassName="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading id="story-title" eyebrow="Why we exist" title="Great products come from owning the outcome." />
        </Reveal>
        <Reveal delay={100} className="space-y-6 text-lead text-ink-muted lg:col-span-7">
          {/* TODO(placeholder): draft founding story. Replace with the real one (who started it, when, why). */}
          <p>
            Most software gets built twice: once as a brief, and again as a product. Somewhere between the strategy deck,
            the design file and the finished build, the original idea gets a little blurrier at every hand-off.
          </p>
          <p>
            Qubyne removes the hand-offs. One team owns the whole journey, so the person who questioned the positioning
            is the same person who reviews the final build, and the people who designed the onboarding help plan the
            launch.
          </p>
          <p>
            And because we build for ourselves, there&rsquo;s no one to blame and no one to hide behind. We succeed when a
            product earns its customers, and when it doesn&rsquo;t, we say so and move on.
          </p>
        </Reveal>
      </Section>

      <Section labelledBy="beliefs-title" className="border-t border-line">
        <Reveal>
          <SectionHeading id="beliefs-title" eyebrow="What we believe" title="Four ideas we won't compromise on." />
        </Reveal>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {beliefs.map((b, i) => (
            <Reveal
              as="li"
              key={b.title}
              delay={i * 80}
              className="rounded-card border border-line bg-surface p-8 shadow-card sm:p-10"
            >
              <span className="font-mono text-eyebrow text-accent">0{i + 1}</span>
              <h3 className="mt-6 text-h3">{b.title}</h3>
              <p className="mt-3 text-ink-muted">{b.body}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* TODO(placeholder): add a "Team" section with real names, roles and photos (next/image with alt text) once supplied. */}
      <Section labelledBy="disciplines-title" className="border-t border-line">
        <Reveal>
          <SectionHeading
            id="disciplines-title"
            eyebrow="How we're set up"
            title="Four disciplines, working as one."
            lead="Strategy, design, engineering and growth sit on the same team and work on the same products."
          />
        </Reveal>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c, i) => (
            <Reveal as="li" key={c.slug} delay={i * 80}>
              <Link
                href={`/what-we-do#${c.slug}`}
                className="group flex h-full flex-col rounded-card border border-line bg-surface p-7 shadow-card transition-colors duration-(--duration-base) hover:border-line-strong hover:bg-raised"
              >
                <span className="flex size-12 items-center justify-center rounded-control bg-accent-soft text-accent">
                  <Icon name={c.icon} className="size-6" />
                </span>
                <h3 className="mt-8 text-h3">{c.name}</h3>
                <p className="mt-3 flex-1 text-ink-muted">{c.short}</p>
                <span className="mt-6 flex items-center gap-2 text-[0.9375rem] font-medium text-ink">
                  Learn more
                  <Icon
                    name="arrow-right"
                    className="size-4 text-accent transition-transform duration-(--duration-base) ease-smooth group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      <CtaSection title="Want to be part of it?" />
    </>
  );
}
