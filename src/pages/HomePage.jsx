// src/pages/HomePage.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import CountUp from "react-countup";
import {
  Squares2X2Icon,   // Dashboard
  UserIcon,          // Profile
  UsersIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ChatBubbleLeftRightIcon,
  ChatBubbleLeftRightIcon as MessageIcon, // Messages
  NewspaperIcon,     // Noticeboard
  BookOpenIcon,      // Study Hub
  AcademicCapIcon,   // Mentorship
  FolderOpenIcon as ResourceIcon, // Resources
  ShoppingBagIcon,   // Marketplace
  LightBulbIcon,     // Innovation Hub
  BriefcaseIcon,     // Careers
  GlobeAltIcon as CoreIcon, // Core Ecosystem
  WalletIcon,        // Wallet
  RocketLaunchIcon as DaoIcon, // DAO Ready
  BuildingLibraryIcon,
  IdentificationIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";


const heroImages = [
  "/images/hero-strath.jpg",
  "/images/hero-students.png",
  "/images/hero-collab.jpg",
  "/images/hero-innovation.jpeg",
];

// ===== Features =====
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
  const [index, setIndex] = useState(0);

  // background slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 7s per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-bg dark:bg-dark-bg text-text dark:text-dark-text antialiased">
      {/* ===== HERO ===== */}
      <section
        ref={heroRef}
        className="relative w-full overflow-hidden py-0 md:py-0"
        aria-label="Stratizen hero"
      >
        {/* slideshow background */}
        <div className="absolute inset-0">
          {heroImages.map((img, i) => (
            <div
              key={i}
              className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1000ms]`}
              style={{
                backgroundImage: `url(${img})`,
                opacity: i === index ? 1 : 0,
                filter: "saturate(0.92) contrast(1.03)",
              }}
              aria-hidden="true"
            />
          ))}
          {/* overlay for readability */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"
            aria-hidden="true"
          />
        </div>

        {/* dark overlay for readable text */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" aria-hidden="true" />

        <div className="relative z-10 container py-12 md:py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* left: hero content */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* pilot badge */}
              <p className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs text-gray-100 tracking-wide mb-4">
                Proudly Piloting at <strong className="text-white">Strathmore University</strong>
              </p>

              {/* headline */}
              <h1 className="text-4xl md:text-6xl leading-tight font-heading font-bold text-white drop-shadow-xl">
                A <span className="text-accent">Digital Hub</span> for Africa’s Students
              </h1>

              {/* subheadline */}
              <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl">
                <span className="text-white font-semibold">Stratizen is a student movement</span>. 
                We connect <strong>learning</strong>, <strong>mentorship</strong>, 
                <strong>enterprise</strong>, and <strong>community</strong> into one ecosystem, 
                built with and for the next generation of leaders.
              </p>

              {/* Quick Values */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {/* Community & Support */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition">
                  <span aria-hidden className="flex-none w-9 h-9 rounded-full bg-accent/20 grid place-items-center text-accent text-lg">
                    🤝
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">Community & Support</div>
                    <div className="text-xs text-gray-300">
                      Peer mentorship, campus marketplace, and shared purpose.
                    </div>
                  </div>
                </div>

                {/* Academic Excellence */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition">
                  <span aria-hidden className="flex-none w-9 h-9 rounded-full bg-accent/20 grid place-items-center text-accent text-lg">
                    📚
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">Academic Excellence</div>
                    <div className="text-xs text-gray-300">
                      Form study hubs, share notes, and excel together.
                    </div>
                  </div>
                </div>

                {/* Career Growth */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition">
                  <span aria-hidden className="flex-none w-9 h-9 rounded-full bg-accent/20 grid place-items-center text-accent text-lg">
                    💼
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">Career Growth</div>
                    <div className="text-xs text-gray-300">
                      Internships, mentorship, and pathways to industry.
                    </div>
                  </div>
                </div>

                {/* Innovation & Leadership */}
                <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition">
                  <span aria-hidden className="flex-none w-9 h-9 rounded-full bg-accent/20 grid place-items-center text-accent text-lg">
                    🚀
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-white">Innovation & Leadership</div>
                    <div className="text-xs text-gray-300">
                      Incubate projects, join hackathons, and lead change.
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA row */}
              <div className="mt-8 flex flex-wrap gap-3 items-center">
                <a
                  href="/signup?pilot=strathmore"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold shadow-lg hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-accent/30"
                  aria-label="Join the Stratizen pilot"
                >
                  Join the Pilot
                </a>

                <a
                  href="/contact#demo"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/20 text-white/90 hover:bg-white/6 focus:outline-none focus:ring-2 focus:ring-white/10"
                  aria-label="Request a demo"
                >
                  Request Demo
                </a>

                <a
                  href="/roadmap"
                  className="ml-2 text-sm text-gray-300 underline hover:text-white"
                  aria-label="See product roadmap"
                >
                  See roadmap
                </a>
              </div>

              {/* small trust/values row */}
              <ul className="mt-6 flex flex-wrap gap-6 text-xs text-gray-300" aria-hidden>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent" /> Student-first privacy</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent" /> Built for campus scale</li>
                <li className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent" /> Modular & extensible</li>
              </ul>
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
                  role="region"
                  aria-label="Stratizen quick stats and actions"
                >
                  <div className="absolute -top-10 -right-12 w-48 h-48 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

                  {/* Active students (target) */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-white/6 flex items-center justify-center border border-white/8">
                      <GlobeAltIcon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-200">Target reach by 2030</p>
                      <div className="text-2xl md:text-3xl font-bold text-white">
                        <CountUp end={50000} duration={6} separator="," /> students
                      </div>
                    </div>
                  </div>

                  {/* micro stats */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-lg bg-white/3 border border-white/6">
                      <p className="text-xs text-gray-200">Universities</p>
                      <p className="font-semibold text-white">100+ (roadmap)</p>
                    </div>
                    <div className="p-3 rounded-lg bg-white/3 border border-white/6">
                      <p className="text-xs text-gray-200">Campus projects</p>
                      <p className="font-semibold text-white">1,000+ (pipeline)</p>
                    </div>
                  </div>

                  <p className="mt-5 text-sm text-gray-300">
                    Student-first UX, privacy-aware defaults, and a lightweight MVP focused on real campus needs.
                  </p>

                  {/* CTA inside card */}
                  <div className="mt-6 flex gap-3">
                    <a
                      href="/signup?pilot=strathmore"
                      className="inline-block px-4 py-2 text-sm rounded-md bg-accent text-white font-medium shadow-sm"
                      aria-label="Join pilot from card"
                    >
                      Join Stratizen
                    </a>

                    <a
                      href="/docs/Onepager.pdf"
                      className="inline-block px-4 py-2 text-sm rounded-md border border-white/10 text-white hover:bg-white/8"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open onepager"
                    >
                      Read Onepager
                    </a>
                  </div>
                </motion.div>
              </Tilt>
            </div>
          </div>

          {/* alt text for screen readers describing hero image */}
          <span className="sr-only">
            Hero image: students collaborating in a campus setting. Stratizen links study groups,
            mentorship, campus marketplaces and project incubation into one web application piloting at Strathmore.
          </span>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <section
        id="features"
        className="section bg-white dark:bg-dark-sidebar-bg py-10 relative overflow-hidden"
      >
        <div className="container relative z-5">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { staggerChildren: 0.08, duration: 0.6, ease: "easeOut" },
              },
            }}
          >
            {/* Section Title */}
            <h2 className="section-title">Platform Highlights</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Explore Stratizen’s layered ecosystem: where social, learning, and opportunity meet.
            </p>

            {/* ===== FEATURE GROUP CARDS ===== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {[
                {
                  group: "Social Layer",
                  desc: "Where student life and connection thrive.",
                  image: "/images/social-layer.png",
                  items: [
                    { title: "Dashboard", desc: "Your hub for events, clubs & updates.", icon: Squares2X2Icon },
                    { title: "Profile", desc: "Showcase your student identity & achievements.", icon: UsersIcon },
                    { title: "Community", desc: "Post, Comment, React and Share.", icon: NewspaperIcon },
                    { title: "Messages", desc: "Stay connected with peers & mentors.", icon: ChatBubbleLeftRightIcon },
                    { title: "Noticeboard", desc: "Campus-wide announcements & opportunities.", icon: NewspaperIcon },
                  ],
                },
                {
                  group: "Learning Layer",
                  desc: "Academic excellence and mentorship at scale.",
                  image: "/images/learning-layer.jpg",
                  items: [
                    { title: "Study Hub", desc: "Form study groups & prepare for exams.", icon: BookOpenIcon },
                    { title: "Mentorship", desc: "Connect with peers & alumni mentors.", icon: AcademicCapIcon },
                    { title: "Resources", desc: "Access past papers & curated content.", icon: GlobeAltIcon },
                  ],
                },
                {
                  group: "Opportunity Layer",
                  desc: "Bridge between campus and the real world.",
                  image: "/images/opportunity-layer.jpg",
                  items: [
                    { title: "Marketplace", desc: "Buy & sell student services & work.", icon: ShoppingBagIcon },
                    { title: "Innovation Hub", desc: "Showcase projects & join hackathons.", icon: LightBulbIcon },
                    { title: "Careers", desc: "Internships, career fairs & job boards.", icon: BriefcaseIcon },
                  ],
                },
                {
                  group: "Stratizen Identity",
                  desc: "The foundation of a student digital economy.",
                  image: "/images/id-layer.jpg",
                  items: [
                    { title: "Core Ecosystem", desc: "Secure Stratizen ID & reputation.", icon: IdentificationIcon },
                    { title: "Wallet (Coming Soon)", desc: "Peer-to-peer payments & rewards.", icon: WalletIcon },
                    { title: "DAO Ready (Coming Soon)", desc: "Student governance & treasury.", icon: BuildingLibraryIcon },
                  ],
                },
              ].map((layer, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 
           bg-white dark:bg-gradient-to-br dark:from-dark-sidebar-bg dark:to-dark-bg flex flex-col"
                >
                  {/* IMAGE TOP */}
                  <div className="relative w-full h-56 md:h-64">
                    <img
                      src={layer.image}
                      alt={layer.group}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    <h3 className="absolute bottom-4 left-6 text-xl font-heading font-bold text-white drop-shadow">
                      {layer.group}
                    </h3>
                  </div>

                  {/* FEATURES BOTTOM */}
                  <div className="p-8 flex-1 flex flex-col">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{layer.desc}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {layer.items.map((feature, i) => {
                        const Icon = feature.icon;
                        return (
                          <Tilt
                            key={i}
                            tiltMaxAngleX={5}
                            tiltMaxAngleY={5}
                            perspective={900}
                            scale={1.02}
                            transitionSpeed={300}
                          >
                            <motion.article
                              role="article"
                              aria-label={feature.title}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: i * 0.05, duration: 0.4 }}
                              className="p-4 rounded-xl bg-gray-50 dark:bg-dark-sidebar-bg border border-gray-100 dark:border-dark-border 
                                        shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                            >
                              <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 
                                              bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                                <Icon className="w-5 h-5 text-accent" />
                              </div>
                              <h4 className="font-heading font-semibold text-base mb-1 text-gray-900 dark:text-white">
                                {feature.title}
                              </h4>
                              <p className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</p>
                            </motion.article>
                          </Tilt>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== IMPACT ===== */}
      <section className="relative section overflow-hidden py-10">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-[url('/images/global-impact.jpg')] bg-cover bg-center opacity-10 dark:opacity-20 pointer-events-none" />
        
        <div className="relative container z-10 text-center">
          {/* Icon */}
          <div className="mx-auto inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 mb-6 shadow-md">
            <GlobeAltIcon className="w-7 h-7 text-accent" />
          </div>

          {/* Title */}
          <h2 className="section-title text-3xl md:text-4xl">Africa’s Platform for Transformation</h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Stratizen positions Strathmore to become <span className="font-semibold text-accent">
            Africa’s No. 1 University by 2030</span>: digitally advanced, inclusive, 
            and globally recognized for innovation, sustainability, and impact.
          </p>

          {/* Impact Grid */}
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-12">
            
            {/* Innovation Leadership */}
            <motion.div whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 bg-white/90 dark:bg-dark-bg/70 backdrop-blur-md 
                        border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl transition-all">
              <LightBulbIcon className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">Innovation Leadership</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Building Africa’s strongest pipeline of startups and research projects, 
                fueling the <span className="font-semibold">USD 3B digital economy</span> by 2030.
              </p>
              <div className="mt-3 text-accent font-bold text-base">
                <CountUp end={1500} duration={2.2} separator="," />+ projects
              </div>
            </motion.div>

            {/* Student Empowerment */}
            <motion.div whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 bg-white/90 dark:bg-dark-bg/70 backdrop-blur-md 
                        border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl transition-all">
              <UsersIcon className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">Student Empowerment</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Tackling Africa’s <span className="font-semibold">60% graduate unemployment </span> 
                through digital skills, mentorship, and global career pathways.
              </p>
              <div className="mt-3 text-accent font-bold text-base">
                <CountUp end={100000} duration={2.6} separator="," />+ students
              </div>
            </motion.div>

            {/* Sustainable Impact */}
            <motion.div whileHover={{ y: -6 }}
              className="p-6 bg-white/90 dark:bg-dark-bg/70 backdrop-blur-md 
                        border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg">
              <GlobeAltIcon className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">Sustainable Impact</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Empowering students and institutions to create long-term, scalable change across Africa; 
                from digital inclusion and innovation ecosystems to ethical governance and social progress.
              </p>
              <div className="mt-3 text-accent font-bold text-base">
                7+ SDGs addressed
              </div>
            </motion.div>

            {/* Industry & Jobs */}
            <motion.div whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 bg-white/90 dark:bg-dark-bg/70 backdrop-blur-md 
                        border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl transition-all">
              <BriefcaseIcon className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">Industry Connections</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Partnering with Africa’s top employers and multinationals to 
                guarantee <span className="font-semibold">job-ready graduates</span>.
              </p>
              <div className="mt-3 text-accent font-bold text-base">
                200+ corporate partners
              </div>
            </motion.div>

            {/* AI & Digital Future */}
            <motion.div whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 bg-white/90 dark:bg-dark-bg/70 backdrop-blur-md 
                        border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl transition-all">
              <CpuChipIcon className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">AI & Digital Future</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Africa’s hub for <span className="font-semibold">AI, fintech, and cybersecurity. </span>  
                Producing the leaders of tomorrow’s industries.
              </p>
              <div className="mt-3 text-accent font-bold text-base">
                10+ research labs
              </div>
            </motion.div>

            {/* Student Voice */}
            <motion.div whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 bg-white/90 dark:bg-dark-bg/70 backdrop-blur-md 
                        border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl transition-all">
              <BuildingLibraryIcon className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">Student Voice</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Revolutionizing representation through <span className="font-semibold">DAO-ready governance</span>, 
                ensuring every student voice counts.
              </p>
              <div className="mt-3 text-accent font-bold text-base">Democracy 2.0</div>
            </motion.div>

            {/* Global Impact */}
            <motion.div whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 bg-white/90 dark:bg-dark-bg/70 backdrop-blur-md 
                        border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl transition-all">
              <RocketLaunchIcon className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">Global Impact</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Stratizen extends beyond campus: shaping <span className="font-semibold">global 
                partnerships</span>, international research networks, and Africa’s reputation as a 
                source of digital leadership and knowledge.
              </p>
              <div className="mt-3 text-accent font-bold text-base">20+ global alliances</div>
            </motion.div>

            {/* Research & Knowledge Economy */}
            <motion.div whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 bg-white/90 dark:bg-dark-bg/70 backdrop-blur-md 
                        border border-gray-200 dark:border-white/10 rounded-2xl shadow-xl transition-all">
              <BookOpenIcon className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-heading font-semibold text-lg mb-2">Research & Knowledge</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Driving Africa’s <span className="font-semibold">knowledge economy</span> with open-access 
                research, peer-to-peer learning, and cutting-edge labs that put 
                students at the frontier of discovery.
              </p>
              <div className="mt-3 text-accent font-bold text-base">Open-access first</div>
            </motion.div>
          </div>

          {/* Closing */}
          <p className="mt-14 max-w-3xl mx-auto text-base md:text-lg text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
            This is <span className="font-semibold">Africa’s moment</span>. Stratizen is more than a platform. 
            This is the engine that will unite universities, empower students, and 
            position Strathmore as the undisputed <span className="font-semibold text-accent">No. 1 University in Africa by 2030</span>.  
            With vision, execution, and investment, we will define the future of education, innovation, 
            and opportunity for a continent of 1.4 billion people, with <span className="font-semibold text-accent">global impact</span>.
          </p>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section
        id="about"
        className="relative section text-white py-10"
        style={{ 
          backgroundImage: "url('/images/about-stratizen.webp')", backgroundSize: 'cover', backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

        <div className="relative container z-10">
          <div className="grid lg:grid-cols-3 gap-12 items-start">

            {/* Mission / Vision / Promise Cards */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:col-span-2"
            >
              <h2 className="section-title text-white">About Stratizen</h2>
              <p className="section-subtitle max-w-3xl text-gray-200 mb-8">
                Stratizen is Africa’s first <span className="text-accent font-semibold">student-driven, pan-African digital ecosystem</span>, 
                transforming education, entrepreneurship, and innovation for the continent’s next generation of leaders.
              </p>

              {[
                {
                  title: "Our Mission",
                  desc: "Equip students with modular, scalable tools to collaborate, innovate, and commercialize ideas, catalyzing socio-economic transformation across campuses, cities, and countries."
                },
                {
                  title: "Our Vision",
                  desc: "Build Africa’s leading student ecosystem; decentralized-ready, privacy-first, and globally impactful, connecting 50,000+ students and 100+ universities by 2030."
                },
                {
                  title: "Our Promise",
                  desc: "To unite universities, empower students, and create measurable continental impact; shaping the leaders, innovators, and changemakers of Africa’s future."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg cursor-pointer transition-all duration-400"
                >
                  <h3 className="text-2xl font-heading font-bold text-accent mb-3">{item.title}</h3>
                  <p className="text-gray-200 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Column */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-3"
            >
              {[
                { title: "Students Empowered", value: 50000, unit: "+", gradient: "bg-gradient-to-r from-purple-800 to-pink-500" },
                { title: "Universities Engaged", value: 100, unit: "+", gradient: "bg-gradient-to-r from-indigo-800 to-blue-500" },
                { title: "Pan-African Adoption Target", value: 2030, unit: "", gradient: "bg-gradient-to-r from-green-800 to-teal-400" },
                { title: "Unified Vision", value: 1, unit: "", gradient: "bg-gradient-to-r from-yellow-800 to-orange-400" },
                { title: "SDGs Addressed", value: 7, unit: "+", gradient: "bg-gradient-to-r from-red-800 to-pink-400" },
                { title: "Potential Population Impact", value: 1.4e9, unit: "+", gradient: "bg-gradient-to-r from-blue-800 to-indigo-400" },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className={`p-4 rounded-2xl text-center shadow-xl text-white cursor-pointer transition-all duration-400 ${stat.gradient}`}
                >
                  <h4 className="text-3xl font-bold mb-2">
                    <CountUp end={stat.value} duration={2.5} separator="," decimals={stat.value > 1e6 ? 0 : 0} />{stat.unit}
                  </h4>
                  <p className="text-sm font-medium">{stat.title}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>

          {/* Closing Statement */}
          <p className="mt-10 max-w-3xl mx-auto text-lg text-gray-200 font-medium leading-relaxed text-center">
            Stratizen is an initiative <span className="text-accent font-semibold">for Africa's future</span>.  
            With vision, execution, and investment, we will define the future of education, innovation, and opportunity for a continent of 1.4 billion people.
          </p>
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
            Stratizen isn’t just for today, it’s for the future of Africa and the world. Join us and lead the change.
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
