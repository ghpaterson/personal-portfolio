import Link from "next/link";
import Image from "next/image";
import ecolidayMac from "../public/ecolidayMac.png";
import ecolidayPad from "../public/ecolidayPad.png";
import ToLeft from "@/components/toleft";
import ecoMac from "../public/ecoMac.png";
import ecoPhone from "../public/ecoPhone.png";

export default function Ecoliday() {
  const ecolidayURL = "https://ecoliday-cxyz.onrender.com/";

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      <section>
        <div className="p-4">
          <ToLeft scrollToElement={scrollToElement} />
        </div>
        <div className="flex justify-between gap-2 text-3xl lg:text-6xl text-bone font-fungis">
          <Link href={ecolidayURL} target="_blank">
            <h2 className="">ECOLIDAY</h2>
          </Link>
          <h2 className="px-10">01</h2>
        </div>
        <div className="flex py-6 gap-10">
          <Image src={ecoMac} width={700} alt="ecoliday screen" />
          <Image src={ecoPhone} width={200} alt="ecoliday pad" />
        </div>
      </section>
    </main>
  );
}
