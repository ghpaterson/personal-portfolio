import { BsArrowsFullscreen } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";
import lotus from "../public/lotus.png";

export default function Hero({ scrollToElement }) {
  const headlessURL = "https://headless-iota-five.vercel.app/";

  return (
    <main className="bg-black h-full lg:h-sreen lg:w-screen min-w-full bg-fixed">
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.25, ease: "easeIn" }}
      >
        <div className=" flex flex-col lg:flex-row justify-between lg:mx-24 lg:my-8">
          <div className="flex flex-col items-center gap-10 lg:gap-40">
            <Image src={lotus} width={400} alt="lotus" />
            <div className="flex flex-col items-center lg:items-start text-sand text-xl lg:text-3xl font-mirage">
              <h1>Graeme Paterson</h1>
              <div className="text-xl font-serif pt-6">
                <p>Creative Software Developer</p>
                <p>London, UK</p>
              </div>
            </div>
          </div>
          <ul className="lg:h-screen flex flex-col items-center gap-2 lg:items-end lg:justify-center font-mirage text-5xl lg:text-9xl py-10 lg:py-0  text-sand">
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
            <div className="flex items-center gap-4 lg:gap-10">
              <Link href={headlessURL} target="_blank">
                BLOG
              </Link>
              <div className="text-5xl lg:text-8xl -mt-2 lg:mt-4">
                <BsArrowsFullscreen />
              </div>
            </div>
          </ul>
        </div>
      </m.section>
    </main>
  );
}
