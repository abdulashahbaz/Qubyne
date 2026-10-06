/**
 * Site-wide facts and navigation. Edit here, not in components.
 */

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  // Vercel injects the production domain at build time, so canonical URLs,
  // the sitemap and OG tags are correct on deploy with zero configuration.
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const site = {
  name: "Qubyne",
  /** Canonical origin. Set NEXT_PUBLIC_SITE_URL once the final domain is live. */
  url: resolveSiteUrl(),
  // TODO(placeholder): confirm the positioning line (a studio that builds and launches its OWN products, not client work).
  title: "Qubyne — A studio that builds and launches its own software products",
  description:
    "Qubyne is a product studio. We design, build and launch our own software, from SaaS platforms to creative tools and productivity apps, and run each product as a business.",
  // TODO(placeholder): replace with the real inbox before launch.
  email: "hello@qubyne.com",
  // TODO(placeholder): add real profiles, e.g. { label: "LinkedIn", href: "https://…" }. The footer hides this block while empty.
  social: [] as { label: string; href: string }[],
} as const;

export const nav = [
  { label: "What we do", href: "/what-we-do" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
] as const;
