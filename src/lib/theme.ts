/** Dark-first: visitors get dark unless they have explicitly chosen light. */
export const DEFAULT_THEME = "dark" as const;
export const THEME_STORAGE_KEY = "qubyne-theme";

export type Theme = "dark" | "light";

/**
 * Runs inline in <head> before first paint so there is no flash of the wrong
 * theme. It also adds the `js` class that enables scroll-reveal styles, so
 * content is never hidden for visitors without JavaScript.
 */
export const themeInitScript = `(function(){var d=document.documentElement;try{var t=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)});d.dataset.theme=t==="light"||t==="dark"?t:${JSON.stringify(DEFAULT_THEME)}}catch(e){}d.classList.add("js")})();`;
