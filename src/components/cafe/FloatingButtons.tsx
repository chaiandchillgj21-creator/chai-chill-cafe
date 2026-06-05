import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "./data";

export function FloatingButtons() {
  return (
    <div className="fixed z-[999] flex flex-col gap-3 floating-buttons-container">
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="pulse-ring w-14 h-14 rounded-full bg-[#25D366] grid place-items-center shadow-glow hover:scale-110 transition duration-300"
      >
        <MessageCircle className="text-white" size={22} />
      </a>
      <a
        href={`tel:${CONTACT.phone}`}
        aria-label="Call cafe"
        className="w-14 h-14 rounded-full bg-caramel-grad grid place-items-center shadow-glow hover:scale-110 transition duration-300"
      >
        <Phone className="text-primary-foreground" size={20} />
      </a>
    </div>
  );
}
