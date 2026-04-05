import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(ellipse at top left, rgba(242,107,58,0.25), transparent 60%), #0B0D12",
          color: "#F5F7FA",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "#F26B3A",
            }}
          />
          <div style={{ fontSize: "36px", fontWeight: 700, letterSpacing: "-0.02em" }}>
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "84px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
            }}
          >
            Révise avec une méthode{" "}
            <span style={{ color: "#F26B3A" }}>plus claire.</span>
          </div>
          <div style={{ fontSize: "28px", color: "#A7B0BE", maxWidth: "900px" }}>
            Organise tes matières, crée quiz et fiches avec l’IA, suis ta progression.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "22px",
            color: "#A7B0BE",
          }}
        >
          <div style={{ display: "flex", gap: "24px" }}>
            <span>iOS</span>
            <span style={{ color: "#262B36" }}>·</span>
            <span>Android</span>
          </div>
          <div>{site.domain}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
