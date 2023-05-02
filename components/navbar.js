export default function NavBar({ homeRef, aboutRef }) {
  const scrollToElement = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <nav>
      <div
        className={`font-fungis text-7xl ${
          aboutRef ? "text-blue" : "text-white"
        } flex justify-end px-20 py-10 hover:cursor-pointer`}
        onClick={() => scrollToElement(homeRef)}
      >
        HOME
      </div>
    </nav>
  );
}
