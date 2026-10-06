import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

/**
 * TODO(placeholder): these are fictional company names set as text wordmarks.
 * Replace with real client names or logos you have permission to show (swap each
 * <span> for a next/image <Image> with descriptive alt text), or remove this
 * section entirely until you have approved logos. Do not ship invented clients.
 */
const logos = [
  { name: "Halyard Studio", className: "text-lg font-semibold tracking-tight sm:text-xl" },
  { name: "NORTHPEAK", className: "text-sm font-bold tracking-[0.18em] sm:text-base" },
  { name: "Orchard Labs", className: "text-lg font-medium tracking-tight sm:text-xl" },
  { name: "lumenfield", className: "text-xl font-semibold tracking-[-0.06em] sm:text-2xl" },
  { name: "Brightloop", className: "font-mono text-base font-medium tracking-tight sm:text-lg" },
  { name: "KESTREL", className: "text-xs font-semibold tracking-[0.3em] sm:text-sm" },
];

export function LogoStrip() {
  return (
    <section aria-labelledby="logos-title" className="border-y border-line py-12 sm:py-14">
      <Container>
        <Reveal>
          <h2 id="logos-title" className="text-center font-mono text-eyebrow text-ink-subtle uppercase">
            Teams we&rsquo;ve launched with
          </h2>
        </Reveal>
        <Reveal as="ul" delay={100} className="mt-9 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo) => (
            <li key={logo.name} className={`min-w-0 text-center text-ink-subtle ${logo.className}`}>
              {logo.name}
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
