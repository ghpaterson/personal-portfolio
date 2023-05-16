import Link from "next/link";
import Image from "next/image";
import headlessMac from "../public/headlessMac.png";
import headlessPhone from "../public/headlessPhone.png";
import ToLeft from "@/components/toleft";

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
        <div className="flex justify-between gap-2 text-3xl lg:text-6xl text-bone font-fungis">
          <Link href={headlessURL} target="_blank">
            <h2 className=" ">HEADLESS</h2>
          </Link>
          <h2 className="px-10">04</h2>
        </div>
        <div className="flex mt-2">
          <Image src={headlessMac} width={700} />
          <div className="sm:hidden">
            <Image src={headlessPhone} width={200} />
          </div>
        </div>
      </section>
    </main>
  );
}
