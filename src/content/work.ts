import type { CapabilitySlug } from "./capabilities";

/**
 * Case studies. Empty for now: add an entry below and a detail page, a card on
 * /work and Home, a footer link, a sitemap entry and a share image all appear
 * automatically (the Work area hides itself, or shows a "coming soon" state,
 * while this list is empty).
 *
 * Each entry renders through the single template at src/app/work/[slug]/page.tsx.
 *
 * To add one:
 *   1. Put a 16:10 cover image (PNG/JPG/WebP, about 1600×1000) in /public/work/.
 *   2. Copy the example at the bottom of this file into `caseStudies`.
 *   3. Only publish real, verifiable facts: real numbers, real quotes.
 */
export type CaseStudy = {
  slug: string;
  /** Product name. */
  title: string;
  category: "Creative tool" | "SaaS" | "Productivity" | "Internal tool";
  /** One line shown on cards and as the page subtitle. */
  tagline: string;
  /** 1–2 sentences for the meta description and cards. */
  summary: string;
  year: string;
  duration: string;
  /** Which disciplines the story covers (links to /what-we-do). */
  capabilities: CapabilitySlug[];
  /** Optional: a partner or customer, if there is one. Hidden when absent. */
  client?: string;
  cover: { src: string; alt: string };
  challenge: string[];
  approach: { capability: CapabilitySlug; title: string; body: string }[];
  outcomes: { value: string; label: string }[];
  stack: string[];
  /** Optional: a real, approved quote. Hidden when absent. */
  quote?: { text: string; name: string; role: string };
};

export const caseStudies: CaseStudy[] = [];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);

/* ---- Example entry (copy into `caseStudies` above, then replace every field) ----

  {
    slug: "my-product",
    title: "My Product",
    category: "SaaS",
    tagline: "One sentence on what it does and for whom.",
    summary: "One or two sentences for search results and cards.",
    year: "2026",
    duration: "12 weeks",
    capabilities: ["strategy", "design", "engineering", "launch"],
    cover: { src: "/work/my-product.png", alt: "Describe what the screenshot shows." },
    challenge: ["The problem we set out to solve."],
    approach: [
      { capability: "strategy", title: "What we decided", body: "…" },
      { capability: "design", title: "How it works", body: "…" },
      { capability: "engineering", title: "How it's built", body: "…" },
      { capability: "launch", title: "How we launched", body: "…" },
    ],
    outcomes: [{ value: "123", label: "A real, verifiable result" }],
    stack: ["TypeScript", "Next.js"],
  },
*/
