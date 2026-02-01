// src/pages/HomePage.jsx
import { ArrowRight, ShieldCheck, Users, Layers, Sparkles, Map, BadgeCheck } from "lucide-react";
import SEO from "../components/SEO";
import { siteConfig } from "../config/siteConfig";

const highlights = [
  {
    title: "Collaboration Hub",
    text: "Study circles, mentorship pathways, and peer knowledge sharing in one space.",
    icon: Users,
  },
  {
    title: "Opportunity Layer",
    text: "Marketplace, internships, and campus projects aligned to student strengths.",
    icon: Sparkles,
  },
  {
    title: "Coordination Core",
    text: "Announcements, resources, and verified profiles to keep everyone aligned.",
    icon: Layers,
  },
];

const steps = [
  {
    title: "Onboard with purpose",
    text: "Create a student profile that reflects your skills, interests, and goals.",
  },
  {
    title: "Connect your campus",
    text: "Join communities, mentorship channels, and study groups that fit your journey.",
  },
  {
    title: "Build and collaborate",
    text: "Launch projects, access resources, and coordinate with peers and staff.",
  },
  {
    title: "Showcase and grow",
    text: "Share progress, earn recognition, and unlock new opportunities.",
  },
];

const trustItems = [
  {
    title: "Student-owned governance",
    text: "Built around student leadership with clear, documented accountability.",
    icon: BadgeCheck,
  },
  {
    title: "Privacy-first posture",
    text: "Collect only essential data and align with institutional policies.",
    icon: ShieldCheck,
  },
  {
    title: "Charter-led operations",
    text: "Rules of engagement are transparent and designed to protect the community.",
    icon: Map,
  },
];

const roadmap = [
  {
    year: "2025",
    title: "Pilot at Strathmore",
    text: "Launch core collaboration, mentorship, and marketplace tools.",
  },
  {
    year: "2026",
    title: "Campus expansion",
    text: "Scale to more student organizations and institutional partners.",
  },
  {
    year: "2027",
    title: "Regional network",
    text: "Connect partner campuses across Kenya with shared opportunity flows.",
  },
  {
    year: "2030",
    title: "Pan-African readiness",
    text: "Standardize governance and infrastructure for broader expansion.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-bg dark:bg-dark-bg text-text dark:text-dark-text">
      <SEO
        title="Home"
        description={siteConfig.description}
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.siteUrl,
            logo: `${siteConfig.siteUrl}/logo.png`,
            description: siteConfig.description,
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "support",
                email: "info@stratizen.edu",
                url: `${siteConfig.siteUrl}/join`,
              },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: siteConfig.name,
            url: siteConfig.siteUrl,
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Stratizen Platform",
            applicationCategory: "EducationApplication",
            operatingSystem: "Web",
            description: siteConfig.description,
            url: siteConfig.siteUrl,
          },
        ]}
      />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-strath.jpg"
            alt="Students collaborating at Strathmore University"
            className="h-full w-full object-cover"
            width="2000"
            height="1125"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/40" />
        </div>

        <div className="relative container py-16 md:py-24 lg:py-28">
          <div className="max-w-3xl text-white">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs tracking-wide text-gray-100">
              Piloting at Strathmore University
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-heading font-bold leading-tight">
              Student-owned digital infrastructure for collaboration, opportunity,
              and coordination.
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-200">
              Stratizen is a trust-first platform designed with students and for
              students. We connect learning, mentorship, campus enterprise, and
              institutional coordination into a single experience.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/join"
                className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-2xl"
              >
                Join the waitlist <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/#how"
                className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
              >
                See how it works
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-4 text-xs text-gray-200">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Privacy-first defaults
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Built for campus scale
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent" />
                Student-owned governance
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="section bg-white dark:bg-dark-sidebar-bg">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title">What Stratizen is</h2>
            <p className="section-subtitle">
              A digital home for student collaboration, opportunity discovery,
              and campus coordination.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card card-hover">
                  <div className="flex items-center gap-3">
                    <span className="rounded-lg bg-accent/10 p-3 text-accent">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-xl font-heading font-semibold text-primary dark:text-gold">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="why" className="section bg-bg dark:bg-dark-bg">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-gold">
                Why it matters
              </h2>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Students juggle learning, opportunities, and campus life across
                disconnected systems. Stratizen brings these flows together so
                students can focus on growth, impact, and long-term success.
              </p>
              <div className="mt-8 grid gap-4">
                {[
                  "Reduce fragmented communication and missed opportunities.",
                  "Connect mentorship, projects, and marketplace access in one place.",
                  "Give universities visibility into student innovation and outcomes.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-5 w-5 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                      <BadgeCheck className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-gray-600 dark:text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-sidebar-bg p-8 shadow-xl">
              <div className="flex items-center gap-3 text-primary dark:text-gold">
                <Layers className="h-6 w-6" />
                <h3 className="text-xl font-heading font-semibold">Strathmore pilot focus</h3>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                The initial release prioritizes high-velocity coordination:
                announcements, study collaboration, mentorship routing, and
                verified campus opportunities.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  2025 Pilot
                </span>
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                  Student-owned governance
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="section bg-white dark:bg-dark-sidebar-bg">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">How it works</h2>
            <p className="section-subtitle">
              A simple flow that makes collaboration and opportunity easier to
              discover.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step.title} className="card">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
                    Step {index + 1}
                  </span>
                  <h3 className="text-xl font-heading font-semibold text-primary dark:text-gold">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="section bg-bg dark:bg-dark-bg">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Trust, privacy, and charter</h2>
            <p className="section-subtitle">
              Built for student confidence with transparent guardrails.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {trustItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card">
                  <span className="inline-flex items-center justify-center rounded-lg bg-accent/10 p-3 text-accent">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-xl font-heading font-semibold text-primary dark:text-gold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-300">{item.text}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-8 text-center">
            <a href="/trust" className="btn btn-outline">Explore the trust center</a>
          </div>
        </div>
      </section>

      <section id="roadmap" className="section bg-white dark:bg-dark-sidebar-bg">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="section-title">Roadmap</h2>
            <p className="section-subtitle">
              Focused milestones to deliver reliable student infrastructure.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {roadmap.map((item) => (
              <div key={item.year} className="card">
                <p className="text-xs uppercase tracking-widest text-accent">{item.year}</p>
                <h3 className="mt-2 text-xl font-heading font-semibold text-primary dark:text-gold">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 dark:text-gray-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section bg-gradient-to-r from-primary to-accent text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Start the conversation</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
            Whether you are a student leader, faculty partner, or institutional
            stakeholder, we would love to learn how Stratizen can support your
            campus.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a href="/contact" className="btn btn-primary bg-white text-primary">
              Book a demo
            </a>
            <a href="/join" className="btn btn-outline border-white text-white">
              Join the waitlist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
