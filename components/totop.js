export default function ToTop({ scrollToElement }) {
  return (
    <nav>
      <div className="font-fungis text-4xl lg:text-6xl text-bone flex justify-end px-20 py-10 ">
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
