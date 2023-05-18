export default function Details({ desc, stack }) {
  return (
    <main>
      <section className="lg:flex lg:flex-col lg:justify-center lg:px-12">
        <div className="text-3xl lg:text-7xl text-bone font-sudo ">
          the brief
        </div>
        <div className=" w-80 mt-2 lg:mt-6 text-sm lg:text-xl text-bone ">
          <div>
            <p className="font-sudo">{desc}</p>
            <p className=" text-sm lg:text-xl font-fungis py-6">{stack}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
