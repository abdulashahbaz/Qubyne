import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const differentiators = [
  {
    title: "One team, idea to launch",
    body: "Strategy, design, engineering and growth work in the same room. There are no hand-offs between an agency, a dev shop and a freelancer, so nothing gets lost in translation and decisions take hours, not weeks.",
  },
  {
    title: "Opinionated about the product",
    body: "We aren't order-takers. We'll challenge scope, cut features that haven't earned their place and push for the simplest thing that works, because focused products launch sooner and win more often.",
  },
  {
    title: "Built to be owned",
    body: "Weekly demos, clean code and real documentation. You own the repository, the infrastructure and the accounts from day one, and your team can take over the morning after launch.",
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
            lead="We take ownership of the outcome, not just the deliverable. Here's what that looks like in practice."
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
