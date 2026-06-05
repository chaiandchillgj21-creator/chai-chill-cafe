import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CATEGORIES, MENU, type MenuCategory } from "./data";

export function Menu() {
  const [active, setActive] = useState<MenuCategory>("Tea");
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    if (q.trim()) {
      const needle = q.toLowerCase();
      const all: { name: string; price: number; cat: MenuCategory }[] = [];
      (CATEGORIES as MenuCategory[]).forEach((cat) => {
        (MENU[cat] as readonly (readonly [string, number])[]).forEach(([name, price]) => {
          if (name.toLowerCase().includes(needle)) all.push({ name, price, cat });
        });
      });
      return all;
    }
    return (MENU[active] as readonly (readonly [string, number])[]).map(
      ([name, price]) => ({ name, price, cat: active })
    );
  }, [active, q]);

  return (
    <section id="menu" className="relative py-20 sm:py-28 px-3 sm:px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 px-2">
          <p className="text-xs tracking-[0.4em] uppercase text-caramel mb-4">The Menu</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Crafted with <span className="text-gradient italic">soul</span>
          </h2>
          <p className="mt-5 text-sm sm:text-base text-foreground/70 leading-relaxed">
            From comforting chai to indulgent desserts — every item, lovingly prepared.
          </p>
        </div>

        <div className="glass-strong rounded-[2rem] p-3 sm:p-4 flex items-center gap-3 max-w-xl w-full mx-auto mb-14 border border-white/12 bg-[#28140f]/85 shadow-[0_20px_55px_-30px_rgba(184,118,44,0.32)] transition duration-200 ease-out hover:shadow-[0_22px_70px_-30px_rgba(184,118,44,0.38)] focus-within:border-caramel/30 focus-within:shadow-[0_24px_70px_-28px_rgba(184,118,44,0.4)] focus-within:ring-1 focus-within:ring-caramel/20 min-w-0">
          <span className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-br from-[#d89a58]/15 to-[#a75b28]/10 text-caramel shadow-soft transition duration-300 ease-out focus-within:scale-[1.02]">
            <Search size={22} className="text-caramel" />
          </span>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search the menu…"
            className="flex-1 min-w-0 bg-transparent outline-none py-4 text-sm sm:text-base placeholder:text-foreground/55 placeholder:tracking-[0.04em] text-foreground transition duration-200 ease-out focus:placeholder:text-foreground/40"
          />
        </div>

        <div className="w-full min-w-0 flex flex-nowrap items-center overflow-x-auto no-scrollbar touch-scroll-x justify-start gap-3 sm:justify-center sm:flex-wrap sm:overflow-visible sm:touch-auto mb-12 px-1 sm:px-0 pb-1">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`snap-start min-w-[110px] px-4 sm:px-5 py-3 rounded-full text-sm sm:text-base text-center tracking-wide transition-all duration-200 ease-out ${
                active === c
                  ? "bg-caramel-grad text-primary-foreground shadow-[0_18px_60px_-30px_rgba(184,118,44,0.35)] ring-1 ring-caramel/25"
                  : "glass text-foreground/85 hover:bg-caramel/12 active:scale-[0.98]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(({ name, price, cat }, i) => (
            <div
              key={name}
              className="glass rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:-translate-y-1 hover:bg-caramel/8 transition-all duration-500"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div className="min-w-0">
                <h3 className="font-display text-xl leading-snug">{name}</h3>
                <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/45 mt-1">{cat}</p>
              </div>
              <div className="font-display text-2xl sm:text-3xl text-caramel whitespace-nowrap">₹{price}</div>
            </div>
          ))}
          {items.length === 0 && (
            <p className="col-span-full text-center text-foreground/60 py-10">
              Nothing here. Try another search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
