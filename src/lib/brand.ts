/**
 * Brand colors for things rendered OUTSIDE the browser's CSS: generated share
 * images (OG), the Apple touch icon and the <meta name="theme-color">.
 * Those can't read CSS variables, so this file mirrors the DARK theme in
 * src/styles/tokens.css. If you change the palette or accent there, update the
 * values here too (and src/app/icon.svg, the favicon, which is a standalone file).
 */
export const brand = {
  canvas: "#0a0a0b",
  ink: "#f4f4f5",
  muted: "#a1a1aa",
  accent: "#ff6b3d",
  line: "#2a2a30",
} as const;
