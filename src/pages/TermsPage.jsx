import SEO from "../components/SEO";
import { siteConfig } from "../config/siteConfig";

export default function TermsPage() {
  return (
    <section className="bg-bg dark:bg-dark-bg text-text dark:text-dark-text">
      <SEO
        title="Terms"
        description="Stratizen terms of use placeholders and usage expectations."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms",
          url: `${siteConfig.siteUrl}/terms`,
          about: "Stratizen terms of use",
        }}
      />
      <div className="container py-16 md:py-20">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary dark:text-gold">
          Terms of Use
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-3xl">
          Stratizen is a student-owned platform. We ask every participant to
          use the platform responsibly, respectfully, and in alignment with
          university values.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {[
            {
              title: "Respect & safety",
              text: "No harassment, discrimination, or abusive behavior. Protect the campus community.",
            },
            {
              title: "Academic integrity",
              text: "No plagiarism, cheating, or misuse of learning resources.",
            },
            {
              title: "Community standards",
              text: "Support constructive collaboration and responsible discourse.",
            },
            {
              title: "Platform integrity",
              text: "Avoid attempts to disrupt, exploit, or access data without permission.",
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
          This page is a summary. Full terms will be published before public
          launch.
        </p>
      </div>
    </section>
  );
}
