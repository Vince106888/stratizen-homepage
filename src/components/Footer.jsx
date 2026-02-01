// src/components/Footer.jsx
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-4">Stratizen</h2>
          <p className="text-gray-400 leading-relaxed">
            Student-owned digital infrastructure for collaboration, opportunity,
            and coordination at Strathmore University.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-accent transition">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-accent transition">About</a>
            </li>
            <li>
              <a href="/services" className="hover:text-accent transition">Services</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-accent transition">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Platform</h3>
          <ul className="space-y-3">
            <li>
              <a href="/#features" className="hover:text-accent transition">
                Platform Highlights
              </a>
            </li>
            <li>
              <a href="/#roadmap" className="hover:text-accent transition">Roadmap</a>
            </li>
            <li>
              <a href="/trust" className="hover:text-accent transition">Trust & Charter</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-accent transition">Privacy</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
          <p className="text-gray-400 mb-4">
            Nairobi, Kenya <br />
            <a
              href="mailto:info@stratizen.edu"
              className="hover:text-accent transition"
            >
              info@stratizen.edu
            </a>
            <br />
            +254 700 123 456
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="/contact"
              className="p-2 bg-gray-800 rounded-full hover:bg-accent transition"
              aria-label="Stratizen on Facebook (coming soon)"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="p-2 bg-gray-800 rounded-full hover:bg-accent transition"
              aria-label="Stratizen on Twitter (coming soon)"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="p-2 bg-gray-800 rounded-full hover:bg-accent transition"
              aria-label="Stratizen on LinkedIn (coming soon)"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="p-2 bg-gray-800 rounded-full hover:bg-accent transition"
              aria-label="Stratizen on Instagram (coming soon)"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@stratizen.edu"
              className="p-2 bg-gray-800 rounded-full hover:bg-accent transition"
              aria-label="Email Stratizen"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        <p>(c) {new Date().getFullYear()} Stratizen. All rights reserved.</p>
        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <a href="/privacy" className="hover:text-accent transition">Privacy</a>
          <a href="/terms" className="hover:text-accent transition">Terms</a>
        </div>
      </div>
    </footer>
  );
}
