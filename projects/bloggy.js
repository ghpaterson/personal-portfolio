import Link from "next/link";
import Image from "next/image";
import bloggy from "../public/bloggyscreen2.png";

export default async function Bloggy() {
  const bloggyURL = "https://bloggy-inky.vercel.app/";

  return (
    <main>
      <section>
        <div className="flex gap-2 ml-10 text-blu font-fungis">
          <Link href={bloggyURL} target="_blank">
            <h2 className="text-8xl text-blu -mt-10">MISTER BLOGGY</h2>
          </Link>
        </div>
        <div className="flex gap-10">
          <Image src={bloggy} width={900} />
          <h1 className="text-blu text-6xl font-fungis">"click"</h1>
          <p className="text-blu text-2xl">
            Mister Bloggy is a blog and chat website that my friends and I share
            things that excite us in the world of music, food and design
          </p>
        </div>
      </section>
    </main>
  );
}
