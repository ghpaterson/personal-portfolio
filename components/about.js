import Image from "next/image";
import aboutImages from "../public/aboutImages.png";
import aboutCircle from "../public/aboutCircle.svg";

export default function About() {
  const githubURL = "https://github.com/ghpaterson";
  const linkedinURL = "https://www.linkedin.com/in/graeme-paterson-25b096268/";
  return (
    <main className="bg-bone h-full w-screen bg-fixed">
      <div className="flex justify-center text-7xl text-blu font-fungis py-4 mt-10">
        <h2 className="lg:hidden">"about"</h2>
      </div>
      <div className="flex justify-between ">
        <section className="flex flex-col">
          <div className="p-8">
            <Image src={aboutCircle} width={200} />
          </div>
          <div className=" flex flex-col justify-center items-center gap-4 w-96 lg:ml-52 lg:py-10 text-blu lg:text-3xl font-poppins">
            <h1 className="lg:text-4xl">Hi, Im Graeme </h1>
            <p>
              I have been a Paramedic for over ten years,
              <span className="bg-blu text-bone">
                {" "}
                nightshifts weren't great.
              </span>{" "}
              My Love of tech has lead me to a new career as a Software Dev.
            </p>
            <p>I'm quite fond of music, cooking and sports, lots of sports. </p>
          </div>
        </section>
        <section>
          <div className="hidden lg:flex py-6">
            <Image src={aboutImages} width={700} />
          </div>
        </section>
      </div>
    </main>
  );
}
