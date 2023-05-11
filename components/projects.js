"use client";

import ToTop from "@/components/totop";
import ToLeft from "@/components/toleft";
import Smiley from "@/components/smiley";
import Image from "next/image";
import Ecoliday from "@/projects/ecoliday";
import Bloggy from "@/projects/bloggy";
import Decode from "@/projects/decode";
import Headless from "@/projects/headless";
import Details from "@/components/details";
const posts = [
  {
    id: 1,
    title: "ECOLIDAY",
    slug: "ecoliday",
    ml: "0",
  },
  {
    id: 2,
    title: "MR BLOGGY",
    slug: "bloggy",
    ml: "8",
  },
  {
    id: 3,
    title: "SPELLQUEST",
    slug: "spellquest",
    ml: "24",
  },
  {
    id: 4,
    title: "HEADLESS",
    slug: "headless",
    ml: "32",
  },
];

export default function Projects({ scrollToElement }) {
  const scrollToProject = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="snap-x snap-mandatory h-screen min-w-screen flex overflow-y-hidden">
      <section
        id="project-home"
        className="snap-start bg-blu flex-shrink-0 h-screen lg:w-screen w-full"
      >
        <ToTop scrollToElement={scrollToElement} />
        <div className="flex justify-center text-7xl text-bone font-fungis py-4">
          <h2 className="lg:hidden">"projects"</h2>
        </div>
        <div className="flex py-10  lg:py-0 lg:gap-32 lg:-mt-10">
          <div className="px-8 mt-4">
            <Image
              src="/projectsTitle.svg"
              width={70}
              height={20}
              className="hidden sm:block"
            />
          </div>
          <div className="flex justify-center">
            <ul className="flex flex-col items-center font-fungis text-6xl lg:text-9xl text-bone gap-2">
              {posts.map((post) => (
                <div key={post.id}>
                  <div
                    className={`hover:underline hover:cursor-pointer lg:ml-${post.ml}`}
                    onClick={() => scrollToProject(post.slug)}
                  >
                    {post.title}
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <Smiley />
        </div>
      </section>
      <section className="snap-start bg-bone flex-shrink-0 h-screen w-screen">
        <div className="p-4">
          <ToLeft scrollToElement={scrollToElement} />
        </div>
        <div id="ecoliday" className=" lg:flex  px-10">
          <Ecoliday />
          <div className="lg:px-6 lg:mt-24 mt-6">
            <Details
              desc="Ecoliday was built to let users make informed decisions about
                their personal travel. Users can estimate their carbon emissions
                using petrol car, electric car, train or commercial air travel"
              stack="JS | REACT | EXPRESS | NODE | MONGODB | TAILWIND"
            />
          </div>
        </div>
      </section>
      <section className="snap-start bg-bone flex-shrink-0 h-screen w-screen">
        <div className="p-4">
          <ToLeft scrollToElement={scrollToElement} />
        </div>
        <div id="bloggy" className="lg:flex px-10">
          <Bloggy />
          <div className="lg:px-6 lg:mt-24 mt-6">
            <Details
              desc="Mister Bloggy is a blog and chat web application I created so that my friends and I could share some of our favourite things in the world of music, food and design"
              stack="JS | REACT | NEXT | FIREBASE | TAILWIND"
            />
          </div>
        </div>
      </section>
      <section className="snap-start bg-bone flex-shrink-0 h-screen w-screen">
        <div className="p-4">
          <ToLeft scrollToElement={scrollToElement} />
        </div>
        <div id="spellquest" className="lg:flex px-10">
          <Decode />
          <div className="lg:px-6 lg:mt-24 mt-6">
            <Details
              desc="Jack's SpellQuest has been built and designed in collaboration with the Child Development Network to assist my nephew Jack on his journey to read. A sister site called Decode Care exists but I wanted to shout-out Jack! Currently being trialed by the kids with constant feedback"
              stack="JS | REACT | NEXT | TAILWIND"
            />
          </div>
        </div>
      </section>
      <section className="snap-start bg-bone flex-shrink-0 h-screen w-screen">
        <div className="p-4">
          <ToLeft scrollToElement={scrollToElement} />
        </div>
        <div id="headless" className="lg:flex px-10">
          <Headless />
          <div className="lg:px-6 lg:mt-24 mt-6">
            <Details
              desc="My own personal blog! I share my journey learning all things tech, including software development, design and typograph"
              stack="JS | REACT | NEXT | HYGRAPH CMS | GRAPHQL | TAILWIND"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
