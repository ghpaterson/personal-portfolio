import Link from "next/link";
import ecoliday from "../public/ecoliday-screen.png";
import Image from "next/image";

export default async function Ecoliday() {
  const ecolidayURL = "https://ecoliday-cxyz.onrender.com/";

  return (
    <main>
      <section>
        <div className="flex gap-2 ml-10 text-blu font-fungis">
          <Link href={ecolidayURL} target="_blank">
            <h2 className="text-8xl text-blu -mt-10">ECOLIDAY</h2>
          </Link>
        </div>
        <div className="flex gap-10">
          <Image src={ecoliday} width={900} />
          <h2 className="text-blu text-6xl font-fungis">"click"</h2>
          <p className="text-blu text-2xl py-4">
            Ecoliday was designed to let users make informed decisions about
            their personal travel by comparing the Carbon Emission of various
            methods of transport
          </p>
        </div>
      </section>
    </main>
  );
}
