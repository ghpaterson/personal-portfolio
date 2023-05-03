import { BsArrowLeft } from "react-icons/bs";

export default function ToLeft({ scrollToRef }) {
  const handleProjectsClick = () => {
    scrollToRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div
        className="hover:cursor-pointer text-blu text-7xl"
        onClick={() => handleProjectsClick()}
      >
        <BsArrowLeft />
      </div>
    </main>
  );
}
