import Link from "next/link";
import { cx } from "@/lib/cx";

/**
 * TODO(placeholder): stand-in logo (isometric cube + wordmark). Replace the
 * <LogoMark /> paths and wordmark with the real brand assets. Colors come from
 * tokens, so a new mark restyles with the rest of the site.
 */
export function LogoMark({ className = "size-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className={className}>
      <polygon points="12,2 21,7 12,12 3,7" className="fill-accent" />
      <polygon points="3,8.5 11.25,13.1 11.25,22 3,17.4" className="fill-ink" />
      <polygon points="21,8.5 12.75,13.1 12.75,22 21,17.4" className="fill-ink/55" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Qubyne — home" className={cx("flex items-center gap-2.5 rounded-control", className)}>
      <LogoMark />
      <span className="font-display text-[1.375rem] font-semibold tracking-[-0.04em] text-ink">Qubyne</span>
    </Link>
  );
}
