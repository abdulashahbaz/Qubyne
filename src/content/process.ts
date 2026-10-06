import type { ServiceSlug } from "./services";

export type ProcessStep = {
  number: string;
  name: string;
  /** Which service this phase delivers. */
  service: ServiceSlug;
  /** One line, used on the home page. */
  short: string;
  // TODO(placeholder): confirm phase timings.
  weeks: string;
  summary: string;
  whatHappens: string[];
  youGet: string[];
  weNeed: string[];
  gate: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    name: "Define",
    service: "strategy",
    short: "Align on the problem, the user and the smallest version worth launching.",
    weeks: "Weeks 1–2",
    summary:
      "We get everyone aligned on what we're building, who for, and what “good” looks like, then cut the scope down to something that can launch.",
    whatHappens: [
      "Stakeholder and customer interviews",
      "Competitor and market teardown",
      "Scope workshop: must-haves, later, never",
      "Technical feasibility spike on the riskiest assumption",
    ],
    youGet: ["Product brief and positioning", "Scoped v1 and roadmap", "Fixed plan, timeline and budget"],
    weNeed: ["Access to a decision-maker", "Introductions to 5–8 target customers", "Any data or research you already have"],
    gate: "You approve scope, plan and budget — or we stop here, having cost you two weeks.",
  },
  {
    number: "02",
    name: "Design",
    service: "design",
    short: "Prototype the real product, test it with real users, build the design system.",
    weeks: "Weeks 2–5",
    summary:
      "We design the core flows as clickable prototypes, put them in front of real users, and fix what breaks before any engineering effort is spent.",
    whatHappens: [
      "Flow mapping and low-fidelity exploration",
      "High-fidelity prototype of the core loop",
      "Moderated user tests and a round of revisions",
      "Design system: components, tokens, documentation",
    ],
    youGet: ["Tested, clickable prototype", "Design system in Figma and in code", "Build-ready specs and an engineering plan"],
    weNeed: ["Fast feedback, ideally within 48 hours", "One person who owns product decisions"],
    gate: "You sign off the prototype. Engineering starts with no open design questions.",
  },
  {
    number: "03",
    name: "Build",
    service: "engineering",
    short: "Working software every week, on a live staging link you can click.",
    weeks: "Weeks 4–12",
    summary:
      "Engineering starts while design finishes. Every week ends with a demo of real, running software, and you can reprioritise at any weekly checkpoint.",
    whatHappens: [
      "Weekly demo and a short written update",
      "Always-live staging environment",
      "Automated tests, CI/CD and monitoring from the first sprint",
      "Security, performance and accessibility reviews",
    ],
    youGet: ["A production-ready product", "Full repository access from day one", "Technical documentation and runbooks"],
    weNeed: ["Attendance at the weekly demo", "Timely access to accounts, APIs and brand assets"],
    gate: "Release candidate passes the launch checklist: performance, security, accessibility, analytics.",
  },
  {
    number: "04",
    name: "Launch",
    service: "launch",
    short: "Beta, launch and growth loops, then a clean handover or an ongoing retainer.",
    weeks: "Weeks 10–14",
    summary:
      "We run a closed beta, fix what real users hit, launch publicly, and set up the measurement and growth loops so you can see what's working.",
    whatHappens: [
      "Beta programme with the first real users",
      "Marketing site, pricing and launch assets",
      "Analytics, funnels and activation experiments",
      "Hand-over to your team, or a retainer for what comes next",
    ],
    youGet: ["Public launch", "Analytics dashboard and growth plan", "30 days of launch support included"],
    weNeed: ["Launch-day availability", "Your audience, list and channels"],
    gate: "You own everything: code, infrastructure, accounts and documentation.",
  },
];

export const principles = [
  {
    title: "A demo every week",
    body: "No status decks. Every Friday you click through real, running software and decide what happens next.",
  },
  {
    title: "One accountable lead",
    body: "One senior person owns your project end to end, so decisions get made once and nothing gets lost between disciplines.",
  },
  {
    title: "Scope is a conversation",
    body: "We will tell you when something isn't worth building. Cutting scope is the cheapest way to launch sooner.",
  },
  {
    title: "No lock-in, ever",
    body: "Your code, your infrastructure, your accounts. If we part ways, your team can pick it up the next morning.",
  },
];

// TODO(placeholder): every answer here is a commitment (pricing model, IP, support). Confirm each before launch.
export const faqs = [
  {
    q: "How much does a project cost?",
    a: "We scope in fixed-price phases after a free intro call, so you know the cost before committing. Define phases are small and low-risk; build phases depend on scope. We'll tell you plainly if your budget won't get you to a launchable product.",
  },
  {
    q: "How long does it take to launch?",
    a: "Most first versions launch in 10–14 weeks from kick-off. Narrower products can be faster; platform-scale products take longer, and we'll say so up front.",
  },
  {
    q: "Who owns the code and designs?",
    a: "You do. Source code, design files, infrastructure and accounts are yours from day one, and you get repository access throughout the project.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Yes. We regularly embed alongside in-house engineers and designers, or take a specific product area end to end. We'll agree on ways of working in the Define phase.",
  },
  {
    q: "What kinds of products do you build?",
    a: "SaaS platforms, creative tools, productivity apps and internal tools. If it's a real software product with real users, it's probably a fit. We're not the right team for brochure sites or one-off campaigns.",
  },
  {
    q: "What happens after launch?",
    a: "Launch includes 30 days of support. After that you can run it in-house, bring us back for the next release, or put us on a monthly retainer.",
  },
];
