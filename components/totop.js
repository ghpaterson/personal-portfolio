import Image from "next/image";
import projectsCircle from "../public/projectsCircle.svg";

export default function ToTop({ scrollToElement }) {
  return (
    <nav>
      <div className="font-fungis text-4xl lg:text-5xl text-bone flex justify-between px-16 py-12 ">
        <div>
          <Image src={projectsCircle} width={200} />
        </div>
        <div
          className=" hover:cursor-pointer"
          onClick={() => scrollToElement("hero")}
        >
          ^up
        </div>
      </div>
    </nav>
  );
}
