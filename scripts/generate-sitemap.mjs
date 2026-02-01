import { writeFileSync } from "node:fs";
import { resolve } from "node:path";

const siteUrl = process.env.VITE_SITE_URL || "https://stratizen.netlify.app";
const routes = [
  { path: "/", priority: 1.0, changefreq: "weekly" },
  { path: "/about", priority: 0.8, changefreq: "monthly" },
  { path: "/services", priority: 0.8, changefreq: "monthly" },
  { path: "/cta", priority: 0.6, changefreq: "monthly" },
  { path: "/contact", priority: 0.7, changefreq: "monthly" },
  { path: "/join", priority: 0.7, changefreq: "monthly" },
  { path: "/trust", priority: 0.6, changefreq: "monthly" },
  { path: "/privacy", priority: 0.4, changefreq: "yearly" },
  { path: "/terms", priority: 0.4, changefreq: "yearly" },
];

const lastmod = new Date().toISOString();

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const url = new URL(route.path, siteUrl).toString();
    return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap.xml", siteUrl).toString()}
`;

writeFileSync(resolve("public", "sitemap.xml"), sitemap, "utf8");
writeFileSync(resolve("public", "robots.txt"), robots, "utf8");

console.log(`Generated sitemap.xml and robots.txt for ${siteUrl}`);
