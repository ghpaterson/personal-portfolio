import Link from "next/link";
import Image from "next/image";
import bloggy from "../public/bloggyscreen2.png";

export default function Bloggy() {
  const bloggyURL = "https://bloggy-inky.vercel.app/";

  return (
    <main>
      <section>
        <div className="flex gap-2 ml-10 text-blu font-fungis">
          <Link href={bloggyURL} target="_blank">
            <h2 className="text-7xl text-blu -mt-10">MISTER BLOGGY</h2>
          </Link>
        </div>
        <div className="relative bg-blu p-4">
          <Image src={bloggy} width={900} />
        </div>
      </section>
    </main>
  );
}
