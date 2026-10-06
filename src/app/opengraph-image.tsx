import { site } from "@/content/site";
import { renderOg } from "@/lib/og";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return renderOg({
    eyebrow: "Product studio",
    title: "Software products worth switching to.",
    subtitle: "We design, build and launch modern software, from first sketch to public launch.",
  });
}
