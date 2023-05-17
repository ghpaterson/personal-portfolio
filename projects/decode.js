import Link from "next/link";
import Image from "next/image";
import ToLeft from "@/components/toleft";
import questMac from "../public/questMac.png";
import missionPhone from "../public/missionPhone.png";

export default function Decode() {
  const spellquestURL = "https://jackquest.vercel.app/";

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <section>
        <div className="p-4">
          <ToLeft scrollToElement={scrollToElement} />
        </div>
        <div className="flex justify-between text-3xl lg:text-6xl  text-bone font-fungis">
          <Link href={spellquestURL} target="_blank">
            <h2 className=" ">JACK'S SPELLQUEST</h2>
          </Link>
          <h2 className="px-10">03</h2>
        </div>
        <div className="flex py-6">
          <Image src={questMac} width={700} />
          <Image src={missionPhone} width={200} />
        </div>
      </section>
    </main>
  );
}
