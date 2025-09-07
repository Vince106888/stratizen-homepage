// src/App.jsx
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Lazy-loaded pages
const Home = lazy(() => import("./pages/HomePage.jsx"));
const About = lazy(() => import("./pages/AboutPage.jsx"));
const Services = lazy(() => import("./pages/ServicesPage.jsx"));
const CTA = lazy(() => import("./pages/CTAPage.jsx"));
const Contact = lazy(() => import("./pages/ContactPage.jsx"));

// Page transition wrapper
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* SEO / Meta */}
      <Helmet>
        <title>Stratizen | Student Collaboration Platform</title>
        <meta
          name="description"
          content="Stratizen empowers Strathmore students to collaborate, learn, and grow through peer support, events, and marketplace features."
        />
      </Helmet>

      {/* Shared Layout */}
      <Header />

      {/* Main content area */}
      <main className="flex-grow">
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

              {/* Catch-all redirect */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
