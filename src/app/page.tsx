import { CtaSection } from "@/components/cta-section";
import { FeaturedWork } from "@/components/home/featured-work";
import { Hero } from "@/components/home/hero";
import { HowWeWork } from "@/components/home/how-we-work";
import { LogoStrip } from "@/components/home/logo-strip";
import { WhatWeLaunch } from "@/components/home/what-we-launch";
import { WhyQubyne } from "@/components/home/why-qubyne";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/content/site";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ description: site.description, path: "/" });

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: site.name,
          url: site.url,
          description: site.description,
          email: site.email,
          // TODO(placeholder): add `logo` (absolute URL) and `sameAs` (social profile URLs) once supplied.
        }}
      />
      <Hero />
      <LogoStrip />
      <WhatWeLaunch />
      <HowWeWork />
      <FeaturedWork />
      <WhyQubyne />
      <CtaSection />
    </>
  );
}
