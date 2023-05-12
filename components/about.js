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
      <div className="flex justify-center text-7xl text-blu font-fungis py-4 mt-10">
        <h2 className="lg:hidden">"about"</h2>
      </div>
      <section>
        <div className="hidden lg:flex justify-end py-6">
          <Image src={aboutImages} width={700} />
        </div>
      </section>
    </main>
  );
}
