import { Quote, Star } from "lucide-react";
import { REVIEWS } from "./data";

export function Reviews() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-caramel/10 blur-[140px]" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-caramel mb-4">Loved by guests</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Words from our <span className="text-gradient italic">family</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <article
              key={r.name}
              className="glass-strong rounded-3xl p-7 hover:-translate-y-1 hover:shadow-glow transition-all duration-500"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <Quote className="text-caramel/60" size={28} />
              <p className="mt-4 text-foreground/80 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center justify-between">
                <p className="font-display text-lg">{r.name}</p>
                <div className="flex gap-0.5 text-caramel">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
