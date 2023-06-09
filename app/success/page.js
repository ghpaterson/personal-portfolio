import Image from "next/image";
import thanks from "../../public/thanks.png";

export default function Success() {
  return (
    <main className="lg:w-full lg:h-screen flex ">
      <section className="w-1/2 h-screen bg-sand">
        <div className="flex flex-col items-center justify-center h-full py-12 px-10 w-full ">
          <div className="flex flex-col gap-6 items-center text-4xl font-mirage">
            <h1>Success!</h1>
            <p className="text-xl font-serif">
              Thanks for the Message, NAME HERE
            </p>
          </div>
        </div>
      </section>
      <section className="w-1/2 h-screen bg-blak ">
        <div className="flex items-center justify-center">
          <Image src={thanks} width={600} alt="contact-image" />
        </div>
      </section>
    </main>
  );
}
