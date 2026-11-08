import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SectionReveal } from "@/components/layout/section-reveal";

const milestones = [
  { year: "1858", title: "Born in Brighton", detail: "Edward Marshall Hall was born in Brighton, England." },
  { year: "1883", title: "Called to the Bar", detail: "He was called to the Bar at the Inner Temple." },
  { year: "1927", title: "A lasting legacy", detail: "Remembered for his career as a prominent English barrister and politician." },
];

export function AboutSection() {
  return (
    <>
      <section id="about" className="bg-[var(--background)] py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.83fr_1.17fr] lg:gap-24 lg:px-14">
          <SectionReveal className="relative">
            <div className="relative aspect-[4/5] max-h-[610px] overflow-hidden bg-[var(--surface)]">
              <Image
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=1200&q=85"
                alt="Historic courtroom interior, representing the legal world of Edward Marshall Hall"
                fill
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0B1628]/20" />
              <div className="absolute bottom-5 left-5 border-l border-[#C6A15B] bg-[#0B1628]/80 px-5 py-4 text-white backdrop-blur-sm">
                <span className="block font-serif text-2xl">1858–1927</span>
                <span className="mt-1 block text-[9px] uppercase tracking-[0.2em] text-white/65">
                  Edward Marshall Hall
                </span>
              </div>
            </div>
            <span className="absolute -bottom-5 -right-5 -z-0 hidden h-32 w-32 border-b border-r border-[var(--gold)]/50 sm:block" />
          </SectionReveal>
          <SectionReveal className="flex flex-col justify-center">
            <p className="eyebrow"><span className="eyebrow-rule" /> A name in legal history</p>
            <h2 className="section-title mt-6">
              A formidable voice.
              <br />
              <span className="italic text-[var(--gold)]">An enduring legacy.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Edward Marshall Hall (1858–1927) was an English barrister and politician, known in his time as a powerful
              advocate in the criminal courts. His command of the courtroom became part of the public story of the
              English Bar at the turn of the twentieth century.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              This concept draws on the ideals associated with his public legacy: rigorous preparation, clear
              reasoning, and advocacy that holds the attention without losing sight of principle.
            </p>
            <a href="#legacy" className="mt-8 inline-flex w-fit items-center gap-2 text-sm text-[var(--foreground)] transition-colors hover:text-[var(--gold)]">
              Explore the historical timeline <ArrowUpRight aria-hidden="true" size={15} />
            </a>
            <p className="mt-10 border-l-2 border-[var(--gold)] pl-5 font-serif text-xl italic leading-relaxed text-[var(--foreground)]">
              “A tradition of advocacy, reimagined for a new generation.”
            </p>
            <p className="mt-3 pl-5 text-[9px] uppercase tracking-[0.18em] text-[var(--muted)]">
              Contemporary concept copy · Not a historical quotation
            </p>
          </SectionReveal>
        </div>
      </section>

      <section id="legacy" className="border-y border-[var(--line)] bg-[var(--surface)] py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <SectionReveal>
            <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
              <div>
                <p className="eyebrow"><span className="eyebrow-rule" /> A life at the Bar</p>
                <h2 className="section-title mt-5">The history, in brief.</h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-[var(--muted)] lg:justify-self-end">
                A concise timeline of documented milestones. This modern concept is  affiliated with  historical
                estate or legal institution.
              </p>
            </div>
          </SectionReveal>
          <div className="mt-12 grid gap-0 border-t border-[var(--line)] md:grid-cols-3">
            {milestones.map((item, index) => (
              <SectionReveal key={item.year} className="border-b border-[var(--line)] py-8 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                <span className="font-serif text-4xl text-[var(--gold)]">{item.year}</span>
                <h3 className="mt-5 font-serif text-xl text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-7 text-[var(--muted)]">{item.detail}</p>
                {index === 0 && <span className="mt-7 block h-px w-12 bg-[var(--gold)]" />}
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
