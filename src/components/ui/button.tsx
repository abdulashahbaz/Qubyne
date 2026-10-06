import Link from "next/link";
import { cx } from "@/lib/cx";
import { Icon } from "@/components/icons";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "group inline-flex shrink-0 items-center justify-center gap-2 rounded-control font-medium whitespace-nowrap " +
  "transition-[background-color,border-color,color,transform] duration-(--duration-base) ease-smooth " +
  "active:translate-y-px disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-accent-ink hover:bg-accent-hover",
  secondary: "border border-line-strong bg-surface text-ink hover:border-ink-subtle hover:bg-raised",
  ghost: "text-ink-muted hover:bg-raised hover:text-ink",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-7 text-base",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className,
}: { variant?: Variant; size?: Size; className?: string } = {}) {
  return cx(base, variants[variant], sizes[size], className);
}

const arrow = (
  <Icon
    name="arrow-right"
    className="size-4 transition-transform duration-(--duration-base) ease-smooth group-hover:translate-x-0.5"
  />
);

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
  children: React.ReactNode;
};

/** A link that looks like a button. Internal paths use next/link; others a plain anchor. */
export function ButtonLink({ href, variant, size, arrow: showArrow, className, children }: ButtonLinkProps) {
  const classes = buttonStyles({ variant, size, className });
  const content = (
    <>
      {children}
      {showArrow && arrow}
    </>
  );
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}

type ButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
  variant?: Variant;
  size?: Size;
  arrow?: boolean;
  className?: string;
};

export function Button({ variant, size, arrow: showArrow, className, children, type = "button", ...rest }: ButtonProps) {
  return (
    <button type={type} className={buttonStyles({ variant, size, className })} {...rest}>
      {children}
      {showArrow && arrow}
    </button>
  );
}
