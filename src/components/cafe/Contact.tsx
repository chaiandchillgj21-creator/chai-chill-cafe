import { Phone, MapPin, MessageCircle, Instagram, Clock } from "lucide-react";
import { CONTACT } from "./data";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 px-3 sm:px-5 pb-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-caramel mb-4">Visit Us</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Come <span className="text-gradient italic">chill</span> with us
          </h2>
          <p className="mt-5 text-foreground/70 italic">
            Your perfect destination for coffee, comfort, conversations, and chill vibes.
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-8 md:p-12 shadow-soft">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-caramel/15 grid place-items-center shrink-0">
                  <MapPin size={18} className="text-caramel" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-foreground/55">Address</p>
                  <p className="mt-1 leading-relaxed break-words whitespace-pre-wrap">
                    {CONTACT.address}
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-caramel/15 grid place-items-center shrink-0">
                  <Phone size={18} className="text-caramel" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-foreground/55">Phone</p>
                  <a href={`tel:${CONTACT.phone}`} className="mt-1 block hover:text-caramel">
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-caramel/15 grid place-items-center shrink-0">
                  <Instagram size={18} className="text-caramel" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-foreground/55">Instagram</p>
                  <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="mt-1 block hover:text-caramel">
                    @{CONTACT.instagramHandle}
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-11 h-11 rounded-full bg-caramel/15 grid place-items-center shrink-0">
                  <Clock size={18} className="text-caramel" />
                </div>
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-foreground/55">Open Hours</p>
                  <p className="mt-1">{CONTACT.hours}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 content-start">
              <a
                href={`tel:${CONTACT.phone}`}
                className="inline-flex items-center justify-center gap-3 w-full h-14 rounded-2xl bg-caramel-grad text-primary-foreground font-medium shadow-glow text-center hover:scale-[1.02] transition duration-200 ease-out"
              >
                <Phone size={16} className="inline" /> Call Now
              </a>
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full h-14 rounded-2xl glass font-medium text-center hover:bg-caramel/15 transition duration-200 ease-out"
              >
                <MessageCircle size={16} className="inline" /> WhatsApp
              </a>
              <a
                href={CONTACT.maps}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full h-14 rounded-2xl glass font-medium text-center hover:bg-caramel/15 transition duration-200 ease-out"
              >
                <MapPin size={16} className="inline" /> Get Location
              </a>
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full h-14 rounded-2xl glass font-medium text-center hover:bg-caramel/15 transition duration-200 ease-out"
              >
                <Instagram size={16} className="inline" /> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
