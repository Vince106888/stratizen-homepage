import SEO from "../components/SEO";
import { siteConfig } from "../config/siteConfig";

export default function PrivacyPage() {
  return (
    <section className="bg-bg dark:bg-dark-bg text-text dark:text-dark-text">
      <SEO
        title="Privacy"
        description="Stratizen privacy commitments for student-owned digital infrastructure."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy",
          url: `${siteConfig.siteUrl}/privacy`,
          about: "Stratizen privacy commitments",
        }}
      />
      <div className="container py-16 md:py-20">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary dark:text-gold">
          Privacy at Stratizen
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          Stratizen is built with student trust as the default. We collect only
          what we need to operate the platform and prioritize transparency in
          how data is used.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Data minimization",
              text: "We aim to keep student data lean, relevant, and time-bound. No data is sold to third parties.",
            },
            {
              title: "Student control",
              text: "Students can request access to, corrections for, or deletion of their data.",
            },
            {
              title: "Security posture",
              text: "We apply security best practices for access control and storage, and review regularly.",
            },
            {
              title: "Transparency",
              text: "We communicate clearly when new data uses are introduced.",
            },
          ].map((item) => (
            <div key={item.title} className="card">
              <h2 className="text-xl font-heading font-semibold text-primary dark:text-gold mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
          This page is a summary. A full policy will be published before public
          launch.
        </p>
      </div>
    </section>
  );
}
