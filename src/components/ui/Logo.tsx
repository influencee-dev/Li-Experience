import Image from "next/image";
import Link from "next/link";
import { brandAssets } from "@/data/assets";
import { brand } from "@/data/content";
import { cn } from "@/lib/cn";

type LogoProps = {
  className?: string;
  priority?: boolean;
  /** Se false il logo non è un link (es. nel footer accanto ad altri link). */
  linked?: boolean;
};

/** Logo ufficiale, usato senza modifiche. */
export function Logo({ className, priority, linked = true }: LogoProps) {
  const img = (
    <Image
      src={brandAssets.logo.src}
      alt={brandAssets.logo.alt}
      priority={priority}
      className={cn("h-auto w-full", className)}
    />
  );

  if (!linked) return img;

  return (
    <Link href="/" aria-label={`${brand.name} – torna alla Home`} className="block">
      {img}
    </Link>
  );
}
