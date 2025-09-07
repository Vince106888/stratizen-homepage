// src/pages/HomePage.jsx
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import {
  AcademicCapIcon,
  UsersIcon,
  ShoppingBagIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  LightBulbIcon,
  BookOpenIcon,
  RocketLaunchIcon,
  BriefcaseIcon,
  NewspaperIcon,
} from "@heroicons/react/24/outline";

/**
 * Optional: If you want advanced 3D scenes replace hero background with react-three-fiber.
 * Dependencies (optional): three @react-three/fiber @react-three/drei
 */

const features = [
  { title: "Dashboard", desc: "Your central hub to track progress, notifications, and activities.", icon: AcademicCapIcon },
  { title: "Profile", desc: "Personalize your profile, showcase achievements, and manage settings.", icon: UsersIcon },
  { title: "Stratizen", desc: "Discover Stratizen’s ecosystem and connect with the wider community.", icon: GlobeAltIcon },
  { title: "Study", desc: "Access study materials, courses, and resources tailored for students.", icon: BookOpenIcon },
  { title: "Mentorship", desc: "Connect with mentors and receive guidance on academics and careers.", icon: LightBulbIcon },
  { title: "Noticeboard", desc: "Stay updated with announcements, news, and campus events.", icon: NewspaperIcon },
  { title: "Messages", desc: "Send and receive messages from peers, mentors, and groups.", icon: ChatBubbleLeftRightIcon },
  { title: "Market", desc: "Buy, sell, or trade student products and services across campus.", icon: ShoppingBagIcon },
  { title: "Resources", desc: "Access guides, tutorials, and learning materials for your studies.", icon: BookOpenIcon },
  { title: "Innovation Hub", desc: "Showcase projects, join hackathons, and collaborate on ideas.", icon: RocketLaunchIcon },
  { title: "Careers", desc: "Find internships, jobs, and mentorship opportunities for your career.", icon: BriefcaseIcon },
];

