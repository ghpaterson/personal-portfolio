import Image from "next/image";
import Link from "next/link";
import arrowwhite from "../public/arrow-white.svg";

export default function Home() {
  const headlessURL = "https://headless-iota-five.vercel.app/";
  return (
    <main className="bg-blu h-screen w-screen">
      <section>
        <ul className="flex flex-col font-fungis text-9xl text-white pt-32 ml-20">
          <Link href="#">ABOUT</Link>
          <Link href="/projects">PROJECTS</Link>
          <div className="flex items-center gap-10">
            <Link href={headlessURL} target="_blank">
              BLOG
            </Link>
            <Image src={arrowwhite} width={75} className="-mt-6" />
          </div>
        </ul>
      </section>
      <section>
        <div className="flex justify-center my-10 ml-32 font-fungis text-3xl text-white">
          <div>
            <p>Graeme Paterson. Software Developer.</p>
            <p className="ml-8">Career Switcher. London. UK</p>
          </div>
        </div>
      </section>
    </main>
  );
}
