import Link from "next/link";
import Image from "next/image";
import bloggyPhone from "../public/bloggyPhone.png";
import bloggyMac from "../public/bloggyMac.png";

export default function Bloggy() {
  const bloggyURL = "https://bloggy-inky.vercel.app/";

  return (
    <main>
      <section>
        <div className=" flex justify-between gap-2 text-4xl lg:text-6xl   text-bone font-fungis">
          <Link href={bloggyURL} target="_blank">
            <h2 className=" ">MISTER BLOGGY</h2>
          </Link>
          <h2 className="px-10">02</h2>
        </div>
        <div className="flex py-10">
          <Image src={bloggyMac} width={700} />
          <Image src={bloggyPhone} width={200} />
        </div>
      </section>
    </main>
  );
}
