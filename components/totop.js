import Image from "next/image";
import projectsCircle from "../public/projectsCircle.svg";

export default function ToTop({ scrollToElement }) {
  return (
    <nav>
      <div className="font-fungis text-4xl lg:text-5xl text-bone flex justify-between px-10 py-10 ">
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
