import Image from "next/image";
import skillsCircle from "../public/skillsCircle.svg";

export default function Skills() {
  return (
    <main className="h-full w-screen bg-bone">
      <section className="flex justify-between py-20">
        <div className="flex flex-col gap-4 pl-20 text-blu text-6xl font-fungis">
          <h2>JAVASCRIPT</h2>
          <h2>TYPESCRIPT</h2>
          <h2>RUBY</h2>
          <h2>MERN STACK</h2>
          <h2>TAILWIND CSS</h2>
          <h2>REST API</h2>
        </div>
        <div className="flex flex-col items-center gap-16">
          <Image
            src={skillsCircle}
            width={200}
            alt="skills-circle"
            className="-mr-32"
          />
          <div className="text-blu text-7xl font-fungis px-20 mr-20">
            <h2>DREAM JOBS</h2>
            <h3 className="font-poppins text-4xl text-blu">Climate Change</h3>
          </div>
        </div>
      </section>
      <section className="flex justify-between gap-96 px-20 text-4xl text-blu font-poppins">
        <div className="">
          <h2>Healthcare</h2>
        </div>
        <div className="mr-44">
          <h2>Design and the Arts</h2>
        </div>
      </section>
    </main>
  );
}
