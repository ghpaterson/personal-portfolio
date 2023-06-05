import Image from "next/image";
import Reveal from "@/components/utils/reveal";
import portrait from "../public/portrait-cropped.png";
import Link from "next/link";

export default function About() {
  const linkedinURL = "https://www.linkedin.com/in/graeme-paterson-25b096268/";
  const githubURL = "https://github.com/ghpaterson";

  return (
    <main className="bg-sand h-full w-screen bg-fixed">
      {/* about section */}
      <section className="lg:flex lg:justify-between lg:pt-20 lg:px-32 px-10 pt-10">
        <div className=" flex flex-col items-center lg:items-start my-20 lg:my-20  lg:mx-20 gap-20">
          <Reveal>
            <div className="text-5xl lg:text-8xl text-black font-mirage">
              <h1>ABout</h1>
            </div>
          </Reveal>
          <Reveal>
            <div className="w-[250] lg:w-[550px] text-xl lg:text-2xl text-black font-mirage">
              <p>
                I'm Graeme. A Software Developer, Maker, design enthusiast and
                problem solver
              </p>
            </div>
          </Reveal>
          <div className="font-serif flex flex-col w-[250] lg:w-[500px] text-base lg:text-lg text-black gap-10">
            <Reveal>
              <p>
                After spending over a decade working as a Paramedic in public
                healthcare systems in Australia and London I needed a change! I
                thought how could I channel my love of tech into something that
                could still help people in a meaningful way?
              </p>
            </Reveal>
            <Reveal>
              <p>
                The natural fit for me was a new career in Software Development
                and Design. Although I still have a deep connection with
                healthcare I know that helping people can take on many forms.
                Surely I can take my love of Tech and design to contribute to
                something beautiful, functional and a pleasure to use?{" "}
              </p>
            </Reveal>
          </div>
          <Reveal>
            <div className="font-serif flex flex-col w-[250] lg:w-[500px] text-base lg:text-lg text-black gap-10">
              <p>One of my favourite quotes by Charles Eames:</p>
              <div className="font-mirage text-xl lg:text-2xl text-black">
                <p>
                  "Design is about creating somthing that is both beautiful and
                  functional"
                </p>
              </div>
              <div>
                <p>
                  This resonates so deeply with me because I have no desire to
                  make things just for the sake of it. I only want to make,
                  design or build ideas and products that matter and have a
                  positive impact in the world
                </p>
              </div>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div>
            <Image src={portrait} width={500} alt="portrait" />
          </div>
        </Reveal>
      </section>
      {/* skills section */}
      <section className="flex flex-col pt-10 lg:mx-32 lg:pb-20 pb-10">
        <div className=" flex flex-col items-center lg:items-start font-mirage text-5xl lg:text-8xl text-black lg:px-20 gap-10 mx-4 lg:mx-0">
          <Reveal>
            <h1>SKills</h1>
          </Reveal>
          <Reveal>
            <div className="flex flex-col items-center lg:items-start gap-4 text-2xl lg:text-4xl">
              <h2>Frontend</h2>
              <div className="text-lg font-serif">
                <p>
                  Javascript / Typescript / React / Next / HTML5 / CSS3 /
                  Tailwind CSS / Figma
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col items-center lg:items-start gap-4 text-2xl lg:text-4xl">
              <h2>Backend</h2>
              <div className="text-lg font-serif">
                <p>Ruby / Express / Node / MongoDB / Postgres</p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col items-center lg:items-start gap-4 text-2xl lg:text-4xl">
              <h2>API Development</h2>
              <div className="text-lg font-serif">
                <p>REST API / GraphQl</p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col items-center lg:items-start gap-4 text-2xl lg:text-4xl">
              <h2>Testing</h2>
              <div className="text-lg font-serif">
                <p>Jest / Cypress / RSpec</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* cv section */}
      <Reveal>
        <section className="lg:mx-32 lg:pb-32 pb-20">
          <div className="lg:flex-row flex flex-col items-center px-10 lg:px-20 gap-6 font-mirage text-2xl">
            <Link href="/CV.pdf" target="_blank">
              <button className="bg-black px-4 py-2 text-sand rounded-full">
                CV
              </button>
            </Link>
            <Link href={linkedinURL} target="_blank">
              <button className="bg-black px-4 py-2 text-sand rounded-full">
                Linkedin
              </button>
            </Link>
            <Link href={githubURL} target="_blank">
              <button className="bg-black px-4 py-2 text-sand rounded-full">
                Github
              </button>
            </Link>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
