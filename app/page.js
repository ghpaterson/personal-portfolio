"use client";

import About from "@/components/about";
import Projects from "@/components/projects";
import Hero from "@/components/hero";

export default function Home({ posts }) {
  return (
    <main>
      <div id="hero">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
    </main>
  );
}
