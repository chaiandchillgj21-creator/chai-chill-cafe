import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CATEGORIES, MENU, type MenuCategory } from "./data";

export function Menu() {
  const [active, setActive] = useState<MenuCategory>("Tea");
  const [q, setQ] = useState("");

  const items = useMemo(() => {
    const base = MENU[active] as readonly (readonly [string, number])[];
    if (!q.trim()) return base;
    const needle = q.toLowerCase();
    return base.filter(([name]) => name.toLowerCase().includes(needle));
  }, [active, q]);

  return (
    <section id="menu" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs tracking-[0.4em] uppercase text-caramel mb-4">The Menu</p>
          <h2 className="font-display text-4xl md:text-6xl">
            Crafted with <span className="text-gradient italic">soul</span>
          </h2>
          <p className="mt-5 text-foreground/70">
            From comforting chai to indulgent desserts — every item, lovingly prepared.
          </p>
        </div>

        <div className="glass-strong rounded-3xl p-3 flex items-center gap-3 max-w-md mx-auto mb-10">
          <Search size={18} className="ml-3 text-foreground/60" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search the menu…"
            className="flex-1 bg-transparent outline-none py-2 pr-3 text-sm placeholder:text-foreground/45"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 mb-12">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2.5 rounded-full text-sm tracking-wide transition-all ${
                active === c
                  ? "bg-caramel-grad text-primary-foreground shadow-glow"
                  : "glass hover:bg-caramel/15"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map(([name, price], i) => (
            <div
              key={name}
              className="glass rounded-2xl p-6 flex items-center justify-between gap-6 hover:-translate-y-1 hover:bg-caramel/8 transition-all duration-500"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <div>
                <h3 className="font-display text-xl leading-snug">{name}</h3>
                <p className="text-[11px] tracking-[0.3em] uppercase text-foreground/45 mt-1">{active}</p>
              </div>
              <div className="font-display text-2xl text-caramel whitespace-nowrap">₹{price}</div>
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
