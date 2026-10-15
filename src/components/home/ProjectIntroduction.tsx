import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Flourish, SunDot } from "@/components/ui/Ornaments";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/assets";
import { anchors, projectIntro } from "@/data/content";

export function ProjectIntroduction() {
  const [lead, ...rest] = projectIntro.paragraphs;

  return (
    <section
      id={anchors.project}
      aria-labelledby="progetto-title"
      className="relative overflow-hidden bg-ivory py-24 md:py-32 lg:py-40"
    >
      <Flourish className="absolute -left-2 top-10 hidden h-64 text-sky/60 lg:block" />

      <div className="mx-auto grid max-w-[90rem] items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        {/* Testo */}
        <div className="lg:col-span-5 lg:pr-6">
          <Reveal>
            <Eyebrow>{projectIntro.eyebrow}</Eyebrow>
            <h2
              id="progetto-title"
              className="mt-6 font-serif text-4xl font-medium leading-[1.05] text-deep sm:text-5xl lg:text-[3.6rem]"
            >
              {projectIntro.title}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 font-serif text-2xl leading-snug text-ink sm:text-[1.7rem]">{lead}</p>
          </Reveal>
          {rest.map((p, i) => (
            <Reveal key={i} delay={0.2}>
              <p className="mt-6 text-base leading-[1.85] text-ink-soft">{p}</p>
            </Reveal>
          ))}
        </div>

        {/* Composizione fotografica asimmetrica */}
        <div className="relative lg:col-span-7">
          <Reveal y={40} className="relative ml-auto w-[92%] sm:w-[88%]">
            <div
              aria-hidden="true"
              className="absolute -bottom-6 -left-6 h-[78%] w-[70%] bg-sky-soft sm:-bottom-10 sm:-left-10"
            />
            <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4]">
              <Image
                src={images.projectIntro.src}
                alt={images.projectIntro.alt}
                fill
                placeholder="blur"
                sizes="(min-width: 1024px) 55vw, 92vw"
                className="object-cover transition-transform duration-[1.6s] ease-soft hover:scale-[1.03]"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-3 -top-3 h-24 w-24 border border-magenta/40 sm:-right-6 sm:-top-6 sm:h-32 sm:w-32"
            />
            <SunDot className="absolute -bottom-3 right-10 h-6 w-6 sm:h-8 sm:w-8" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
