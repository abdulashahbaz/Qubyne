import type { IconName } from "@/components/icons";

export type CapabilitySlug = "strategy" | "design" | "engineering" | "launch";

/**
 * The four disciplines Qubyne uses on every product it builds. Qubyne does not
 * sell these as services; this is how the studio works on its own products.
 */
export type Capability = {
  slug: CapabilitySlug;
  name: string;
  icon: IconName;
  /** One-liner for cards and nav. */
  short: string;
  headline: string;
  description: string;
  /** The questions this discipline exists to answer. */
  questions: string[];
  /** What this discipline covers on a product. */
  covers: string[];
  // TODO(placeholder): confirm the typical timelines, team shape and default stack below.
  details: { label: string; value: string }[];
};

export const capabilities: Capability[] = [
  {
    slug: "strategy",
    name: "Product Strategy",
    icon: "compass",
    short: "Decide what's worth building, and what isn't, before a line of code is written.",
    headline: "Find the product worth building.",
    description:
      "Most failed products weren't badly built. They were built for a problem nobody urgently had, or one people wouldn't pay to solve. Every idea starts here: who it's for, why they'd switch, what the smallest launchable version looks like, and how it makes money. Most ideas stop at this step, and that's the point.",
    questions: [
      "Who is this for, and what are they using today?",
      "Why would they switch, and what would make them stay?",
      "What is the smallest version we can launch and learn from?",
    ],
    covers: [
      "Customer and competitor teardowns",
      "Positioning and value proposition",
      "A scoped v1 with an explicit “not now” list",
      "Pricing and packaging hypotheses",
      "Success metrics tied to the launch",
      "Technical feasibility and build plan",
    ],
    details: [
      { label: "Typical length", value: "2–3 weeks" },
      { label: "Team", value: "Strategy lead, design lead and tech lead" },
      { label: "Ends with", value: "A go / no-go decision" },
    ],
  },
  {
    slug: "design",
    name: "Design",
    icon: "pencil",
    short: "Interfaces people understand in seconds and keep coming back to.",
    headline: "Design that makes complex software feel obvious.",
    description:
      "The products people love feel effortless: sensible defaults, instant feedback, nothing in the way. We design the whole experience, from flows and interface to interaction details and the design system that lets a product keep growing without going off the rails.",
    questions: [
      "Can a new user reach their first win without help?",
      "Does every screen make the next step obvious?",
      "Will this still hold together at 10× the features?",
    ],
    covers: [
      "User flows and information architecture",
      "Clickable prototypes tested with real users",
      "Product identity and brand system",
      "A design system: components, tokens, documentation",
      "Onboarding, empty-state and error design",
      "Motion and interaction details",
    ],
    details: [
      { label: "Typical length", value: "3–6 weeks" },
      { label: "Team", value: "Product designer and design lead, with an engineer embedded" },
      { label: "Ends with", value: "A tested prototype and a working design system" },
    ],
  },
  {
    slug: "engineering",
    name: "Engineering",
    icon: "code",
    short: "Production-grade software, built in weekly increments we can actually use.",
    headline: "Software that ships fast and still holds up at scale.",
    description:
      "We build on proven foundations and save the creativity for the product. Working software every week, real CI/CD from day one, and a codebase that stays understandable as the product grows, because we'll be the ones living with it.",
    questions: [
      "Can we demo something real every single week?",
      "Will it stay fast, secure and affordable as usage grows?",
      "Could a new engineer be productive on day two?",
    ],
    covers: [
      "Web and mobile applications",
      "Backend, APIs and data model",
      "Authentication, roles, billing and permissions",
      "Real-time collaboration and media pipelines",
      "AI-powered features and integrations",
      "CI/CD, monitoring and a security baseline",
    ],
    details: [
      // TODO(placeholder): confirm the stack you actually standardise on.
      { label: "Default stack", value: "TypeScript, React, Node, Postgres" },
      { label: "Cadence", value: "Weekly demo, always-live staging" },
      { label: "Ends with", value: "A production release" },
    ],
  },
  {
    slug: "launch",
    name: "Launch & Growth",
    icon: "trending-up",
    short: "A launch plan and the loops that turn a spike into steady growth.",
    headline: "Launch with a plan, not a prayer.",
    description:
      "A product isn't launched when it deploys. We prepare the marketing site, onboarding, analytics, pricing and launch story, run a beta, then build the activation and referral loops that turn a one-day spike into a business.",
    questions: [
      "Who are the first hundred users, and how do we reach them?",
      "Where do new users drop off, and why?",
      "What do we measure to know it's working?",
    ],
    covers: [
      "Marketing site and launch page",
      "Beta programme and waitlist",
      "Analytics, funnels and experiments",
      "Onboarding and activation",
      "Pricing page and checkout",
      "Launch plan: channels, assets, timeline",
    ],
    details: [
      { label: "Typical length", value: "3–4 weeks to launch, then ongoing" },
      { label: "Team", value: "Growth lead, designer and engineer" },
      { label: "Ends with", value: "A public launch and a 90-day growth plan" },
    ],
  },
];

export const getCapability = (slug: CapabilitySlug) => capabilities.find((c) => c.slug === slug)!;
