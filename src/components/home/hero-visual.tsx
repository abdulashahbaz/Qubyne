import { Icon } from "@/components/icons";
import { cx } from "@/lib/cx";

/**
 * Decorative product mock-up for the hero, built from markup and tokens so it
 * re-themes with the site. It is purely illustrative, hence aria-hidden.
 */
export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto mt-16 w-full max-w-5xl sm:mt-20">
      <div className="overflow-hidden rounded-card border border-line bg-surface shadow-pop">
        {/* window chrome */}
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="ml-3 h-6 w-full max-w-64 rounded-pill bg-raised" />
        </div>

        <div className="grid sm:grid-cols-[13rem_1fr]">
          {/* sidebar */}
          <div className="hidden border-r border-line p-4 sm:block">
            <div className="h-7 w-24 rounded-md bg-raised" />
            <ul className="mt-6 space-y-3">
              {["w-4/5", "w-3/5", "w-full", "w-2/3", "w-3/4"].map((width, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className={cx("size-4 shrink-0 rounded", i === 0 ? "bg-accent" : "bg-line-strong")} />
                  <span className={cx("h-2.5 rounded-pill", width, i === 0 ? "bg-ink/70" : "bg-line")} />
                </li>
              ))}
            </ul>
          </div>

          {/* main panel */}
          <div className="min-w-0 p-5 sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div className="space-y-2.5">
                <div className="h-3.5 w-36 rounded-pill bg-ink/80 sm:w-44" />
                <div className="h-2.5 w-48 rounded-pill bg-line-strong sm:w-60" />
              </div>
              <div className="h-9 w-20 shrink-0 rounded-control bg-accent sm:w-24" />
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-control border border-line bg-canvas p-3 sm:p-4">
                  <div className="h-2 w-1/2 rounded-pill bg-line-strong" />
                  <div className="mt-3 h-5 w-2/3 rounded-pill bg-ink/80" />
                  <div className="mt-4 flex h-6 items-end gap-1">
                    {[40, 65, 50, 85, 70, 100].map((h, j) => (
                      <span
                        key={j}
                        style={{ height: `${h}%` }}
                        className={cx("w-full rounded-sm", j > 3 - i ? "bg-accent" : "bg-line-strong")}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-control border border-line bg-canvas p-4">
              <svg viewBox="0 0 600 170" preserveAspectRatio="none" className="h-28 w-full sm:h-40">
                <defs>
                  <linearGradient id="hero-visual-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" style={{ stopColor: "var(--accent)", stopOpacity: 0.32 }} />
                    <stop offset="1" style={{ stopColor: "var(--accent)", stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
                {[40, 85, 130].map((y) => (
                  <line key={y} x1="0" x2="600" y1={y} y2={y} className="stroke-line" strokeWidth="1" />
                ))}
                <path
                  d="M0 135 C60 128 90 148 150 112 S250 62 310 82 S420 32 480 52 S560 22 600 12 L600 170 L0 170 Z"
                  fill="url(#hero-visual-fill)"
                />
                <path
                  d="M0 135 C60 128 90 148 150 112 S250 62 310 82 S420 32 480 52 S560 22 600 12"
                  fill="none"
                  className="stroke-accent"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* floating accents */}
      <div className="float-slow absolute -top-5 -right-1 rounded-control border border-line bg-surface p-3 shadow-card sm:-top-7 sm:-right-8">
        <div className="mb-2 h-2 w-16 rounded-pill bg-line-strong" />
        <div className="flex gap-1.5">
          <span className="size-6 rounded-md bg-accent" />
          <span className="size-6 rounded-md bg-ink" />
          <span className="size-6 rounded-md bg-ink-muted" />
          <span className="size-6 rounded-md bg-line-strong" />
        </div>
      </div>

      <div
        style={{ animationDelay: "-4s" }}
        className="float-slow absolute -bottom-5 -left-1 flex items-center gap-3 rounded-control border border-line bg-surface py-2.5 pr-5 pl-3 shadow-card sm:-bottom-7 sm:-left-8"
      >
        <span className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-ink">
          <Icon name="check" className="size-4" />
        </span>
        <span className="space-y-1.5">
          <span className="block h-2 w-20 rounded-pill bg-ink/80" />
          <span className="block h-2 w-14 rounded-pill bg-line-strong" />
        </span>
      </div>
    </div>
  );
}
