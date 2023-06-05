import Reveal from "@/components/utils/reveal";

export default function Details({ desc, stack }) {
  return (
    <main>
      <Reveal>
        <section className="lg:flex lg:flex-col lg:justify-center lg:px-12">
          <div className="text-3xl lg:text-3xl text-sand font-mirage ">
            The Brief
          </div>
          <div className=" w-80 mt-2 lg:mt-6 text-sm lg:text-xl text-sand ">
            <div>
              <p className="font-serif">{desc}</p>
              <p className=" text-sm lg:text-xl font-mirage py-6">{stack}</p>
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
