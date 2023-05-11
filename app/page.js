"use client";

import About from "@/components/about";
import Projects from "@/components/projects";
import Hero from "@/components/hero";
import { motion as m } from "framer-motion";
import { AnimatePresence } from "framer-motion";

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
      <section id="projects">
        <Projects scrollToElement={scrollToElement} />
      </section>
    </main>
  );
}
