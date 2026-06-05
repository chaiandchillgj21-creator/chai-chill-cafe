import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Instagram, MessageCircle, Menu, X } from "lucide-react";
import logoImage from "@/assets/chay&chill.webp";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add("menu-open");
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.classList.remove("menu-open");
    }
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-colors duration-300 ease-out ${
        scrolled
          ? "bg-[#261b12]/82 backdrop-blur-[0.5px] border-b border-white/10 shadow-[0_10px_20px_-18px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-5 lg:px-8 xl:px-10 2xl:px-12 h-24 sm:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-4 group transition-all duration-300 hover:-translate-y-0.5">
          <img
            src={logoImage}
            alt="Chai & Chill logo"
            className="h-14 sm:h-16 md:h-16 lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <ul className="hidden md:flex items-center gap-6 lg:gap-8">
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

        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 grid place-items-center rounded-full glass hover:bg-caramel/20 transition"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="w-11 h-11 grid place-items-center rounded-full glass hover:bg-caramel/20 transition"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
        </div>

        <button
          className="md:hidden w-11 h-11 grid place-items-center rounded-full glass shadow-soft transition-all duration-300 ease-out hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-caramel/40"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mounted &&
        createPortal(
          <div
            className={`md:hidden fixed inset-0 z-[9998] overflow-hidden ${
              open
                ? "pointer-events-auto"
                : "pointer-events-none"
            }`}
            aria-hidden={!open}
          >
            <div
              className={`absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity ${
                open ? "duration-150 ease-out opacity-100" : "duration-200 ease-in opacity-0"
              }`}
              aria-hidden="true"
            />
            <div
              className={`relative z-[9999] mx-4 my-4 max-h-[calc(100vh-2rem)] overflow-hidden rounded-[2rem] border border-white/15 bg-[#110905]/96 backdrop-blur-3xl shadow-[0_30px_90px_-30px_rgba(0,0,0,0.45)] transition-all duration-300 ease-out ${
                open ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="flex h-full flex-col">
            <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-5 py-4 border-b border-white/15 bg-[#110905]/95 backdrop-blur-3xl">
              <div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-cream/80">Navigation</p>
                <p className="mt-2 text-base font-semibold tracking-wide text-cream/95">Discover the Vibes</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-foreground shadow-soft transition duration-200 ease-out hover:bg-white/15 hover:shadow-glow active:scale-[0.96]"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4 pb-6">
              <ul className="flex flex-col gap-1.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="group block rounded-[28px] px-4 py-3 text-base font-semibold tracking-wide text-foreground transition-all duration-200 ease-out hover:bg-white/10 hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 active:scale-[0.98]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-4 space-y-3 pb-4">
                <a
                  href={CONTACT.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full rounded-2xl bg-gradient-to-r from-[#d89a58] via-[#c47a42] to-[#a75b28] px-5 py-4 text-sm font-semibold text-primary-foreground shadow-[0_18px_60px_-30px_rgba(184,118,44,0.35)] border border-white/10 transition duration-200 ease-out hover:-translate-y-0.5 hover:shadow-glow active:scale-[0.98]"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 w-full rounded-2xl bg-white/5 backdrop-blur-lg px-5 py-4 text-sm font-semibold text-foreground border border-white/10 shadow-soft transition duration-200 ease-out hover:bg-caramel/12 hover:text-foreground active:scale-[0.98]"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body
    )}
    </header>
  );
}
