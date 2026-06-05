import { Instagram, MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import { CONTACT } from "./data";

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border/40 px-4 sm:px-6 pt-16 pb-12 bg-warm">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-full bg-caramel-grad grid place-items-center">
              <span className="font-display text-lg text-primary-foreground">C</span>
            </span>
            <span className="font-display text-xl">Chai & Chill</span>
          </div>
          <p className="mt-4 text-sm text-foreground/65 leading-relaxed">
            Coffee, comfort, conversations, and chill vibes — in the heart of Navsari.
          </p>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-caramel mb-4">Explore</p>
          <ul className="space-y-2 text-sm text-foreground/75">
            <li><a href="#home" className="hover:text-caramel">Home</a></li>
            <li><a href="#menu" className="hover:text-caramel">Menu</a></li>
            <li><a href="#drinks" className="hover:text-caramel">Drinks</a></li>
            <li><a href="#gallery" className="hover:text-caramel">Gallery</a></li>
            <li><a href="#contact" className="hover:text-caramel">Contact</a></li>
          </ul>
        </div>

        <div>
          <p className="text-xs tracking-[0.3em] uppercase text-caramel mb-4">Reach Out</p>
          <ul className="space-y-3 text-sm text-foreground/75">
            <li className="flex gap-2 items-start">
              <Phone size={14} className="mt-1 text-caramel" />
              <span>{CONTACT.phone}</span>
            </li>
            <li className="flex gap-2 items-start">
              <MapPin size={14} className="mt-1 text-caramel shrink-0" />
              <span className="break-words">{CONTACT.address}</span>
            </li>
            <li className="flex gap-2 items-start">
              <Clock size={14} className="mt-1 text-caramel" />
              <span>{CONTACT.hours}</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex gap-3">
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full glass hover:bg-caramel/20 transition" aria-label="Instagram">
              <Instagram size={16} />
            </a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full glass hover:bg-caramel/20 transition" aria-label="WhatsApp">
              <MessageCircle size={16} />
            </a>
            <a href={`tel:${CONTACT.phone}`} className="w-10 h-10 grid place-items-center rounded-full glass hover:bg-caramel/20 transition" aria-label="Call">
              <Phone size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-border/40 text-center text-xs text-foreground/55">
        © 2026 Chai & Chill Cafe · Crafted with warmth in Navsari
      </div>
    </footer>
  );
}
