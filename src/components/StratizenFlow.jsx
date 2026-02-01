import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserPlus,
  Users,
  BookOpen,
  MessageSquare,
  ShoppingBag,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const StratizenFlow = ({ autoPlay = true, interval = 6000, pauseOnHover = true }) => {
  const MotionDiv = motion.div;
  const MotionButton = motion.button;
  const journeySteps = [
    {
      id: 1,
      Icon: UserPlus,
      iconBg: "bg-primary",
      title: "Onboard",
      desc: "Create a verified student profile and personalize your dashboard for campus life.",
      subFeatures: [
        {
          Icon: Users,
          title: "Profile setup",
          desc: "Highlight skills, interests, and goals.",
          gradient: "bg-gradient-to-r from-primary to-accent",
        },
        {
          Icon: BookOpen,
          title: "Study hubs",
          desc: "Join or create focused learning groups.",
          gradient: "bg-gradient-to-r from-accent to-gold",
        },
      ],
    },
    {
      id: 2,
      Icon: Users,
      iconBg: "bg-accent",
      title: "Connect",
      desc: "Engage with peers, mentors, and campus opportunities through trusted channels.",
      subFeatures: [
        {
          Icon: MessageSquare,
          title: "Community",
          desc: "Collaborate through posts and discussions.",
          gradient: "bg-gradient-to-r from-[#0058A3] to-[#4B0082]",
        },
        {
          Icon: Users,
          title: "Mentorship",
          desc: "Find mentors and be mentored.",
          gradient: "bg-gradient-to-r from-[#FFC20E] to-[#0058A3]",
        },
      ],
    },
    {
      id: 3,
      Icon: ShoppingBag,
      iconBg: "bg-indigo-700",
      title: "Create opportunity",
      desc: "Share services, join projects, and access campus markets responsibly.",
      subFeatures: [
        {
          Icon: ShoppingBag,
          title: "Marketplace",
          desc: "Offer services and discover campus needs.",
          gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
        },
        {
          Icon: Lightbulb,
          title: "Innovation hub",
          desc: "Launch projects with campus support.",
          gradient: "bg-gradient-to-r from-green-500 to-teal-600",
        },
      ],
    },
    {
      id: 4,
      Icon: BookOpen,
      iconBg: "bg-green-700",
      title: "Learn and grow",
      desc: "Access resources and structured knowledge from the community.",
      subFeatures: [
        {
          Icon: BookOpen,
          title: "Resource library",
          desc: "Share guides, notes, and references.",
          gradient: "bg-gradient-to-r from-indigo-500 to-purple-600",
        },
        {
          Icon: MessageSquare,
          title: "Live support",
          desc: "Ask questions and collaborate quickly.",
          gradient: "bg-gradient-to-r from-purple-400 to-indigo-500",
        },
      ],
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!autoPlay || paused) return undefined;

    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % journeySteps.length);
    }, interval);

    return () => clearInterval(timer);
  }, [journeySteps.length, interval, autoPlay, paused]);

  const step = journeySteps[currentStep];

  const goPrev = () =>
    setCurrentStep((prev) => (prev === 0 ? journeySteps.length - 1 : prev - 1));
  const goNext = () =>
    setCurrentStep((prev) => (prev + 1) % journeySteps.length);

  return (
    <div
      className="relative flex flex-col items-center w-full max-w-3xl mx-auto"
      onMouseEnter={() => pauseOnHover && setPaused(true)}
      onMouseLeave={() => pauseOnHover && setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <MotionDiv
          key={step.id}
          className="flex flex-col items-center bg-white dark:bg-dark-sidebar-bg p-6 md:p-8 rounded-2xl shadow-lg w-full text-center"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -30, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <MotionDiv
            className={`text-5xl p-5 mb-4 ${step.iconBg} rounded-full shadow-lg text-white`}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 260 }}
          >
            <step.Icon className="h-8 w-8" />
          </MotionDiv>

          <h3 className="text-2xl md:text-3xl font-bold text-primary dark:text-white mb-2">
            {step.title}
          </h3>

          <p className="text-base md:text-lg text-text dark:text-dark-text mb-4">
            {step.desc}
          </p>

          {step.subFeatures && (
            <div className="grid md:grid-cols-2 gap-3 mt-2 w-full">
              {step.subFeatures.map((sub) => (
                <MotionDiv
                  key={sub.title}
                  className={`p-3 rounded-xl shadow ${sub.gradient} text-white flex flex-col items-center`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <sub.Icon className="h-6 w-6 mb-2" />
                  <h4 className="font-semibold text-sm md:text-base">{sub.title}</h4>
                </MotionDiv>
              ))}
            </div>
          )}
        </MotionDiv>
      </AnimatePresence>

      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4 md:px-8">
        <MotionButton
          onClick={goPrev}
          aria-label="Previous step"
          className="p-3 bg-primary/90 dark:bg-white/20 rounded-full shadow hover:bg-primary/100 dark:hover:bg-white/30 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronLeft className="text-white dark:text-black" />
        </MotionButton>
        <MotionButton
          onClick={goNext}
          aria-label="Next step"
          className="p-3 bg-primary/90 dark:bg-white/20 rounded-full shadow hover:bg-primary/100 dark:hover:bg-white/30 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ChevronRight className="text-white dark:text-black" />
        </MotionButton>
      </div>

      <div className="flex space-x-2 mt-6">
        {journeySteps.map((_, idx) => (
          <MotionButton
            key={journeySteps[idx].id}
            aria-label={`Go to step ${idx + 1}`}
            onClick={() => setCurrentStep(idx)}
            className={`w-4 h-4 rounded-full ${
              idx === currentStep
                ? "bg-primary dark:bg-yellow-400"
                : "bg-gray-400 dark:bg-gray-600"
            }`}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default StratizenFlow;
