import type { IconName } from "@/components/icons";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const categories: { icon: IconName; title: string; body: string; tags: string[] }[] = [
  {
    icon: "layers",
    title: "SaaS platforms",
    body: "Multi-tenant products with billing, roles and onboarding that sells itself. Built to scale past your first hundred customers.",
    tags: ["Billing", "Teams", "Analytics"],
  },
  {
    icon: "play",
    title: "Creative tools",
    body: "Editors, canvases and media apps that feel instant: real-time previews in the browser, heavy lifting in the cloud.",
    tags: ["Video", "Design", "Audio"],
  },
  {
    icon: "checklist",
    title: "Productivity apps",
    body: "Workspaces, docs and task tools that stay fast, work offline and make teams quicker rather than busier.",
    tags: ["Docs", "Tasks", "Sync"],
  },
  {
    icon: "terminal",
    title: "Internal tools",
    body: "The dashboards, admin panels and workflows that run your operations, built like a product, not a patch.",
    tags: ["Ops", "Admin", "Automation"],
  },
];

export function WhatWeLaunch() {
  return (
    <Section labelledBy="launch-title">
      <Reveal>
        <SectionHeading
          id="launch-title"
          eyebrow="What we launch"
          title="Four kinds of product. One standard of craft."
          lead="If it has real users and needs to feel great to use, we can take it from idea to launch."
        />
      </Reveal>

      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c, i) => (
          <Reveal
            as="li"
            key={c.title}
            delay={i * 80}
            className="group flex flex-col rounded-card border border-line bg-surface p-7 shadow-card transition-colors duration-(--duration-base) hover:border-line-strong hover:bg-raised"
          >
            <span className="flex size-12 items-center justify-center rounded-control bg-accent-soft text-accent">
              <Icon name={c.icon} className="size-6" />
            </span>
            <h3 className="mt-8 text-h3">{c.title}</h3>
            <p className="mt-3 flex-1 text-ink-muted">{c.body}</p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {c.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-pill border border-line px-3 py-1.5 font-mono text-[0.6875rem] leading-none tracking-wider text-ink-subtle uppercase"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
