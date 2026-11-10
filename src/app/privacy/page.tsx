import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Hall & Associates",
  description: "How Hall & Associates collects, uses and protects personal information.",
  robots: { index: false, follow: false },
};

const sections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "Hall & Associates respects the privacy and confidentiality of visitors to its website. This Privacy Policy explains how information may be collected, used, stored and protected when you interact with our website.",
    ],
  },
  {
    title: "2. Information We Collect",
    paragraphs: ["Depending on how you use our website, we may collect:"],
    list: [
      "Personal information voluntarily provided through enquiry forms.",
      "Contact details, including names, email addresses and telephone numbers.",
      "Information contained in messages or enquiries submitted to us.",
      "Basic technical information, such as browser type, device information and website usage data.",
    ],
  },
  {
    title: "3. How We Use Information",
    paragraphs: ["Information collected may be used to:"],
    list: [
      "Respond to enquiries and requests.",
      "Communicate regarding services and professional matters.",
      "Improve website functionality and user experience.",
      "Maintain website security and prevent misuse.",
      "Meet applicable legal and regulatory obligations.",
    ],
  },
  {
    title: "4. Confidentiality and Security",
    paragraphs: [
      "We take reasonable measures to protect information submitted through our website. However, electronic communication cannot be guaranteed to be completely secure.",
      "Submitting an enquiry through this website does not automatically establish a lawyer-client relationship.",
    ],
  },
  {
    title: "5. Sharing of Information",
    paragraphs: [
      "We do not sell personal information. Information may be disclosed where required by law, necessary to protect legitimate interests, or with appropriate consent.",
    ],
  },
  {
    title: "6. Cookies and Website Analytics",
    paragraphs: [
      "Our website may use cookies or similar technologies to improve functionality and understand visitor interactions. Visitors can manage cookie preferences through their browser settings.",
    ],
  },
  {
    title: "7. Your Rights",
    paragraphs: [
      "Depending on applicable data protection laws, you may have rights to access, correct, request deletion of or restrict the processing of your personal information.",
    ],
  },
  {
    title: "8. Contact",
    paragraphs: [
      "For questions concerning this Privacy Policy or the handling of personal information, please contact Hall & Associates through the contact details provided on this website.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-[65vh] bg-[var(--background)] px-5 pb-24 pt-36 text-[var(--foreground)] sm:px-8 lg:px-14">
      <article className="mx-auto max-w-3xl">
        <p className="eyebrow"><span className="eyebrow-rule" /> Important information</p>
        <h1 className="section-title mt-6">Privacy Policy</h1>
        <p className="mt-4 text-sm text-[var(--muted)]">Last Updated: November 2026</p>
        {sections.map((section) => (
          <section key={section.title} className="mt-8">
            <h2 className="font-serif text-2xl">{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-3 text-sm leading-7 text-[var(--muted)]">{paragraph}</p>
            ))}
            {section.list && (
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-7 text-[var(--muted)]">
                {section.list.map((item) => <li key={item}>{item}</li>)}
              </ul>
            )}
          </section>
        ))}
        <Link href="/" className="mt-10 inline-flex text-sm text-[var(--gold)] hover:underline">Return to the website</Link>
      </article>
    </main>
  );
}
