import { cx } from "@/lib/cx";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={cx("flex items-center gap-2.5 font-mono text-eyebrow text-accent uppercase", className)}>
      <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  id?: string;
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  /** Render the title as h1 (page hero) instead of h2. */
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({ id, eyebrow, title, lead, align = "left", as: Tag = "h2", className }: SectionHeadingProps) {
  return (
    <div className={cx("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow className={cx(align === "center" && "justify-center")}>{eyebrow}</Eyebrow>}
      <Tag id={id} className={cx(eyebrow && "mt-5", Tag === "h1" ? "text-h1" : "text-h2")}>
        {title}
      </Tag>
      {lead && <p className="mt-6 text-lead text-ink-muted">{lead}</p>}
    </div>
  );
}
