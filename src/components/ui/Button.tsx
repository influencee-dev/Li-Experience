import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-3 px-7 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.24em] transition-colors duration-500 ease-soft";

const variants = {
  /** Magenta pieno: azione principale. */
  primary: "bg-magenta text-white hover:bg-deep",
  /** Bordo chiaro, per fondi fotografici scuri. */
  ghost: "border border-white/60 text-white hover:border-white hover:bg-white hover:text-night",
  /** Bordo blu, per fondi chiari. */
  outline: "border border-deep text-deep hover:bg-deep hover:text-white",
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)}>
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className="h-3.5 w-3.5 transition-transform duration-500 ease-soft group-hover:translate-x-1"
        strokeWidth={1.75}
      />
    </Link>
  );
}
