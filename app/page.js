"use client";

import About from "@/components/about";
import Projects from "@/components/projects";
import Hero from "@/components/hero";
import { AnimatePresence } from "framer-motion";
import Reveal from "@/components/utils/reveal";

export default function Home() {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <section id="hero">
        <AnimatePresence>
          <Hero key="hero" scrollToElement={scrollToElement} />
        </AnimatePresence>
      </section>
      <section id="about">
        <About />
      </section>

      <Reveal>
        <section id="projects">
          <Projects scrollToElement={scrollToElement} />
        </section>
      </Reveal>
    </main>
  );
}
