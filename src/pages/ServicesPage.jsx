// src/pages/ServicesPage.jsx
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  ShoppingBag,
  MessageSquare,
  GraduationCap,
  Building,
  Globe,
  Rocket,
  Network,
  BookOpen,
  Handshake,
} from "lucide-react";

const studentServices = [
  {
    title: "Peer-to-Peer Learning",
    desc: "Join study hubs, mentorship spaces, and knowledge-sharing communities tailored for growth.",
    icon: Users,
  },
  {
    title: "Marketplace",
    desc: "Promote your skills, services, or student-run businesses to the Stratizen ecosystem.",
    icon: ShoppingBag,
  },
  {
    title: "Innovation Hub",
    desc: "Turn bold ideas into ventures with DAOs, hackathons, and cross-campus collaborations.",
    icon: Rocket,
  },
  {
    title: "Community & Support",
    desc: "Connect in forums, join societies, and access anonymous peer support when you need it.",
    icon: MessageSquare,
  },
  {
    title: "Career & Opportunities",
    desc: "Find internships, jobs, and projects through trusted partnerships and alumni networks.",
    icon: Briefcase,
  },
  {
    title: "Global Exposure",
    desc: "Access international exchanges, competitions, and communities beyond your campus.",
    icon: Globe,
  },
];

const partnerServices = [
  {
    title: "Invest in Student Startups",
    desc: "Gain early access to ventures and disruptive innovations emerging from campuses.",
    icon: GraduationCap,
  },
  {
    title: "Recruitment & Talent Access",
    desc: "Tap into a pool of ambitious, skilled students ready for internships and careers.",
    icon: Network,
  },
  {
    title: "Partnership Opportunities",
    desc: "Collaborate with Stratizen to co-create projects, research, and scalable innovations.",
    icon: Building,
  },
  {
    title: "CSR & Impact Programs",
    desc: "Support digital inclusion, sustainability, and education-driven initiatives across Africa.",
    icon: Handshake,
  },
  {
    title: "Global Ecosystem",
    desc: "Be part of a decentralized, student-driven movement shaping the future of work & learning.",
    icon: Globe,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-bg dark:bg-dark-bg text-text dark:text-dark-text">
      <div className="max-w-7xl mx-auto px-3 py-12 text-center">
        {/* Hero Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-extrabold text-primary dark:text-gold">
            Services That Empower 🚀
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
            Stratizen is where <span className="text-accent font-semibold">students</span> grow,{" "}
            <span className="text-accent font-semibold">partners</span> innovate, and{" "}
            <span className="text-accent font-semibold">investors</span> discover the next big wave of talent and startups.
          </p>
        </motion.div>

        {/* Student Services */}
        <section className="mt-5">
          <h3 className="text-3xl font-bold mb-6 text-primary dark:text-gold">
            For Students
          </h3>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {studentServices.map(({ title, desc, icon: Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-gold mb-5 mx-auto" />
                <h4 className="text-xl font-semibold mb-3">{title}</h4>
                <p className="opacity-90">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Partner / Investor Services */}
        <section className="mt-5">
          <h3 className="text-3xl font-bold mb-6 text-primary dark:text-gold">
            For Partners & Investors
          </h3>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {partnerServices.map(({ title, desc, icon: Icon }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-md hover:shadow-xl transition-all duration-300"
              >
                <Icon className="w-12 h-12 text-gold mb-5 mx-auto" />
                <h4 className="text-xl font-semibold mb-3">{title}</h4>
                <p className="opacity-90">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Impact Metrics */}
        <section className="mt-5">
          <h3 className="text-3xl font-bold mb-6 text-primary dark:text-gold">
            Roadmap to 2030 🌍
          </h3>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { number: "50,000+", label: "Students Empowered (by 2030)" },
              { number: "1,000+", label: "Projects & Startups Launched (by 2030)" },
              { number: "100+", label: "Universities in Roadmap (by 2030)" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg"
              >
                <h4 className="text-4xl font-extrabold mb-2 text-white dark:text-gold">{stat.number}</h4>
                <p className="text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-sm italic">
            *These impact projections form part of our 2030 strategic roadmap.
          </p>
        </section>

        {/* Call to Action */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-5 bg-gradient-to-r from-primary to-accent dark:from-dark-navbar dark:to-gold text-white py-10 px-5 rounded-3xl shadow-xl"
        >
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
            Let’s Build the Future, Together 🌍
          </h3>
          <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
            Students. Partners. Investors. Stratizen is not just a platform, it’s a{" "}
            <span className="font-semibold">movement</span> for redefining education, entrepreneurship, and collaboration in Africa and beyond.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl font-semibold text-lg bg-white text-primary hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Contact Us
            </a>
            <a
              href="/cta"
              className="px-8 py-4 rounded-xl font-semibold text-lg border border-white text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-lg"
            >
              Get Started
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
