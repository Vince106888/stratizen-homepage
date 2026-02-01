// src/pages/TrustPage.jsx
import SEO from "../components/SEO";
import { siteConfig } from "../config/siteConfig";
import { ShieldCheck, Lock, Scale, Users, FileDown, Mail } from "lucide-react";

const trustSections = [
  {
    id: "privacy",
    title: "Privacy by design",
    icon: Lock,
    points: [
      "Data minimization: we collect only what is needed for core services.",
      "Consent-first flows for optional data sharing and visibility.",
      "No surveillance behavior. We do not track students outside the platform.",
    ],
  },
  {
    id: "ai",
    title: "AI governance principles",
    icon: Users,
    points: [
      "Assistive by default: AI supports decisions, it does not replace them.",
      "Explainable outputs with clear reasons and sources when possible.",
      "Removable and user-controllable: students can opt out of AI features.",
    ],
  },
  {
    id: "security",
    title: "Security posture",
    icon: ShieldCheck,
    points: [
      "Role-based access control (RBAC) for staff and partner accounts.",
      "Audit logs for high-impact actions and sensitive workflows.",
      "Separation of zones for public data, student data, and admin tools.",
    ],
  },
  {
    id: "transparency",
    title: "Transparency and accountability",
    icon: Scale,
    points: [
      "Contestability: students can challenge or appeal automated outcomes.",
      "Logs and change histories are available for institutional oversight.",
      "Human override for high-impact decisions and escalations.",
    ],
  },
];

const faqItems = [
  {
    question: "Who owns Stratizen?",
    answer: "Stratizen is student-owned and operated in partnership with institutions.",
  },
  {
    question: "Does Stratizen sell student data?",
    answer: "No. We do not sell student data to third parties.",
  },
  {
    question: "Can students opt out of AI features?",
    answer: "Yes. AI is optional and can be disabled where it is introduced.",
  },
  {
    question: "How do universities get visibility?",
    answer: "Institutions receive aggregated insights, not student surveillance.",
  },
  {
    question: "What happens if something goes wrong?",
    answer: "We provide escalation paths, audit logs, and human review for corrections.",
  },
  {
    question: "How can I report a security issue?",
    answer: "Use the contact channel below so our team can respond quickly.",
  },
  {
    question: "Is Stratizen compliant with campus policies?",
    answer: "Yes. We align with university policies and review requirements regularly.",
  },
  {
    question: "When will the full Charter be published?",
    answer: "Before the public launch. The draft is shared with pilot partners.",
  },
];

export default function TrustPage() {
  return (
    <section className="bg-bg dark:bg-dark-bg text-text dark:text-dark-text" aria-labelledby="trust-title">
      <SEO
        title="Trust Center"
        description="Stratizen trust commitments, privacy posture, AI governance, and security safeguards."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Stratizen Trust Center",
          url: `${siteConfig.siteUrl}/trust`,
        }}
      />

      <header className="bg-gradient-to-r from-primary to-accent text-white">
        <div className="container py-16 md:py-20">
          <p className="text-sm uppercase tracking-widest text-white/80">Trust Center</p>
          <h1 id="trust-title" className="mt-4 text-3xl md:text-5xl font-heading font-bold">
            Trust, privacy, and accountability
          </h1>
          <p className="mt-4 max-w-3xl text-lg text-white/90">
            Stratizen is a student-owned platform built for institutional trust.
            This page summarizes how we protect students, govern AI, and support
            accountability in the Strathmore pilot.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a href="#privacy" className="rounded-full border border-white/30 px-4 py-2 hover:bg-white/10">
              Privacy by design
            </a>
            <a href="#ai" className="rounded-full border border-white/30 px-4 py-2 hover:bg-white/10">
              AI governance
            </a>
            <a href="#security" className="rounded-full border border-white/30 px-4 py-2 hover:bg-white/10">
              Security posture
            </a>
            <a href="#transparency" className="rounded-full border border-white/30 px-4 py-2 hover:bg-white/10">
              Transparency
            </a>
          </div>
        </div>
      </header>

      <main className="container py-12 md:py-16" id="trust-main" aria-labelledby="trust-center">
        <h2 id="trust-center" className="sr-only">
          Trust Center content
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {trustSections.map((section) => {
            const Icon = section.icon;
            return (
              <article
                key={section.id}
                id={section.id}
                className="card"
                aria-labelledby={`${section.id}-title`}
              >
                <div className="flex items-start gap-3">
                  <span className="p-2 rounded-lg bg-accent/10 text-accent">
                    <Icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3
                      id={`${section.id}-title`}
                      className="text-xl font-heading font-semibold text-primary dark:text-gold"
                    >
                      {section.title}
                    </h3>
                    <ul className="mt-3 space-y-2 text-gray-600 dark:text-gray-300">
                      {section.points.map((point) => (
                        <li key={point} className="flex gap-2">
                          <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <section className="mt-12 grid gap-6 md:grid-cols-2" aria-labelledby="charter-title">
          <div className="card">
            <div className="flex items-start gap-3">
              <span className="p-2 rounded-lg bg-accent/10 text-accent">
                <FileDown className="w-5 h-5" />
              </span>
              <div>
                <h3 id="charter-title" className="text-xl font-heading font-semibold text-primary dark:text-gold">
                  Download Charter
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  The Stratizen Charter defines how we operate, protect students,
                  and coordinate with institutions.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-2 text-accent hover:text-gold"
                  aria-disabled="true"
                >
                  Charter PDF (coming soon)
                </a>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-start gap-3">
              <span className="p-2 rounded-lg bg-accent/10 text-accent">
                <Mail className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-xl font-heading font-semibold text-primary dark:text-gold">
                  Report a security issue
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  If you discover a vulnerability or security concern, contact
                  our team immediately.
                </p>
                <a
                  href="mailto:security@stratizen.edu"
                  className="mt-4 inline-flex items-center gap-2 text-accent hover:text-gold"
                >
                  security@stratizen.edu
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12" aria-labelledby="faq-title">
          <h3 id="faq-title" className="text-2xl font-heading font-semibold text-primary dark:text-gold">
            Trust Center FAQ
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {faqItems.map((item) => (
              <details key={item.question} className="card">
                <summary className="cursor-pointer text-base font-semibold text-primary dark:text-gold">
                  {item.question}
                </summary>
                <p className="mt-3 text-gray-600 dark:text-gray-300">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12 text-sm text-gray-500 dark:text-gray-400">
          <p>
            Learn more about our commitments in the <a href="/privacy" className="text-accent hover:text-gold">Privacy</a>
            {" "}and{ " " }
            <a href="/terms" className="text-accent hover:text-gold">Terms</a> pages.
          </p>
        </section>
      </main>
    </section>
  );
}
