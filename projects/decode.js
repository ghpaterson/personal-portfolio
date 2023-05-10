import Link from "next/link";
import Image from "next/image";
import decode from "../public/decode-screen.png";

export default async function Decode() {
  const decodeURL = "https://decode-care.vercel.app/";

  return (
    <main>
      <section>
        <div className="flex flex-col justify-center gap-2 ml-10">
          <Link href={decodeURL} target="_blank">
            <h2 className="font-fungis text-8xl text-blu -mt-10">
              DECODE CARE
            </h2>
          </Link>
        </div>
        <div className="flex gap-10">
          <Image src={decode} width={900} />
          <p className="text-blu text-2xl">
            Decode Care was built in collaboration with Literacy experts in
            Australia to help young children and those with learning
            difficulties read
          </p>
        </div>
      </section>
    </main>
  );
}
