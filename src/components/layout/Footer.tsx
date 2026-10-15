import Link from "next/link";
import { CurrentYear } from "@/components/ui/CurrentYear";
import { Logo } from "@/components/ui/Logo";
import { Flourish, Wave } from "@/components/ui/Ornaments";
import { brand } from "@/data/content";
import { mainNav } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-night text-white/80">
      <Flourish className="absolute -top-10 right-[12%] hidden h-48 text-sky/40 md:block" />

      <div className="mx-auto max-w-[90rem] px-5 pb-10 pt-20 sm:px-8 lg:px-12 lg:pt-24">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <div className="w-36 [filter:drop-shadow(0_0_6px_rgba(255,255,255,0.75))_drop-shadow(0_0_14px_rgba(255,255,255,0.4))]">
              <Logo />
            </div>
            <p className="mt-8 font-serif text-3xl leading-tight text-white">{brand.name}</p>
            <Wave className="mt-4 text-sun" />
            <p className="mt-4 font-serif text-xl italic text-sky-soft">{brand.payoff}</p>
          </div>

          <nav aria-label="Pagine del sito" className="md:col-span-7 md:pt-2">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-sky">Pagine</p>
            <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors duration-300 hover:text-sun"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mt-3 space-y-3 border-l border-white/15 pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="text-sm text-white/60 transition-colors duration-300 hover:text-sun"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-3 border-t border-white/10 pt-8 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> {brand.name}. Tutti i diritti riservati.
          </p>
          <p className="font-serif text-sm italic text-white/60">{brand.payoffFull}</p>
        </div>
      </div>
    </footer>
  );
}
