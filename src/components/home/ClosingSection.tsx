import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Wave } from "@/components/ui/Ornaments";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/assets";
import { closing } from "@/data/content";

export function ClosingSection() {
  return (
    <section
      aria-labelledby="chiusura-title"
      className="relative isolate flex min-h-[85svh] items-center overflow-hidden bg-night text-white"
    >
      <Image
        src={images.closing.src}
        alt={images.closing.alt}
        fill
        placeholder="blur"
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-night/55" />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(15,39,66,0.55)_100%)]"
      />

      <div className="mx-auto w-full max-w-[90rem] px-5 py-28 text-center sm:px-8 lg:px-12">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.36em] text-sky-soft">{closing.lead}</p>
          <Wave className="mx-auto mt-5 text-sun" />
        </Reveal>
        <Reveal delay={0.12}>
          <h2
            id="chiusura-title"
            className="mx-auto mt-8 max-w-5xl font-serif text-5xl font-medium italic leading-[1.02] text-balance sm:text-7xl lg:text-[7.5rem]"
          >
            {closing.payoff}
          </h2>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="mt-12 flex justify-center">
            <Button href={closing.cta.href} variant="ghost">
              {closing.cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
