import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Handshake, Code, Building } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-brand-blue dark:bg-dark-bg text-primary-foreground px-6 py-20 overflow-hidden">
      {/* Background Slideshow / Image */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-fade-slide"
        style={{ backgroundImage: "url('/images/cta.webp')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blueDark/90 via-brand-blue/80 to-brand-blueDark/95 dark:from-dark-bg/95 dark:via-dark-bg/90 dark:to-dark-bg/95 backdrop-blur-sm"></div>

      {/* Decorative Glow Orbs */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-blue/40 dark:bg-yellow-500/20 rounded-full blur-3xl animate-pulse"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-6xl text-center"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          Africa’s{" "}
          <span className="text-yellow-400 dark:text-yellow-300">
            First Student-Powered Digital Nation
          </span>
          <br />
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            Built by Students. Backed by Visionaries.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-6 text-lg md:text-xl text-muted-foreground dark:text-gray-300 leading-relaxed max-w-3xl mx-auto"
        >
          Stratizen is a{" "}
          <span className="font-semibold text-yellow-400 dark:text-yellow-300">
            living economy where students, developers, universities, and investors
          </span>{" "}
          co-create Africa’s innovation frontier. From campus projects to
          global-scale ventures, this is where ideas grow into movements.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center flex-wrap"
        >
          <Link
            to="/signup"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg border border-primary-foreground/20 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
          >
            <Users className="w-5 h-5" /> Claim Your Seat
          </Link>
          <Link
            to="/devs"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg border border-primary-foreground/20 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
          >
            <Code className="w-5 h-5" /> Build the Future
          </Link>
          <a
            href="mailto:vincent.nyamao@strathmore.edu"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg border border-primary-foreground/20 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
          >
            <Handshake className="w-5 h-5" /> Back the Vision
          </a>
          <Link
            to="/about"
            className="flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg border border-primary-foreground/20 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-300"
          >
            <Building className="w-5 h-5" /> Empower Your Campus
          </Link>
        </motion.div>

        {/* 2030 Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-14 grid sm:grid-cols-3 gap-8 text-center"
        >
          {[
            { year: "2025", goal: "Launch MVP & Campus Hubs" },
            { year: "2027", goal: "Student-Driven Digital Economy" },
            { year: "2030", goal: "Africa’s First Student Nation at Scale" },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border shadow-lg bg-white/5 dark:bg-dark-card border-white/10 dark:border-gray-800"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 dark:text-yellow-300">
                {item.year}
              </h3>
              <p className="mt-3 text-base md:text-lg text-muted-foreground dark:text-gray-300">
                {item.goal}
              </p>
            </div>
          ))}
        </motion.div>

        {/* FOMO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="mt-12 text-lg md:text-xl font-medium text-white dark:text-gold"
        >
          🚀 The first wave of contributors are writing history.{" "}
          <span className="font-semibold">
            Join the movement before it goes global.
          </span>
        </motion.p>
      </motion.div>
    </section>
  );
}
