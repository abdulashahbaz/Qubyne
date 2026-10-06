import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * Social share image (1200×630). Image generation can't read CSS variables, so
 * these hex values mirror the DARK theme in src/styles/tokens.css. Update them
 * together if you change the palette or accent.
 */
const colors = {
  canvas: "#0a0a0b",
  ink: "#f4f4f5",
  muted: "#a1a1aa",
  accent: "#ff6b3d",
  line: "#2a2a30",
};

// Read once at build time. Geist ships TTFs alongside its woff2 files.
const semiBold = readFile(join(process.cwd(), "node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.ttf"));

type OgProps = { eyebrow: string; title: string; subtitle?: string };

export async function renderOg({ eyebrow, title, subtitle }: OgProps) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: colors.canvas,
          backgroundImage: `radial-gradient(circle at 85% 0%, ${colors.accent}55 0%, transparent 55%)`,
          color: colors.ink,
          fontFamily: "Geist",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="44" height="44" viewBox="0 0 24 24">
            <polygon points="12,2 21,7 12,12 3,7" fill={colors.accent} />
            <polygon points="3,8.5 11.25,13.1 11.25,22 3,17.4" fill={colors.ink} />
            <polygon points="21,8.5 12.75,13.1 12.75,22 21,17.4" fill={colors.muted} />
          </svg>
          <div style={{ display: "flex", fontSize: 38, letterSpacing: "-0.04em" }}>Qubyne</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: colors.accent,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 24,
              fontSize: title.length > 40 ? 76 : 96,
              lineHeight: 1.02,
              letterSpacing: "-0.045em",
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div style={{ display: "flex", marginTop: 28, fontSize: 32, lineHeight: 1.35, color: colors.muted, maxWidth: 940 }}>
              {subtitle}
            </div>
          )}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Geist", data: await semiBold, weight: 600, style: "normal" }],
    },
  );
}
