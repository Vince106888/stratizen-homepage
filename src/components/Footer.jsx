// src/components/Footer.jsx
import { Facebook, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-4">
            Stratizen
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Building Africa’s most dynamic student innovation hub — connecting
            students, partners, and investors in one ecosystem.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="/" className="hover:text-accent transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-accent transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-accent transition">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-accent transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* For Students & Partners */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Opportunities</h3>
          <ul className="space-y-3">
            <li>
              <a href="/marketplace" className="hover:text-accent transition">
                Student Marketplace
              </a>
            </li>
            <li>
              <a href="/innovation" className="hover:text-accent transition">
                Innovation Hub
              </a>
            </li>
            <li>
              <a href="/partners" className="hover:text-accent transition">
                Partner With Us
              </a>
            </li>
            <li>
              <a href="/invest" className="hover:text-accent transition">
                Investor Access
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
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
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-accent transition"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-accent transition"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-accent transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-gray-800 rounded-full hover:bg-accent transition"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="mailto:info@stratizen.edu"
              className="p-2 bg-gray-800 rounded-full hover:bg-accent transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm">
        <p>
          © {new Date().getFullYear()} Stratizen. All rights reserved. | Built
          for Students, Partners & Investors
        </p>
      </div>
    </footer>
  );
}
