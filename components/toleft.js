import { BsArrowLeft } from "react-icons/bs";

export default function ToLeft({ scrollToElement }) {
  const scrollToProjectHome = () => {
    scrollToElement("project-home");
  };
  return (
    <main>
      <div
        className="hover:cursor-pointer text-blu text-6xl py-6 font-fungis"
        onClick={scrollToProjectHome}
      >
        "projects"
      </div>
    </main>
  );
}
