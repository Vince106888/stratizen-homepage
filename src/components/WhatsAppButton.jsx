import { getWhatsAppLink } from "../utils/whatsapp";
import { trackEvent } from "../utils/analytics";

export default function WhatsAppButton() {
  const handleClick = () => {
    trackEvent("whatsapp_click", { location: "floating_button" });
  };

  return (
    <a
      href={getWhatsAppLink()}
      onClick={handleClick}
      className="fixed right-4 z-50 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-xl transition hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-200 md:right-6"
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Stratizen on WhatsApp"
    >
      <span className="sr-only">Open WhatsApp chat</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 32 32"
        className="h-5 w-5 fill-current"
      >
        <path d="M19.11 17.44c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.6.14-.18.27-.69.88-.85 1.06-.16.18-.32.2-.6.07-.27-.14-1.14-.42-2.18-1.33-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.04-.34-.02-.48-.07-.14-.6-1.44-.82-1.97-.22-.53-.44-.46-.6-.47h-.51c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.97 2.64 1.11 2.82c.14.18 1.9 2.9 4.6 4.07.64.28 1.13.44 1.52.56.64.2 1.23.17 1.69.1.52-.08 1.6-.66 1.83-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.32zM16.02 4.67c-6.26 0-11.35 5.09-11.35 11.35 0 2 .52 3.95 1.51 5.67L4.5 27.33l5.83-1.53a11.27 11.27 0 0 0 5.69 1.55c6.26 0 11.35-5.09 11.35-11.35S22.28 4.67 16.02 4.67zm0 20.32c-1.8 0-3.56-.48-5.1-1.4l-.36-.21-3.46.91.92-3.37-.23-.35a9.3 9.3 0 0 1-1.45-4.99c0-5.14 4.18-9.32 9.32-9.32 5.14 0 9.32 4.18 9.32 9.32 0 5.14-4.18 9.41-9.32 9.41z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
