import Link from "next/link";
import Image from "next/image";
import headless from "../public/headlessscreen2.png";

export default function Headless() {
  const headlessURL = "https://headless-iota-five.vercel.app/";

  return (
    <main>
      <section>
        <div className="flex gap-2 lg:ml-10 text-blu font-fungis">
          <Link href={headlessURL} target="_blank">
            <h2 className="text-4xl lg:text-6xl text-blu -mt-10">HEADLESS</h2>
          </Link>
        </div>
        <div className="relative bg-blu p-4">
          <Image src={headless} width={900} />
        </div>
      </section>
    </main>
  );
}
