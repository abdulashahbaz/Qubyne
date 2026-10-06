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
  title: "Qubyne — We design, build and launch software products",
  description:
    "Qubyne is a product studio that designs, builds and launches modern software — SaaS platforms, creative tools and productivity apps — end to end, with one senior team.",
  // TODO(placeholder): replace with the real inbox before launch.
  email: "hello@qubyne.com",
  // TODO(placeholder): add real profiles, e.g. { label: "LinkedIn", href: "https://…" }. The footer hides this block while empty.
  social: [] as { label: string; href: string }[],
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
] as const;
