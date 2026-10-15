"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SunDot, Wave } from "@/components/ui/Ornaments";
import { images } from "@/data/assets";
import { anchors, hero } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  // Parallax leggero: solo transform, nessun impatto sul layout
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, reduce ? 1.04 : 1.12]);

  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 1.1, delay, ease },
        };

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-night text-white"
    >
      <motion.div className="absolute inset-0 -z-10" style={{ y, scale }}>
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[72%_40%] md:object-[center_40%]"
        />
      </motion.div>

      {/* Overlay: velatura blu profonda per la leggibilità */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(15,39,66,0.82)_0%,rgba(15,39,66,0.55)_45%,rgba(15,39,66,0.1)_80%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-night/70 to-transparent"
      />

      <div className="mx-auto w-full max-w-[90rem] px-5 pb-20 pt-40 sm:px-8 md:pb-28 lg:px-12 lg:pb-32">
        <div className="max-w-3xl">
          <motion.p
            {...enter(0.15)}
            className="flex flex-wrap items-baseline gap-x-2 font-serif text-xl italic text-sky-soft sm:text-2xl"
          >
            <span className="not-italic font-semibold tracking-wide text-white">{hero.payoff.lead}</span>
            <span>{hero.payoff.text}</span>
          </motion.p>

          <motion.div {...enter(0.3)}>
            <Wave className="mt-5 text-sun" />
          </motion.div>

          <motion.h1
            id="hero-title"
            {...enter(0.45)}
            className="mt-6 font-serif text-[2.75rem] font-medium leading-[1.02] tracking-[-0.01em] text-balance sm:text-6xl lg:text-[5.5rem]"
          >
            {hero.title}
          </motion.h1>

          <motion.p
            {...enter(0.65)}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div {...enter(0.85)} className="mt-10 flex flex-col gap-4 sm:flex-row">
            {hero.ctas.map((cta) => (
              <Button key={cta.href} href={cta.href} variant={cta.variant}>
                {cta.label}
              </Button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Indicatore di scroll */}
      <a
        href={`#${anchors.project}`}
        className="group absolute bottom-8 right-5 hidden flex-col items-center gap-3 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/75 transition-colors hover:text-white sm:right-8 md:flex lg:right-12"
      >
        <span className="[writing-mode:vertical-rl]">Scorri</span>
        <span className="relative h-14 w-px overflow-hidden bg-white/30">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_2.4s_ease-in-out_infinite] bg-white" />
        </span>
        <SunDot className="h-1.5 w-1.5" />
        <span className="sr-only">al progetto</span>
      </a>
    </section>
  );
}
