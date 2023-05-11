import Image from "next/image";
import about from "../public/about.svg";
import aboutImages from "../public/aboutImages.png";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function About() {
  const githubURL = "https://github.com/ghpaterson";
  const linkedinURL = "https://www.linkedin.com/in/graeme-paterson-25b096268/";
  return (
    <main className="bg-bone h-full w-screen bg-fixed">
      <section className="flex justify-between bg-fixed">
        <div className="mt-10">
          <div className="flex items-start gap-44 px-8 py-4">
            <Image src={about} width={70} height={20} className="mt-40" />
            <div className=" w-96 flex flex-col justify-center gap-10 ml-4 text-base text-blu font-poppins py-4">
              <h1 className="text-3xl">From Brisbane, Australia</h1>
              <p>
                After 10 years as a paramedic, I aim to utilise my passion for
                technology to serve the community and enhance people's lives in
                a new way.
              </p>
              <p>
                When I'm not engrossed in keeping up with the latest
                developments in technology, I take pleasure in indulging in my
                hobbies, such as attending live music gigs and experimenting in
                the kitchen.
              </p>
              <div className="flex flex-col text-5xl font-fungis mt-20 gap-8">
                <Link href={githubURL} target="_blank" className="flex">
                  <h2>github</h2>
                  <FiArrowUpRight />
                </Link>
                <Link href={linkedinURL} target="_blank" className="flex">
                  <h2>linkedin</h2>
                  <FiArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end py-6">
          <Image src={aboutImages} width={700} />
        </div>
      </section>
      <section className="bg-bone text-2xl min-w-full py-20 text-blu">
        <div>Values</div>
      </section>
    </main>
  );
}
