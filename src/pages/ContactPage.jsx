// src/pages/ContactPage.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import SEO from "../components/SEO";
import { siteConfig } from "../config/siteConfig";
import { trackEvent } from "../utils/analytics";
import { getWhatsAppLink } from "../utils/whatsapp";

const MotionDiv = motion.div;
const MotionForm = motion.form;
const MotionInput = motion.input;
const MotionTextarea = motion.textarea;
const MotionButton = motion.button;

export default function ContactPage() {
  const [toast, setToast] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("success") === "true") {
      setToast({ type: "success", message: "Message sent successfully." });
      setTimeout(() => setToast(null), 4000);
    }
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    try {
      const formData = new FormData(form);
      const body = new URLSearchParams(formData).toString();
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      trackEvent("contact_submit_success", { location: "contact_page" });
      setToast({ type: "success", message: "Message sent successfully." });
      form.reset();

      setTimeout(() => setToast(null), 4000);
    } catch (error) {
      console.error(error);
      trackEvent("contact_submit_error", { location: "contact_page" });
      setToast({ type: "error", message: "Something went wrong. Try again." });
      setTimeout(() => setToast(null), 4000);
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary via-accent/90 to-primary px-6 py-24 text-white relative">
      <SEO
        title="Contact"
        description="Contact Stratizen to explore student collaboration and campus partnership opportunities."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Stratizen",
          url: `${siteConfig.siteUrl}/contact`,
        }}
      />
      <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-2 items-start">
        <MotionDiv
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
            Let's build the future <span className="text-gold">together</span>
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-lg">
            Whether you are a student, mentor, or institutional partner, we are
            ready to collaborate. Submissions are received securely and reviewed
            within 24 hours.
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

          <div className="mt-10 rounded-xl overflow-hidden shadow-lg border border-white/10">
            <iframe
              title="Strathmore University Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.777173820346!2d36.80946901083484!3d-1.3089601986730983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f112e9eff4827%3A0x17a918597484c8ea!2sStrathmore%20University!5e0!3m2!1sen!2ske!4v1758160282787!5m2!1sen!2ske"
              width="600"
              height="220"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{ border: 0 }}
            ></iframe>
          </div>

          <p className="mt-6 text-sm text-gray-300 italic">
            We usually reply within 24 hours.
          </p>
        </MotionDiv>

        <MotionForm
          name="contact"
          method="POST"
          action="/contact?success=true"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-6 sm:p-10 text-gray-900 relative"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>
              Do not fill this out: <input name="bot-field" />
            </label>
          </p>

          <h2 className="text-2xl font-heading font-semibold mb-6 text-center text-primary">
            Send us a message
          </h2>
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="sr-only">
                Your name
              </label>
              <MotionInput
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Your email
              </label>
              <MotionInput
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="message" className="sr-only">
                Your message
              </label>
              <MotionTextarea
                id="message"
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-5 py-3 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
              />
            </div>

            <MotionButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-accent text-white font-semibold py-3 rounded-xl shadow-md hover:bg-primary hover:shadow-lg transition"
            >
              Send message
            </MotionButton>
          </div>

          <div className="mt-6 text-sm text-gray-600" aria-live="polite">
            Prefer WhatsApp?{" "}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-gold font-semibold"
              onClick={() => trackEvent("whatsapp_click", { location: "contact_inline" })}
            >
              Chat with us instantly
            </a>
            .
          </div>

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
        </MotionForm>
      </div>

      <MotionDiv
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mt-24"
      >
        <h2 className="text-2xl font-heading font-bold">
          Ready to <span className="text-gold">partner</span> with us?
        </h2>
        <p className="mt-3 text-gray-200 max-w-2xl mx-auto">
          Let's create impact together. Join Stratizen and help shape the next
          generation of education, entrepreneurship, and innovation.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/about"
            className="px-6 py-3 rounded-xl bg-white text-primary font-semibold shadow hover:bg-gray-100 transition"
          >
            Learn more
          </a>
          <a
            href="/join"
            className="px-6 py-3 rounded-xl bg-accent text-white font-semibold shadow hover:bg-primary transition"
          >
            Join the waitlist
          </a>
        </div>
      </MotionDiv>
    </section>
  );
}

