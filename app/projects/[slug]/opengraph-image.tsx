import { ImageResponse } from "next/og";
import { projects } from "@/lib/data";

export const runtime = "edge";
export const alt = "Case Study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.id === params.slug);
  const title = project?.name ?? "Case Study";
  const tagline = project?.tagline ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0a0a0f 0%, #1a0a2e 50%, #0a0a0f 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            color: "#a78bfa",
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          Case Study · Abhijeet Kumar
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#d4d4d8",
              lineHeight: 1.4,
              maxWidth: 900,
            }}
          >
            {tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#a1a1aa",
          }}
        >
          <span>abhijeet-kr.vercel.app</span>
          <span>View live ↗</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
