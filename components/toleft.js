import { FiChevronLeft } from "react-icons/fi";

export default function ToLeft({ scrollToElement }) {
  const scrollToProjectHome = () => {
    scrollToElement("project-home");
  };
  return (
    <main>
      <div className="flex items-center text-blu text-4xl lg:text-6xl py-2 lg:py-6">
        <FiChevronLeft />
        <div
          className="hover:cursor-pointer mt-1 font-fungis"
          onClick={scrollToProjectHome}
        >
          back
        </div>
      </div>
    </main>
  );
}
