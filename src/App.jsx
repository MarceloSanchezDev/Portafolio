//components
import { Presentation } from "./components/Presentation";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { useEffect } from "react";

//style
import "./App.css";

function App() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-animate]");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      {/* Accesibilidad: saltar directo al contenido */}
      <a href="#contenido" className="skip-link">Saltar al contenido</a>

      <header>
        <Presentation />
      </header>

      <main id="contenido">
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
