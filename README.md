# Stratizen Homepage

Production-ready marketing site for Stratizen. Built with Vite + React + React Router and Tailwind CSS.

## Local development

1) Install dependencies

```
npm install
```

2) Run the dev server

```
npm run dev
```

3) Build for production (also regenerates sitemap + robots)

```
npm run build
```

## Environment variables

Copy `.env.example` to `.env` and fill in values.

- `VITE_SITE_URL` (required for canonical URLs and sitemap generation)
- `VITE_ANALYTICS_PROVIDER` (optional: `ga4` or `plausible`)
- `VITE_ANALYTICS_ID` (optional: GA4 Measurement ID or Plausible domain)

## Deployment (Netlify)

- Build command: `npm run build`
- Publish directory: `dist`
- Ensure `VITE_SITE_URL` is set to your production URL.
- `netlify.toml` sets security headers and caching.

## SEO & Indexing Checklist

1) Set `VITE_SITE_URL` to the production domain.
2) Deploy and confirm `https://your-domain/sitemap.xml` and `https://your-domain/robots.txt` load.
3) Verify ownership in Google Search Console.
4) Submit the sitemap URL in Search Console.
5) Inspect canonical URLs and fix crawl errors if any.
6) Validate social previews (Open Graph + Twitter cards).

## Analytics

Analytics loads only when environment variables are provided. Supported providers:

- `ga4` (Measurement ID in `VITE_ANALYTICS_ID`)
- `plausible` (Domain in `VITE_ANALYTICS_ID`)

## Content & SEO updates

- SEO metadata is managed per page via `src/components/SEO.jsx`.
- Structured data (Organization, WebSite, SoftwareApplication) is attached on the homepage.
- `scripts/generate-sitemap.mjs` writes `public/sitemap.xml` and `public/robots.txt` at build time.

## Social preview image

Open Graph images are generated locally and stored in `public/og/`. The default
image is `public/og/og-image.png` (1200x630) with a square fallback at
`public/og/og-image-square.png` (1080x1080).

## Performance notes

Targets after the performance pass:
- LCP < 2.5s on mobile (hero image preloaded, only 1 critical image).
- CLS < 0.1 (explicit image dimensions or aspect ratios across pages).
- Fonts render with `display=swap` and preconnect to avoid blocking.

## Google Indexing Setup

1) Set `VITE_SITE_URL` in Netlify
- Go to Site settings → Environment variables.
- Add `VITE_SITE_URL` with your production domain (for example, `https://stratizen.netlify.app`).
- Trigger a new deploy so canonical URLs and the sitemap use the correct base.

2) Verify the site in Google Search Console
- Open Google Search Console and add a new property for your production domain.
- Use the recommended verification method (DNS or HTML file).
- Confirm ownership is verified.

3) Submit the sitemap
- In Search Console, go to Sitemaps.
- Submit `https://your-domain/sitemap.xml`.

4) Force indexing for key pages
- Use URL Inspection for `/`, `/about`, `/services`, `/contact`, `/trust`.
- Click “Request Indexing” after each inspection.

Verification checklist
- `VITE_SITE_URL` is set to the production domain in Netlify.
- `robots.txt` is accessible and allows indexing.
- `sitemap.xml` is accessible and uses absolute URLs.
- Canonical URLs resolve to `VITE_SITE_URL`.
- No public pages output `noindex`.

Local verification
- Run `npm run seo:verify` to validate robots, sitemap, canonical wiring, and noindex usage locally.

## Netlify Forms (Contact + Join)

Where submissions appear
- Netlify Dashboard → Site → Forms → `contact` or `join`.

Enable email notifications
- Netlify Dashboard → Site → Forms → select the form → Notifications → add email notifications.
- Avoid storing secrets in the repo; use Netlify UI for notification settings.

Spam protection
- Both forms include a honeypot field (`bot-field`) to deter spam submissions.

Troubleshooting
- Netlify detects forms at build time, so ensure the static form markup is present in the built HTML.
- In this repo, the static form markup is included in `index.html` to support SPA routing.
- If forms aren’t showing, redeploy after confirming the form markup exists in `dist/index.html`.
