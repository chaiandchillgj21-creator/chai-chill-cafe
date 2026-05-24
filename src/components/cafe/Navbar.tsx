import { useEffect, useState } from "react";
import { Instagram, MessageCircle, Menu, X } from "lucide-react";
import { CONTACT } from "./data";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Drinks", href: "#drinks" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-10 h-10 rounded-full bg-caramel-grad grid place-items-center shadow-glow">
            <span className="font-display text-lg text-primary-foreground">C</span>
          </span>
          <span className="font-display text-xl tracking-wide">
            Chai <span className="text-caramel">&</span> Chill
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-caramel after:transition-transform after:duration-500 hover:after:origin-left hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 grid place-items-center rounded-full glass hover:bg-caramel/20 transition"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="w-10 h-10 grid place-items-center rounded-full glass hover:bg-caramel/20 transition"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        <button
          className="md:hidden w-10 h-10 grid place-items-center rounded-full glass"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass-strong border-t border-border/40">
          <ul className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex gap-3 pt-2">
              <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full glass text-sm">Instagram</a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-caramel-grad text-primary-foreground text-sm">WhatsApp</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
