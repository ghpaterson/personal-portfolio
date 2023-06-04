import Link from "next/link";
import Image from "next/image";
import ToLeft from "@/components/toleft";
import headMac from "../public/headMac.png";
import headPhone from "../public/headPhone.png";

export default function Headless() {
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
          <Link href={headlessURL} target="_blank">
            <h2 className=" ">HEADLESS</h2>
          </Link>
          <h2 className="px-10">04</h2>
        </div>
        <div className="flex py-6">
          <Image src={headMac} width={700} />
          <Image src={headPhone} width={200} />
        </div>
      </section>
    </main>
  );
}
