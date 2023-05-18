import { BsArrowsFullscreen } from "react-icons/bs";
import Image from "next/image";
import portrait from "../public/portrait-cropped.png";
import Link from "next/link";
import { motion as m } from "framer-motion";

export default function Hero({ scrollToElement }) {
  const headlessURL = "https://headless-iota-five.vercel.app/";
  const githubURL = "https://github.com/ghpaterson";
  const linkedinURL = "https://www.linkedin.com/in/graeme-paterson-25b096268/";

  return (
    <main className="bg-blu h-full lg:w-screen min-w-full bg-fixed">
      <section>
        <div className=" flex flex-col lg:flex-row overflow-hidden ">
          <m.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.25, ease: "easeIn" }}
            className="flex flex-col font-fungis text-6xl lg:text-9xl text-bone pt-20 md:pt-16 ml-20 lg:ml-36 z-10 "
          >
            <div
              className="hover:cursor-pointer"
              onClick={() => scrollToElement("about")}
            >
              ABOUT
            </div>
            <div
              className="hover:cursor-pointer"
              onClick={() => scrollToElement("skills")}
            >
              SKILLS
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
        <div className="flex justify-center pt-10 pb-32 lg:ml-32 text-sm lg:text-2xl text-bone font-poppins">
          <div className="flex flex-col items-center ">
            <p>GRAEME PATERSON * SOFTWARE DEVELOPER </p>
            <div className="flex justify-center gap-4">
              <p>GHPATERSON @ GMAIL.COM </p>
              <Link href={linkedinURL} target="_blank" alt="linkedin">
                {" "}
                LINKEDIN{" "}
              </Link>
              <Link href={githubURL} target="_blank" alt="github">
                {" "}
                GITHUB
              </Link>
            </div>
          </div>
        </div>
      </m.section>
    </main>
  );
}
