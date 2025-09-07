// src/pages/CTA.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Handshake, Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-brand-blue text-white px-6 py-20 overflow-hidden">
      {/* Background Image + Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/cta.webp')" }}
        aria-hidden="true"
      ></div>
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blueDark/90 via-brand-blue/80 to-brand-blueDark/95 backdrop-blur-sm"></div>

      {/* Decorative Glow Orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-blue/40 rounded-full blur-3xl animate-pulse"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-5xl text-center"
      >
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          Be Part of the{" "}
          <span className="text-yellow-400">Next Wave</span> of <br />
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
            Student Innovation
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-6 text-lg md:text-xl text-gray-100 leading-relaxed max-w-3xl mx-auto"
        >
          Stratizen is not just a platform — it’s a{" "}
          <span className="font-semibold text-yellow-300">
            movement for students, investors, and partners
          </span>
          . Together, we’re building Africa’s most dynamic student innovation
          hub, where ideas scale, opportunities thrive, and the future is
          created.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 flex flex-col sm:flex-row gap-5 justify-center"
        >
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg bg-yellow-400 text-gray-900 hover:bg-yellow-300 hover:scale-105 transition-all duration-300"
          >
            <Users className="w-5 h-5" /> Get Involved
          </Link>
          <a
            href="mailto:invest@stratizen.edu"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg border border-white hover:bg-white hover:text-brand-blue hover:scale-105 transition-all duration-300"
          >
            <Handshake className="w-5 h-5" /> Partner With Us
          </a>
          <Link
            to="/about"
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg bg-white/10 border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-300"
          >
            <Rocket className="w-5 h-5" /> Learn More
          </Link>
        </motion.div>

        {/* Trust Signals / Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="mt-14 grid sm:grid-cols-3 gap-8 text-center"
        >
          {[
            { stat: "15,000+", label: "Students Engaged" },
            { stat: "50+", label: "Campus Communities" },
            { stat: "Global", label: "Scalable Vision" },
          ].map((item, i) => (
            <div key={i}>
              <h3 className="text-3xl md:text-4xl font-bold text-yellow-400">
                {item.stat}
              </h3>
              <p className="mt-2 text-sm md:text-base text-gray-200">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
