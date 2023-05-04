import { BsArrowUp } from "react-icons/bs";

export default function ToTop({ homeRef, aboutRef }) {
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div
        className="font-fungis text-7xl text-white flex justify-end px-20 py-10 hover:cursor-pointer"
        onClick={() => scrollToElement("hero")}
      >
        <BsArrowUp />
      </div>
    </nav>
  );
}
