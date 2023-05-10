import Link from "next/link";
import Image from "next/image";
import decode from "../public/decode-screen.png";

export default async function Decode() {
  const decodeURL = "https://decode-care.vercel.app/";

  return (
    <main>
      <section>
        <div className="flex gap-2 ml-10 text-blu font-fungis">
          <Link href={decodeURL} target="_blank">
            <h2 className="text-8xl text-blu -mt-10">DECODE CARE</h2>
          </Link>
        </div>
        <div className="flex gap-10">
          <Image src={decode} width={900} />
        </div>
      </section>
    </main>
  );
}
