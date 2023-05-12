import { BsArrowsFullscreen } from "react-icons/bs";
import Image from "next/image";
import portrait from "../public/portrait-cropped.png";
import Link from "next/link";
import { motion as m } from "framer-motion";

export default function Hero({ scrollToElement }) {
  const headlessURL = "https://headless-iota-five.vercel.app/";

  return (
    <main className="bg-blu h-full lg:h-screen lg:w-screen min-w-full bg-fixed">
      <section>
        <div className=" flex flex-col lg:flex-row overflow-hidden">
          <m.ul
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
            className="flex flex-col font-fungis text-7xl lg:text-9xl text-bone pt-32 ml-20 lg:ml-36 z-10 "
          >
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
              <div className="text-5xl lg:text-8xl -mt-2 lg:-mt-6">
                <BsArrowsFullscreen />
              </div>
            </div>
          </m.ul>
          <m.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="z-0 -mt-72 ml-6 lg:mt-10 lg:-ml-10 px-10 lg:px-0 overflow-hidden"
          >
            <Image src={portrait} width={450} />
          </m.div>
        </div>
      </section>
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <div className="flex justify-center py-8 lg:ml-32 text-base lg:text-2xl text-bone font-poppins">
          <div>
            <p>Graeme Paterson | Software Developer </p>
            <p className="ml-8">Career Switcher | London. UK</p>
          </div>
        </div>
      </m.section>
    </main>
  );
}
