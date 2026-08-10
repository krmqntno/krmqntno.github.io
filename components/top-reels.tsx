import { ArrowUpRight } from "lucide-react";
import { topReels } from "@/content/top-reels";

export function TopReels() {
  return (
    <div className="mt-20 border-t border-border pt-14">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h3 className="display text-2xl sm:text-3xl">
          Was dabei herausgekommen ist.
        </h3>
        <p className="text-sm text-muted-foreground">
          Zahlen am 10.08.2026 direkt von den Profilen abgelesen
        </p>
      </div>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topReels.map((r, i) => (
          <li key={`${r.handle}-${i}`}>
            <a
              href={r.url ?? `https://instagram.com/${r.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-[0_1px_3px_rgba(0,0,0,0.06),0_8px_24px_rgba(0,0,0,0.05)]"
            >
              <div>
                <p className="display text-4xl sm:text-5xl">{r.views}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Aufrufe · {r.likes} Likes · {r.comments} Kommentare
                </p>

                <p className="mt-6 text-[17px] leading-snug">{r.topic}</p>
              </div>

              <div className="mt-8 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[15px] font-medium">{r.client}</p>
                  <p className="text-sm text-muted-foreground">
                    @{r.handle} · {r.date}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
                />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
