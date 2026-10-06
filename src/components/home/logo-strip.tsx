import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

/**
 * TODO(placeholder): these are fictional company names set as text wordmarks.
 * Replace with real client names or logos you have permission to show (swap each
 * <span> for a next/image <Image> with descriptive alt text), or remove this
 * section entirely until you have approved logos. Do not ship invented clients.
 */
const logos = [
  { name: "Halyard Studio", className: "font-semibold tracking-tight" },
  { name: "NORTHPEAK", className: "font-bold tracking-[0.18em] text-base" },
  { name: "Orchard Labs", className: "font-medium tracking-tight" },
  { name: "lumenfield", className: "font-semibold tracking-[-0.06em] text-2xl" },
  { name: "Brightloop", className: "font-mono font-medium tracking-tight text-lg" },
  { name: "KESTREL", className: "font-semibold tracking-[0.3em] text-sm" },
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
            <li key={logo.name} className={`text-center text-xl whitespace-nowrap text-ink-subtle ${logo.className}`}>
              {logo.name}
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  );
}
