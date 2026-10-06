import type { Metadata } from "next";
import { site } from "@/content/site";

/**
 * Per-page metadata with canonical URL, Open Graph and Twitter cards.
 * Next replaces (not merges) the nested `openGraph` object per page, so each
 * page restates title/description here. Relative URLs resolve via metadataBase.
 * Pass no title for the home page, which uses the full brand title.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = title ? `${title} — ${site.name}` : site.title;
  return {
    title: title ? title : { absolute: site.title },
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: site.name, locale: "en_US", title: fullTitle, description, url: path },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}
