import { ImageResponse } from "next/og";
import { brand } from "@/lib/brand";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Home-screen icon. Colors come from src/lib/brand.ts. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: brand.canvas }}>
        <svg width="112" height="112" viewBox="0 0 24 24">
          <polygon points="12,2 21,7 12,12 3,7" fill={brand.accent} />
          <polygon points="3,8.5 11.25,13.1 11.25,22 3,17.4" fill={brand.ink} />
          <polygon points="21,8.5 12.75,13.1 12.75,22 21,17.4" fill={brand.muted} />
        </svg>
      </div>
    ),
    size,
  );
}
