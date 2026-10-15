import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SunDot } from "@/components/ui/Ornaments";
import { Reveal } from "@/components/ui/Reveal";
import type { SiteImage } from "@/data/assets";
import { cn } from "@/lib/cn";

type StatementSectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  paragraphs: readonly string[];
  image: SiteImage;
  /** "left": immagine a sinistra; "right": immagine a destra. */
  imageSide: "left" | "right";
  tone: "ivory" | "mist";
  imageAspect?: string;
};

/**
 * Layout editoriale testo + immagine, condiviso da Mission e Vision
 * con orientamento invertito.
 */
export function StatementSection({
  id,
  eyebrow,
  title,
  paragraphs,
  image,
  imageSide,
  tone,
  imageAspect = "aspect-[4/5]",
}: StatementSectionProps) {
  const [lead, ...rest] = paragraphs;
  const titleId = `${id}-title`;
  const imageRight = imageSide === "right";

  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn("relative overflow-hidden py-24 md:py-32", tone === "ivory" ? "bg-ivory" : "bg-mist")}
    >
      <div className="mx-auto grid max-w-[90rem] items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-0 lg:px-12">
        <div className={cn("relative lg:col-span-6", imageRight && "lg:order-2 lg:col-start-7")}>
          <Reveal
            y={40}
            className={cn("relative mx-auto max-w-xl lg:max-w-none", imageRight ? "lg:ml-12" : "lg:mr-12")}
          >
            <div className={cn("relative overflow-hidden", imageAspect)}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 45vw, 92vw"
                className="object-cover"
              />
            </div>
            {/* Titolo "in filigrana" che si sovrappone all'immagine */}
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute -bottom-12 hidden select-none font-serif text-[8.5rem] font-semibold leading-none tracking-[0.04em] text-transparent lg:block",
                "[-webkit-text-stroke:1px_var(--color-deep)]",
                imageRight ? "-left-24" : "-right-24",
              )}
            >
              {title}
            </span>
          </Reveal>
        </div>

        <div
          className={cn(
            "relative lg:col-span-5",
            imageRight ? "lg:order-1 lg:col-start-1 lg:pr-6" : "lg:col-start-8 lg:pl-4",
          )}
        >
          <Reveal>
            <Eyebrow>{eyebrow}</Eyebrow>
            <h2
              id={titleId}
              className="mt-6 flex items-center gap-4 font-serif text-5xl font-medium tracking-[0.08em] text-magenta sm:text-6xl"
            >
              {title}
              <SunDot className="h-3 w-3" />
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 font-serif text-[1.6rem] leading-snug text-deep sm:text-[1.9rem]">{lead}</p>
          </Reveal>
          {rest.map((p, i) => (
            <Reveal key={i} delay={0.2}>
              <p className="mt-6 text-base leading-[1.85] text-ink-soft">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
