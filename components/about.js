import Image from "next/image";
import about from "../public/about.svg";
import aboutImages from "../public/aboutImages.png";
import Link from "next/link";

export default async function About() {
  const githubURL = "https://github.com/ghpaterson";
  const linkedinURL = "https://www.linkedin.com/in/graeme-paterson-25b096268/";
  return (
    <main className="bg-bone h-full w-screen">
      <section className="flex justify-between">
        <div className="mt-10">
          <div className="flex items-start gap-44 px-8 py-4">
            <Image src={about} width={70} height={20} />
            <div className="flex flex-col justify-center gap-10 text-6xl text-blu font-fungis py-4">
              <Link href={githubURL} target="_blank">
                "github"
              </Link>
              <Link href={linkedinURL} target="_blank">
                "linkedIn"
              </Link>
            </div>
          </div>
          <div className="flex justify-center ml-64 -mt-20">
            <div className="text-blu w-96 flex flex-col text-xl justify-center gap-4 font-poppins">
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
            </div>
          </div>
        </div>
        <div className="flex justify-end py-6">
          <Image src={aboutImages} width={700} />
        </div>
      </section>
    </main>
  );
}
