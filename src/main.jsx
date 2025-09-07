// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

/**
 * Initialize dark mode based on:
 * 1. LocalStorage value (theme)
 * 2. System preference if no localStorage
 */
function initializeDarkMode() {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("theme");

  const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (storedTheme === "dark" || (!storedTheme && isSystemDark)) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

// React 18 concurrent root
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found. Ensure <div id='root'></div> exists in index.html");
}

const root = ReactDOM.createRoot(rootElement);

// Initialize dark mode before rendering
initializeDarkMode();

root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{ v7_startTransition: true }} // React Router v7 concurrent prep
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
