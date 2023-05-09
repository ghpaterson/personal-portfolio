import ToTop from "@/components/totop";
import ToLeft from "@/components/toleft";
import Smiley from "@/components/smiley";
import Image from "next/image";
import Ecoliday from "@/projects/ecoliday";
import Bloggy from "@/projects/bloggy";
import Decode from "@/projects/decode";
import Headless from "@/projects/headless";

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

export default function Projects({ scrollToElement }) {
  const scrollToProject = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="snap-x snap-mandatory h-screen w-screen flex overflow-y-hidden">
      <section
        id="project-home"
        className="snap-start bg-blu flex-shrink-0 h-screen w-screen"
      >
        <ToTop scrollToElement={scrollToElement} />
        <div className="flex gap-60">
          <div className="px-8 -mt-6">
            <Image src="/projects.svg" width={70} height={20} />
          </div>
          <div className="flex justify-center">
            <ul className="flex flex-col font-fungis text-8xl text-bone gap-2">
              {posts.map((post) => (
                <div key={post.id}>
                  <div
                    className={`hover:underline hover:cursor-pointer ml-${post.ml}`}
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
        <div id="ecoliday" className="-mt-2 px-10">
          <Ecoliday />
        </div>
      </section>
      <section className="snap-start bg-bone flex-shrink-0 h-screen w-screen">
        <div className="p-4">
          <ToLeft scrollToElement={scrollToElement} />
        </div>
        <div id="bloggy" className="-mt-2 px-10">
          <Bloggy />
        </div>
      </section>
      <section className="snap-start bg-bone flex-shrink-0 h-screen w-screen">
        <div className="p-4">
          <ToLeft scrollToElement={scrollToElement} />
        </div>
        <div id="decode" className="-mt-2 px-10">
          <Decode />
        </div>
      </section>
      <section className="snap-start bg-bone flex-shrink-0 h-screen w-screen">
        <div className="p-4">
          <ToLeft scrollToElement={scrollToElement} />
        </div>
        <div id="headless" className="-mt-2 px-10">
          <Headless />
        </div>
      </section>
    </main>
  );
}
