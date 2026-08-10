import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name}, ${site.role} für ${site.audience}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Vorschaubild für WhatsApp, Instagram DMs und alles andere, wo der Link
 * geteilt wird. Ohne das erscheint eine graue Box.
 */
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
          background: "#ffffff",
          padding: "72px 80px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: "#7c3aed",
            }}
          />
          <div style={{ fontSize: 26, color: "#6e6e73" }}>{site.name}</div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 88,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#1d1d1f",
            fontWeight: 600,
            maxWidth: 900,
          }}
        >
          Dein Kanal soll Kunden bringen. Nicht Likes.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#6e6e73",
            maxWidth: 860,
          }}
        >
          Reels, Karussells, Skripte und der Funnel dahinter. Du drehst, ich
          mache den Rest.
        </div>
      </div>
    ),
    size
  );
}
