"use client";

import { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion, useReducedMotion, useScroll, useMotionValueEvent } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Practice", href: "#practice" },
  { label: "Legacy", href: "#legacy" },
  { label: "Contact", href: "#consultation" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 24));

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled
          ? "border-[var(--line)] bg-[var(--background)]/95 shadow-[0_6px_26px_rgba(11,22,40,0.06)] backdrop-blur-md"
          : "border-transparent bg-[var(--background)]",
      )}
      initial={reduceMotion ? false : { y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : 0.55 }}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14"
      >
        <Link href="/" className="group flex items-center gap-3" aria-label="Edward Marshall Hall, home">
          <span className="flex size-10 items-center justify-center border border-[var(--gold)] font-serif text-lg leading-none text-[var(--gold)]">
            H
          </span>
          <span className="flex flex-col">
            <span className="font-serif text-[15px] leading-5 tracking-[0.06em] text-[var(--foreground)]">
              HALL & ASSOCIATES
            </span>
            <span className="text-[9px] uppercase tracking-[0.24em] text-[var(--muted)]">Advocacy · Legacy</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[11px] uppercase tracking-[0.16em] text-[var(--muted)] transition-colors hover:text-[var(--gold)]"
            >
              {link.label}
            </a>
          ))}
          <ThemeToggle />
          <Button asChild size="small">
            <a href="#consultation">
              Request a consultation <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <button
                type="button"
                aria-label="Open navigation menu"
                className="inline-flex size-10 items-center justify-center border border-[var(--line)] text-[var(--foreground)]"
              >
                <Menu aria-hidden="true" size={19} />
              </button>
            </Dialog.Trigger>
            <AnimatePresence>
              {open && (
                <Dialog.Portal forceMount>
                  <Dialog.Overlay asChild>
                    <motion.div
                      className="fixed inset-0 z-50 bg-[#0b1628]/55 backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.2 }}
                    />
                  </Dialog.Overlay>
                  <Dialog.Content asChild>
                    <motion.div
                      className="fixed inset-y-0 right-0 z-50 flex w-[min(88vw,420px)] flex-col bg-[var(--background)] p-7 shadow-2xl"
                      initial={reduceMotion ? false : { x: 28, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 28, opacity: 0 }}
                      transition={{ duration: reduceMotion ? 0 : 0.25 }}
                    >
                      <div className="flex items-center justify-between">
                        <Dialog.Title className="font-serif text-xl text-[var(--foreground)]">Navigate</Dialog.Title>
                        <Dialog.Close asChild>
                          <button
                            type="button"
                            aria-label="Close navigation menu"
                            className="inline-flex size-10 items-center justify-center border border-[var(--line)]"
                          >
                            <X aria-hidden="true" size={18} />
                          </button>
                        </Dialog.Close>
                      </div>
                      <div className="mt-10 flex flex-col">
                        {links.map((link, index) => (
                          <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="border-b border-[var(--line)] py-5 font-serif text-2xl text-[var(--foreground)] transition-colors hover:text-[var(--gold)]"
                          >
                            <span className="mr-4 font-sans text-xs text-[var(--gold)]">0{index + 1}</span>
                            {link.label}
                          </a>
                        ))}
                      </div>
                      <Button asChild className="mt-8 w-full">
                        <a href="#consultation" onClick={() => setOpen(false)}>
                          Request a consultation <ArrowUpRight aria-hidden="true" size={15} />
                        </a>
                      </Button>
                      <p className="mt-auto text-xs leading-6 text-[var(--muted)]">
                        A historical-concept firm. Not a currently operating legal practice.
                      </p>
                    </motion.div>
                  </Dialog.Content>
                </Dialog.Portal>
              )}
            </AnimatePresence>
          </Dialog.Root>
        </div>
      </nav>
    </motion.header>
  );
}
