import { FiChevronLeft } from "react-icons/fi";

export default function ToLeft({ scrollToElement }) {
  const scrollToProjectHome = () => {
    scrollToElement("project-home");
  };
  return (
    <main>
      <div className="flex items-center text-sand text-4xl lg:text-3xl py-2 lg:py-8">
        <FiChevronLeft />
        <div
          className="hover:cursor-pointer mt-1 font-mirage"
          onClick={scrollToProjectHome}
        >
          back
        </div>
      </div>
    </main>
  );
}
