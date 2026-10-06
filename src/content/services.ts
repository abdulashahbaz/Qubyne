import type { IconName } from "@/components/icons";

export type ServiceSlug = "strategy" | "design" | "engineering" | "launch";

export type Service = {
  slug: ServiceSlug;
  name: string;
  icon: IconName;
  /** One-liner for cards and nav. */
  short: string;
  headline: string;
  description: string;
  /** What the client walks away with. */
  deliverables: string[];
  /** The questions this phase exists to answer. */
  questions: string[];
  // TODO(placeholder): confirm typical timelines and team shape for each service.
  typical: { label: string; value: string }[];
};

export const services: Service[] = [
  {
    slug: "strategy",
    name: "Product Strategy",
    icon: "compass",
    short: "Decide what to build, and what not to, before a line of code is written.",
    headline: "Find the product worth building.",
    description:
      "Most failed products weren't badly built. They were built for a problem nobody urgently had, or one customers wouldn't pay to solve. We start by pressure-testing the idea: who it's for, why they would switch, what the smallest launchable version looks like, and how it makes money.",
    questions: [
      "Who is this for, and what are they using today?",
      "Why would they switch, and what would make them stay?",
      "What is the smallest version we can launch and learn from?",
    ],
    deliverables: [
      "Customer and competitor teardown",
      "Positioning and value proposition",
      "Scoped v1 roadmap with an explicit “not now” list",
      "Pricing and packaging hypotheses",
      "Success metrics tied to launch goals",
      "Technical feasibility and build plan",
    ],
    typical: [
      { label: "Typical length", value: "2–3 weeks" },
      { label: "Team", value: "Strategy lead + design lead + tech lead" },
      { label: "Ends with", value: "A scoped plan and a go / no-go" },
    ],
  },
  {
    slug: "design",
    name: "Design",
    icon: "pencil",
    short: "Interfaces people understand in seconds and keep coming back to.",
    headline: "Design that makes complex software feel obvious.",
    description:
      "The products people love feel effortless: sensible defaults, instant feedback, nothing in the way. We design the whole experience — flows, interface, interaction details and the design system your team will keep extending long after launch.",
    questions: [
      "Can a new user reach their first win without help?",
      "Does every screen make the next step obvious?",
      "Will this still hold together at 10× the features?",
    ],
    deliverables: [
      "User flows and information architecture",
      "Clickable prototypes tested with real users",
      "Product visual identity and brand system",
      "Production-ready design system: components, tokens, documentation",
      "Onboarding, empty-state and error design",
      "Motion and interaction specifications",
    ],
    typical: [
      { label: "Typical length", value: "3–6 weeks" },
      { label: "Team", value: "Product designer + design lead, engineer embedded" },
      { label: "Ends with", value: "Tested prototype and a shipped design system" },
    ],
  },
  {
    slug: "engineering",
    name: "Engineering",
    icon: "code",
    short: "Production-grade software, shipped in weekly increments you can use.",
    headline: "Software that ships fast and still holds up at scale.",
    description:
      "We build on proven foundations and save the creativity for your product. You get working software in your hands every week, real CI/CD from day one, and a codebase your own team can own, understand and extend.",
    questions: [
      "Can we demo something real every single week?",
      "Will it stay fast, secure and affordable as usage grows?",
      "Could another team pick this up tomorrow?",
    ],
    deliverables: [
      "Web and mobile applications",
      "Backend, APIs and data model",
      "Authentication, roles, billing and permissions",
      "Real-time collaboration and media pipelines",
      "AI-powered features and third-party integrations",
      "CI/CD, monitoring, security baseline and documentation",
    ],
    typical: [
      // TODO(placeholder): confirm the stack you actually standardise on.
      { label: "Default stack", value: "TypeScript, React, Node, Postgres" },
      { label: "Cadence", value: "Weekly demo, always-live staging" },
      { label: "Ends with", value: "Production release and a full handover" },
    ],
  },
  {
    slug: "launch",
    name: "Launch & Growth",
    icon: "trending-up",
    short: "A launch plan, the assets and the loops that turn a spike into growth.",
    headline: "Launch with a plan, not a prayer.",
    description:
      "A product isn't launched when it deploys. We prepare the marketing site, onboarding, analytics, pricing and launch narrative, run the beta, then set up the activation and referral loops that turn a one-day spike into steady growth.",
    questions: [
      "Who are the first hundred users, and how do we reach them?",
      "Where do new users drop off, and why?",
      "What do we measure to know it's working?",
    ],
    deliverables: [
      "Marketing site and launch page",
      "Beta programme and waitlist",
      "Analytics, funnels and experiment setup",
      "Onboarding and activation optimisation",
      "Pricing page and checkout",
      "Launch plan: channels, assets, timeline, owners",
    ],
    typical: [
      { label: "Typical length", value: "3–4 weeks to launch, then ongoing" },
      { label: "Team", value: "Growth lead + designer + engineer" },
      { label: "Ends with", value: "Public launch and a 90-day growth plan" },
    ],
  },
];

export const getService = (slug: ServiceSlug) => services.find((s) => s.slug === slug)!;
