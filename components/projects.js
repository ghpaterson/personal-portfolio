import ToTop from "@/components/totop";
import Smiley from "@/components/smiley";
import Link from "next/link";
import Image from "next/image";

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
    slug: "mrbloggy",
    ml: "8",
  },
  {
    id: 3,
    title: "DECODE CARE",
    slug: "decodecare",
    ml: "24",
  },
  {
    id: 4,
    title: "   HEADLESS",
    slug: "headless",
    ml: "32",
  },
];

export default function Projects({ homeRef, slug }) {
  return (
    <main className="snap-x snap-mandatory h-screen w-screen flex overflow-y-hidden">
      <section className="snap-start bg-blu flex-shrink-0 h-screen w-screen">
        <ToTop homeRef={homeRef} />
        <div className="flex gap-60">
          <div className="px-8">
            <Image src="/projects.svg" width={70} height={20} />
          </div>
          <div className="flex justify-center mt-10">
            <ul className="flex flex-col font-fungis text-8xl text-white gap-2">
              {posts.map((post) => (
                <Link key={post.id} href={`/${post.slug}`}>
                  <div className={`hover:underline ml-${post.ml}`}>
                    {post.title}
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <Smiley />
        </div>
      </section>
      <section className="snap-start bg-white flex-shrink-0 h-screen w-screen flex justify-center">
        <h2 className="text-6xl text-blu font-fungis">ECOLIDAY</h2>
      </section>
      <section className="snap-start bg-white flex-shrink-0 h-screen w-screen flex justify-center">
        <h2 className="text-6xl text-blu font-fungis">MISTER BLOGGY</h2>
      </section>
      <section className="snap-start bg-white flex-shrink-0 h-screen w-screen flex justify-center">
        <h2 className="text-6xl text-blu font-fungis">DECODE CARE</h2>
      </section>
      <section className="snap-start bg-white flex-shrink-0 h-screen w-screen flex justify-center">
        <h2 className="text-6xl text-blu font-fungis">HEADLESS</h2>
      </section>
    </main>
  );
}
