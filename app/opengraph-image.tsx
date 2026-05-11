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
          padding: "72px",
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(242,107,58,0.28), transparent 55%), linear-gradient(180deg, #FBFAF7 0%, #FFE6D9 100%)",
          color: "#0F1115",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "#F26B3A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontWeight: 800,
              fontSize: "32px",
            }}
          >
            R
          </div>
          <div
            style={{
              fontSize: "40px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#0F1115",
            }}
          >
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <div
            style={{
              fontSize: "96px",
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#0F1115",
              maxWidth: "1000px",
            }}
          >
            Apprends ce que tu veux.{" "}
            <span style={{ color: "#D95426" }}>En jouant.</span>
          </div>
          <div style={{ fontSize: "30px", color: "#5B6472", maxWidth: "900px" }}>
            8+ jeux IA · 180+ niveaux d'aventure · sur iOS
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "22px",
            color: "#5B6472",
          }}
        >
          <div style={{ display: "flex", gap: "22px" }}>
            <span>iOS</span>
            <span style={{ color: "#C5C5C5" }}>·</span>
            <span>Android — bientôt</span>
            <span style={{ color: "#C5C5C5" }}>·</span>
            <span>Sans publicité</span>
          </div>
          <div style={{ fontWeight: 600 }}>{site.domain}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
