import { cn } from "@/lib/utils";

/** KQ Monogramm aus ~/Desktop/Arbeit/Kerim/Logos/variante-1-siegel.svg, ohne Kasten. */
export function KqGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" aria-hidden className={className} fill="currentColor">
      <rect x="118" y="146" width="36" height="220" />
      <rect x="100" y="146" width="72" height="16" />
      <rect x="100" y="350" width="72" height="16" />
      <path d="M154 290 L222 146 L256 146 L154 254 Z" />
      <rect x="204" y="146" width="60" height="16" />
      <path d="M154 254 L270 366 L228 366 L154 290 Z" />
      <rect x="220" y="350" width="68" height="16" />
      <g transform="translate(352 256)">
        <path
          fillRule="evenodd"
          d="M0 -104 C 52 -104 90 -60 90 0 C 90 60 52 104 0 104 C -52 104 -90 60 -90 0 C -90 -60 -52 -104 0 -104 Z M0 -70 C -30 -70 -52 -40 -52 0 C -52 40 -30 70 0 70 C 30 70 52 40 52 0 C 52 -40 30 -70 0 -70 Z"
        />
        <path d="M14 62 L54 62 L74 128 L28 128 Z" />
      </g>
    </svg>
  );
}

/**
 * Logokachel wie das Siegel: Rundung 112 auf 512, also 22 Prozent.
 * dark = Anthrazit mit weissem KQ, light = weiss mit Anthrazit.
 */
export function KqTile({
  tone = "dark",
  className,
  style,
  innerRef,
}: {
  tone?: "dark" | "light";
  className?: string;
  style?: React.CSSProperties;
  innerRef?: React.Ref<HTMLDivElement>;
}) {
  return (
    <div
      ref={innerRef}
      aria-hidden
      style={style}
      className={cn(
        "kq-tile relative",
        tone === "dark" ? "bg-[#1d1d1f] text-white" : "bg-white text-[#1d1d1f]",
        className,
      )}
    >
      {/* inset in Prozent misst gegen die Kachel selbst, padding wuerde gegen den Elternblock messen */}
      <KqGlyph className="absolute inset-[9%]" />
    </div>
  );
}
