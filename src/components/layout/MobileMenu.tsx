"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Wave } from "@/components/ui/Ornaments";
import { brand } from "@/data/content";
import { mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const reduce = useReducedMotion();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Chiusura con Esc, blocco dello scroll e focus trap minimale
  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>("a[href], button");
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  // Chiude il menu se si passa al layout desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && onClose();
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [onClose]);

  const linkClass = (href: string) =>
    cn(
      "block py-2 font-serif text-[2rem] leading-tight transition-colors sm:text-[2.4rem]",
      pathname === href ? "text-magenta" : "text-night hover:text-deep",
    );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="menu-mobile"
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[70] flex flex-col overflow-y-auto bg-ivory lg:hidden"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-start justify-between px-5 pt-4 sm:px-8">
            <div className="w-[5.5rem] bg-white p-2" onClick={onClose}>
              <Logo />
            </div>
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              className="inline-flex h-11 w-11 items-center justify-center text-deep"
            >
              <X aria-hidden="true" className="h-6 w-6" strokeWidth={1.5} />
              <span className="sr-only">Chiudi il menu</span>
            </button>
          </div>

          <nav aria-label="Menu principale mobile" className="flex-1 px-5 pb-10 pt-10 sm:px-8">
            <ul className="space-y-1">
              {mainNav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05, duration: 0.45 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={linkClass(item.href)}
                    aria-current={pathname === item.href ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mb-2 ml-1 border-l border-sky/50 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            aria-current={pathname === child.href ? "page" : undefined}
                            className={cn(
                              "block py-1.5 text-xs font-semibold uppercase tracking-[0.22em]",
                              pathname === child.href ? "text-magenta" : "text-ink-soft hover:text-deep",
                            )}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-line px-5 py-6 sm:px-8">
            <Wave className="mb-3 text-sky" />
            <p className="font-serif text-lg italic text-deep">{brand.payoff}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
