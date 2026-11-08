"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="home" className="relative min-h-[760px] overflow-hidden bg-[var(--navy)] text-white lg:min-h-[850px]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2200&q=85"
          alt="An antique law library with leather-bound volumes"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1628] via-[#0B1628]/90 to-[#0B1628]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1628]/85 via-transparent to-[#0B1628]/20" />
      </div>
      <div className="relative mx-auto flex min-h-[760px] max-w-[1440px] items-center px-5 pb-20 pt-32 sm:px-8 lg:min-h-[850px] lg:px-14">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-w-3xl"
          >
            <p className="mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.32em] text-[#D4B474] sm:text-xs">
              <span className="h-px w-9 bg-[#C6A15B]" />
              A historical firm
            </p>
            <h1 className="font-serif text-[clamp(3.35rem,8vw,7.15rem)] leading-[0.91] tracking-[-0.055em]">
              The art of
              <br />
              <span className="italic text-[#D9C08E]">the argument.</span>
            </h1>
            <p className="mt-8 max-w-xl font-serif text-xl leading-relaxed text-white/85 sm:text-2xl">
              In the spirit of Edward Marshall Hall — a vision of advocacy shaped by conviction, clarity and an enduring
              respect for the law.
            </p>
            <p className="mt-4 max-w-lg text-sm leading-7 text-white/60">
              An imagined modern chambers inspired by the legacy of the celebrated British barrister. For
              legal purposes; and legal practice.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href="#consultation">
                  Explore the concept <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-white/45 text-white hover:border-[#C6A15B]">
                <a href="#practice">
                  Explore practice areas <ArrowRight aria-hidden="true" size={15} />
                </a>
              </Button>
            </div>
            <div className="mt-16 flex items-center gap-5 border-t border-white/15 pt-5">
              <span className="font-serif text-3xl text-[#D9C08E]">01</span>
              <span className="h-px w-12 bg-[#C6A15B]/70" />
              <span className="text-[10px] uppercase tracking-[0.21em] text-white/60">A legacy of fearless advocacy</span>
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: reduceMotion ? 0 : 1, delay: reduceMotion ? 0 : 0.18 }}
            className="relative mx-auto hidden h-[510px] w-full max-w-[410px] lg:block"
          >
            <div className="absolute -left-5 -top-5 z-10 h-24 w-24 border-l border-t border-[#C6A15B]/80" />
            <div className="absolute -bottom-5 -right-5 z-10 h-24 w-24 border-b border-r border-[#C6A15B]/80" />
            <div className="absolute inset-0 border border-white/15 p-3">
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1000&q=85"
                  alt="A historic courtroom with timber panelling"
                  fill
                  sizes="410px"
                  className="object-cover object-center opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1628] via-transparent to-[#0B1628]/10" />
                <div className="absolute bottom-8 left-8 right-8 border-l border-[#C6A15B] pl-5">
                  <p className="font-serif text-2xl italic text-white">“The force of a case lies in its truth.”</p>
                  <p className="mt-3 text-[9px] uppercase tracking-[0.22em] text-white/55">
                    An imagined reflection · Not a historical quotation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="absolute bottom-9 right-6 hidden items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-white/50 transition-colors hover:text-[#D9C08E] sm:flex lg:right-14"
        >
          Discover the story <ArrowDown aria-hidden="true" size={13} />
        </a>
      </div>
    </section>
  );
}
