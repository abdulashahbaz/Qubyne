import { site } from "@/content/site";
import { renderOg } from "@/lib/og";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    eyebrow: "Product studio",
    title: "Software products worth switching to.",
    subtitle: "A studio that designs, builds and launches its own software products.",
  });
}
