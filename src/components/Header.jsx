// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import {
  SunIcon,
  MoonIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const enabled = savedTheme === "dark" || (!savedTheme && prefersDark);
    setIsDark(enabled);
    document.documentElement.classList.toggle("dark", enabled);
  }, []);

  const toggleDarkMode = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  const DarkModeButton = () => (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded hover:bg-primary/10 transition-colors duration-200 flex items-center"
      aria-label="Toggle Dark Mode"
    >
      <AnimatePresence initial={false} mode="wait">
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
          >
            <SunIcon className="w-5 h-5 text-yellow-400" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
          >
            <MoonIcon className="w-5 h-5 text-gray-800 dark:text-gray-200" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );

  // Updated nav links
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "CTA", path: "/cta" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-navbar text-navbar-text dark:bg-dark-navbar dark:text-dark-navbar-text shadow-md sticky top-0 z-50 transition-colors duration-300">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Stratizen Logo"
          className="w-10 h-10 object-contain"
        />
        <span className="font-heading font-semibold text-lg">Stratizen</span>
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 items-center text-sm font-medium">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`transition-colors ${
              location.pathname === link.path
                ? "text-gold"
                : "hover:text-accent"
            }`}
          >
            {link.name}
          </Link>
        ))}
        <DarkModeButton />
        <a
          href="https://p2p-student-platform.web.app"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-1.5 bg-accent text-white rounded-lg hover:bg-gold transition-colors duration-200"
        >
          Login
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-3">
        <DarkModeButton />
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="hover:text-accent transition-colors duration-200"
          aria-label="Toggle Mobile Menu"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-navbar dark:bg-dark-navbar flex flex-col gap-4 px-6 py-6 md:hidden shadow-md z-40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "hover:text-accent"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://p2p-student-platform.web.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-gold transition-colors duration-200"
            >
              Login
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
