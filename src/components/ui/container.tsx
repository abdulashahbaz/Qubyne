import { cx } from "@/lib/cx";

/** Centered, gutter-padded content column. Width/gutter come from tokens. */
export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cx("mx-auto w-full max-w-site px-gutter", className)}>{children}</div>;
}
