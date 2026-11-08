import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Hall & Associates",
  description: "Terms for use of the Hall & Associates historical-concept website.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main id="main-content" className="min-h-[65vh] bg-[var(--background)] px-5 pb-24 pt-36 text-[var(--foreground)] sm:px-8 lg:px-14">
      <article className="mx-auto max-w-3xl">
        <p className="eyebrow"><span className="eyebrow-rule" /> Important information</p>
        <h1 className="section-title mt-6">Terms of use</h1>
        <p className="mt-7 text-sm leading-7 text-[var(--muted)]">
          This website is a fictional, historical-concept presentation inspired by Edward Marshall Hall (1858–1927).
          It is not operated by or affiliated with a practising law firm, chambers, or any historical estate.
        </p>
        <h2 className="mt-10 font-serif text-2xl">No legal advice or services</h2>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          Website content is provided for illustrative and general informational purposes only. It is not legal advice,
          does not invite or accept instructions, and does not create a lawyer–client relationship. Do not rely on it
          for decisions about a real legal matter.
        </p>
        <h2 className="mt-8 font-serif text-2xl">Demonstration form</h2>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          The form demonstrates validation and database storage only. It is not monitored and is not a real
          consultation request. Do not submit confidential, personal or sensitive information. See the{" "}
          <Link href="/privacy" className="text-[var(--gold)] hover:underline">privacy notice</Link> for details.
        </p>
        <h2 className="mt-8 font-serif text-2xl">Historical accuracy</h2>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          Historical references are limited to biographical context; editorial copy, imagined services and illustrative
          language are not attributed to Hall as quotations or claims about a current firm.
        </p>
        <Link href="/" className="mt-10 inline-flex text-sm text-[var(--gold)] hover:underline">Return to the concept site</Link>
      </article>
    </main>
  );
}
