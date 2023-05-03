import ToTop from "@/components/totop";
import Smiley from "@/components/smiley";
import Image from "next/image";
import { useRef } from "react";

const posts = [
  {
    id: 1,
    title: "ECOLIDAY",
    slug: "ecoliday",
    ml: "0",
    ref: "ecoliday",
  },
  {
    id: 2,
    title: "MR BLOGGY",
    slug: "bloggy",
    ml: "8",
    ref: "bloggy",
  },
  {
    id: 3,
    title: "DECODE CARE",
    slug: "decode",
    ml: "24",
    ref: "decode",
  },
  {
    id: 4,
    title: "HEADLESS",
    slug: "headless",
    ml: "32",
    ref: "headless",
  },
];

export default function Projects({ homeRef }) {
  const refs = {
    ecoliday: useRef(null),
    bloggy: useRef(null),
    decode: useRef(null),
    headless: useRef(null),
  };

  const scrollToProject = (projectRef) => {
    window.scrollTo({
      left: projectRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <main className="snap-x snap-mandatory h-screen w-screen flex overflow-y-hidden">
      <section className="snap-start bg-blu flex-shrink-0 h-screen w-screen">
        <ToTop homeRef={homeRef} />
        <div className="flex gap-60">
          <div className="px-8 -mt-6">
            <Image src="/projects.svg" width={70} height={20} />
          </div>
          <div className="flex justify-center">
            <ul className="flex flex-col font-fungis text-8xl text-white gap-2">
              {posts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => scrollToProject(refs[post.ref])}
                >
                  <div
                    className={`hover:underline hover:cursor-pointer ml-${post.ml}`}
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
      <section
        ref={refs.ecoliday}
        className="snap-start bg-white flex-shrink-0 h-screen w-screen flex justify-center"
      >
        <h2 className="text-6xl text-blu font-fungis">ECOLIDAY</h2>
      </section>
      <section
        ref={refs.bloggy}
        className="snap-start bg-white flex-shrink-0 h-screen w-screen flex justify-center"
      >
        <h2 className="text-6xl text-blu font-fungis">MISTER BLOGGY</h2>
      </section>
      <section
        ref={refs.decode}
        className="snap-start bg-white flex-shrink-0 h-screen w-screen flex justify-center"
      >
        <h2 className="text-6xl text-blu font-fungis">DECODE CARE</h2>
      </section>
      <section
        ref={refs.headless}
        className="snap-start bg-white flex-shrink-0 h-screen w-screen flex justify-center"
      >
        <h2 className="text-6xl text-blu font-fungis">HEADLESS</h2>
      </section>
    </main>
  );
}
