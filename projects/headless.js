import Link from "next/link";
import Image from "next/image";
import headlessMac from "../public/headlessMac.png";
import headlessPhone from "../public/headlessPhone.png";

export default function Headless() {
  const headlessURL = "https://headless-iota-five.vercel.app/";

  return (
    <main>
      <section>
        <div className="flex justify-between gap-2 text-4xl lg:text-6xl text-bone font-fungis">
          <Link href={headlessURL} target="_blank">
            <h2 className=" ">HEADLESS</h2>
          </Link>
          <h2 className="px-10">04</h2>
        </div>
        <div className="flex py-10">
          <Image src={headlessMac} width={700} />
          <Image src={headlessPhone} width={200} />
        </div>
      </section>
    </main>
  );
}
