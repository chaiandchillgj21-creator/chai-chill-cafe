import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "./data";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="pulse-ring w-14 h-14 rounded-full bg-[#25D366] grid place-items-center shadow-glow hover:scale-110 transition"
      >
        <MessageCircle className="text-white" size={22} />
      </a>
      <a
        href={`tel:${CONTACT.phone}`}
        aria-label="Call cafe"
        className="w-14 h-14 rounded-full bg-caramel-grad grid place-items-center shadow-glow hover:scale-110 transition"
      >
        <Phone className="text-primary-foreground" size={20} />
      </a>
    </div>
  );
}
