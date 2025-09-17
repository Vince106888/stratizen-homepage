import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const StratizenFlow = ({ autoPlay = true, interval = 3500 }) => {
  // -----------------------------
  // Data / Journey Steps
  // -----------------------------
  const journeySteps = [
  {
    id: 1,
    icon: "🆕",
    iconBg: "bg-primary rounded-full p-2",
    title: "Signup / Login",
    desc: `Stratizen starts with a seamless onboarding process. New users can sign up 
           to create their personalized profile, while returning users log in to access 
           their dashboard instantly. The signup process is designed to be intuitive and 
           fast, ensuring users get started without friction.`,
    subFeatures: [
      {
        icon: "📝",
        title: "Profile Setup",
        desc: `Users set up their profile with key details: an overview, quicklinks to important pages, 
               timetable, skills, preferences, and personalized messages. This ensures the user 
               has a central hub to manage all personal information efficiently.`,
        gradient: "bg-gradient-to-r from-primary to-accent",
      },
      {
        icon: "📊",
        title: "Dashboard Overview",
        desc: `Returning users land on a dashboard summarizing recent activity, leaderboard 
               standings, quick actions, access to the chatbot, and links to various pages. 
               The dashboard provides a clear snapshot of the user's engagement and progress.`,
        gradient: "bg-gradient-to-r from-accent to-gold",
      },
    ],
  },
  {
    id: 2,
    icon: "🌐",
    iconBg: "bg-accent rounded-full p-2",
    title: "Stratizen Community",
    desc: `The Stratizen Community is the central hub of the platform, designed to foster 
            collaboration, interaction, and engagement among students. This is where students 
            share knowledge, participate in discussions, keep up with trending topics and events, 
            and connect with peers through clubs, societies, and groups. It serves as the heartbeat 
            of Stratizen, giving users a dynamic and interactive campus experience online.`,
    subFeatures: [
        {
        icon: "🔍",
        title: "Search & Discovery",
        desc: "Quickly find posts, users, groups, or events with an intelligent search bar, allowing you to locate content and peers easily.",
        gradient: "bg-gradient-to-r from-[#0058A3] to-[#4B0082]",
        },
        {
        icon: "📄",
        title: "SU Hub for Posts & Reactions",
        desc: "A centralized hub for creating, sharing, and reacting to posts. Users can like, comment, and engage with trending posts.",
        gradient: "bg-gradient-to-r from-[#FFC20E] to-[#0058A3]",
        },
        {
        icon: "🎞️",
        title: "Reels & Media",
        desc: "Short videos and media posts to showcase campus activities, events, and student creativity.",
        gradient: "bg-gradient-to-r from-[#4B0082] to-[#FFC20E]",
        },
        {
        icon: "🔥",
        title: "Trending Topics & Events",
        desc: "Stay up to date with what’s popular on campus: trending discussions, events, and opportunities.",
        gradient: "bg-gradient-to-r from-[#00A651] to-[#0058A3]",
        },
        {
        icon: "🤝",
        title: "Networking",
        desc: "Connect with peers, form study groups, join clubs or societies, and build meaningful relationships.",
        gradient: "bg-gradient-to-r from-[#0058A3] to-[#00A651]",
        },
        {
        icon: "🏫",
        title: "Clubs & Societies",
        desc: "Explore and join campus clubs and societies, participate in activities, and collaborate with like-minded students.",
        gradient: "bg-gradient-to-r from-[#FFC20E] to-[#4B0082]",
        },
        {
        icon: "👥",
        title: "Groups & Forums",
        desc: "Create or join specialized groups and forums for focused discussions, projects, and peer support.",
        gradient: "bg-gradient-to-r from-[#4B0082] to-[#00A651]",
        },
        {
        icon: "📑",
        title: "Pages & Newsletters",
        desc: "Access official pages and newsletters from the university and student organizations.",
        gradient: "bg-gradient-to-r from-[#0058A3] to-[#FFC20E]",
        },
        {
        icon: "🔔",
        title: "Notifications",
        desc: "Receive updates on posts, events, and interactions, ensuring you never miss important campus activity.",
        gradient: "bg-gradient-to-r from-[#00A651] to-[#4B0082]",
        },
        {
        icon: "⚙️",
        title: "Settings",
        desc: "Customize your community experience, control notifications, privacy settings, and display preferences.",
        gradient: "bg-gradient-to-r from-[#FFC20E] to-[#00A651]",
        },
    ],
    },
  {
    id: 3,
    icon: "📚",
    iconBg: "bg-indigo-700 rounded-full p-2",
    title: "Study Hub",
    desc: `The Study Hub empowers students to ask and answer questions, share quizzes, 
           and collaborate academically. Users receive hits and ideas for study guidance, 
           creating a rich ecosystem for knowledge exchange. Future expansions include 
           dedicated rooms for discussions, seminars, and group study sessions.`,
    subFeatures: [
      {
        icon: "❓",
        title: "Q&A",
        desc: "Post questions with images or quizzes, receive answers, vote by liking relevant responses.",
        gradient: "bg-gradient-to-r from-indigo-600 to-purple-500",
      },
      {
        icon: "💡",
        title: "Idea Generation",
        desc: "Explore suggestions, recommendations, and study insights contributed by peers.",
        gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
      },
    ],
  },
  {
    id: 4,
    icon: "🧭",
    iconBg: "bg-green-700 rounded-full p-2",
    title: "Mentorship Hub",
    desc: `Mentorship Hub helps users find mentors or mentees, view availability, 
           and interact through messages. It maintains a list of both seen and unseen 
           mentors/mentees to enhance transparency and encourage active engagement.`,
    subFeatures: [
      {
        icon: "👨‍🏫",
        title: "Find Mentors",
        desc: "Search and view mentors by skill, availability, and reputation.",
        gradient: "bg-gradient-to-r from-green-500 to-green-700",
      },
      {
        icon: "👩‍🎓",
        title: "Find Mentees",
        desc: "Identify and interact with potential mentees seeking guidance.",
        gradient: "bg-gradient-to-r from-teal-400 to-green-600",
      },
    ],
  },
  {
    id: 5,
    icon: "📢",
    iconBg: "bg-accent rounded-full p-2",
    title: "Noticeboard",
    desc: `Noticeboard displays announcements, news, events, and memos in a concise and 
           accessible format. Users can stay updated on campus activities, deadlines, 
           and opportunities without missing any crucial information.`,
  },
  {
    id: 6,
    icon: "💬",
    iconBg: "bg-primary rounded-full p-2",
    title: "Messages & Chat",
    desc: `A secure communication hub with end-to-end encryption for chats and calls. 
           Users can view profiles, interact privately, and maintain secure conversations 
           across the platform.`,
    subFeatures: [
      {
        icon: "📨",
        title: "Chats",
        desc: "One-on-one or group chat functionality with rich media support.",
        gradient: "bg-gradient-to-r from-primary to-indigo-500",
      },
      {
        icon: "📞",
        title: "Calls",
        desc: "Voice and video calls integrated securely with the platform.",
        gradient: "bg-gradient-to-r from-indigo-400 to-primary",
      },
    ],
  },
  {
    id: 7,
    icon: "🛒",
    iconBg: "bg-accent rounded-full p-2",
    title: "Marketplace",
    desc: `The Marketplace is Stratizen's main hub for trading, buying, selling, monetizing, 
           and bartering items or services. Users can create listings, run shops, manage carts, 
           and participate in a vibrant student economy.`,
    subFeatures: [
      {
        icon: "🛍️",
        title: "Listings & Shops",
        desc: "Create and manage product or service listings and virtual shops.",
        gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
      },
      {
        icon: "💰",
        title: "Transactions",
        desc: "Buy, sell, or barter with peers securely.",
        gradient: "bg-gradient-to-r from-orange-500 to-red-500",
      },
    ],
  },
  {
    id: 8,
    icon: "📖",
    iconBg: "bg-indigo-700 rounded-full p-2",
    title: "Resource Library",
    desc: `A comprehensive repository of learning materials, guides, links, and references. 
           Users can share or access high-quality educational resources curated for the community.`,
    subFeatures: [
      {
        icon: "📂",
        title: "Materials",
        desc: "Upload or download notes, guides, and relevant documents.",
        gradient: "bg-gradient-to-r from-indigo-500 to-purple-600",
      },
      {
        icon: "🔗",
        title: "Links & References",
        desc: "Share or bookmark useful educational resources from across the web.",
        gradient: "bg-gradient-to-r from-purple-400 to-indigo-500",
      },
    ],
  },
  {
    id: 9,
    icon: "🚀",
    iconBg: "bg-green-700 rounded-full p-2",
    title: "Innovation Hub",
    desc: `Innovation Hub enables users to organize projects, participate in voting, earn rewards, 
           and incubate ideas. This area fosters creativity and collaboration among students and 
           aspiring innovators.`,
    subFeatures: [
      {
        icon: "🗳️",
        title: "Voting & Rewards",
        desc: "Participate in polls, vote on projects, and earn recognition/rewards.",
        gradient: "bg-gradient-to-r from-green-500 to-teal-600",
      },
      {
        icon: "💡",
        title: "Project Incubation",
        desc: "Submit and develop innovative ideas within collaborative groups.",
        gradient: "bg-gradient-to-r from-teal-400 to-green-500",
      },
    ],
  },
  {
    id: 10,
    icon: "💼",
    iconBg: "bg-primary rounded-full p-2",
    title: "Careers Hub",
    desc: `Careers Hub provides access to internships, job opportunities, career fairs, 
           and professional guidance. Users can plan their career paths, connect with 
           recruiters, and track applications.`,
  },
  {
    id: 11,
    icon: "⚙️",
    iconBg: "bg-accent rounded-full p-2",
    title: "Settings",
    desc: `Settings allow users to customize their Stratizen experience. Options include 
           toggling between dark and light mode, managing notifications, updating preferences, 
           and configuring account details for optimal personalization.`,
  },
];

  // -----------------------------
  // State & Auto-advance
  // -----------------------------
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % journeySteps.length);
    }, interval);

    return () => clearInterval(timer);
  }, [journeySteps.length, interval, autoPlay]);

  const step = journeySteps[currentStep];

  const goPrev = () =>
    setCurrentStep((prev) => (prev === 0 ? journeySteps.length - 1 : prev - 1));
  const goNext = () =>
    setCurrentStep((prev) => (prev + 1) % journeySteps.length);

  // -----------------------------
  // Render
  // -----------------------------
  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={step.id}
          className="flex flex-col items-center bg-white dark:bg-dark-sidebar-bg p-6 md:p-8 rounded-2xl shadow-lg w-full text-center"
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.6 }}
        >
          {/* Icon */}
          <motion.div
            className={`text-5xl p-5 mb-4 ${step.iconBg} rounded-full shadow-lg`}
            whileHover={{ scale: 1.1 }}
          >
            {step.icon}
          </motion.div>

          {/* Title */}
          <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-2">
            {step.title}
          </h3>

          {/* Description */}
          <p className="text-base md:text-lg text-text dark:text-dark-text mb-4">
            {step.desc}
          </p>

          {/* Subfeatures */}
          {step.subFeatures && (
            <div className="grid md:grid-cols-2 gap-3 mt-2 w-full">
              {step.subFeatures.map((sub, idx) => (
                <motion.div
                  key={idx}
                  className={`p-3 rounded-xl shadow ${sub.gradient} text-white flex flex-col items-center`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                >
                  <div className="text-2xl md:text-3xl mb-1">{sub.icon}</div>
                  <h4 className="font-semibold text-sm md:text-base">{sub.title}</h4>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4 md:px-8">
        <motion.button
          onClick={goPrev}
          className="p-3 bg-primary/90 dark:bg-white/20 rounded-full shadow hover:bg-primary/100 transition-colors"
          whileHover={{ scale: 1.2 }}
        >
          <ChevronLeft className="text-white dark:text-black" />
        </motion.button>
        <motion.button
          onClick={goNext}
          className="p-3 bg-primary/90 dark:bg-white/20 rounded-full shadow hover:bg-primary/100 transition-colors"
          whileHover={{ scale: 1.2 }}
        >
          <ChevronRight className="text-white dark:text-black" />
        </motion.button>
      </div>

      {/* Step Indicators */}
      <div className="flex space-x-2 mt-6">
        {journeySteps.map((_, idx) => (
          <motion.div
            key={idx}
            onClick={() => setCurrentStep(idx)}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              idx === currentStep ? "bg-primary" : "bg-gray-400 dark:bg-gray-600"
            }`}
            whileHover={{ scale: 1.3 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default StratizenFlow;
