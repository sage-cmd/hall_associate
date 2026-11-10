import Link from "next/link";

export const metadata = {
  title: "Legal Disclaimer | Hall & Associates",
  description: "Important information about the legal content on the Hall & Associates website.",
  robots: { index: false, follow: false },
};

export default function LegalDisclaimerPage() {
  return (
    <main id="main-content" className="min-h-[65vh] bg-[var(--background)] px-5 pb-24 pt-36 text-[var(--foreground)] sm:px-8 lg:px-14">
      <article className="mx-auto max-w-3xl">
        <p className="eyebrow"><span className="eyebrow-rule" /> Important information</p>
        <h1 className="section-title mt-6">Legal Disclaimer</h1>
        <div className="mt-7 space-y-5 text-sm leading-7 text-[var(--muted)]">
          <p>The information contained on this website is provided for general informational purposes only.</p>
          <p>Nothing published on this website constitutes legal advice, a formal legal opinion or a guarantee of any particular legal outcome.</p>
          <p>Accessing this website or submitting an enquiry does not establish a lawyer-client relationship between the visitor and Hall &amp; Associates.</p>
          <p>Any legal engagement must be subject to appropriate professional verification, acceptance of instructions and agreed terms of engagement.</p>
          <p>While reasonable efforts are made to ensure the accuracy of published information, no representation or warranty is made regarding its completeness or continued accuracy.</p>
          <p>Visitors should obtain independent legal advice before making decisions concerning specific legal matters.</p>
        </div>
        <Link href="/" className="mt-10 inline-flex text-sm text-[var(--gold)] hover:underline">Return to the website</Link>
      </article>
    </main>
  );
}
