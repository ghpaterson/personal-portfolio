import Image from "next/image";
import aboutCircle from "../public/aboutCircle.svg";
import Reveal from "@/components/utils/reveal";
import { GoSync } from "react-icons/go";

export default function About() {
  return (
    <main className="bg-bone h-full w-screen bg-fixed">
      <Reveal>
        <section className="md:flex md:justify-between items-end pt-14 pb-10 md:px-10 text-blu text-4xl md:text-7xl font-fungis">
          <Image src={aboutCircle} width={200} alt="about-roundel" />
          <h1 className="">LONDON, UK</h1>
        </section>
      </Reveal>
      <Reveal>
        <section className="flex justify-end gap-2 pb-10 md:mx-10 md:gap-10 text-blu text-4xl md:text-7xl font-fungis ">
          <h2>CAREER</h2>
          <GoSync />
          <h2>SWITCHER</h2>
        </section>
      </Reveal>

      <section className="flex flex-col gap-4 justify-between items-end text-blu text-4xl md:text-7xl font-fungis pb-32 md:px-10 ">
        <Reveal>
          <div className="flex flex-col items-end gap-10">
            <h3>MUSIC, FOOD, SPORTS &</h3>
            <h3>DESIGN ENTHUSIAST</h3>
          </div>
        </Reveal>
        <Reveal>
          <div className="bg-blu text-bone flex items-center justify-end">
            <h2 className=" pt-4 px-2">EX-PARAMEDIC</h2>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
