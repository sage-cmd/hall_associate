import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const practiceLinks = [
  "Criminal Defense",
  "Civil Litigation",
  "Corporate Law",
  "Commercial Disputes",
  "Legal Advisory",
  "Appeals and Advocacy",
];

export function Footer() {
  return (
    <footer className="bg-[#08111e] text-white">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-14 lg:py-16">
        <div className="grid gap-12 border-b border-white/15 pb-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.9fr_0.8fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex size-10 items-center justify-center border border-[#C6A15B] font-serif text-lg text-[#D9C08E]">H</span>
              <span className="flex flex-col">
                <span className="font-serif text-sm tracking-[0.08em]">HALL & ASSOCIATES</span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-white/45">Advocacy · Legacy</span>
              </span>
            </Link>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
              A historical-concept chambers inspired by the legacy of Edward Marshall Hall. Created for illustrative
              purposes only.
            </p>
            <p className="mt-5 text-xs leading-6 text-[#D9C08E]">
              <span className="font-serif text-sm">HALL & ASSOCIATES</span>
            </p>
          </div>
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#D9C08E]">Explore</h2>
            <ul className="mt-5 space-y-3">
              {[["Home", "#home"], ["About", "#about"], ["Practice areas", "#practice"], ["Our legacy", "#legacy"], ["Contact", "#consultation"]].map(([label, href]) => (
                <li key={href}><a className="text-sm text-white/55 transition-colors hover:text-white" href={href}>{label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#D9C08E]">Areas of focus</h2>
            <ul className="mt-5 space-y-3">
              {practiceLinks.map((area) => (
                <li key={area}><a className="text-sm text-white/55 transition-colors hover:text-white" href="#practice">{area}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[10px] uppercase tracking-[0.2em] text-[#D9C08E]">Connect</h2>
            <p className="mt-5 text-[10px] uppercase tracking-[0.14em] text-white/40">Contact details supplied by the site operator</p>
            <address className="mt-3 space-y-3 text-sm not-italic leading-6 text-white/65">
              <p>
                <a href="mailto:edwardmarshall@mail.com" className="transition-colors hover:text-[#D9C08E]">
                  edwardmarshall@mail.com
                </a>
              </p>
              <p>
                <a href="tel:+442679856097" className="transition-colors hover:text-[#D9C08E]">
                  +44 2679 856097
                </a>
              </p>
              <p>Coldean, Brighton</p>
            </address>
            <p className="mt-3 text-sm text-white/35">Social links not configured.</p>
            <a href="#consultation" className="mt-5 inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-[#D9C08E]">
              Send an enquiry <ArrowUpRight aria-hidden="true" size={14} />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-6 text-[10px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Hall & Associates. Historical-concept website.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">Privacy notice</Link>
            <Link href="/terms" className="transition-colors hover:text-white">Terms of use</Link>
          </div>
        </div>
        <p id="disclaimer" className="mt-4 max-w-4xl text-[10px] leading-5 text-white/35">
          Edward Marshall Hall (1858–1927) was a historical English barrister and politician. This website is fictional,
          is not associated with his estate or any practising law firm, and does not provide legal advice or establish a
          lawyer–client relationship. Form submissions are stored only as a technical demonstration.
        </p>
      </div>
    </footer>
  );
}
