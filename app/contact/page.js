import Link from "next/link";

export default function Contact() {
  return (
    <main className="lg:w-full lg:h-screen flex ">
      <section className="w-1/2 h-screen bg-sand">
        <div className="flex justify-center py-10 text-4xl font-mirage">
          <div>
            <h1>Contact Me</h1>
          </div>
        </div>
      </section>
      <section className="w-1/2 h-screen bg-contact-image bg-cover "></section>
    </main>
  );
}
