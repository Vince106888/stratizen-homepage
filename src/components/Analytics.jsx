import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const provider = import.meta.env.VITE_ANALYTICS_PROVIDER;
const analyticsId = import.meta.env.VITE_ANALYTICS_ID;

const loadScript = (src, attrs = {}) =>
  new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    Object.entries(attrs).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    if (!provider || !analyticsId) return undefined;

    const init = async () => {
      if (provider === "ga4") {
        await loadScript(`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`);
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag("js", new Date());
        gtag("config", analyticsId, {
          anonymize_ip: true,
          send_page_view: false,
        });
      }

      if (provider === "plausible") {
        await loadScript("https://plausible.io/js/script.js", {
          "data-domain": analyticsId,
        });
      }
    };

    init();
    return undefined;
  }, []);

  useEffect(() => {
    if (!provider || !analyticsId) return;

    if (provider === "ga4" && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: `${location.pathname}${location.search}`,
      });
    }

    if (provider === "plausible" && window.plausible) {
      window.plausible("pageview");
    }
  }, [location.pathname, location.search]);

  return null;
}