export default function HomePage() {
  const heroRef = useRef(null);

  return (
    <div className="flex flex-col min-h-screen bg-bg dark:bg-dark-bg text-text dark:text-dark-text antialiased">
      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden"
        aria-label="Hero"
      >
        {/* layered parallax background */}
        <div
          className="absolute inset-0 bg-cover bg-center transform-gpu will-change-transform"
          style={{
            backgroundImage: "url('/images/hero-students.png')",
            filter: "saturate(0.9) contrast(1.05)",
            transformOrigin: "center",
          }}
          aria-hidden="true"
        />

        {/* dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>

        <div className="relative z-10 container py-28 md:py-36 lg:py-44">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* left: hero content */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className="text-4xl md:text-6xl leading-tight font-heading font-bold text-white drop-shadow-xl">
                Empowering <span className="text-accent">Students</span> to Learn, Connect & Lead Change
              </h1>

              <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl">
                Stratizen is more than a platform — it’s an ecosystem that empowers students
                across Africa with tools for learning, peer collaboration, entrepreneurship and scale.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/services"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-accent text-white font-semibold shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-accent/30 transform-gpu"
                >
                  Get Started
                </a>

                <a
                  href="/about"
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/10"
                >
                  Learn More
                </a>
              </div>

              {/* small trust badges */}
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                  <span>Early university pilots</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                  <span>Student-first privacy</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-accent" />
                  <span>Decentralized-ready</span>
                </div>
              </div>
            </motion.div>

            {/* right: interactive 3D-ish card (Tilt) */}
            <div className="lg:col-span-5">
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                scale={1.03}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                transitionSpeed={400}
                className="max-w-md mx-auto"
              >
                <motion.div
                  className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-white/6 to-white/3 backdrop-blur-md border border-white/10 shadow-2xl p-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute -top-10 -right-12 w-48 h-48 rounded-full bg-accent/10 blur-3xl pointer-events-none"></div>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-white/6 flex items-center justify-center border border-white/8">
                      <GlobeAltIcon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-200">Active Students</p>
                      <CountUp end={50000} duration={3} separator="," className="text-2xl md:text-3xl font-bold text-white" />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-white/3 border border-white/6">
                      <p className="text-xs text-gray-200">Universities</p>
                      <p className="font-semibold text-white">100+</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/3 border border-white/6">
                      <p className="text-xs text-gray-200">Projects</p>
                      <p className="font-semibold text-white">1,000+</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm text-gray-300">
                    Built with privacy, modular governance, and student-first UX — ready for scale.
                  </p>

                  <div className="mt-6 flex gap-3">
                    <a className="inline-block px-4 py-2 text-sm rounded-md bg-white/8 border border-white/10 hover:bg-white/12">Request Demo</a>
                    <a className="inline-block px-4 py-2 text-sm rounded-md border border-white/10 hover:bg-white/8">Whitepaper</a>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section id="features" className="section bg-white dark:bg-dark-sidebar-bg py-16">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.06 } }
          }}>
            <h2 className="section-title">Platform Highlights</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Explore the key features of Stratizen — where social, study and opportunity meet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <Tilt
                    key={idx}
                    className="transform-gpu"
                    tiltMaxAngleX={6}
                    tiltMaxAngleY={6}
                    perspective={900}
                    scale={1.02}
                    transitionSpeed={350}
                  >
                    <motion.article
                      role="article"
                      aria-label={feature.title}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.04, duration: 0.4 }}
                      className="card p-6 text-center rounded-2xl bg-white shadow-sm hover:shadow-2xl border border-gray-100 dark:bg-dark-card dark:border-dark-border hover:scale-[1.01] focus-within:scale-[1.01] transition-transform duration-300 cursor-pointer"
                    >
                      <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-white/6 to-white/2 border border-white/8">
                        <Icon className="w-7 h-7 text-accent" />
                      </div>
                      <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
                    </motion.article>
                  </Tilt>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== IMPACT ===== */}
      <section className="relative section overflow-hidden py-16">
        <div className="absolute inset-0 bg-[url('/images/global-impact.jpg')] bg-cover bg-center opacity-8 pointer-events-none" />
        <div className="relative container z-10 text-center">
          <div className="mx-auto inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
            <GlobeAltIcon className="w-6 h-6 text-accent" />
          </div>
          <h2 className="section-title">Driving Global Change</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Built on sustainability, inclusivity and real measurable impact aligned to the SDGs.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* card 1 */}
            <motion.div whileHover={{ y: -6 }} className="card p-8 bg-white/80 dark:bg-dark-bg/60 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4">
                <LightBulbIcon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Innovation for Africa</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Turning campus challenges into scalable opportunities that drive entrepreneurship.
              </p>
              <div className="mt-4 text-accent font-bold text-lg">
                <CountUp end={1000} duration={2.2} separator="," />+ projects
              </div>
            </motion.div>

            {/* card 2 */}
            <motion.div whileHover={{ y: -6 }} className="card p-8 bg-white/80 dark:bg-dark-bg/60 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4">
                <UsersIcon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Student Empowerment</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Digital tools, mentorship, and career pathways that prepare students for global opportunities.
              </p>
              <div className="mt-4 text-accent font-bold text-lg">
                <CountUp end={50000} duration={2.6} separator="," />+ students
              </div>
            </motion.div>

            {/* card 3 */}
            <motion.div whileHover={{ y: -6 }} className="card p-8 bg-white/80 dark:bg-dark-bg/60 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mx-auto mb-4">
                <GlobeAltIcon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-xl mb-2">Global Sustainability</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Working with stakeholders to align student innovation with measurable sustainability outcomes.
              </p>
              <div className="mt-4 text-accent font-bold text-lg">Aligned with 7 SDGs</div>
            </motion.div>
          </div>

          <p className="mt-12 max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300 font-medium">
            Stratizen builds the bridge from student innovation to real-world impact — measurable, scalable and investor-ready.
          </p>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section
        id="about"
        className="relative section text-white bg-cover bg-center py-20"
        style={{ backgroundImage: "url('/images/about-stratizen.webp')" }}
      >
        <div className="absolute inset-0 bg-black/65 backdrop-blur-sm"></div>
        <div className="relative container z-10">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <h2 className="section-title text-white">About Stratizen</h2>
              <p className="section-subtitle max-w-3xl text-gray-200">
                Redefining African education, entrepreneurship, and innovation through a bold, student-driven digital ecosystem.
              </p>

              <div className="mt-6 space-y-4">
                <h3 className="text-2xl font-heading font-bold text-accent">Our Mission</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Empower students with modular, scalable tools to collaborate, innovate and commercialize ideas — driving socio-economic change across campuses and communities.
                </p>

                <h3 className="text-2xl font-heading font-bold text-accent">Our Vision</h3>
                <p className="text-lg text-gray-200 leading-relaxed">
                  Build Africa’s leading student ecosystem — decentralized-ready, privacy-first, and impact-focused.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="card bg-white/6 p-6 rounded-xl border border-white/12">
                  <h4 className="text-3xl font-bold text-accent mb-2">50,000+</h4>
                  <p className="text-primary-200">Students empowered across Africa</p>
                </div>
                <div className="card bg-white/6 p-6 rounded-xl border border-white/12">
                  <h4 className="text-3xl font-bold text-accent mb-2">100+</h4>
                  <p className="text-primary-200">Universities on our roadmap</p>
                </div>
                <div className="card bg-white/6 p-6 rounded-xl border border-white/12">
                  <h4 className="text-3xl font-bold text-accent mb-2">2030</h4>
                  <p className="text-primary-200">Target year for pan-African adoption</p>
                </div>
                <div className="card bg-white/6 p-6 rounded-xl border border-white/12">
                  <h4 className="text-3xl font-bold text-accent mb-2">1 Vision</h4>
                  <p className="text-primary-200">Redefining student life</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" className="relative w-full bg-cover bg-center text-white text-center overflow-hidden py-16" style={{ backgroundImage: "url('/images/global-change.jpg')" }}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div className="relative z-10 container">
          <motion.h2 initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Be Part of the Student Revolution
          </motion.h2>
          <p className="mb-6 text-lg max-w-2xl mx-auto">
            Stratizen isn’t just for today — it’s for the future of Africa and the world. Join us and lead the change.
          </p>
          <div className="flex justify-center gap-4">
            <a href="/contact" className="btn btn-primary bg-white text-accent hover:bg-gray-100">Contact Us</a>
            <a href="/invest" className="btn btn-outline text-red border-white hover:bg-white/10">Invest</a>
          </div>
        </div>
      </section>
    </div>
  );
}
