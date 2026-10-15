"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";
import { MobileMenu } from "./MobileMenu";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trasparente solo sopra la Hero della Home, finché non si scorre.
  const overHero = pathname === "/" && !scrolled;

  return (
    <>
      <a
        href="#contenuto"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:text-deep"
      >
        Vai al contenuto
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,height] duration-500 ease-soft",
          overHero
            ? "h-24 bg-transparent md:h-28"
            : "h-[4.5rem] bg-white/95 shadow-[0_1px_0_0_var(--color-line)] backdrop-blur-md md:h-20",
        )}
      >
        {/* velatura per la leggibilità del menu sopra la foto */}
        <div
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-night/55 to-transparent transition-opacity duration-500",
            overHero ? "opacity-100" : "opacity-0",
          )}
        />

        <div className="relative mx-auto flex h-full max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo senza fondo; sopra la foto un alone chiaro leggero ne garantisce la leggibilità */}
          <div
            className={cn(
              "transition-all duration-500 ease-soft",
              overHero
                ? "w-[5.75rem] [filter:drop-shadow(0_0_6px_rgba(255,255,255,0.75))_drop-shadow(0_0_14px_rgba(255,255,255,0.45))] md:w-[7rem]"
                : "w-[5rem] md:w-[5.75rem]",
            )}
          >
            <Logo priority />
          </div>

          <nav aria-label="Menu principale" className="hidden lg:block">
            <ul className="flex items-center gap-9 xl:gap-11">
              {mainNav.map((item) => {
                const active = isActive(pathname, item.href);
                const linkClass = cn(
                  "relative inline-flex items-center py-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] transition-colors duration-300",
                  overHero ? "text-white/90 hover:text-white" : "text-ink hover:text-magenta",
                  active && (overHero ? "text-white" : "text-magenta"),
                );
                const indicator = (
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-sun transition-opacity duration-300",
                      active ? "opacity-100" : "opacity-0",
                    )}
                  />
                );

                if (!item.children) {
                  return (
                    <li key={item.href}>
                      <Link href={item.href} className={linkClass} aria-current={active ? "page" : undefined}>
                        {item.label}
                        {indicator}
                      </Link>
                    </li>
                  );
                }

                return (
                  <li key={item.href} className="group relative">
                    <Link
                      href={item.href}
                      className={cn(linkClass, "gap-1.5")}
                      aria-current={pathname === item.href ? "page" : undefined}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        aria-hidden="true"
                        className="h-3 w-3 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                      />
                      {indicator}
                    </Link>
                    <ul
                      className="invisible absolute left-1/2 top-full min-w-48 -translate-x-1/2 translate-y-2 border-t-2 border-magenta bg-white py-3 opacity-0 shadow-[0_24px_50px_-24px_rgba(15,39,66,0.45)] transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100"
                    >
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className={cn(
                              "block px-6 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] transition-colors hover:bg-mist hover:text-magenta",
                              pathname === child.href ? "text-magenta" : "text-ink",
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center transition-colors lg:hidden",
              overHero ? "text-white" : "text-deep",
            )}
          >
            <Menu aria-hidden="true" className="h-6 w-6" strokeWidth={1.5} />
            <span className="sr-only">Apri il menu</span>
          </button>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} pathname={pathname} />
    </>
  );
}
