import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { siteConfig } from "../config/siteConfig";

const ensureAbsoluteUrl = (path) => new URL(path, siteConfig.siteUrl).toString();

export default function SEO({
  title,
  description,
  image,
  type = "website",
  noIndex = false,
  jsonLd,
}) {
  const location = useLocation();
  const canonicalUrl = ensureAbsoluteUrl(location.pathname);
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const pageDescription = description || siteConfig.description;
  const ogImage = image || siteConfig.ogImage;
  const absoluteOgImage = ensureAbsoluteUrl(ogImage);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={absoluteOgImage} />
      <meta property="og:image:alt" content={`${siteConfig.name} overview`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content={siteConfig.locale} />

      <meta name="twitter:card" content={siteConfig.twitterCard} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={absoluteOgImage} />

      <meta name="theme-color" content="#002147" />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
