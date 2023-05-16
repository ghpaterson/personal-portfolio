import Link from "next/link";
import Image from "next/image";
import bloggyPhone from "../public/bloggyPhone.png";
import bloggyMac from "../public/bloggyMac.png";
import ToLeft from "@/components/toleft";

export default function Bloggy() {
  const bloggyURL = "https://bloggy-inky.vercel.app/";

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <section>
        <div className="p-4">
          <ToLeft scrollToElement={scrollToElement} />
        </div>
        <div className=" flex justify-between gap-2 text-3xl lg:text-6xl   text-bone font-fungis">
          <Link href={bloggyURL} target="_blank">
            <h2 className=" ">MISTER BLOGGY</h2>
          </Link>
          <h2 className="px-10">02</h2>
        </div>
        <div className="flex mt-2">
          <Image src={bloggyMac} width={700} />
          <div className="sm:hidden">
            <Image src={bloggyPhone} width={200} />
          </div>
        </div>
      </section>
    </main>
  );
}
