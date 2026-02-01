// src/App.jsx
import { Routes, Route, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Analytics from "./components/Analytics";
import WhatsAppButton from "./components/WhatsAppButton";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/HomePage.jsx"));
const About = lazy(() => import("./pages/AboutPage.jsx"));
const Services = lazy(() => import("./pages/ServicesPage.jsx"));
const CTA = lazy(() => import("./pages/CTAPage.jsx"));
const Contact = lazy(() => import("./pages/ContactPage.jsx"));
const Join = lazy(() => import("./pages/JoinPage.jsx"));
const Privacy = lazy(() => import("./pages/PrivacyPage.jsx"));
const Terms = lazy(() => import("./pages/TermsPage.jsx"));
const Trust = lazy(() => import("./pages/TrustPage.jsx"));
const NotFound = lazy(() => import("./pages/NotFoundPage.jsx"));

const MotionDiv = motion.div;

// Page transition wrapper
function PageWrapper({ children }) {
  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full h-full"
    >
      {children}
    </MotionDiv>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <ScrollToTop />
      <Analytics />
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Shared Layout */}
      <Header />

      {/* Main content area */}
      <main id="main-content" className="flex-grow pb-24">
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
              <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-blue-600 dark:border-blue-400 border-solid"></div>
              <p className="mt-4 font-medium text-blue-600 dark:text-blue-400">
                Loading page...
              </p>
            </div>
          }
        >
          <AnimatePresence mode="wait" initial={false}>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
              <Route path="/cta" element={<PageWrapper><CTA /></PageWrapper>} />
              <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              <Route path="/join" element={<PageWrapper><Join /></PageWrapper>} />
              <Route path="/privacy" element={<PageWrapper><Privacy /></PageWrapper>} />
              <Route path="/terms" element={<PageWrapper><Terms /></PageWrapper>} />
              <Route path="/trust" element={<PageWrapper><Trust /></PageWrapper>} />

              {/* Catch-all redirect */}
              <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      {/* Shared Footer */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
