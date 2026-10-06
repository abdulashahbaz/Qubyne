import { createElement, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  as?: "div" | "li" | "article" | "p" | "span" | "ul" | "ol" | "figure" | "blockquote";
  /** Stagger in ms. */
  delay?: number;
  /**
   * Use for content visible on first paint (heroes, page titles). Animates with
   * CSS alone as soon as the page renders, instead of waiting for JS to reveal
   * it on scroll. Hiding the LCP element until hydration cost ~1s of LCP.
   */
  onLoad?: boolean;
  className?: string;
  children: ReactNode;
};

/**
 * Fades/slides an element in. By default it reveals once as it scrolls into view
 * (behaviour in <RevealOnScroll />, mounted once in the root layout; styles in
 * globals.css). Content is visible without JavaScript either way.
 */
export function Reveal({ as = "div", delay = 0, onLoad = false, className, children }: RevealProps) {
  return createElement(
    as,
    {
      className,
      [onLoad ? "data-enter" : "data-reveal"]: "",
      style: delay ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties) : undefined,
    },
    children,
  );
}
