import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { Icon } from "@/components/icons";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description:
    "Qubyne is a small, senior product studio. We own strategy, design, engineering and launch together, so the products we build are focused, fast and ready for real users.",
  path: "/about",
});

// TODO(placeholder): illustrative figures. Replace with real numbers you can stand behind, or remove the row.
const stats = [
  { value: "12", label: "Products launched" },
  { value: "10–14 wks", label: "Typical time to a first launch" },
  { value: "4 → 1", label: "Disciplines, one accountable team" },
];

const beliefs = [
  {
    title: "Ship to learn",
    body: "A real product in real hands teaches more in a week than a quarter of planning. We design every project to put something usable in front of people early, then let what we learn decide what comes next.",
  },
  {
    title: "Craft is a feature",
    body: "Speed, polish and small details are what make people choose one product over another. We treat them as requirements, not decoration.",
  },
  {
    title: "Small senior teams",
    body: "Every project is staffed by experienced people who do the work themselves. No pyramid, no juniors learning on your budget, no account managers in between.",
  },
  {
    title: "Honest over agreeable",
    body: "We'll tell you when an idea isn't ready, when a feature isn't worth building, and when you don't need us. You hire us for judgement, and judgement sometimes means saying no.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="We build the products we'd want to use."
        lead="Qubyne is a small product studio for companies building serious software. The best products come from one team that owns strategy, design, engineering and launch together. That's all we do."
      />

      <Section labelledBy="story-title" className="border-t border-line" containerClassName="grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionHeading id="story-title" eyebrow="Why we exist" title="Good ideas get lost between hand-offs." />
        </Reveal>
        <Reveal delay={100} className="space-y-6 text-lead text-ink-muted lg:col-span-7">
          {/* TODO(placeholder): draft founding story. Replace with the real one (who started it, when, why). */}
          <p>
            Most software projects fail in the gaps: between the strategy deck and the designer, between the design
            file and the developer, between the finished build and a launch nobody planned. Each hand-off loses
            context, and the product gets a little blurrier every time.
          </p>
          <p>
            Qubyne exists to close those gaps. One senior team owns the whole journey, so the person who questioned
            your positioning is the same person who reviews the final build, and the people who design the onboarding
            help plan the launch.
          </p>
          <p>
            We stay deliberately small and work with a handful of companies at a time, so every product gets the
            attention it needs to be genuinely good.
          </p>
        </Reveal>
      </Section>

      <section aria-label="Qubyne in numbers" className="border-y border-line">
        <dl className="mx-auto grid max-w-site divide-y divide-line sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="flex flex-col-reverse gap-3 px-gutter py-12 sm:py-16">
              <dt className="text-ink-muted">{s.label}</dt>
              <dd className="text-h1 text-ink">{s.value}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <Section labelledBy="beliefs-title">
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
            eyebrow="The team"
            title="Four disciplines, working as one."
            lead="You'll work directly with the people doing the work, from the first call to launch day."
          />
        </Reveal>
        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 80}>
              <Link
                href={`/services#${s.slug}`}
                className="group flex h-full flex-col rounded-card border border-line bg-surface p-7 shadow-card transition-colors duration-(--duration-base) hover:border-line-strong hover:bg-raised"
              >
                <span className="flex size-12 items-center justify-center rounded-control bg-accent-soft text-accent">
                  <Icon name={s.icon} className="size-6" />
                </span>
                <h3 className="mt-8 text-h3">{s.name}</h3>
                <p className="mt-3 flex-1 text-ink-muted">{s.short}</p>
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

      <CtaSection title="Let's build something worth switching to." />
    </>
  );
}
