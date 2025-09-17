// src/pages/AboutPage.jsx
import React, {useRef, useEffect } from "react";
import { useInView, useAnimation, motion } from "framer-motion";
import { TrendingUp, Layers, Globe } from "lucide-react";
import Tilt from "react-parallax-tilt";
import StratizenFlow from "../components/StratizenFlow";

const AboutPage = () => {

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-white py-12">
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
            Stratizen is building the future of student collaboration.
            Connecting learning, innovation, and opportunity on a single
            platform.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values & Story */}
      <section className="bg-bg dark:bg-dark-bg pt-5 pb-5">
        <div className="container space-y-4 md:space-y-5">
          {[
            {
              title: "Our Mission",
              desc: `Stratizen empowers students with a peer-driven, pan-African platform 
              to collaborate, innovate, and commercialize ideas academically and entrepreneurially. 
              By connecting learning, innovation, and opportunity, we ensure that no student talent goes untapped.`,
              img: "/images/mission.jpg",
              gradient: "bg-gradient-to-r from-primary to-accent", // Navy → Red
            },
            {
              title: "Our Vision",
              desc: `To become Africa’s leading student ecosystem by 2030 decentralized-ready, privacy-first, and globally impactful.
              Connecting 50,000+ students and 100+ universities, 
              we aim to redefine the standard for student collaboration, innovation, and opportunity across the continent.`,
              img: "/images/vision.jpg",
              gradient: "bg-gradient-to-r from-accent to-gold", // Red → Gold
            },
            {
              title: "Our Core Beliefs",
              desc: `We operate on three guiding principles:
              • Excellence without barriers: Talent exists everywhere; opportunity must too.
              • Innovation starts at home: Africa’s future is built by bold action today.
              • Students as co-architects: Learners aren’t just beneficiaries, they design the future we deserve.`,
              img: "/images/values.jpg",
              gradient: "bg-gradient-to-r from-primary to-gold", // Navy → Gold
            },
            {
              title: "Our Story & Approach",
              desc: `Founded at Strathmore University, Stratizen is a constructive roadmap not a critique.
              We partner with faculty, administrators, alumni, and students to pilot high-impact initiatives, empower student-led innovation, and co-create a legacy that balances tradition with transformation. 
              Together, we ensure Africa’s future leaders thrive.`,
              img: "/images/story.webp",
              gradient: "bg-gradient-to-r from-accent to-primary", // Red → Navy
            },
          ].map((card, idx) => (
            <Tilt
              key={idx}
              glareEnable={true}
              glareMaxOpacity={0.25}
              scale={1.05}
              perspective={1000}
              transitionSpeed={400}
              className="cursor-pointer"
            >
              <motion.div
                className={`grid md:grid-cols-2 gap-2 md:gap-3 rounded-2xl shadow-card overflow-hidden ${card.gradient} text-white`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                {/* Image */}
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-48 md:h-auto object-cover md:rounded-l-2xl"
                />

                {/* Text */}
                <div className="p-4 md:p-6 flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2 md:mb-3">
                    {card.title}
                  </h3>
                  <p className="text-base md:text-lg leading-relaxed whitespace-pre-line">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Problem & Opportunity */}
      <section className="section bg-bg dark:bg-dark-bg py-8 md:py-5">
        <div className="container space-y-12">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <motion.h2
              className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The Problem & Opportunity
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-text dark:text-dark-text opacity-90"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Higher education is fragmented and students often face missed opportunities. Stratizen bridges gaps, 
              creates visibility, and empowers students to learn, collaborate, and earn.
            </motion.p>
          </div>

          {/* Problem & Opportunity Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Fragmented Learning",
                desc: `Students often struggle to find peers, mentors, and relevant resources in one place. 
                Knowledge and collaboration are scattered, making it harder to build projects and solve real problems.`,
                img: "/images/problem1.jpg",
                gradient: "bg-gradient-to-r from-primary to-accent",
                icon: "📚",
              },
              {
                title: "Limited Monetization & Recognition",
                desc: `Many students' skills, tutoring, and projects go unnoticed. 
                Stratizen creates a marketplace where students can showcase their talent, monetize services, and earn recognition.`,
                img: "/images/problem2.png",
                gradient: "bg-gradient-to-r from-accent to-gold",
                icon: "💰",
              },
              {
                title: "Sparse Mentorship & Guidance",
                desc: `Access to mentors and advisors is inconsistent. Stratizen connects students with industry experts, alumni, and advisors, 
                providing structured guidance and growth opportunities.`,
                img: "/images/problem3.jpg",
                gradient: "bg-gradient-to-r from-primary to-gold",
                icon: "🧭",
              },
              {
                title: "Disconnected Campus Ecosystems",
                desc: `Universities often operate in silos, limiting collaboration. Stratizen bridges campuses across Africa, 
                fostering cross-institution projects, innovation hubs, and pan-African student networks.`,
                img: "/images/problem4.jpg",
                gradient: "bg-gradient-to-r from-accent to-primary",
                icon: "🌍",
              },
              {
                title: "Knowledge Organization Gap",
                desc: `Traditional education rarely teaches students how to systematically organize and apply their knowledge. 
                Stratizen equips learners with tools to structure information, plan projects, and turn ideas into results.`,
                img: "/images/problem5.jpg",
                gradient: "bg-gradient-to-r from-indigo-700 to-primary",
                icon: "🗂️",
              },
              {
                title: "True Educated Leadership",
                desc: `An educated individual is one who can achieve any goal without selfishness. Stratizen nurtures ethical problem-solvers, 
                empowering students to create impact while respecting shared resources and community values.`,
                img: "/images/problem6.jpg",
                gradient: "bg-gradient-to-r from-green-700 to-gold",
                icon: "🎓",
              },
            ].map((card, idx) => (
              <Tilt
                key={idx}
                glareEnable={true}
                glareMaxOpacity={0.15}
                scale={1.05}
                transitionSpeed={400}
                className="cursor-pointer h-full"
              >
                <motion.div
                  className={`flex flex-col h-full rounded-2xl shadow-card overflow-hidden ${card.gradient} text-white`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                >
                  {/* Image / Icon */}
                  <div className="relative w-full aspect-[4/3]">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 text-4xl md:text-5xl">{card.icon}</div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow justify-between">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-3 md:mb-4">
                      {card.title}
                    </h3>
                    <p className="text-base md:text-lg leading-relaxed whitespace-pre-line flex-grow">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      {/* Stratizen Ecosystem & User Journey */}
      <section className="section bg-bg dark:bg-dark-bg py-10 relative">
        <div className="container flex flex-col items-center space-y-8 md:space-y-12 relative">
          {/* Section Header */}
          <motion.div
            className="text-center max-w-3xl space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white">
              How Stratizen Works
            </h2>
            <p className="text-base md:text-lg text-text dark:text-dark-text opacity-90">
              Follow the user journey step by step and see what happens at each stage.
            </p>
          </motion.div>

          {/* Animated Flow Card */}
          <div className="relative w-full max-w-3xl">
            <StratizenFlow />
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
                text: "Over 8,000 students in our pilot market need better ways to collaborate and monetize their skills.",
                icon: <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />,
              },
              {
                title: "Unique Platform",
                text: "Combining peer learning, forums, and a marketplace, a first-of-its-kind hybrid model in Africa.",
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
                role: "Founder & Product Engineering Lead",
                img: "/images/vincent.JPG",
                link: "https://linkedin.com/in/vincent-nyamao",
              },
              {
                name: " Marian B.",
                role: "Co-Founder & Product Growth Manager",
                img: "/images/mariam.png",
                link: "https://www.linkedin.com/in/marian-bosibori-8a7593319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              },
              {
                name: "Samantha M.",
                role: "Co-Founder & Vision/Strategy Lead",
                img: "/images/sam.jpeg",
                link: "https://ke.linkedin.com/in/samantha-maria-b37ba526a",
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
