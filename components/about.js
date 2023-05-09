import Image from "next/image";
import about from "../public/about.svg";

export default async function About() {
  return (
    <main className="bg-bone h-full w-screen">
      <section>
        <div className="flex relative py-10">
          <div className="px-8 py-16 flex gap-40 z-10">
            <Image src={about} width={70} />
          </div>
        </div>
      </section>
    </main>
  );
}
