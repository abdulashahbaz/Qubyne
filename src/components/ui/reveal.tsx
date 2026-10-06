import { createElement, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  as?: "div" | "li" | "article" | "p" | "span" | "ul" | "ol" | "figure" | "blockquote";
  /** Stagger in ms. */
  delay?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Marks an element to fade/slide in once as it scrolls into view. Pure markup:
 * the behaviour lives in <RevealOnScroll /> (mounted once in the root layout)
 * and the styles in globals.css. Content is visible without JavaScript.
 */
export function Reveal({ as = "div", delay = 0, className, children }: RevealProps) {
  return createElement(
    as,
    {
      className,
      "data-reveal": "",
      style: delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined,
    },
    children,
  );
}
