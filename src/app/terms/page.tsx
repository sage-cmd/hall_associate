import Link from "next/link";

export const metadata = {
  title: "Terms of Use | Hall & Associates",
  description: "Terms governing use of the Hall & Associates website.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    paragraphs: [
      "By accessing this website, you agree to comply with these Terms of Use. If you do not agree, please discontinue use of the website.",
    ],
  },
  {
    title: "2. Website Information",
    paragraphs: [
      "The information presented on this website is intended for general informational purposes. Although reasonable efforts may be made to maintain accurate information, no guarantee is given that all content is complete, current or free from errors.",
    ],
  },
  {
    title: "3. No Legal Advice",
    paragraphs: [
      "Nothing on this website should be interpreted as legal advice or a substitute for professional legal consultation.",
      "Visitors should seek appropriate professional guidance concerning their individual legal circumstances.",
    ],
  },
  {
    title: "4. No Lawyer-Client Relationship",
    paragraphs: [
      "Visiting this website, submitting an enquiry or communicating through its contact form does not automatically establish a lawyer-client relationship.",
      "Such a relationship may only arise following appropriate engagement and acceptance of instructions.",
    ],
  },
  {
    title: "5. Intellectual Property",
    paragraphs: [
      "Unless otherwise indicated, website content, branding, text, graphics and design elements are protected by applicable intellectual property laws.",
      "Unauthorised reproduction or commercial use is prohibited.",
    ],
  },
  {
    title: "6. External Links",
    paragraphs: [
      "This website may contain links to external websites. Hall & Associates is not responsible for the content, security or privacy practices of third-party websites.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    paragraphs: [
      "To the extent permitted by applicable law, Hall & Associates shall not be responsible for losses arising from reliance on general website information or temporary website interruptions.",
    ],
  },
  {
    title: "8. Changes to These Terms",
    paragraphs: [
      "These Terms of Use may be updated periodically. Continued use of the website following changes constitutes acceptance of the revised terms.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main id="main-content" className="min-h-[65vh] bg-[var(--background)] px-5 pb-24 pt-36 text-[var(--foreground)] sm:px-8 lg:px-14">
      <article className="mx-auto max-w-3xl">
        <p className="eyebrow"><span className="eyebrow-rule" /> Important information</p>
        <h1 className="section-title mt-6">Terms of Use</h1>
        <p className="mt-4 text-sm text-[var(--muted)]">Last Updated: November 2026</p>
        {sections.map((section) => (
          <section key={section.title} className="mt-8">
            <h2 className="font-serif text-2xl">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-7 text-[var(--muted)]">{paragraph}</p>
            ))}
          </section>
        ))}
        <Link href="/" className="mt-10 inline-flex text-sm text-[var(--gold)] hover:underline">Return to the website</Link>
      </article>
    </main>
  );
}
