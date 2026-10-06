import Link from "next/link";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";
import { caseStudies } from "@/content/work";
import { nav, site } from "@/content/site";
import { services } from "@/content/services";

const linkClass =
  "text-[0.9375rem] text-ink-muted transition-colors duration-(--duration-base) hover:text-ink";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-ink-muted">
            A product studio that designs, builds and launches modern software, from first sketch to public launch.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-6 inline-block font-medium text-ink underline decoration-line-strong underline-offset-4 transition-colors duration-(--duration-base) hover:decoration-accent"
          >
            {site.email}
          </a>
          {site.social.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} className={linkClass} rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <nav aria-label="Company" className="md:col-span-2">
          <h2 className="font-mono text-eyebrow text-ink-subtle uppercase">Company</h2>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className={linkClass}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Services" className="md:col-span-2">
          <h2 className="font-mono text-eyebrow text-ink-subtle uppercase">Services</h2>
          <ul className="mt-5 space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services#${s.slug}`} className={linkClass}>
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Selected work" className="md:col-span-3">
          <h2 className="font-mono text-eyebrow text-ink-subtle uppercase">Selected work</h2>
          <ul className="mt-5 space-y-3">
            {caseStudies.map((c) => (
              <li key={c.slug}>
                <Link href={`/work/${c.slug}`} className={linkClass}>
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <div className="border-t border-line">
        <Container className="py-6 text-sm text-ink-subtle">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
