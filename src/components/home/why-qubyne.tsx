import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

// TODO(placeholder): these describe how Qubyne works. Confirm each is true.
const differentiators = [
  {
    title: "We own what we build",
    body: "Every product is ours: our name, our money, our roadmap. No client brief to compromise the product, and no hand-off to lose the thinking along the way.",
  },
  {
    title: "One team, idea to launch",
    body: "Strategy, design, engineering and growth work in the same room, so nothing gets lost in translation and decisions take hours, not weeks.",
  },
  {
    title: "Willing to kill ideas",
    body: "Most ideas shouldn't become products. Each one faces a go / no-go at every step, so the ones that launch have earned it, and we keep running them as real businesses.",
  },
];

export function WhyQubyne() {
  return (
    <Section labelledBy="why-title" className="border-t border-line" containerClassName="grid gap-14 lg:grid-cols-12">
      <Reveal className="lg:col-span-5">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            id="why-title"
            eyebrow="Why Qubyne"
            title="A studio that behaves like a founding team."
            lead="We build for ourselves, so every decision comes down to one question: would we bet our own money on this?"
          />
        </div>
      </Reveal>

      <ol className="lg:col-span-7">
        {differentiators.map((d, i) => (
          <Reveal
            as="li"
            key={d.title}
            delay={i * 80}
            className="grid gap-4 border-t border-line-strong py-9 first:pt-0 first:border-t-0 sm:grid-cols-[4rem_1fr] lg:first:pt-2"
          >
            <span className="font-mono text-eyebrow text-accent">0{i + 1}</span>
            <div>
              <h3 className="text-h3">{d.title}</h3>
              <p className="mt-4 max-w-xl text-ink-muted">{d.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
