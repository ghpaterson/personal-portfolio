import Image from "next/image";
import skillsRound from "../public/skills-round.svg";
import Reveal from "@/components/utils/reveal";
import { BsCode, BsCodeSlash } from "react-icons/bs";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import laptop from "../public/laptop.svg";
import flower from "../public/flower.svg";

export default function Skills() {
  return (
    <main className=" w-screen bg-blu">
      <Reveal>
        <section className="flex justify-center lg:justify-end pt-20  lg:px-10 lg:pt-20 ">
          <Image src={skillsRound} width={200} alt="skills-roundel" />
        </section>
      </Reveal>

      <section className="flex flex-col gap-10 items-center lg:items-start lg:px-10 lg:-my-14 text-bone text-xl py-20 lg:text-7xl font-fungis">
        <Reveal>
          <h2>JAVASCRIPT * TYPESCRIPT</h2>
        </Reveal>
        <Reveal>
          <h2>RUBY</h2>
        </Reveal>
        <Reveal>
          <h2 className="text-xl lg:text-7xl">
            MONGO * EXPRESS * REACT * NODE
          </h2>
        </Reveal>
      </section>
      <section className="flex flex-col gap-10 items-center lg:items-start lg:py-24 lg:px-10 text-bone text-xl lg:text-7xl font-fungis">
        <Reveal>
          <h2>TAILWIND CSS</h2>
        </Reveal>
        <Reveal>
          <div>
            <h2 className="flex gap-4">
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
        </Reveal>
        <Reveal>
          <h2>REST API</h2>
        </Reveal>
      </section>
      <Reveal>
        <section className="flex justify-center lg:justify-end pt-10 lg:-mt-72 lg:mr-40 pb-32">
          <Image src={laptop} width={250} alt="laptop" />
        </section>
      </Reveal>
      <section className="w-screen bg-bone py-32">
        <Reveal>
          <div className="flex justify-center text-blu text-4xl lg:text-7xl font-fungis pb-10">
            <h1>DREAM JOBS</h1>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between lg:items-start px-40 text-blu text-3xl font-sudo">
            <div className="flex flex-col items-center lg:items-start w-72">
              <h1>Climate Positive</h1>
              <p className="text-xl py-4">
                I firmly advocate for universal access to a clean and healthy
                environment. Climate change poses a significant threat to our
                ecosystems, biodiversity, and human livelihoods. I would love
                the opportunity to work for a company that is addressing this
                global crisis with urgency, innovation, and collaborative
                efforts.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start w-72">
              <h1>Design and the Arts</h1>
              <p className="text-xl py-4">
                Art and design have the power to inspire, challenge, and enrich
                our lives, fostering creativity, cultural understanding, and
                personal growth. Drawing from my experience and passion for art
                and design, I am eager to leverage technology and innovative
                approaches to ensure universal access to the transformative
                world of creativity.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start w-72">
              <h1>Healthcare</h1>
              <p className="text-xl py-4">
                I am a firm believer in the principle that everyone should have
                universal access to healthcare, regardless of their
                socio-economic status or geographical location. Access to
                quality healthcare is not just a basic human right, but also a
                fundamental pillar for the well-being and progress of any
                society. With my extensive experience working in public
                healthcare systems, I am deeply motivated to harness the power
                of technology to make universal healthcare a tangible reality
                for all.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <section className="flex justify-center pt-10 lg:-mt-40 lg:-ml-72">
            <Image src={flower} width={250} alt="flower" />
          </section>
        </Reveal>
      </section>
    </main>
  );
}
