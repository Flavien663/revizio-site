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
            "radial-gradient(ellipse at 20% 0%, rgba(77,141,255,0.28), transparent 55%), linear-gradient(180deg, #EEF4F8 0%, #E4EEF4 100%)",
          color: "#102033",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "#326BDE",
            }}
          />
          <div
            style={{
              fontSize: "40px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#102033",
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
              color: "#102033",
              maxWidth: "1000px",
            }}
          >
            Comprends. Teste-toi.{" "}
            <span style={{ color: "#326BDE" }}>Retiens.</span>
          </div>
          <div style={{ fontSize: "30px", color: "#667487", maxWidth: "900px" }}>
            Un sujet, une fiche, un quiz ou un examen. En quelques secondes.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: "22px",
            color: "#667487",
          }}
        >
          <div style={{ display: "flex", gap: "22px" }}>
            <span>iOS</span>
            <span style={{ color: "#C5D0DD" }}>·</span>
            <span>Android</span>
            <span style={{ color: "#C5D0DD" }}>·</span>
            <span>Sans publicité</span>
          </div>
          <div style={{ fontWeight: 600 }}>{site.domain}</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
