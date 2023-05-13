import Link from "next/link";
import Image from "next/image";
import ecolidayMac from "../public/ecolidayMac.png";
import ecolidayPad from "../public/ecolidayPad.png";

export default function Ecoliday() {
  const ecolidayURL = "https://ecoliday-cxyz.onrender.com/";

  return (
    <main>
      <section>
        <div className="flex justify-between gap-2 text-4xl lg:text-6xl text-bone font-fungis">
          <Link href={ecolidayURL} target="_blank">
            <h2 className="">ECOLIDAY</h2>
          </Link>
          <h2 className="px-10">01</h2>
        </div>
        <div className="flex py-10">
          <Image src={ecolidayMac} width={700} alt="ecoliday screen" />
          <Image src={ecolidayPad} width={300} alt="ecoliday pad" />
        </div>
      </section>
    </main>
  );
}
