import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import type { CaseStudy } from "@/content/work";

type Props = {
  study: CaseStudy;
  /** Set on cards that are likely above the fold so the image loads eagerly. */
  priority?: boolean;
};

/** One card, reused on the Home page, Work index and "more work" rail. The whole card is a single link. */
export function CaseStudyCard({ study, priority = false }: Props) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-surface shadow-card transition-colors duration-(--duration-base) hover:border-line-strong">
      <div className="overflow-hidden border-b border-line bg-canvas">
        <Image
          src={study.cover.src}
          alt={study.cover.alt}
          width={1600}
          height={1000}
          priority={priority}
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="font-mono text-eyebrow text-ink-subtle uppercase">
          <span className="text-accent">{study.category}</span> · {study.client}
        </p>
        <h3 className="mt-4 text-h3">
          {/* The ::after stretches this link over the whole card. */}
          <Link href={`/work/${study.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {study.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-ink-muted">{study.tagline}</p>
        <p className="mt-6 flex items-center gap-2 text-[0.9375rem] font-medium text-ink">
          Read the case study
          <Icon
            name="arrow-right"
            className="size-4 text-accent transition-transform duration-(--duration-base) ease-smooth group-hover:translate-x-1"
          />
        </p>
      </div>
    </article>
  );
}
