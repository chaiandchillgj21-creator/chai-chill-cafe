import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/cafe/Navbar";
import { Hero } from "@/components/cafe/Hero";
import { FeaturedDrinks } from "@/components/cafe/FeaturedDrinks";
import { About } from "@/components/cafe/About";
import { Menu } from "@/components/cafe/Menu";
import { Gallery } from "@/components/cafe/Gallery";
import { Reviews } from "@/components/cafe/Reviews";
import { Contact } from "@/components/cafe/Contact";
import { Footer } from "@/components/cafe/Footer";
import { FloatingButtons } from "@/components/cafe/FloatingButtons";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navbar />
      <Hero />
      <FeaturedDrinks />
      <About />
      <Menu />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
