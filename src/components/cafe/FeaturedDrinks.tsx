import cap from "@/assets/cappuccino.jpg";
import haz from "@/assets/hazelnut.jpg";
import irish from "@/assets/irish.jpg";
import hot from "@/assets/hotchoc.jpg";

const items = [
  { img: cap, name: "Cappuccino", desc: "Velvety espresso crowned with silky steamed milk." },
  { img: haz, name: "Hazelnut Coffee", desc: "Nutty indulgence with a chilled, creamy finish." },
  { img: irish, name: "Irish Cold Coffee", desc: "Slow-poured layers, bold and unforgettable." },
  { img: hot, name: "Hot Chocolate", desc: "Rich melted cocoa, the warmest hug in a cup." },
];

export function FeaturedDrinks() {
  return (
    <section id="drinks" className="relative py-20 sm:py-28 px-3 sm:px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14 px-2">
          <p className="text-xs tracking-[0.4em] uppercase text-caramel mb-4">Signature Pours</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl leading-tight">
            Brewed with <span className="text-gradient italic">love</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-foreground/70 leading-relaxed">
            Hand-selected favourites, crafted by our baristas every single day.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <article
              key={it.name}
              className="group glass rounded-3xl overflow-hidden shadow-soft hover:-translate-y-2 hover:shadow-glow transition-all duration-500"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={it.img}
                  alt={it.name}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl">{it.name}</h3>
                <p className="mt-2 text-sm text-foreground/65 leading-relaxed">{it.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
