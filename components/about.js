import Image from "next/image";
import Link from "next/link";
import aboutCircle from "../public/aboutCircle.svg";
import Reveal from "@/components/utils/reveal";
import { GoSync } from "react-icons/go";
import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function About() {
  const githubURL = "https://github.com/ghpaterson";
  const linkedinURL = "https://www.linkedin.com/in/graeme-paterson-25b096268/";
  return (
    <main className="bg-bone h-full w-screen bg-fixed">
      <Reveal>
        <section className="md:flex md:justify-start items-end py-6">
          <div className=" px-8 mt-10 md:mt-4">
            <Image src={aboutCircle} width={200} />
          </div>
          <div className="flex flex-col items-center justify-center gap-6 text-blu text-2xl md:text-5xl font-fungis">
            <div className="flex items-center gap-6 md:-mt-4">
              <Link href={githubURL} target="_blank">
                <BsGithub />
              </Link>
              <Link href={linkedinURL} target="_blank">
                <BsLinkedin />
              </Link>
              <Link href="/CV.pdf" target="_blank">
                <h1 className="mt-2 md:mt-4 text-2xl md:text-6xl">CV</h1>
              </Link>
            </div>
            <h1 className="text-blu text-4xl md:text-8xl font-fungis md:mx-40">
              LONDON, UK
            </h1>
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className="flex justify-center gap-2 pb-4 md:gap-10 text-blu text-4xl md:text-8xl font-fungis ">
          <h2>CAREER</h2>
          <GoSync />
          <h2>SWITCHER</h2>
        </section>
      </Reveal>

      <section className="flex flex-col gap-4 justify-between items-center text-blu text-4xl md:text-8xl font-fungis pb-4 ">
        <Reveal>
          <div className="flex flex-col items-center gap-4">
            <h3>MUSIC, FOOD, SPORTS &</h3>
            <h3>DESIGN ENTHUSIAST</h3>
          </div>
        </Reveal>
        <Reveal>
          <div className="bg-blu text-bone flex items-center">
            <h2 className=" pt-4 px-2">EX-PARAMEDIC</h2>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
