import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Flourish, Wave } from "@/components/ui/Ornaments";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/assets";
import { anchors, network } from "@/data/content";
import { cn } from "@/lib/cn";

export function NetworkSection() {
  return (
    <section
      id={anchors.network}
      aria-labelledby="network-title"
      className="relative overflow-hidden bg-night py-24 text-white md:py-32 lg:py-40"
    >
      {/* Fondo: velatura blu con un alone azzurro */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_0%,rgba(96,149,195,0.28),transparent_55%),radial-gradient(ellipse_at_0%_100%,rgba(155,16,92,0.22),transparent_50%)]"
      />
      <Flourish className="absolute right-6 top-0 hidden h-72 text-sky/30 lg:block" />

      <div className="relative mx-auto max-w-[90rem] px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-7">
            <Eyebrow tone="light">{network.eyebrow}</Eyebrow>
            <h2
              id="network-title"
              className="mt-6 font-serif text-4xl font-medium leading-[1.05] text-balance sm:text-5xl lg:text-[4rem]"
            >
              {network.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:pb-3">
            <p className="font-serif text-2xl italic leading-snug text-sky-soft sm:text-[1.7rem]">
              {network.intro}
            </p>
          </Reveal>
        </div>

        {/* I quattro pilastri: mosaico sfalsato */}
        <ol className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4 lg:gap-x-8">
          {network.pillars.map((pillar, i) => {
            const img = images[pillar.image];
            return (
              <li key={pillar.image} className={cn(i % 2 === 1 && "lg:mt-24")}>
                <Reveal delay={i * 0.1} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      placeholder="blur"
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                      className="object-cover transition-transform duration-[1.4s] ease-soft group-hover:scale-105"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-night/70 via-night/0 to-transparent"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute bottom-4 left-5 font-serif text-5xl font-light leading-none text-white/90"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <span
                      aria-hidden="true"
                      className="mt-3 h-px w-8 shrink-0 bg-sun transition-all duration-500 ease-soft group-hover:w-12"
                    />
                    <p className="font-serif text-[1.45rem] leading-snug text-white">{pillar.text}</p>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>

        <Reveal className="mx-auto mt-20 max-w-3xl text-center lg:mt-28">
          <Wave className="mx-auto text-sun" />
          <p className="mt-6 text-lg leading-[1.8] text-white/85 sm:text-xl">{network.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}
