import ToTop from "@/components/totop";
import Smiley from "@/components/smiley";
import Link from "next/link";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "ECOLIDAY",
    slug: "ecoliday",
    ml: "8",
    photo: {
      url: "https://example.com/ecoliday.png",
    },
  },
  {
    id: 2,
    title: "MR BLOGGY",
    slug: "mrbloggy",
    ml: "4",
    photo: {
      url: "https://example.com/mrbloggy.png",
    },
  },
  {
    id: 3,
    title: "DECODE CARE",
    slug: "decodecare",
    ml: "8",
    photo: {
      url: "https://example.com/decodecare.png",
    },
  },
  {
    id: 4,
    title: "   HEADLESS",
    slug: "headless",
    ml: "20",
    photo: {
      url: "https://example.com/headless.png",
    },
  },
];

export default function Projects({ homeRef, slug }) {
  return (
    <main className="h-full bg-blu">
      <ToTop homeRef={homeRef} />
      <section className="h-full bg-blu">
        <div className="flex gap-60">
          <div className="px-8 -mt-6">
            <Image src="/projects.svg" width={70} height={20} />
          </div>
          <div className="flex justify-center mt-6">
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
      </section>
      <Smiley />
    </main>
  );
}
