import Image from "next/image";
import skillsCircle from "../public/skillsCircle.svg";
import Reveal from "@/components/utils/reveal";
import { BsCode, BsCodeSlash } from "react-icons/bs";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

export default function Skills() {
  return (
    <main className=" w-screen bg-bone">
      <section className="flex justify-end lg:px-10 lg:pt-10 text-blu lg:text-7xl font-fungis underline">
        <h1>SKILLS</h1>
      </section>
      <section className="flex flex-col gap-10 items-start lg:px-10 lg:pt-10 text-blu lg:text-7xl font-fungis">
        <h2>JAVASCRIPT * TYPESCRIPT</h2>
        <h2>RUBY</h2>
        <h2>MONGO * EXPRESS * REACT * NODE</h2>
      </section>
      <section className="flex flex-col gap-10 items-start lg:py-10 lg:px-10 text-blu text-7xl font-fungis">
        <h2>TAILWIND CSS</h2>
        <div>
          <h2 className="flex">
            SEMANTIC{" "}
            <span>
              <MdArrowBackIos />
            </span>
            HTML
            <span>
              <MdArrowForwardIos />
            </span>
          </h2>
        </div>
        <h2>REST API</h2>
      </section>
      {/* <section className="grid grid-col-1 md:grid-cols-2 md:grid-rows-2 pt-32">
        <Reveal>
          <div className="bg-blu flex flex-col gap-4 md:pl-32 text-white pt-4 px-2 pl-20  text-3xl md:text-7xl font-fungis">
            <h2>JAVASCRIPT</h2>
            <h2>TYPESCRIPT</h2>
            <h2>RUBY</h2>
            <h2>MERN STACK</h2>
            <h2>TAILWIND CSS</h2>
            <h2>REST API</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="flex flex-col mt-6 md:mt-0 items-center gap-16">
            <Image
              src={skillsCircle}
              width={200}
              alt="skills-circle"
              className="-mr-32"
            />
            <div>
              <div className="text-blu text-4xl md:text-7xl font-fungis px-20 mr-20">
                <h2>DREAM JOBS</h2>
                <h3 className="font-fungis text-2xl md:text-4xl text-blu pt-6">
                  Climate Positive
                </h3>
                <p className="w-96 text-base md:text-lg pt-4 font-poppins">
                  I firmly advocate for universal access to a clean and healthy
                  environment. Climate change poses a significant threat to our
                  ecosystems, biodiversity, and human livelihoods. I would love
                  the opportunity to work for a company that is addressing this
                  global crisis with urgency, innovation, and collaborative
                  efforts.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="text-blu font-poppins py-10 px-20 md:px-0 md:pl-32 md:-mt-16">
            <h2 className="text-2xl md:text-4xl font-fungis">Healthcare</h2>
            <p className="w-96 h-66 text-base md:text-lg pt-4">
              I am a firm believer in the principle that everyone should have
              universal access to healthcare, regardless of their socio-economic
              status or geographical location. Access to quality healthcare is
              not just a basic human right, but also a fundamental pillar for
              the well-being and progress of any society. With my extensive
              experience working in public healthcare systems, I am deeply
              motivated to harness the power of technology to make universal
              healthcare a tangible reality for all.
            </p>
          </div>
        </Reveal>
        <Reveal>
          <div className="text-blu font-poppins py-10 px-20 md:pl-24 md:pt-10">
            <h2 className="text-2xl md:text-4xl font-fungis">
              Design and the Arts
            </h2>
            <p className="w-96 h-66 text-base md:text-lg pt-4">
              Art and design have the power to inspire, challenge, and enrich
              our lives, fostering creativity, cultural understanding, and
              personal growth. Drawing from my experience and passion for art
              and design, I am eager to leverage technology and innovative
              approaches to ensure universal access to the transformative world
              of creativity.
            </p>
          </div>
        </Reveal>
      </section> */}
    </main>
  );
}
