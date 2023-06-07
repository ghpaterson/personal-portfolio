import { BsArrowsFullscreen } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { motion as m } from "framer-motion";
import lotus from "../public/lotus.png";
import gp from "../public/gp.png";

export default function Hero({ scrollToElement }) {
  const headlessURL = "https://headless-iota-five.vercel.app/";

  return (
    <main className="bg-blak h-full lg:h-screen lg:w-screen min-w-full bg-fixed">
      <m.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeIn" }}
      >
        <div className=" flex flex-col lg:flex-row justify-between lg:mx-24 lg:py-8">
          <div className="flex flex-col items-center gap-10 lg:gap-40 lg:-mr-40">
            <Image src={gp} width={500} alt="lotus" />
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1, ease: "easeIn" }}
              className="flex flex-col items-center lg:items-start text-sand text-xl lg:text-3xl font-mirage"
            >
              <h1>Graeme Paterson</h1>
              <div className="text-xl font-serif pt-6">
                <p>Creative Software Developer</p>
                <p>London, UK</p>
              </div>
            </m.div>
          </div>
          <ul className="lg:h-screen flex flex-col items-center gap-2 lg:items-end lg:justify-center font-mirage text-5xl lg:text-9xl py-10 lg:py-0  text-slate">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeIn" }}
              className="hover:cursor-pointer hover:rotate-3 hover:italic hover:text-sand"
              onClick={() => scrollToElement("about")}
            >
              ABOUT
            </m.div>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeIn" }}
              className="hover:cursor-pointer hover:rotate-3 hover:italic hover:text-sand"
              onClick={() => scrollToElement("projects")}
            >
              PROJECTS
            </m.div>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeIn" }}
              className="flex items-center gap-4 lg:gap-10 hover:rotate-3 hover:italic hover:text-sand"
            >
              <Link href={headlessURL} target="_blank">
                BLOG
              </Link>
              <div className="text-5xl lg:text-8xl -mt-2 lg:mt-4">
                <BsArrowsFullscreen />
              </div>
            </m.div>
          </ul>
        </div>
      </m.section>
    </main>
  );
}
