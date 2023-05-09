"use client";

import About from "@/components/about";
import Projects from "@/components/projects";
import Hero from "@/components/hero";

export default function Home() {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <div id="hero">
        <Hero scrollToElement={scrollToElement} />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects scrollToElement={scrollToElement} />
      </div>
    </main>
  );
}
