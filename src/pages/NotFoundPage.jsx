import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] bg-bg dark:bg-dark-bg text-text dark:text-dark-text">
      <SEO title="Page Not Found" description="The page you requested could not be found." noIndex />
      <div className="container py-20 text-center">
        <p className="text-sm uppercase tracking-widest text-accent mb-4">404</p>
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary dark:text-gold">
          This page does not exist
        </h1>
        <p className="mt-4 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The link may be outdated or the page may have moved. You can return to
          the homepage or contact the Stratizen team for help.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Stratizen
          </Link>
        </div>
      </div>
    </section>
  );
}
