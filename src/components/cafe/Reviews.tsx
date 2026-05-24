import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { REVIEWS } from "./data";

export function Reviews() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = REVIEWS.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 5000);
    return () => clearInterval(t);
  }, [paused, total]);

  const go = (dir: number) => setIdx((i) => (i + dir + total) % total);

  // show prev / current / next
  const visible = [-1, 0, 1].map((o) => ({
    offset: o,
    review: REVIEWS[(idx + o + total) % total],
  }));

  return (
    <section
      className="relative py-28 px-6 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] rounded-full bg-caramel/15 blur-[140px]" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[420px] h-[420px] rounded-full bg-gold/10 blur-[140px]" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-caramel mb-4">Loved by guests</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Words from our <span className="text-gradient italic">family</span>
          </h2>
        </div>

        <div className="relative h-[420px] md:h-[360px]">
          {visible.map(({ offset, review }) => {
            const isActive = offset === 0;
            return (
              <article
                key={review.name + offset}
                className="absolute top-1/2 left-1/2 w-[88%] md:w-[560px] -translate-y-1/2 transition-all duration-700 ease-out"
                style={{
                  transform: `translate(-50%, -50%) translateX(${offset * 60}%) scale(${isActive ? 1 : 0.85})`,
                  opacity: isActive ? 1 : 0.35,
                  zIndex: isActive ? 20 : 10,
                  filter: isActive ? "none" : "blur(2px)",
                }}
              >
                <div
                  className={`glass-strong rounded-3xl p-8 md:p-10 transition-all duration-700 ${
                    isActive ? "shadow-glow ring-1 ring-caramel/30" : "shadow-soft"
                  }`}
                  style={
                    isActive
                      ? { boxShadow: "0 0 60px -10px oklch(0.68 0.13 55 / 0.5), 0 30px 80px -20px oklch(0.1 0.02 50 / 0.7)" }
                      : undefined
                  }
                >
                  <Quote className="text-caramel/70" size={32} />
                  <div className="mt-4 flex gap-0.5 text-caramel">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-5 text-lg md:text-xl leading-relaxed text-foreground/85 font-light">
                    "{review.text}"
                  </p>
                  <div className="mt-7 pt-5 border-t border-border/40 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-caramel-grad grid place-items-center font-display text-primary-foreground">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-display text-lg leading-tight">{review.name}</p>
                      <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/50">Verified Guest</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-5 mt-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="w-11 h-11 rounded-full glass hover:bg-caramel/20 grid place-items-center transition"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? "w-8 bg-caramel shadow-glow" : "w-1.5 bg-foreground/25 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next review"
            className="w-11 h-11 rounded-full glass hover:bg-caramel/20 grid place-items-center transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
