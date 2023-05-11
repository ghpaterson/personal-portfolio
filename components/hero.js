import { BsArrowsFullscreen } from "react-icons/bs";
import Image from "next/image";
import portrait from "../public/portrait-cropped.png";
import Link from "next/link";
import { motion as m } from "framer-motion";

export default function Hero({ scrollToElement }) {
  const headlessURL = "https://headless-iota-five.vercel.app/";

  return (
    <main className="bg-blu h-screen w-screen bg-fixed">
      <section>
        <div className="flex">
          <m.ul
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1 }}
            className="flex flex-col font-fungis text-9xl text-bone pt-32 ml-24 z-10"
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
            <div className="flex items-center gap-10">
              <Link href={headlessURL} target="_blank">
                BLOG
              </Link>
              <div className="text-8xl -mt-6">
                <BsArrowsFullscreen />
              </div>
            </div>
          </m.ul>
          <m.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: "0%", opacity: 1 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="z-0 mt-10 -ml-10"
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
        <div className="flex justify-center my-12 ml-32 text-3xl text-bone font-poppins">
          <div>
            <p>Graeme Paterson | Software Developer </p>
            <p className="ml-8">Career Switcher | London. UK</p>
          </div>
        </div>
      </m.section>
    </main>
  );
}
