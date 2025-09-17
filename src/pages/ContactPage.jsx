// src/pages/ContactPage.jsx
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [toast, setToast] = useState(null); // { type: "success" | "error", message: string }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const formData = new FormData(form);
      await fetch("/", {
        method: "POST",
        body: formData,
      });

      setToast({ type: "success", message: "✅ Message sent successfully!" });
      form.reset();

      // Hide toast after 4s
      setTimeout(() => setToast(null), 4000);
    } catch (err) {
      setToast({ type: "error", message: "❌ Something went wrong. Try again." });
      setTimeout(() => setToast(null), 4000);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-accent/90 to-primary px-6 py-24 text-white relative">
      <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-2 items-start">
        
        {/* ================= LEFT SIDE ================= */}
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

          {/* Contact Info */}
          <div className="mt-10 space-y-4 text-lg">
            <p>
              <span className="font-semibold text-gold">Email:</span>{" "}
              <a
                href="mailto:info@stratizen.edu"
                className="underline hover:text-white"
              >
                vincent.nyamao@stratizen.edu
              </a>
            </p>
            <p>
              <span className="font-semibold text-gold">Phone:</span>{" "}
              <a href="tel:+254115051171" className="hover:underline">
                +254 115 051 171
              </a>
            </p>
            <p>
              <span className="font-semibold text-gold">Location:</span>{" "}
              Strathmore University, Ole Sangale Rd, Nairobi, Kenya
            </p>
          </div>

          <p className="mt-6 text-sm text-gray-300 italic">
            💡 We usually reply within 24 hours
          </p>

          {/* Google Map */}
          <div className="mt-10 rounded-xl overflow-hidden shadow-lg border border-white/10">
            <iframe
              title="Strathmore Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.820196397088!2d36.80652391475401!3d-1.3104345990500206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10f59b9c2d6f%3A0x28c7d53d437cc7e6!2sStrathmore%20University!5e0!3m2!1sen!2ske!4v1695052832936!5m2!1sen!2ske"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* ================= RIGHT SIDE: CONTACT FORM ================= */}
        <motion.form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit} // 🔹 JS handler
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 text-gray-900 relative"
        >
          {/* Hidden form-name input */}
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <h3 className="text-2xl font-heading font-semibold mb-6 text-center text-primary">
            Send Us a Message
          </h3>
          <div className="space-y-5">
            <div>
              <motion.input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <motion.input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <motion.textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-accent text-white font-semibold py-3 rounded-xl shadow-md hover:bg-primary hover:shadow-lg transition"
            >
              Send Message
            </motion.button>
          </div>

          {/* ================= TOAST NOTIFICATION ================= */}
          {toast && (
            <div
              className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg text-sm font-medium shadow-lg ${
                toast.type === "success"
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {toast.message}
            </div>
          )}
        </motion.form>
      </div>

      {/* ================= EXTRA CTA ================= */}
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

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/about"
            className="px-6 py-3 rounded-xl bg-white text-primary font-semibold shadow hover:bg-gray-100 transition"
          >
            Learn More
          </a>
          <a
            href="/join"
            className="px-6 py-3 rounded-xl bg-accent text-white font-semibold shadow hover:bg-primary transition"
          >
            Join Us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
