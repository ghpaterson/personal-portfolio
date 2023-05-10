import Link from "next/link";
import Image from "next/image";
import headless from "../public/headlessscreen2.png";

export default async function Headless() {
  const headlessURL = "https://headless-iota-five.vercel.app/";

  return (
    <main>
      <section>
        <div className="flex gap-2 ml-10 text-blu font-fungis">
          <Link href={headlessURL} target="_blank">
            <h2 className="text-8xl text-blu -mt-10">HEADLESS</h2>
          </Link>
        </div>
        <div className="flex gap-10">
          <Image src={headless} width={900} />
        </div>
      </section>
    </main>
  );
}
