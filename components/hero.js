import { BsArrowsFullscreen } from "react-icons/bs";
import Image from "next/image";
import portrait from "../public/portrait-cropped.png";
import Link from "next/link";

export default async function Hero({ scrollToElement }) {
  const headlessURL = "https://headless-iota-five.vercel.app/";

  return (
    <main className="bg-blu h-screen w-screen bg-fixed">
      <section>
        <div className="flex relative">
          <ul className="flex flex-col font-fungis text-9xl text-bone pt-32 ml-24 z-10">
            <div
              className="hover:cursor-pointer"
              onClick={() => scrollToElement("about")}
            >
              ABOUT
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() => scrollToElement("projects")}
            >
              PROJECTS
            </div>
            <div className="flex items-center gap-10">
              <Link href={headlessURL} target="_blank">
                BLOG
              </Link>
              <div className="text-8xl -mt-6">
                <BsArrowsFullscreen />
              </div>
            </div>
          </ul>
          <div className="z-0 mt-10 -ml-10">
            <Image src={portrait} width={400} />
          </div>
        </div>
      </section>
      <section>
        <div className="flex justify-center my-12 ml-32 text-3xl text-bone font-poppins">
          <div>
            <p>Graeme Paterson | Software Developer </p>
            <p className="ml-8">Career Switcher | London. UK</p>
          </div>
        </div>
      </section>
    </main>
  );
}
