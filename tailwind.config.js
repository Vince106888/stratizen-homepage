/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class", // Use <html class="dark"> to toggle
  theme: {
    extend: {
      colors: {
        // LIGHT MODE
        primary: "#002147",       // Navy Blue
        accent: "#d22630",        // Red Accent
        gold: "#fdb813",          // Gold Highlight
        bg: "#f9f9f9",            // Light background
        text: "#333333",          // Dark text
        navbar: "#002147",
        "navbar-text": "#ffffff",
        "sidebar-bg": "#ffffff",
        "sidebar-text": "#333333",
        "dropdown-bg": "rgba(255,255,255,0.95)",

        // DARK MODE
        "dark-bg": "#1e1e2f",
        "dark-text": "#e0e0e0",
        "dark-navbar": "#111127",
        "dark-navbar-text": "#f9f9f9",
        "dark-sidebar-bg": "#1b1b2b",
        "dark-sidebar-text": "#e0e0e0",
        "dark-dropdown-bg": "rgba(40,40,60,0.95)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"], // Clean UI font
        heading: ["Poppins", "sans-serif"],         // Accent headings
      },
      boxShadow: {
        card: "0 4px 14px rgba(0, 0, 0, 0.1)",       // Subtle card shadow
        nav: "0 2px 10px rgba(0, 0, 0, 0.15)",       // Navbar shadow
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
