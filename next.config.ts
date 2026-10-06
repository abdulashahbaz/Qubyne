import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static-friendly: every page is prerendered at build time, so Vercel needs no extra config.
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
