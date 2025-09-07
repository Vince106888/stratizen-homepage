// src/pages/AboutPage.jsx
import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Layers, Globe } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-white py-24">
        <div className="container text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Empowering Students. Unlocking Potential.
          </motion.h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
            Stratizen is building the future of student collaboration —
            connecting learning, innovation, and opportunity on a single
            platform.
          </p>
        </div>
      </section>

      {/* Mission & Story */}
      <section className="section bg-bg dark:bg-dark-bg">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="/images/about.jpg"
            alt="Students collaborating through Stratizen platform"
            className="rounded-2xl shadow-xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          />
          <div>
            <h2 className="section-title text-left">Our Mission</h2>
            <p className="text-lg mb-6">
              At Stratizen, we believe that students are the heartbeat of
              innovation. Our mission is to provide a{" "}
              <span className="font-semibold">peer-driven platform</span> where
              they can collaborate, learn, trade, and grow — both academically
              and entrepreneurially.
            </p>
            <p className="text-lg">
              Founded at Strathmore University, Stratizen is more than just a
              platform: it’s a{" "}
              <span className="font-semibold">movement to decentralize education</span>, foster
              student-led innovation, and create scalable opportunities across
              Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Traction / Value Proposition */}
      <section className="section bg-white dark:bg-dark-sidebar-bg">
        <div className="container text-center">
          <h2 className="section-title">Why Stratizen?</h2>
          <p className="section-subtitle">
            We’re solving the biggest challenge in higher education:{" "}
            <span className="font-semibold">
              bridging the gap between learning and real-world opportunity.
            </span>
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Growing Demand",
                text: "Over 15,000 students in our pilot market need better ways to collaborate and monetize their skills.",
                icon: <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />,
              },
              {
                title: "Unique Platform",
                text: "Combining peer learning, forums, and a marketplace — a first-of-its-kind hybrid model in Africa.",
                icon: <Layers className="w-8 h-8 text-accent mx-auto mb-3" />,
              },
              {
                title: "Scalable Vision",
                text: "Built with decentralization and Web3 integration in mind, ready to expand across campuses globally.",
                icon: <Globe className="w-8 h-8 text-accent mx-auto mb-3" />,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className="card card-hover p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {card.icon}
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-bg dark:bg-dark-bg">
        <div className="container text-center">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Passionate, diverse, and driven to reimagine the student experience.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Vince N.",
                role: "Founder & Vision Lead",
                img: "/images/vincent.JPG",
                link: "https://linkedin.com/in/your-link", // replace with actual
              },
            ].map((member, i) => (
              <motion.div
                key={i}
                className="card card-hover text-center group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <img
                  src={member.img}
                  alt={`Profile of ${member.name}, ${member.role}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {member.role}
                </p>
                {member.link && (
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary mt-2 inline-block hover:underline"
                  >
                    View Profile
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action for Investors */}
      <section className="section bg-gradient-to-r from-accent to-gold text-white text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Join Us in Shaping the Future of Student Innovation
          </h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            We’re seeking visionary partners and investors who share our
            commitment to empowering the next generation. Together, we can scale
            Stratizen into a global force for education and innovation.
          </p>
          <a
            href="/contact"
            className="btn btn-primary text-lg px-6 py-3 rounded-xl animate-pulse"
          >
            Connect With Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
