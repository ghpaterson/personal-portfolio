import Image from "next/image";
import projectsCircle from "../public/projectsCircle.svg";

export default function ToTop({ scrollToElement }) {
  return (
    <nav>
      <div className="font-mirage text-4xl lg:text-5xl text-sand flex items-center gap-6 lg:flex-row lg:justify-end px-16 py-12 ">
        <div
          className=" hover:cursor-pointer hover:italic"
          onClick={() => scrollToElement("hero")}
        >
          ^up
        </div>
      </div>
    </nav>
  );
}
