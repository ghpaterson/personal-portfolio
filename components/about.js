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
          <div className="flex items-start gap-20 px-8 py-4">
            <Image src={about} width={70} height={20} />
            <div className="flex flex-col justify-center gap-6 text-6xl text-blu font-fungis py-4">
              <Link href={githubURL} target="_blank">
                GITHUB
              </Link>
              <Link href={linkedinURL} target="_blank">
                LINKEDIN
              </Link>
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
