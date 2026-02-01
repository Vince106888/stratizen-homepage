// src/pages/JoinPage.jsx
import { useState } from "react";
import SEO from "../components/SEO";
import { siteConfig } from "../config/siteConfig";

export default function JoinPage() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="min-h-screen bg-bg dark:bg-dark-bg text-text dark:text-dark-text">
      <SEO
        title="Join"
        description="Join the Stratizen waitlist or book a demo for your institution."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Join Stratizen",
          url: `${siteConfig.siteUrl}/join`,
        }}
      />

      <div className="container py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-accent">Join</p>
          <h1 className="mt-4 text-3xl md:text-5xl font-heading font-bold text-primary dark:text-gold">
            Join the waitlist or book a demo
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Tell us who you are and what you need. We will follow up with the
            right next step for students, alumni, staff, and partners.
          </p>
        </div>

        <div className="mt-12 max-w-3xl mx-auto card">
          <form
            name="join"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="join" />
            <p className="hidden">
              <label>
                Do not fill this out: <input name="bot-field" />
              </label>
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Full name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  required
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                >
                  <option value="">Select a role</option>
                  <option value="student">Student</option>
                  <option value="alumni">Alumni</option>
                  <option value="staff">Staff</option>
                  <option value="partner">Partner</option>
                </select>
              </div>
              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Primary interest
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                >
                  <option value="">Select an option</option>
                  <option value="waitlist">Join the waitlist</option>
                  <option value="demo">Book a demo</option>
                  <option value="partnership">Partnership discussion</option>
                  <option value="research">Research collaboration</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Optional message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none"
                aria-describedby="message-help"
              />
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400" id="message-help">
                Share any context we should know before we reach out.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="btn btn-primary px-6 py-3"
                aria-describedby="form-status"
              >
                Submit request
              </button>
              <span
                id="form-status"
                className="text-sm text-gray-600 dark:text-gray-300"
                role="status"
                aria-live="polite"
              >
                {status === "success" && "Thanks! We will be in touch within 2 business days."}
                {status === "error" && "Something went wrong. Please try again."}
                {status === "idle" && "We will never share your contact details."}
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
