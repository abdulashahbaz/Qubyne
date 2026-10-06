import type { SVGProps } from "react";

/**
 * Minimal inline icon set (24×24, 1.6 stroke, currentColor). Hand-drawn so the
 * site ships no icon dependency. Add a path here, then use <Icon name="…" />.
 */
const paths = {
  "arrow-right": "M5 12h14M13 6l6 6-6 6",
  "arrow-up-right": "M7 17 17 7M8 7h9v9",
  sun: "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4",
  moon: "M20.5 13.2A8.5 8.5 0 1 1 10.8 3.5a6.8 6.8 0 0 0 9.7 9.7Z",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6 6 18",
  check: "m5 12.5 4.5 4.5L19 7",
  plus: "M12 5v14M5 12h14",
  "chevron-down": "m6 9 6 6 6-6",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  layers: "m12 3 9 5-9 5-9-5 9-5ZM3 12.5l9 5 9-5M3 16.5l9 5 9-5",
  play: "M4 5h16v14H4zM10 9.2v5.6l4.8-2.8-4.8-2.8Z",
  checklist: "M10 6h10M10 12h10M10 18h10M3.5 6l1.2 1.2L7 4.8M3.5 12l1.2 1.2L7 10.8M3.5 18l1.2 1.2L7 16.8",
  terminal: "M3 5h18v14H3zM7 10l3 2.2L7 14.4M12.5 15h4.5",
  compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM15.8 8.2l-2.1 5.5-5.5 2.1 2.1-5.5 5.5-2.1Z",
  pencil: "M4 20l.9-4.1L16.6 4.2a1.8 1.8 0 0 1 2.5 0l.7.7a1.8 1.8 0 0 1 0 2.5L8.1 19.1 4 20ZM14.5 6.3l3.2 3.2",
  code: "m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16",
  "trending-up": "m3 17 6-6 4 4 8-8M15 7h6v6",
} as const;

export type IconName = keyof typeof paths;

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & { name: IconName };

/** Decorative by default (aria-hidden). Pair with visible text or an aria-label on the parent. */
export function Icon({ name, className = "size-5", ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...props}
    >
      <path d={paths[name]} />
    </svg>
  );
}
