import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const projectRoot = process.cwd();
const publicDir = resolve(projectRoot, "public");

const loadEnv = () => {
  const envPath = resolve(projectRoot, ".env");
  if (!existsSync(envPath)) return {};

  const env = {};
  const contents = readFileSync(envPath, "utf8");
  contents.split(/\r?\n/).forEach((line) => {
    if (!line || line.trim().startsWith("#")) return;
    const [key, ...rest] = line.split("=");
    if (!key) return;
    env[key.trim()] = rest.join("=").trim();
  });
  return env;
};

const env = { ...loadEnv(), ...process.env };
const siteUrl = env.VITE_SITE_URL || "";

const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};

const pass = (message) => {
  console.log(`PASS: ${message}`);
};

const robotsPath = resolve(publicDir, "robots.txt");
if (!existsSync(robotsPath)) {
  fail("public/robots.txt is missing");
} else {
  const robots = readFileSync(robotsPath, "utf8");
  if (!robots.includes("User-agent")) {
    fail("robots.txt missing User-agent rule");
  } else if (robots.includes("Disallow: /")) {
    fail("robots.txt appears to block indexing (Disallow: /)");
  } else {
    pass("robots.txt exists and allows indexing");
  }
}

const sitemapPath = resolve(publicDir, "sitemap.xml");
if (!existsSync(sitemapPath)) {
  fail("public/sitemap.xml is missing");
} else {
  const sitemap = readFileSync(sitemapPath, "utf8");
  const hasAbsoluteUrls = /<loc>https?:\/\//.test(sitemap);
  if (!hasAbsoluteUrls) {
    fail("sitemap.xml does not include absolute URLs");
  } else {
    pass("sitemap.xml exists with absolute URLs");
  }
}

if (!siteUrl) {
  fail("VITE_SITE_URL is not set (required for canonical checks)");
} else {
  const seoPath = resolve(projectRoot, "src", "components", "SEO.jsx");
  if (!existsSync(seoPath)) {
    fail("SEO component not found for canonical checks");
  } else {
    const seoFile = readFileSync(seoPath, "utf8");
    if (!seoFile.includes("canonical")) {
      fail("SEO component does not set canonical tags");
    } else if (!seoFile.includes("siteConfig.siteUrl")) {
      fail("SEO component does not use siteConfig.siteUrl for canonical URLs");
    } else {
      pass("Canonical tags wired to siteConfig.siteUrl");
    }
  }
}

const srcDir = resolve(projectRoot, "src");
const srcFiles = [
  resolve(srcDir, "pages", "HomePage.jsx"),
  resolve(srcDir, "pages", "AboutPage.jsx"),
  resolve(srcDir, "pages", "ServicesPage.jsx"),
  resolve(srcDir, "pages", "CTAPage.jsx"),
  resolve(srcDir, "pages", "ContactPage.jsx"),
  resolve(srcDir, "pages", "TrustPage.jsx"),
  resolve(srcDir, "pages", "PrivacyPage.jsx"),
  resolve(srcDir, "pages", "TermsPage.jsx"),
];

const noIndexPages = [];

srcFiles.forEach((file) => {
  if (!existsSync(file)) return;
  const contents = readFileSync(file, "utf8");
  if (contents.includes("noIndex") || contents.includes("noindex")) {
    noIndexPages.push(file);
  }
});

if (noIndexPages.length) {
  fail(`Found noIndex usage in: ${noIndexPages.join(", ")}`);
} else {
  pass("No pages output noindex via SEO component");
}

if (!process.exitCode) {
  console.log("SEO verification complete.");
}
