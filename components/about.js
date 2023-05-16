import Image from "next/image";
import aboutCircle from "../public/aboutCircle.svg";
import Reveal from "@/components/utils/reveal";
import { GoSync } from "react-icons/go";

export default function About() {
  const githubURL = "https://github.com/ghpaterson";
  const linkedinURL = "https://www.linkedin.com/in/graeme-paterson-25b096268/";
  return (
    <main className="bg-bone h-full w-screen bg-fixed">
      <Reveal>
        <section
          id="small-screen"
          className="flex justify-center text-7xl text-blu font-fungis py-4 mt-10"
        >
          <h2 className="lg:hidden">"about"</h2>
        </section>
      </Reveal>
      <Reveal>
        <section className="flex justify-start items-end pb-6">
          <div className="px-8 mt-4">
            <Image src={aboutCircle} width={200} />
          </div>
          <div>
            <h1 className="text-blu text-8xl font-fungis mx-40">LONDON, UK</h1>
          </div>
        </section>
      </Reveal>
      <Reveal>
        <section className="flex justify-center gap-10 text-blu text-8xl font-fungis ">
          <h2>CAREER</h2>
          <GoSync />
          <h2>SWITCHER</h2>
        </section>
      </Reveal>
      <Reveal>
        <section className="flex justify-between text-blu  font-fungis py-4 px-6"></section>
      </Reveal>
      <Reveal>
        <section className="flex flex-col gap-4 justify-between items-center text-blu text-8xl font-fungis ">
          <h3>MUSIC, FOOD, SPORTS &</h3>
          <h3>DESIGN ENTHUSIAST</h3>
          <h2>EX-PARAMEDIC</h2>
        </section>
      </Reveal>
    </main>
  );
}
