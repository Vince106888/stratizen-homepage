const provider = import.meta.env.VITE_ANALYTICS_PROVIDER;
const analyticsId = import.meta.env.VITE_ANALYTICS_ID;

export const trackEvent = (eventName, params = {}) => {
  if (!provider || !analyticsId) return;

  if (provider === "ga4" && window.gtag) {
    window.gtag("event", eventName, params);
  }

  if (provider === "plausible" && window.plausible) {
    window.plausible(eventName, { props: params });
  }
};
