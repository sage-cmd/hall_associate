"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  FileCheck2,
  Gavel,
  Scale,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { SectionReveal } from "@/components/layout/section-reveal";
import { practiceAreas } from "@/validations/consultation";

const practices: {
  title: (typeof practiceAreas)[number];
  description: string;
  icon: LucideIcon;
  number: string;
}[] = [
  {
    title: "Criminal Defense",
    description: "A concept built around the presumption of innocence, careful scrutiny and persuasive courtroom advocacy.",
    icon: Shield,
    number: "01",
  },
  {
    title: "Civil Litigation",
    description: "Clear-eyed representation in contested matters, with a focus on evidence, strategy and resolution.",
    icon: Scale,
    number: "02",
  },
  {
    title: "Corporate Law",
    description: "Practical legal thinking for organisations navigating complex governance and commercial decisions.",
    icon: Building2,
    number: "03",
  },
  {
    title: "Commercial Disputes",
    description: "Strategic approaches to business conflicts, from early assessment through formal proceedings.",
    icon: BriefcaseBusiness,
    number: "04",
  },
  {
    title: "Legal Advisory",
    description: "Thoughtful counsel that turns complicated legal questions into informed next steps.",
    icon: FileCheck2,
    number: "05",
  },
  {
    title: "Appeals and Advocacy",
    description: "Persuasive written and oral submissions grounded in careful analysis of the record and the law.",
    icon: Gavel,
    number: "06",
  },
];

export function PracticeAreasSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="practice" className="bg-[var(--background)] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
        <SectionReveal className="grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <p className="eyebrow"><span className="eyebrow-rule" /> Areas of focus</p>
            <h2 className="section-title mt-6 max-w-2xl">A considered approach to complex matters.</h2>
          </div>
          <p className="max-w-lg text-sm leading-7 text-[var(--muted)] lg:justify-self-end">
            Six areas of work imagined in the spirit of a modern chambers. Descriptive only—not a representation of
            services currently offered or legal advice.
          </p>
        </SectionReveal>
        <div className="mt-12 grid gap-px bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((practice) => {
            const Icon = practice.icon;
            return (
              <SectionReveal key={practice.number}>
                <motion.a
                  href="#consultation"
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                  transition={{ duration: 0.25 }}
                  className="group relative flex min-h-[290px] flex-col bg-[var(--background)] p-7 transition-colors duration-300 hover:bg-[var(--surface)] sm:p-8"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center border border-[var(--line)] text-[var(--gold)] transition-colors group-hover:border-[var(--gold)] group-hover:bg-[var(--gold)] group-hover:text-[#111820]">
                      <Icon aria-hidden="true" size={19} strokeWidth={1.5} />
                    </span>
                    <span className="font-serif text-sm text-[var(--muted)]">{practice.number}</span>
                  </div>
                  <h3 className="mt-8 font-serif text-2xl text-[var(--foreground)]">{practice.title}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-[var(--muted)]">{practice.description}</p>
                  <span className="mt-auto flex items-center gap-2 pt-6 text-[10px] uppercase tracking-[0.16em] text-[var(--foreground)] transition-colors group-hover:text-[var(--gold)]">
                    Discover more <ArrowUpRight aria-hidden="true" size={14} />
                  </span>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--gold)] transition-all duration-500 group-hover:w-full" />
                </motion.a>
              </SectionReveal>
            );
          })}
        </div>
        <p className="mt-8 text-center text-xs leading-6 text-[var(--muted)]">
          Legal services and advice are offered
        </p>
      </div>
    </section>
  );
}
