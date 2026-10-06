import type { CapabilitySlug } from "./capabilities";

export type ProcessStep = {
  number: string;
  name: string;
  /** Which discipline leads this phase. */
  capability: CapabilitySlug;
  /** One line, used on the home page. */
  short: string;
  // TODO(placeholder): confirm phase timings.
  weeks: string;
  summary: string;
  whatHappens: string[];
  outputs: string[];
  signals: string[];
  gate: string;
};

// TODO(placeholder): the step content below is draft. Confirm it describes how you really run an idea from
// concept to launch (the phases, the weeks, and especially the go / no-go gates).
export const processSteps: ProcessStep[] = [
  {
    number: "01",
    name: "Define",
    capability: "strategy",
    short: "Test the problem and the market, then shrink the idea to the smallest version worth launching.",
    weeks: "Weeks 1–2",
    summary:
      "Every product starts as an idea we try to disprove. We find out who has the problem, how badly, and what they'd pay to fix it, then cut the scope down to something that can launch.",
    whatHappens: [
      "Customer conversations with 5–8 people who have the problem",
      "Competitor and market teardown",
      "Scope workshop: must-haves, later, never",
      "A technical spike on the riskiest assumption",
    ],
    outputs: ["Product brief and positioning", "A scoped v1 and roadmap", "A plan, a timeline and a budget"],
    signals: ["A specific group with a painful, frequent problem", "Evidence they already pay for a workaround", "A realistic path to the first hundred users"],
    gate: "If we can't name who it's for and why they'd switch, we stop here. The idea goes back on the shelf and we've spent two weeks, not two quarters.",
  },
  {
    number: "02",
    name: "Design",
    capability: "design",
    short: "Prototype the real product, test it with real people, build the design system.",
    weeks: "Weeks 2–5",
    summary:
      "We design the core flows as clickable prototypes, put them in front of real users, and fix what breaks before any engineering effort is spent.",
    whatHappens: [
      "Flow mapping and low-fidelity exploration",
      "A high-fidelity prototype of the core loop",
      "Moderated user tests and a round of revisions",
      "A design system: components, tokens, documentation",
    ],
    outputs: ["A tested, clickable prototype", "A design system in Figma and in code", "Build-ready specs and an engineering plan"],
    signals: ["New users complete the core task unaided", "People can explain what the product is after 10 seconds", "Testers ask when they can use it"],
    gate: "If testers don't get it or don't care, we rework the idea or kill it. Engineering starts only when there are no open design questions.",
  },
  {
    number: "03",
    name: "Build",
    capability: "engineering",
    short: "Working software every week, on a live staging link anyone on the team can click.",
    weeks: "Weeks 4–12",
    summary:
      "Engineering starts while design finishes. Every week ends with a demo of real, running software, and we can re-prioritise at any weekly checkpoint.",
    whatHappens: [
      "A weekly demo and a short written update",
      "An always-live staging environment",
      "Automated tests, CI/CD and monitoring from the first sprint",
      "Security, performance and accessibility reviews",
    ],
    outputs: ["A production-ready product", "A codebase we're proud to maintain", "Technical documentation and runbooks"],
    signals: ["The core loop works end to end", "Performance, security and accessibility checks pass", "Analytics are wired to the metrics that matter"],
    gate: "A release candidate must pass the launch checklist: performance, security, accessibility and analytics. If it doesn't, we don't launch.",
  },
  {
    number: "04",
    name: "Launch",
    capability: "launch",
    short: "Beta, launch and growth loops, then we keep running it like a business.",
    weeks: "Weeks 10–14",
    summary:
      "We run a closed beta, fix what real users hit, launch publicly, and set up the measurement and growth loops so we can see what's working. After launch the product becomes a business we operate, not a project we hand off.",
    whatHappens: [
      "A beta programme with the first real users",
      "Marketing site, pricing and launch assets",
      "Analytics, funnels and activation experiments",
      "A 90-day plan for growth and iteration",
    ],
    outputs: ["A public launch", "An analytics dashboard and growth plan", "A product we operate and keep improving"],
    signals: ["Beta users come back without being asked", "Activation and retention beat our targets", "Customers pay without a sales call"],
    gate: "At 90 days we decide: double down, keep iterating, or wind it down honestly. Not every launch earns a second year.",
  },
];

// TODO(placeholder): these are commitments about how you work (own your products, kill ideas early). Confirm each.
export const principles = [
  {
    title: "We build what we'd use",
    body: "Every product starts with a problem we have, or one we've watched real people struggle with. No client briefs and no building things nobody asked for.",
  },
  {
    title: "A demo every week",
    body: "No status decks. Every Friday we click through real, running software and decide what happens next.",
  },
  {
    title: "Kill ideas early",
    body: "Most ideas shouldn't become products. Cutting a bad idea in week two is the cheapest thing we'll ever do, so we do it often.",
  },
  {
    title: "Launch is the beginning",
    body: "We stay on to run, improve and grow every product we ship. If we won't operate it, we don't launch it.",
  },
];

// TODO(placeholder): every answer here is a statement about how Qubyne operates (no client work, how ideas are chosen,
// who to contact). Confirm each before launch.
export const faqs = [
  {
    q: "Do you build things for clients?",
    a: "No. Qubyne builds and launches its own software products, and each one is run as its own business. We're not an agency and we don't take client work, so the site has no services to buy.",
  },
  {
    q: "What kind of products do you build?",
    a: "SaaS platforms, creative tools and productivity apps, plus the internal tools we build to run ourselves. We look for problems where people tolerate clunky software because nothing better exists.",
  },
  {
    q: "How do you decide what to build?",
    a: "Every idea goes through four steps (define, design, build, launch), each ending in a go / no-go decision. An idea has to show a specific audience with a painful problem before it earns the next step.",
  },
  {
    q: "Can I try something you've built?",
    a: "Our first products are in development. Tell us you're interested through the contact page and we'll let you know when the first beta opens.",
  },
  {
    q: "Can we partner, or can I join the team?",
    a: "We're open to both. Send us a note with what you have in mind: a partnership, a product idea that fits what we build, or the kind of work you want to do. We read everything.",
  },
  {
    q: "What happens to a product after it launches?",
    a: "We keep operating it: support, improvements, pricing, growth. Every launch gets a 90-day review, after which we double down, keep iterating, or wind it down.",
  },
];
