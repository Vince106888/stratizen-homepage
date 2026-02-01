const defaultMessage =
  "Hi Stratizen team, Id like to learn more about partnering or joining.";

export const getWhatsAppLink = () => {
  const phone = (import.meta.env.VITE_WHATSAPP_PHONE || "254115051171")
    .replace(/\D/g, "")
    .trim();
  const message = import.meta.env.VITE_WHATSAPP_MESSAGE || defaultMessage;
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${phone}?text=${encodedMessage}`;
};
