import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SunDot, Wave } from "@/components/ui/Ornaments";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/assets";
import { anchors, founder } from "@/data/content";

/** Evidenzia il nome del metodo all'interno del testo, senza alterarlo. */
function withMethod(text: string) {
  const key = "Turismo 4.0";
  const i = text.indexOf(key);
  if (i === -1) return text;
  return (
    <>
      {text.slice(0, i)}
      <strong className="font-semibold text-deep">{key}</strong>
      {text.slice(i + key.length)}
    </>
  );
}

export function FounderSection() {
  const [lead, ...rest] = founder.paragraphs;

  return (
    <section
      id={anchors.founder}
      aria-labelledby="liliana-title"
      className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40"
    >
      {/* Grande iniziale decorativa */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-6 select-none font-serif text-[16rem] leading-none text-mist sm:text-[22rem] lg:right-8 lg:text-[30rem]"
      >
        L
      </span>

      <div className="relative mx-auto grid max-w-[90rem] gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12">
        {/* Ritratto */}
        <div className="lg:col-span-5">
          <Reveal y={40} className="relative mx-auto max-w-md lg:sticky lg:top-28 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -left-4 -top-4 h-full w-full border border-magenta/50 sm:-left-6 sm:-top-6"
            />
            <div className="relative aspect-[4/5] overflow-hidden bg-mist">
              <Image
                src={images.founder.src}
                alt={images.founder.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 38vw, (min-width: 640px) 28rem, 90vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 bg-deep px-6 py-4 text-white shadow-[0_24px_50px_-24px_rgba(15,39,66,0.6)] sm:-right-8">
              <p className="font-serif text-xl italic leading-none">{founder.signature}</p>
            </div>
          </Reveal>
        </div>

        {/* Testi */}
        <div className="lg:col-span-7 lg:pl-8 lg:pt-6">
          <Reveal>
            <Eyebrow>{founder.eyebrow}</Eyebrow>
            <h2
              id="liliana-title"
              className="mt-6 font-serif text-6xl font-medium leading-none text-deep sm:text-7xl lg:text-[6.5rem]"
            >
              {founder.title}
              <SunDot className="ml-2 h-3 w-3 align-top sm:h-4 sm:w-4" />
            </h2>
            <p className="mt-6 max-w-xl font-serif text-2xl italic leading-snug text-magenta sm:text-[1.75rem]">
              {founder.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 border-l-2 border-sky pl-6 sm:pl-8">
              <p className="text-lg leading-relaxed text-ink sm:text-xl">{lead}</p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
            {rest.map((p, i) => (
              <Reveal
                key={i}
                delay={0.1 + i * 0.08}
                className={i === rest.length - 1 ? "md:col-span-2" : undefined}
              >
                <p className="text-base leading-[1.85] text-ink-soft">{withMethod(p)}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <Wave className="mt-12 text-sky" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
