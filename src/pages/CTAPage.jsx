// src/pages/CTAPage.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Handshake, Code, Building } from "lucide-react";
import SEO from "../components/SEO";
import { siteConfig } from "../config/siteConfig";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionP = motion.p;

export default function CTA() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-primary via-accent to-primary text-white px-6 py-20 overflow-hidden">
      <SEO
        title="Engage"
        description="Engagement pathways for students, partners, and institutions supporting the Stratizen pilot."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Engage with Stratizen",
          url: `${siteConfig.siteUrl}/cta`,
        }}
      />

      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/images/cta.webp')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90 backdrop-blur-sm" />

      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"
      />

      <MotionDiv
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-6xl text-center"
      >
        <MotionH1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          A coordinated platform for student opportunity
        </MotionH1>

        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto"
        >
          Stratizen invites students, developers, universities, and partners to
          co-create trusted digital infrastructure that elevates student outcomes
          and campus innovation.
        </MotionP>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center flex-wrap"
        >
          <Link
            to="/join"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg border border-white/20 bg-white text-primary hover:bg-gray-100 hover:scale-105 transition-all duration-300"
          >
            <Users className="w-5 h-5" /> Request access
          </Link>
          <Link
            to="/services"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg border border-white/30 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            <Code className="w-5 h-5" /> Review services
          </Link>
          <Link
            to="/join"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg border border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            <Handshake className="w-5 h-5" /> Book a demo
          </Link>
          <Link
            to="/about"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg border border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-all duration-300"
          >
            <Building className="w-5 h-5" /> Learn more
          </Link>
        </MotionDiv>

        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-14 grid sm:grid-cols-3 gap-8 text-center"
        >
          {[
            { year: "2025", goal: "Pilot and institutional onboarding" },
            { year: "2027", goal: "Cross-campus opportunity network" },
            { year: "2030", goal: "Pan-African readiness" },
          ].map((item) => (
            <div
              key={item.year}
              className="p-6 rounded-xl border shadow-lg bg-white/10 border-white/10"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-yellow-300">
                {item.year}
              </h2>
              <p className="mt-3 text-base md:text-lg text-white/80">
                {item.goal}
              </p>
            </div>
          ))}
        </MotionDiv>

        <MotionP
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-12 text-lg md:text-xl font-medium text-white"
        >
          Build the future of student coordination with us.
        </MotionP>
      </MotionDiv>
    </section>
  );
}

