import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

/**
 * Typefaces are self-hosted (no network at build or runtime).
 * To swap a typeface: change the import above, then update the --font-* stacks
 * in src/styles/tokens.css. (next/font/google works too if you prefer Google Fonts.)
 */
export const fontClassNames = `${GeistSans.variable} ${GeistMono.variable}`;
