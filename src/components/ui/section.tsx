import { cx } from "@/lib/cx";
import { Container } from "./container";

type SectionProps = {
  id?: string;
  /** id of the heading inside, so the section is a labelled landmark. */
  labelledBy?: string;
  /** Applied to the full-bleed <section> (use for backgrounds, borders). */
  className?: string;
  /** Applied to the inner container. */
  containerClassName?: string;
  children: React.ReactNode;
};

/** Full-width band with token-driven vertical rhythm and a centered container. */
export function Section({ id, labelledBy, className, containerClassName, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cx("relative py-section", className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
