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
  Handshake,
} from "lucide-react";
import SEO from "../components/SEO";
import { siteConfig } from "../config/siteConfig";

const MotionDiv = motion.div;
const MotionSection = motion.section;

const studentServices = [
  {
    title: "Peer learning",
    desc: "Study hubs, mentorship spaces, and knowledge-sharing communities.",
    icon: Users,
  },
  {
    title: "Campus marketplace",
    desc: "Promote skills, services, or student-run businesses responsibly.",
    icon: ShoppingBag,
  },
  {
    title: "Innovation hub",
    desc: "Turn ideas into ventures with collaboration and support.",
    icon: Rocket,
  },
  {
    title: "Community support",
    desc: "Connect in forums and access peer-led support when needed.",
    icon: MessageSquare,
  },
  {
    title: "Career pathways",
    desc: "Access internships and projects through trusted partners.",
    icon: Briefcase,
  },
  {
    title: "Global exposure",
    desc: "Discover exchanges, competitions, and opportunities beyond campus.",
    icon: Globe,
  },
];

const partnerServices = [
  {
    title: "Student startup access",
    desc: "Engage early with ventures and campus innovation pipelines.",
    icon: GraduationCap,
  },
  {
    title: "Talent discovery",
    desc: "Connect with students ready for internships and entry roles.",
    icon: Network,
  },
  {
    title: "Institutional partnerships",
    desc: "Co-create projects, research, and coordinated programs.",
    icon: Building,
  },
  {
    title: "CSR and impact",
    desc: "Support digital inclusion, sustainability, and youth development.",
    icon: Handshake,
  },
  {
    title: "Global ecosystem",
    desc: "Join a coordinated network of universities and partners.",
    icon: Globe,
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-bg dark:bg-dark-bg text-text dark:text-dark-text">
      <SEO
        title="Services"
        description="Services for students, institutional partners, and collaborators supporting the Stratizen pilot."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Stratizen Services",
          url: `${siteConfig.siteUrl}/services`,
        }}
      />
      <div className="max-w-7xl mx-auto px-3 py-12 text-center">
        <MotionDiv
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-primary dark:text-gold">
            Services for students and partners
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-4xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
            Stratizen supports students, faculty, and collaborators with tools
            that make campus coordination, learning, and opportunity easier to
            access.
          </p>
        </MotionDiv>

        <section id="students" className="mt-10">
          <h2 className="text-3xl font-bold mb-6 text-primary dark:text-gold">
            For students
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {studentServices.map((service) => {
              const Icon = service.icon;
              return (
                <MotionDiv
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-gold mb-5 mx-auto" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="opacity-90">{service.desc}</p>
                </MotionDiv>
              );
            })}
          </div>
        </section>

        <section id="partners" className="mt-14">
          <h2 className="text-3xl font-bold mb-6 text-primary dark:text-gold">
            For partners and institutions
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {partnerServices.map((service) => {
              const Icon = service.icon;
              return (
                <MotionDiv
                  key={service.title}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                  className="p-8 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-gold mb-5 mx-auto" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="opacity-90">{service.desc}</p>
                </MotionDiv>
              );
            })}
          </div>
        </section>

        <section id="roadmap-services" className="mt-14">
          <h2 className="text-3xl font-bold mb-6 text-primary dark:text-gold">
            Roadmap indicators
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { number: "50,000+", label: "Students supported (2030 target)" },
              { number: "1,000+", label: "Projects and startups enabled" },
              { number: "100+", label: "Universities in expansion roadmap" },
            ].map((stat) => (
              <MotionDiv
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-gradient-to-br from-primary to-accent text-white shadow-lg"
              >
                <h3 className="text-4xl font-extrabold mb-2 text-white dark:text-gold">
                  {stat.number}
                </h3>
                <p className="text-lg">{stat.label}</p>
              </MotionDiv>
            ))}
          </div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-sm italic">
            These metrics align with the long-term strategic roadmap.
          </p>
        </section>

        <MotionSection
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-14 bg-gradient-to-r from-primary to-accent dark:from-dark-navbar dark:to-gold text-white py-10 px-5 rounded-3xl shadow-xl"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Build the future with Stratizen
          </h2>
          <p className="max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
            Students, partners, and institutions are invited to collaborate on
            trusted digital infrastructure for campus growth.
          </p>
          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="/contact"
              className="px-8 py-4 rounded-xl font-semibold text-lg bg-white text-primary hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Contact the team
            </a>
            <a
              href="/cta"
              className="px-8 py-4 rounded-xl font-semibold text-lg border border-white text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-lg"
            >
              View engagement options
            </a>
          </div>
        </MotionSection>
      </div>
    </div>
  );
}

