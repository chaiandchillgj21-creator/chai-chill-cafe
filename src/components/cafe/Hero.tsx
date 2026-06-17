import heroImg from "@/assets/hero.jpg";
import { ArrowDown, Coffee } from "lucide-react";

export function Hero() {
  const particles = Array.from({ length: 14 });
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="hero-bg absolute inset-0 overflow-hidden">
        <img
          src={heroImg}
          alt="Steaming coffee cup in a warm cafe"
          className="w-full h-full object-cover object-center slow-zoom"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-overlay)" }} />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,oklch(0.12_0.025_50/0.6)_80%)]" />
      </div>

      {/* particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((_, i) => (
          <span
            key={i}
            className="particle absolute block rounded-full bg-caramel/40 blur-[1px]"
            style={{
              left: `${(i * 7 + 5) % 95}%`,
              width: `${4 + (i % 4) * 2}px`,
              height: `${4 + (i % 4) * 2}px`,
              animationDuration: `${10 + (i % 6) * 2}s`,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-5 md:px-6 pt-10 sm:pt-12 md:pt-14 hero-content">
        <div className="reveal" style={{ animationDelay: "0.1s" }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs tracking-[0.3em] uppercase text-cream/90">
            <Coffee className="logo-icon" size={14} /> Navsari
          </span>
        </div>
        <h1
          className="reveal mt-6 font-display leading-[1.02] max-w-full text-center hero-heading"
          style={{ animationDelay: "0.25s" }}
        >
          Savor the{' '}
          <span className="text-gradient italic hero-subline">Perfect Brew</span>
        </h1>
        <p
          className="reveal mt-7 text-foreground/75 hero-copy"
          style={{ animationDelay: "0.45s" }}
        >
          Freshly brewed coffee, delicious café food, and cozy vibes —
          handcrafted at Chai &amp; Chill in the heart of Navsari.
        </p>
        <div className="reveal mt-12 flex flex-col sm:flex-row hero-cta-group justify-center" style={{ animationDelay: "0.6s" }}>
          <a
            href="#menu"
            className="px-6 sm:px-8 py-3 rounded-full bg-caramel-grad text-primary-foreground font-medium tracking-wide shadow-glow hover:scale-[1.03] transition-transform w-full sm:w-auto text-sm sm:text-base"
          >
            Explore Menu
          </a>
          
        </div>
      </div>

      <a
        href="#drinks"
        className="scroll-indicator absolute left-1/2 -translate-x-1/2 bottom-8 z-10 flex flex-col items-center gap-2 text-cream/70 hover:text-cream transition"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <ArrowDown className="bounce-soft" size={18} />
      </a>
    </section>
  );
}
