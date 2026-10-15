import { cn } from "@/lib/cn";
import { Wave } from "./Ornaments";

type EyebrowProps = {
  children: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
};

/** Etichetta in maiuscoletto sopra i titoli, con onda decorativa. */
export function Eyebrow({ children, align = "left", tone = "dark", className }: EyebrowProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      <span
        className={cn(
          "text-[0.7rem] font-semibold uppercase tracking-[0.32em]",
          tone === "dark" ? "text-deep" : "text-sky-soft",
        )}
      >
        {children}
      </span>
      <Wave className={tone === "dark" ? "text-sky" : "text-sun"} />
    </div>
  );
}
