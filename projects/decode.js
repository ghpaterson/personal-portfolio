import Link from "next/link";
import Image from "next/image";
import jackMac from "../public/jackMac.png";
import jackPhone from "../public/jackPhone.png";

export default function Decode() {
  const spellquestURL = "https://jackquest.vercel.app/";

  return (
    <main>
      <section>
        <div className="flex justify-between text-4xl lg:text-6xl  text-bone font-fungis">
          <Link href={spellquestURL} target="_blank">
            <h2 className=" -mt-10">JACK'S SPELLQUEST</h2>
          </Link>
          <h2 className="">03</h2>
        </div>
        <div className="flex py-10">
          <Image src={jackMac} width={700} />
          <Image src={jackPhone} width={200} />
        </div>
      </section>
    </main>
  );
}
