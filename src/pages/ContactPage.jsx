// src/pages/ContactPage.jsx
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-accent/90 to-primary px-6 py-24 text-white">
      <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-2 items-start">
        {/* Left: Intro */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            Let’s Build the Future <span className="text-gold">Together</span>
          </h2>
          <p className="mt-6 text-lg text-gray-200 max-w-lg">
            Whether you’re a <span className="font-semibold">student</span>,{" "}
            <span className="font-semibold">mentor</span>, or{" "}
            <span className="font-semibold">investor</span>, Stratizen welcomes
            you to connect with us. Let’s co-create opportunities that truly
            matter.
          </p>

          <div className="mt-10 space-y-4 text-lg">
            <p>
              <span className="font-semibold text-gold">Email:</span>{" "}
              <a
                href="mailto:info@stratizen.edu"
                className="underline hover:text-white"
              >
                info@stratizen.edu
              </a>
            </p>
            <p>
              <span className="font-semibold text-gold">Phone:</span> +254 700
              123 456
            </p>
            <p>
              <span className="font-semibold text-gold">Location:</span> Nairobi,
              Kenya
            </p>
          </div>

          <p className="mt-6 text-sm text-gray-300 italic">
            💡 We usually reply within 24 hours
          </p>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-10 text-gray-900"
        >
          <h3 className="text-2xl font-heading font-semibold mb-6 text-center text-primary">
            Send Us a Message
          </h3>
          <div className="space-y-5">
            {["Your Name", "Your Email"].map((placeholder, i) => (
              <motion.input
                key={i}
                type={placeholder.includes("Email") ? "email" : "text"}
                placeholder={placeholder}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * (i + 1), duration: 0.4 }}
                className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
              />
            ))}

            <motion.textarea
              rows="5"
              placeholder="Your Message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:outline-none"
            />

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-accent text-white font-semibold py-3 rounded-xl shadow-md hover:bg-primary transition"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* Extra CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-24"
      >
        <h3 className="text-2xl font-heading font-bold">
          Ready to <span className="text-gold">partner</span> with us?
        </h3>
        <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
          Let’s create impact together. Join Stratizen and shape the next
          generation of education, entrepreneurship, and innovation.
        </p>
      </motion.div>
    </section>
  );
}
