import Link from "next/link";

export const metadata = {
  title: "Privacy Notice | Hall & Associates",
  description: "How the Hall & Associates historical-concept website handles demonstration form submissions.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main id="main-content" className="min-h-[65vh] bg-[var(--background)] px-5 pb-24 pt-36 text-[var(--foreground)] sm:px-8 lg:px-14">
      <article className="mx-auto max-w-3xl">
        <p className="eyebrow"><span className="eyebrow-rule" /> Important information</p>
        <h1 className="section-title mt-6">Privacy notice</h1>
        <p className="mt-7 text-sm leading-7 text-[var(--muted)]">
          Hall & Associates is a fictional historical-concept website, not a law firm. This notice explains the limited
          handling of information submitted through its demonstration form. Contact details displayed on this site
          were supplied by the site operator.
        </p>
        <h2 className="mt-10 font-serif text-2xl">Information entered in the form</h2>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          The form can collect a name, email address, phone number, selected practice area and a short description.
          Successful submissions are stored in the application&apos;s configured SQLite database to demonstrate form
          processing. The website has no legal team and these submissions are not monitored as client enquiries.
        </p>
        <h2 className="mt-8 font-serif text-2xl">Please do not submit real or sensitive information</h2>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          Do not use the form for real contact details, confidential material or case information. This demonstrator
          does not provide a public deletion workflow, and whoever operates the application can access its database.
          For a local installation, the operator controls storage and deletion of the SQLite database.
        </p>
        <h2 className="mt-8 font-serif text-2xl">No third-party contact or legal service</h2>
        <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
          A submission is not sent to Edward Marshall Hall, a legal practice, or a solicitor or barrister, and does not
          create a lawyer–client relationship. The email and phone number displayed on this site are supplied by the
          operator; verify them independently before sharing any information. Do not send sensitive or confidential
          material.
        </p>
        <Link href="/" className="mt-10 inline-flex text-sm text-[var(--gold)] hover:underline">Return to the concept site</Link>
      </article>
    </main>
  );
}
