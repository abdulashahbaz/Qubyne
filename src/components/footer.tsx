import Link from "next/link";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui/container";
import { caseStudies } from "@/content/work";
import { nav, site } from "@/content/site";
import { capabilities } from "@/content/capabilities";

const linkClass =
  "text-[0.9375rem] text-ink-muted transition-colors duration-(--duration-base) hover:text-ink";

export function Footer() {
  // The "Selected work" column only appears once there is a case study to link to.
  const hasWork = caseStudies.length > 0;
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className={hasWork ? "md:col-span-5" : "md:col-span-6"}>
          <Logo />
          <p className="mt-5 max-w-sm text-ink-muted">
            A product studio that designs, builds and launches its own software, and runs every product as a business.
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

        <nav aria-label="Company" className={hasWork ? "md:col-span-2" : "md:col-span-3"}>
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

        <nav aria-label="What we do" className={hasWork ? "md:col-span-2" : "md:col-span-3"}>
          <h2 className="font-mono text-eyebrow text-ink-subtle uppercase">What we do</h2>
          <ul className="mt-5 space-y-3">
            {capabilities.map((c) => (
              <li key={c.slug}>
                <Link href={`/what-we-do#${c.slug}`} className={linkClass}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {hasWork && (
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
        )}
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
