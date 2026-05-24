import g1 from "@/assets/g1.jpg";
import g2 from "@/assets/g2.jpg";
import g3 from "@/assets/g3.jpg";
import g4 from "@/assets/g4.jpg";
import g5 from "@/assets/g5.jpg";
import g6 from "@/assets/g6.jpg";
import g7 from "@/assets/g7.jpg";
import g8 from "@/assets/g8.jpg";

const imgs = [
  { src: g5, span: "row-span-2", alt: "Masala chai" },
  { src: g2, span: "", alt: "Pizza" },
  { src: g4, span: "", alt: "Mocktail" },
  { src: g1, span: "row-span-2", alt: "Cafe interior" },
  { src: g6, span: "", alt: "Oreo milkshake" },
  { src: g3, span: "", alt: "Brownie bowl" },
  { src: g7, span: "", alt: "Burger and fries" },
  { src: g8, span: "row-span-2", alt: "Friends chilling" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-[0.4em] uppercase text-caramel mb-4">Café Moments</p>
          <h2 className="font-display text-4xl md:text-6xl">
            A taste of <span className="text-gradient italic">our world</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {imgs.map((it, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl shadow-soft group ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
