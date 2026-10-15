import { Eyebrow } from "@/components/ui/Eyebrow";
import { Flourish } from "@/components/ui/Ornaments";
import { Reveal } from "@/components/ui/Reveal";
import { anchors, values } from "@/data/content";

/** Colori di accento che ruotano sui cinque valori, dalla palette del logo. */
const accents = ["text-magenta", "text-deep", "text-sky", "text-magenta", "text-deep"];

export function ValuesSection() {
  return (
    <section
      id={anchors.values}
      aria-labelledby="valori-title"
      className="relative overflow-hidden bg-white py-24 md:py-32 lg:py-40"
    >
      <Flourish className="absolute bottom-10 left-4 hidden h-60 text-sky/50 lg:block" />

      <div className="mx-auto grid max-w-[90rem] gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-12 lg:px-12">
        <div className="lg:col-span-4">
          <Reveal className="lg:sticky lg:top-32">
            <Eyebrow>{values.eyebrow}</Eyebrow>
            <h2
              id="valori-title"
              className="mt-6 font-serif text-4xl font-medium leading-[1.08] tracking-[0.04em] text-deep sm:text-5xl"
            >
              {values.title}
            </h2>
            <div aria-hidden="true" className="mt-10 hidden items-center gap-3 lg:flex">
              <span className="h-2 w-2 rounded-full bg-magenta" />
              <span className="h-2 w-2 rounded-full bg-deep" />
              <span className="h-2 w-2 rounded-full bg-sky" />
              <span className="h-2 w-2 rounded-full bg-sun" />
            </div>
          </Reveal>
        </div>

        <ol className="border-t border-line lg:col-span-8">
          {values.items.map((item, i) => (
            <li key={item.title} className="border-b border-line">
              <Reveal delay={i * 0.06} y={20}>
                <div className="group relative grid grid-cols-[3.5rem_1fr] items-baseline gap-x-4 gap-y-2 py-9 transition-colors duration-500 ease-soft hover:bg-ivory sm:grid-cols-[5rem_1fr] md:grid-cols-[6rem_minmax(0,16rem)_1fr] md:gap-x-8 md:px-4 md:py-11">
                  <span
                    aria-hidden="true"
                    className={`font-serif text-4xl font-light leading-none sm:text-5xl ${accents[i]}`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-[2rem] font-medium leading-tight text-night sm:text-[2.3rem]">
                    {item.title}
                  </h3>
                  <p className="col-start-2 text-base leading-[1.8] text-ink-soft md:col-start-3 md:row-start-1 md:self-center">
                    {item.text}
                  </p>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-[-1px] left-0 h-px w-0 bg-magenta transition-all duration-700 ease-soft group-hover:w-full"
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
