import { cn } from "@/lib/utils";

/**
 * Das Blatt, das auf dem Studioboden liegt. Kein overflow hidden, sonst
 * fallen die gehobenen Stuecke im Hero flach.
 */
export function Sheet({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      id="sheet"
      className={cn(
        "sheet relative mx-auto w-[calc(100%-24px)] max-w-[1280px] rounded-[20px] bg-background sm:w-[calc(100%-48px)] sm:rounded-[24px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
