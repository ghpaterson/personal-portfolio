import { BsArrowUp } from "react-icons/bs";

export default function ToTop({ scrollToElement }) {
  return (
    <nav>
      <div className="font-fungis text-7xl text-bone flex justify-end px-20 py-10 ">
        <BsArrowUp
          className=" hover:cursor-pointer"
          onClick={() => scrollToElement("hero")}
        />
      </div>
    </nav>
  );
}
