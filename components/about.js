import Image from "next/image";
import aboutCircle from "../public/aboutCircle.svg";
import Reveal from "@/components/utils/reveal";
import { GoSync } from "react-icons/go";
import flower from "../public/flower.svg";
import ambulance from "../public/ambulance.svg";

export default function About() {
  return (
    <main className="bg-bone h-full w-screen bg-fixed">
      <Reveal>
        <section className="flex flex-col items-center gap-20 md:flex-row md:justify-between md:items-end pt-14 pb-10 md:px-10 text-blu text-3xl md:text-7xl font-fungis">
          <Image src={aboutCircle} width={200} alt="about-roundel" />
          <h1 className="">LONDON, UK</h1>
        </section>
      </Reveal>
      <Reveal>
        <section className="flex justify-center md:justify-end gap-2 pb-10 md:mx-10 md:gap-10 text-blu text-3xl md:text-7xl font-fungis ">
          <h2>CAREER</h2>
          <GoSync />
          <h2>SWITCHER</h2>
        </section>
      </Reveal>

      <section className="flex flex-col gap-10 items-center md:justify-between md:items-end text-blu text-3xl md:text-7xl font-fungis md:pb-32 md:px-10 ">
        <Reveal>
          <div className="flex flex-col items-center md:items-end gap-10">
            <h3>MUSIC, FOOD, SPORTS &</h3>
            <h3>DESIGN ENTHUSIAST</h3>
          </div>
        </Reveal>
        <Reveal>
          <div className=" text-bone flex items-center justify-between mb-20">
            <div>
              <h2 className="bg-blu pt-4 px-2">EX-PARAMEDIC</h2>
            </div>
          </div>
        </Reveal>
      </section>
      <Reveal>
        <section className="flex justify-center lg:justify-start pb-20 lg:-mt-96 lg:ml-40 lg:pb-32">
          <Image src={ambulance} width={250} alt="flower" />
        </section>
      </Reveal>
    </main>
  );
}
