import ToTop from "@/components/totop";
import ToLeft from "@/components/toleft";
import Smiley from "@/components/smiley";
import Image from "next/image";
import { useRef } from "react";

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
    title: "DECODE CARE",
    slug: "decode",
    ml: "24",
  },
  {
    id: 4,
    title: "HEADLESS",
    slug: "headless",
    ml: "32",
  },
];

export default function Projects({ projectsRef, homeRef }) {
  const ecolidayRef = useRef(null);
  const bloggyRef = useRef(null);
  const decodeRef = useRef(null);
  const headlessRef = useRef(null);
  // const projectsRef = useRef(null);

  const handleProjectScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="snap-x snap-mandatory h-screen w-screen flex overflow-y-hidden">
      <section
        className="snap-start bg-blu flex-shrink-0 h-screen w-screen"
        ref={projectsRef}
      >
        <ToTop homeRef={homeRef} />
        <div className="flex gap-60">
          <div className="px-8 -mt-6">
            <Image src="/projects.svg" width={70} height={20} />
          </div>
          <div className="flex justify-center">
            <ul className="flex flex-col font-fungis text-8xl text-white gap-2">
              {posts.map((post) => (
                <div key={post.id}>
                  <div
                    className={`hover:underline hover:cursor-pointer ml-${post.ml}`}
                    onClick={() => handleProjectScroll(eval(`${post.slug}Ref`))}
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
        className="snap-start bg-white flex-shrink-0 h-screen w-screen flex"
        ref={ecolidayRef}
      >
        <div className="flex flex-col">
          <div>
            <ToLeft scrollToRef={projectsRef} />
          </div>
          <div className="">
            <h2 className="text-6xl text-blu font-fungis">ECOLIDAY</h2>
          </div>
        </div>
      </section>
      <section
        className="snap-start bg-white flex-shrink-0 h-screen w-screen flex justify-center"
        ref={bloggyRef}
      >
        <ToLeft scrollToRef={projectsRef} />
        <h2 className="text-6xl text-blu font-fungis">MISTER BLOGGY</h2>
      </section>
      <section
        className="snap-start bg-white flex-shrink-0 h-screen w-screen flex justify-center"
        ref={decodeRef}
      >
        <ToLeft scrollToRef={projectsRef} />
        <h2 className="text-6xl text-blu font-fungis">DECODE CARE</h2>
      </section>
      <section
        className="snap-start bg-white flex-shrink-0 h-screen w-screen flex justify-center"
        ref={headlessRef}
      >
        <ToLeft scrollToRef={projectsRef} />
        <h2 className="text-6xl text-blu font-fungis">HEADLESS</h2>
      </section>
    </main>
  );
}
