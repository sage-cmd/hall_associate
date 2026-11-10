import Image from "next/image";
import { SectionReveal } from "@/components/layout/section-reveal";

const milestones = [
  { year: "1954", title: "Born in Brighton", detail: "Edward Marshall Hall was born in Brighton, England." },
  { year: "1883", title: "Called to the Bar", detail: "He was called to the Bar at the Inner Temple." },
  { year: "2026", title: "A lasting legacy", detail: "Remembered as a prominent English barrister and politician." },
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
                <span className="block font-serif text-2xl">1954–2026</span>
                <span className="mt-1 block text-[9px] uppercase tracking-[0.2em] text-white/65">
                  Edward Marshall Hall
                </span>
              </div>
            </div>
            <span className="absolute -bottom-5 -right-5 -z-0 hidden h-32 w-32 border-b border-r border-[var(--gold)]/50 sm:block" />
          </SectionReveal>
          <SectionReveal className="flex flex-col justify-center">
            <p className="eyebrow"><span className="eyebrow-rule" /> Our Story</p>
            <h2 className="section-title mt-6">
              A foundation built on principle.
              <br />
              <span className="italic text-[var(--gold)]">A commitment to justice.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Hall &amp; Associates is a distinguished legal practice founded on the principles of integrity, excellence,
              discretion and an unwavering commitment to justice. Inspired by the enduring traditions of the legal
              profession, our firm was established with a clear purpose: to provide thoughtful legal guidance, strong
              representation and practical solutions to individuals, businesses and institutions navigating complex
              legal matters.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              We believe that effective legal practice requires more than an understanding of the law. It demands sound
              judgment, meticulous preparation, strategic thinking and a genuine appreciation of the people and
              interests behind every case.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Our approach combines traditional legal values with a modern understanding of an increasingly complex
              legal environment. Whether addressing intricate disputes, advising on commercial matters or representing
              clients in challenging proceedings, we place careful consideration, professionalism and diligence at the
              centre of our work.
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              At Hall &amp; Associates, we regard every matter as a responsibility entrusted to us. Our commitment is to
              uphold the highest standards of professional conduct while pursuing clear, considered and effective legal
              outcomes.
            </p>
            <p className="mt-8 font-serif text-xl italic leading-relaxed text-[var(--foreground)]">
              Our foundation is built on principle. Our reputation is earned through diligence. Our purpose is justice.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="bg-[var(--background)] py-20 sm:py-24">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">
          <SectionReveal>
            <p className="eyebrow"><span className="eyebrow-rule" /> What guides us</p>
            <h2 id="values-heading" className="section-title mt-5">Our Core Values</h2>
          </SectionReveal>
          <div className="mt-10 grid gap-8 border-t border-[var(--line)] pt-8 md:grid-cols-3">
            {[
              {
                title: "Integrity",
                description:
                  "Integrity is the foundation of our practice. We believe in honesty, transparency, confidentiality and ethical responsibility in every professional engagement. We are committed to maintaining the trust placed in us and upholding the principles that define the legal profession.",
              },
              {
                title: "Excellence",
                description:
                  "We pursue excellence through meticulous preparation, sound legal judgment and attention to detail. Every matter deserves careful consideration, thoughtful strategy and a commitment to maintaining the highest standards of professional competence.",
              },
              {
                title: "Commitment",
                description:
                  "Our commitment extends beyond legal representation. We believe in understanding the concerns, objectives and circumstances of those who entrust us with their matters. We approach every responsibility with dedication, diligence and a determination to pursue the best possible outcome within the law.",
              },
            ].map((value, index) => (
              <SectionReveal key={value.title}>
                <span className="font-serif text-3xl text-[var(--gold)]">0{index + 1}</span>
                <h3 className="mt-4 font-serif text-2xl text-[var(--foreground)]">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{value.description}</p>
              </SectionReveal>
            ))}
          </div>
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
