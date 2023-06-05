import Link from "next/link";
import Image from "next/image";
import ToLeft from "@/components/toleft";
import mzansiMac from "../public/mzansiMac.png";
import mzansiPhone from "../public/mzansiPhone.png";

export default function Mzansi() {
  const headlessURL = "https://headless-iota-five.vercel.app/";

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
        <div className="flex justify-between gap-2 text-3xl lg:text-5xl text-sand font-mirage">
          <Link href="#" target="_blank">
            <h2 className=" ">
              MZANSI<span className="lg:text-lg"> WIP</span>
            </h2>
          </Link>
          <h2 className="px-10">04</h2>
        </div>
        <div className="flex py-6">
          <Image src={mzansiMac} width={700} />
          <Image src={mzansiPhone} width={200} />
        </div>
      </section>
    </main>
  );
}
