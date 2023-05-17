import Link from "next/link";
import Image from "next/image";
import ToLeft from "@/components/toleft";
import blogMac from "../public/blogMac.png";
import postPhone from "../public/postPhone.png";

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
        <div className="flex py-6">
          <Image src={blogMac} width={700} />
          <Image src={postPhone} width={200} className="" />
        </div>
      </section>
    </main>
  );
}
