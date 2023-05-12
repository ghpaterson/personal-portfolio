import Link from "next/link";
import Image from "next/image";
import bloggy from "../public/bloggyscreen2.png";

export default function Bloggy() {
  const bloggyURL = "https://bloggy-inky.vercel.app/";

  return (
    <main>
      <section>
        <div className="flex gap-2  text-blu font-fungis">
          <Link href={bloggyURL} target="_blank">
            <h2 className=" text-4xl lg:text-6xl text-blu -mt-10">
              MISTER BLOGGY
            </h2>
          </Link>
        </div>
        <div className="relative bg-blu p-4">
          <Image src={bloggy} width={880} />
        </div>
      </section>
    </main>
  );
}
