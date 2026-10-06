import type { ServiceSlug } from "./services";

/**
 * Case studies. Each entry renders through the single template at
 * src/app/work/[slug]/page.tsx — add a new object here and a new page, card,
 * sitemap entry and OG image appear automatically.
 *
 * ALL THREE ENTRIES BELOW ARE FICTIONAL PLACEHOLDERS. Client names, metrics,
 * quotes and timelines must be replaced with real, approved case studies
 * before launch. Search the repo for "TODO(placeholder)" to find every one.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  category: "Creative tool" | "SaaS" | "Productivity";
  /** One line shown on cards and as the page subtitle. */
  tagline: string;
  /** 1–2 sentences for meta description and cards. */
  summary: string;
  year: string;
  duration: string;
  services: ServiceSlug[];
  /** Replace the SVG in /public/work with a real screenshot (PNG/JPG/WebP) at 16:10. */
  cover: { src: string; alt: string };
  challenge: string[];
  approach: { service: ServiceSlug; title: string; body: string }[];
  outcomes: { value: string; label: string }[];
  stack: string[];
  quote: { text: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "frameshift",
    title: "Frameshift",
    // TODO(placeholder): fictional client — replace with a real, approved client name.
    client: "Halyard Studio",
    category: "Creative tool",
    tagline: "A browser-based video editor that takes short-form creators from raw footage to posted in minutes.",
    summary:
      "How we turned a crowded, overbuilt category into a focused editor for vertical video: concept to public beta in 11 weeks.",
    // TODO(placeholder): real year and duration.
    year: "2025",
    duration: "11 weeks",
    services: ["strategy", "design", "engineering", "launch"],
    cover: {
      src: "/work/frameshift.svg",
      alt: "Illustration of the Frameshift video editor: a vertical preview canvas above a multi-track timeline.",
    },
    challenge: [
      "Short-form creators were stitching together three or four apps to publish a single clip: a desktop editor for cuts, a phone app for captions, a separate tool for resizing. The desktop editors were powerful but slow to learn; the mobile ones were fast but fell apart on anything beyond a single clip.",
      "Halyard Studio wanted to build the editor creators would open first, without becoming another bloated timeline tool. The brief was ambitious on both ends: it had to be genuinely capable, and a first-time user had to publish something good within five minutes.",
    ],
    approach: [
      {
        service: "strategy",
        title: "One job, done completely",
        body: "We interviewed 14 creators and cut the scope to a single job: turning raw clips into a finished vertical post. Everything that didn't serve that job, from colour grading suites to multi-camera editing, went on the “not now” list.",
      },
      {
        service: "design",
        title: "A timeline made of story blocks",
        body: "Instead of a traditional multi-track timeline we designed story blocks: hook, body, call to action. Captions, music and effects attach to blocks, not to frames. Prototype tests showed first-time users finishing an edit in under four minutes.",
      },
      {
        service: "engineering",
        title: "Edit locally, export in the cloud",
        body: "Previewing and cutting run in the browser on WebCodecs for instant feedback, while heavy exports render on a queue of cloud workers. Projects autosave and sync, so an edit started on a laptop finishes on a phone.",
      },
      {
        service: "launch",
        title: "Creator-led beta",
        body: "We launched a waitlist with a single sharable demo reel, onboarded creators in weekly cohorts, and used their exported videos as the launch campaign.",
      },
    ],
    outcomes: [
      // TODO(placeholder): replace all three metrics with real, verifiable results.
      { value: "11 wks", label: "From first workshop to public beta" },
      { value: "3.8 min", label: "Median time to first published video" },
      { value: "62%", label: "Of beta users exported a second video within a week" },
    ],
    // TODO(placeholder): real stack for this project.
    stack: ["TypeScript", "React", "WebCodecs", "Rust → WASM", "Postgres", "Cloud render workers"],
    quote: {
      // TODO(placeholder): fictional testimonial — replace with a real, approved quote or delete this block.
      text: "They pushed back on half our feature list in week one, and they were right. We launched with a product people understood immediately.",
      name: "Placeholder Name",
      role: "Co-founder, Halyard Studio",
    },
  },
  {
    slug: "ledgerline",
    title: "Ledgerline",
    // TODO(placeholder): fictional client — replace with a real, approved client name.
    client: "Northpeak",
    category: "SaaS",
    tagline: "Invoicing and cash-flow forecasting for small agencies, replacing six spreadsheets with one calm dashboard.",
    summary:
      "A multi-tenant SaaS for agency finance, designed, built and launched in 14 weeks, with billing and onboarding that sells itself.",
    // TODO(placeholder): real year and duration.
    year: "2025",
    duration: "14 weeks",
    services: ["strategy", "design", "engineering", "launch"],
    cover: {
      src: "/work/ledgerline.svg",
      alt: "Illustration of the Ledgerline dashboard: a cash-flow forecast chart above a table of upcoming invoices.",
    },
    challenge: [
      "Small agencies run on a patchwork of invoicing tools, time trackers and spreadsheets. Founders only discover a cash-flow gap when it's already a problem, because nothing connects what has been billed with what is likely to be paid, and when.",
      "Northpeak had a working prototype and a handful of design-partner agencies, but the prototype looked like an accounting tool from 2009 and couldn't take payments or onboard a customer without a call.",
    ],
    approach: [
      {
        service: "strategy",
        title: "Sell the forecast, not the invoice",
        body: "Invoicing is a commodity; knowing whether you can make payroll in six weeks is not. We repositioned the product around cash-flow forecasting and made invoicing the way data gets in, not the headline.",
      },
      {
        service: "design",
        title: "A dashboard you read in ten seconds",
        body: "The home screen answers one question: “are we okay?” A single forecast line, three flagged risks and the next actions. Everything else is one click deeper. The design system covers charts, tables and dense data states.",
      },
      {
        service: "engineering",
        title: "Multi-tenant from day one",
        body: "Row-level tenant isolation, role-based permissions, Stripe billing with metered seats, and accounting-grade audit trails. Integrations with banks and accounting packages run on idempotent, retryable background jobs.",
      },
      {
        service: "launch",
        title: "Self-serve onboarding",
        body: "A guided import turns a CSV or accounting connection into a live forecast in under ten minutes. We shipped a pricing page, in-app upgrade flow and lifecycle emails so new agencies could sign up without talking to anyone.",
      },
    ],
    outcomes: [
      // TODO(placeholder): replace all three metrics with real, verifiable results.
      { value: "14 wks", label: "From kick-off to paid launch" },
      { value: "9 min", label: "Median time from signup to first forecast" },
      { value: "41%", label: "Trial-to-paid conversion in the first 60 days" },
    ],
    // TODO(placeholder): real stack for this project.
    stack: ["TypeScript", "Next.js", "Postgres (row-level security)", "Stripe Billing", "Background job queue"],
    quote: {
      // TODO(placeholder): fictional testimonial — replace with a real, approved quote or delete this block.
      text: "Our design partners went from “interesting” to “where do I pay?” as soon as they saw the forecast screen. That was the moment the company became real.",
      name: "Placeholder Name",
      role: "CEO, Northpeak",
    },
  },
  {
    slug: "tandem",
    title: "Tandem",
    // TODO(placeholder): fictional client — replace with a real, approved client name.
    client: "Orchard Labs",
    category: "Productivity",
    tagline: "A fast, calm workspace where small teams keep docs, tasks and decisions in one place, even offline.",
    summary:
      "An offline-first collaborative workspace for small teams, built around speed and keyboard-first editing and shipped to general availability in 13 weeks.",
    // TODO(placeholder): real year and duration.
    year: "2024",
    duration: "13 weeks",
    services: ["strategy", "design", "engineering", "launch"],
    cover: {
      src: "/work/tandem.svg",
      alt: "Illustration of the Tandem workspace: a sidebar of pages beside a document with a task list and live collaborator cursors.",
    },
    challenge: [
      "Orchard Labs' founders were frustrated by workspace tools that had grown into sprawling platforms: slow to load, heavy to configure, and full of features small teams never touched. They wanted the opposite: a workspace that opens instantly and gets out of the way.",
      "That meant solving hard problems quietly. Real-time collaboration, offline editing and sync conflicts are the kind of engineering that users never notice when it's right and never forgive when it's wrong.",
    ],
    approach: [
      {
        service: "strategy",
        title: "Opinionated by design",
        body: "We defined who Tandem was not for. By focusing on teams of 3–15 and cutting databases, wikis and automations from v1, the product could be dramatically simpler and faster than the incumbents.",
      },
      {
        service: "design",
        title: "Keyboard-first, quiet interface",
        body: "Every action is reachable from a command bar. The interface uses one typeface, one accent and almost no chrome. Page transitions are under 100 ms, and every empty state teaches a shortcut.",
      },
      {
        service: "engineering",
        title: "Local-first sync engine",
        body: "Documents live on the device and sync through a CRDT-based engine, so editing works on a plane and merges cleanly when you reconnect. Presence, comments and version history are built on the same foundation.",
      },
      {
        service: "launch",
        title: "Import and invite loops",
        body: "One-click imports from common note and task tools removed the cold-start problem, and invitation flows made every new team member a distribution channel. Launch was a product-led, invite-only rollout.",
      },
    ],
    outcomes: [
      // TODO(placeholder): replace all three metrics with real, verifiable results.
      { value: "13 wks", label: "From concept to general availability" },
      { value: "<90 ms", label: "Median page-open time on a cold start" },
      { value: "2.7×", label: "Average team growth in the first month via invites" },
    ],
    // TODO(placeholder): real stack for this project.
    stack: ["TypeScript", "React", "CRDT sync engine", "SQLite (local)", "WebSockets", "Postgres"],
    quote: {
      // TODO(placeholder): fictional testimonial — replace with a real, approved quote or delete this block.
      text: "They built the thing we described in a one-page memo, then made it better than we imagined. Offline sync that just works is why people trust it.",
      name: "Placeholder Name",
      role: "Founder, Orchard Labs",
    },
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
