import { BsArrowLeft } from "react-icons/bs";

export default function ToLeft({ scrollToElement }) {
  const scrollToProjectHome = () => {
    scrollToElement("projects");
  };
  return (
    <main>
      <div
        className="hover:cursor-pointer text-blu text-7xl"
        onClick={scrollToProjectHome}
      >
        <BsArrowLeft />
      </div>
    </main>
  );
}
