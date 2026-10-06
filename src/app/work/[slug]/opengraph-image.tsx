import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/content/work";
import { renderOg } from "@/lib/og";

export const alt = "Qubyne case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  return renderOg({ eyebrow: `Case study · ${study.category}`, title: study.title, subtitle: study.tagline });
}
