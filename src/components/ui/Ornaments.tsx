import { cn } from "@/lib/cn";

/** Piccola onda ispirata al segno blu sotto il monogramma del logo. */
export function Wave({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 10"
      fill="none"
      aria-hidden="true"
      className={cn("h-2.5 w-16", className)}
    >
      <path
        d="M1 6.5C9 1.5 15 1.5 22 5s13.5 3.5 20 0 13-3.5 21 1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Linea decorativa a mano libera, eco del gesto del monogramma "LI". */
export function Flourish({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 260"
      fill="none"
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
      <path
        d="M30 2c-14 30 14 52 4 86-8 26-26 20-22 2 4-17 26-12 24 14-2 30-24 46-12 82 9 26 26 34 14 72"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Il punto giallo dell'"i" del logo, usato come accento. */
export function SunDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block rounded-full bg-sun", className)}
    />
  );
}
