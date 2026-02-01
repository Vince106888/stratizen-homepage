// src/pages/AboutPage.jsx
import { motion } from "framer-motion";
import { TrendingUp, Layers, Globe } from "lucide-react";
import Tilt from "react-parallax-tilt";
import StratizenFlow from "../components/StratizenFlow";
import SEO from "../components/SEO";
import { siteConfig } from "../config/siteConfig";

const MotionDiv = motion.div;
const MotionH1 = motion.h1;
const MotionH2 = motion.h2;
const MotionP = motion.p;

export default function AboutPage() {
  return (
    <div className="w-full bg-bg dark:bg-dark-bg text-text dark:text-dark-text">
      <SEO
        title="About"
        description="Stratizen is a student-owned platform piloting at Strathmore University to connect learning, mentorship, and opportunity."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "About Stratizen",
          url: `${siteConfig.siteUrl}/about`,
        }}
      />

      <section className="relative bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="container text-center">
          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-heading font-bold mb-6"
          >
            Built with students, trusted by institutions.
          </MotionH1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-90">
            Stratizen is a student-owned digital infrastructure layer that helps
            campuses coordinate learning, mentorship, and opportunity at scale.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container space-y-8">
          {[
            {
              title: "Our Mission",
              desc: "Equip students with modular tools to collaborate, build, and commercialize ideas while supporting institutional coordination.",
              img: "/images/mission.jpg",
              width: 900,
              height: 600,
              gradient: "bg-gradient-to-r from-primary to-accent",
            },
            {
              title: "Our Vision",
              desc: "A pan-African student ecosystem with privacy-first standards, transparent governance, and meaningful academic and career outcomes.",
              img: "/images/vision.jpg",
              width: 787,
              height: 480,
              gradient: "bg-gradient-to-r from-accent to-gold",
            },
            {
              title: "Our Values",
              desc: "Student dignity, institutional partnership, and measurable impact guide every decision we make.",
              img: "/images/values.jpg",
              width: 4000,
              height: 2666,
              gradient: "bg-gradient-to-r from-primary to-gold",
            },
            {
              title: "Our Story",
              desc: "Founded at Strathmore University, Stratizen is built in collaboration with students, faculty, alumni, and partners who want campus innovation to be coordinated and accountable.",
              img: "/images/story.webp",
              gradient: "bg-gradient-to-r from-accent to-primary",
            },
          ].map((card, idx) => (
            <Tilt
              key={card.title}
              glareEnable
              glareMaxOpacity={0.2}
              scale={1.03}
              perspective={900}
              transitionSpeed={400}
              className="cursor-pointer"
            >
              <MotionDiv
                className={`grid md:grid-cols-2 gap-3 rounded-2xl shadow-card overflow-hidden ${card.gradient} text-white`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="relative w-full aspect-[4/3] md:aspect-auto">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover md:rounded-l-2xl"
                    loading="lazy"
                    decoding="async"
                    width={card.width}
                    height={card.height}
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-3">
                    {card.title}
                  </h2>
                  <p className="text-base md:text-lg leading-relaxed">{card.desc}</p>
                </div>
              </MotionDiv>
            </Tilt>
          ))}
        </div>
      </section>

      <section className="section bg-white dark:bg-dark-sidebar-bg">
        <div className="container space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <MotionH2
              className="text-4xl md:text-5xl font-heading font-bold text-primary dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              The problem we solve
            </MotionH2>
            <MotionP
              className="text-lg md:text-xl text-text dark:text-dark-text opacity-90"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Higher education is fragmented. Stratizen bridges the gaps between
              learning, opportunity, and mentorship so students can move faster
              and institutions can coordinate support.
            </MotionP>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Fragmented learning",
                desc: "Students struggle to find peers, mentors, and resources in one place. Stratizen centralizes these flows.",
                img: "/images/problem1.jpg",
                width: 1080,
                height: 549,
                gradient: "bg-gradient-to-r from-primary to-accent",
              },
              {
                title: "Limited recognition",
                desc: "Student talent often goes unnoticed. Stratizen makes achievements and skills visible.",
                img: "/images/problem2.png",
                width: 310,
                height: 163,
                gradient: "bg-gradient-to-r from-accent to-gold",
              },
              {
                title: "Inconsistent mentorship",
                desc: "Mentorship is often ad-hoc. Stratizen makes guidance discoverable and structured.",
                img: "/images/problem3.jpg",
                width: 1150,
                height: 610,
                gradient: "bg-gradient-to-r from-primary to-gold",
              },
              {
                title: "Disconnected campuses",
                desc: "Collaboration across institutions is difficult. Stratizen coordinates shared initiatives.",
                img: "/images/problem4.jpg",
                width: 750,
                height: 423,
                gradient: "bg-gradient-to-r from-accent to-primary",
              },
              {
                title: "Unclear pathways",
                desc: "Students need clear roadmaps from learning to opportunity. Stratizen maps those steps.",
                img: "/images/problem5.jpg",
                width: 5330,
                height: 4000,
                gradient: "bg-gradient-to-r from-indigo-700 to-primary",
              },
              {
                title: "Leadership development",
                desc: "We nurture ethical, community-first leadership through transparent governance.",
                img: "/images/problem6.jpg",
                width: 400,
                height: 500,
                gradient: "bg-gradient-to-r from-green-700 to-gold",
              },
            ].map((card, idx) => (
              <Tilt
                key={card.title}
                glareEnable
                glareMaxOpacity={0.12}
                scale={1.03}
                transitionSpeed={400}
                className="cursor-pointer h-full"
              >
                <MotionDiv
                  className={`flex flex-col h-full rounded-2xl shadow-card overflow-hidden ${card.gradient} text-white`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="relative w-full aspect-[4/3]">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      decoding="async"
                      width={card.width}
                      height={card.height}
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-heading font-bold mb-3">
                      {card.title}
                    </h3>
                    <p className="text-base leading-relaxed flex-grow">{card.desc}</p>
                  </div>
                </MotionDiv>
              </Tilt>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container flex flex-col items-center space-y-8 md:space-y-12">
          <MotionDiv
            className="text-center max-w-3xl space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary dark:text-white">
              How Stratizen works
            </h2>
            <p className="text-base md:text-lg text-text dark:text-dark-text opacity-90">
              A guided journey from onboarding to collaboration, opportunity, and
              recognition.
            </p>
          </MotionDiv>
          <div className="relative w-full max-w-3xl">
            <StratizenFlow />
          </div>
        </div>
      </section>

      <section className="section bg-white dark:bg-dark-sidebar-bg">
        <div className="container text-center">
          <h2 className="section-title">Why Stratizen</h2>
          <p className="section-subtitle">
            We bridge the gap between learning and real-world opportunity.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Growing demand",
                text: "Students want clearer access to opportunities and resources.",
                icon: <TrendingUp className="w-8 h-8 text-accent mx-auto mb-3" />,
              },
              {
                title: "Unique platform",
                text: "A blended model combining peer learning, marketplace, and coordination.",
                icon: <Layers className="w-8 h-8 text-accent mx-auto mb-3" />,
              },
              {
                title: "Scalable vision",
                text: "Designed to expand across campuses while keeping trust at the core.",
                icon: <Globe className="w-8 h-8 text-accent mx-auto mb-3" />,
              },
            ].map((card) => (
              <MotionDiv
                key={card.title}
                className="card card-hover p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {card.icon}
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{card.text}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-bg dark:bg-dark-bg">
        <div className="container text-center">
          <h2 className="section-title">Meet the team</h2>
          <p className="section-subtitle">
            Student-led and committed to building responsible infrastructure.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                name: "Vince N.",
                role: "Founder & Product Engineering Lead",
                img: "/images/vincent.JPG",
                width: 1920,
                height: 2597,
                link: "https://linkedin.com/in/vincent-nyamao",
              },
              {
                name: "Marian B.",
                role: "Co-Founder & Vision/Strategy Lead",
                img: "/images/mariam.png",
                width: 800,
                height: 800,
                link: "https://www.linkedin.com/in/marian-bosibori-8a7593319",
              },
              {
                name: "Samantha M.",
                role: "Co-Founder & Product Growth Manager",
                img: "/images/sam.jpeg",
                width: 560,
                height: 560,
                link: "https://ke.linkedin.com/in/samantha-maria-b37ba526a",
              },
            ].map((member) => (
              <MotionDiv
                key={member.name}
                className="card card-hover text-center group"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={member.img}
                  alt={`Profile of ${member.name}, ${member.role}`}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  decoding="async"
                  width={member.width}
                  height={member.height}
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
                    View profile
                  </a>
                )}
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-r from-accent to-gold text-white text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Partner with us for the pilot phase
          </h2>
          <p className="max-w-2xl mx-auto mb-8 opacity-90">
            We are welcoming institutional partners, mentors, and sponsors who
            care about student outcomes and responsible digital infrastructure.
          </p>
          <a href="/contact" className="btn btn-primary text-lg px-6 py-3 rounded-xl">
            Connect with Stratizen
          </a>
        </div>
      </section>
    </div>
  );
}

