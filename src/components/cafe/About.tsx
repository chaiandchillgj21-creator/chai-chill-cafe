import g1 from "@/assets/g1.jpg";
import { Coffee, Heart, Sparkles } from "lucide-react";

export function About() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-caramel/10 blur-[120px]" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
            <img src={g1} alt="Chai & Chill cafe interior" loading="lazy" width={1024} height={1024} className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 shadow-glow w-44">
            <p className="font-display text-3xl text-caramel">10+</p>
            <p className="text-xs text-foreground/70 mt-1">years brewing happiness in Surat</p>
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-caramel mb-4">Our Story</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Why choose <span className="text-gradient italic">Chai & Chill?</span>
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            At Chai &amp; Chill Cafe, we serve handcrafted beverages, delicious snacks,
            and unforgettable café vibes. Whether you're relaxing with friends or
            enjoying your personal coffee time, we create the perfect atmosphere.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { icon: Coffee, t: "Handcrafted", d: "Every cup, made with care" },
              { icon: Heart, t: "Cozy vibes", d: "A second home in Vesu" },
              { icon: Sparkles, t: "Pure quality", d: "Honest ingredients only" },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="glass rounded-2xl p-5">
                <Icon className="text-caramel" size={22} />
                <p className="mt-3 font-medium">{t}</p>
                <p className="text-xs text-foreground/60 mt-1">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
