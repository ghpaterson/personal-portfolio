import Image from "next/image";
import aboutCircle from "../public/aboutCircle.svg";
import londonBeach from "../public/londonBeach.png";
import picnic from "../public/picnic.png";
import ambulance from "../public/ambulance.png";
import { BsMusicNote } from "react-icons/bs";

export default function About() {
  const githubURL = "https://github.com/ghpaterson";
  const linkedinURL = "https://www.linkedin.com/in/graeme-paterson-25b096268/";
  return (
    <main className="bg-bone h-full w-screen bg-fixed">
      <section
        id="small-screen"
        className="flex justify-center text-7xl text-blu font-fungis py-4 mt-10"
      >
        <h2 className="lg:hidden">"about"</h2>
      </section>
      <section className="flex items-center">
        <div className="px-8 mt-4">
          <Image src={aboutCircle} width={200} />
        </div>
        <h1 className="text-blu text-7xl font-fungis px-10">LONDON, UK</h1>
        <Image
          src={londonBeach}
          width={350}
          alt="london-beach"
          className="bg-blu p-2 ml-6 opacity-90"
        />
      </section>
      <section className="flex justify-center text-blu text-7xl font-fungis ml-32 -mt-10">
        <h2>CAREER</h2>
        <h2 className="mt-16 -ml-10">SWITCHER</h2>
      </section>
      <section className="flex justify-between text-blu  font-fungis py-4 px-6">
        <Image
          src={picnic}
          width={500}
          alt="picnic"
          className="p-2 opacity-90 ml-20 bg-blu -mt-16"
        />
        {/* <div className="text-8xl mt-10">
          <BsMusicNote />
        </div> */}
        <Image
          src={ambulance}
          width={375}
          alt="ambulance"
          className="bg-blu p-2 mr-20"
        />
      </section>
      <section className="flex justify-between items-center text-bone text-7xl font-fungis px-16">
        <div className="flex flex-col items-center text-blu text-4xl p-2 ml-12">
          <h3>JAVASCRIPT . REACT . RUBY</h3>
          <h3>MUSIC . FOOD . SPORTS</h3>
        </div>
        <h2 className="bg-blu p-1">EX-PARAMEDIC</h2>
      </section>
    </main>
  );
}
