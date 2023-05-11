import Link from "next/link";
import ecoliday from "../public/ecoliday-screen.png";
import Image from "next/image";

export default function Ecoliday() {
  const ecolidayURL = "https://ecoliday-cxyz.onrender.com/";

  return (
    <main>
      <section>
        <div className="flex gap-2 ml-10 text-blu font-fungis">
          <Link href={ecolidayURL} target="_blank">
            <h2 className="text-7xl text-blu -mt-10">ECOLIDAY</h2>
          </Link>
        </div>
        <div className="relative bg-blu p-4">
          <Image src={ecoliday} width={900} alt="ecoliday screen" />
        </div>
      </section>
    </main>
  );
}
