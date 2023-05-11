import Link from "next/link";
import Image from "next/image";
import spellquest from "../public/spellquest.png";

export default function Decode() {
  const spellquestURL = "https://jackquest.vercel.app/";

  return (
    <main>
      <section>
        <div className="flex gap-2 ml-10 text-blu font-fungis">
          <Link href={spellquestURL} target="_blank">
            <h2 className="text-7xl text-blu -mt-10">JACK'S SPELLQUEST</h2>
          </Link>
        </div>
        <div className="relative bg-blu p-4">
          <Image src={spellquest} width={900} />
        </div>
      </section>
    </main>
  );
}
