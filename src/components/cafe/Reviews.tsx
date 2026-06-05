import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { REVIEWS } from "./data";

export function Reviews() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<number | null>(null);
  const total = REVIEWS.length;

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % total), 2500);
    return () => clearInterval(t);
  }, [paused, total]);

  const go = (dir: number) => setIdx((i) => (i + dir + total) % total);

  const paginationItems = useMemo(() => {
    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => ({ type: "index" as const, index: i }));
    }

    if (idx <= 2) {
      return [
        { type: "index" as const, index: 0 },
        { type: "index" as const, index: 1 },
        { type: "index" as const, index: 2 },
        { type: "ellipsis" as const },
        { type: "index" as const, index: total - 1 },
      ];
    }

    if (idx >= total - 3) {
      return [
        { type: "index" as const, index: 0 },
        { type: "ellipsis" as const },
        { type: "index" as const, index: total - 3 },
        { type: "index" as const, index: total - 2 },
        { type: "index" as const, index: total - 1 },
      ];
    }

    return [
      { type: "index" as const, index: 0 },
      { type: "ellipsis" as const },
      { type: "index" as const, index: idx },
      { type: "ellipsis" as const },
      { type: "index" as const, index: total - 1 },
    ];
  }, [idx, total]);

  const visible = [
    {
      offset: 0,
      review: REVIEWS[idx],
    },
  ];

  return (
    <section
      className="relative py-20 sm:py-24 lg:py-28 px-3 sm:px-5"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[220px] sm:w-[300px] lg:w-[500px] h-[220px] sm:h-[300px] lg:h-[500px] rounded-full bg-caramel/15 blur-[80px] sm:blur-[120px] lg:blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[180px] sm:w-[260px] lg:w-[420px] h-[180px] sm:h-[260px] lg:h-[420px] rounded-full bg-gold/10 blur-[80px] sm:blur-[120px] lg:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-14 px-2">
          <p className="text-xs tracking-[0.4em] uppercase text-caramel mb-4">Loved by guests</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-tight">
            Words from our <span className="text-gradient italic">family</span>
          </h2>
        </div>

        <div
          className={`relative overflow-hidden pt-24 sm:pt-20 md:pt-16 ${dragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{ touchAction: "pan-y" }}
          onPointerDown={(event) => {
            if (event.pointerType === "mouse" && event.button !== 0) return;
            dragStart.current = event.clientX;
            setDragging(true);
            setPaused(true);
            event.currentTarget.setPointerCapture(event.pointerId);
          }}
          onPointerMove={(event) => {
            if (dragStart.current === null) return;
            const delta = event.clientX - dragStart.current;
            if (Math.abs(delta) > 10) {
              setDragging(true);
            }
          }}
          onPointerUp={(event) => {
            if (dragStart.current === null) return;
            const delta = event.clientX - dragStart.current;
            dragStart.current = null;
            setDragging(false);
            setPaused(false);
            event.currentTarget.releasePointerCapture(event.pointerId);
            if (Math.abs(delta) > 60) {
              go(delta < 0 ? 1 : -1);
            }
          }}
          onPointerCancel={() => {
            dragStart.current = null;
            setDragging(false);
            setPaused(false);
          }}
          onPointerLeave={() => {
            if (dragStart.current !== null) {
              dragStart.current = null;
              setDragging(false);
              setPaused(false);
            }
          }}
        >
          {visible.map(({ review }) => {
            return (
              <article
                key={review.name}
                className="relative mx-auto w-full transition-all duration-700 ease-out"
                style={{
                  width: "100%",
                  maxWidth: "min(640px, calc(100vw - 1.5rem))",
                }}
              >
                <div
                  className="glass-strong rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-700 shadow-glow ring-1 ring-caramel/30"
                  style={{ boxShadow: "0 0 60px -10px oklch(0.68 0.13 55 / 0.5), 0 30px 80px -20px oklch(0.1 0.02 50 / 0.7)" }}
                >
                  <Quote className="text-caramel/70" size={28} />
                  <div className="mt-3 flex gap-0.5 text-caramel">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <p className="mt-4 text-base sm:text-lg md:text-xl leading-relaxed text-foreground/85 font-light">
                    "{review.text}"
                  </p>
                  <div className="mt-auto pt-5 border-t border-border/40 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-caramel-grad grid place-items-center font-display text-primary-foreground">
                      {review.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <p className="font-display text-lg leading-tight truncate">{review.name}</p>
                      <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/50">Verified Guest</p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-4 sm:gap-5 mt-6">
          <button
            onClick={() => go(-1)}
            aria-label="Previous review"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full glass hover:bg-caramel/20 grid place-items-center transition"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            {paginationItems.map((item, index) =>
              item.type === "index" ? (
                <button
                  key={item.index}
                  onClick={() => setIdx(item.index)}
                  aria-label={`Go to review ${item.index + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    item.index === idx ? "w-8 bg-caramel shadow-glow" : "w-1.5 bg-foreground/25 hover:bg-foreground/50"
                  }`}
                />
              ) : (
                <span key={`ellipsis-${index}`} className="text-foreground/40 text-xs px-1 select-none">
                  …
                </span>
              )
            )}
          </div>

          <button
            onClick={() => go(1)}
            aria-label="Next review"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full glass hover:bg-caramel/20 grid place-items-center transition"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}



