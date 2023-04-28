import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <section className="flex flex-col font-fungis text-9xl text-white pt-32 ml-20">
        <ul>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>BLOG</li>
        </ul>
      </section>
      <section>
        <div className="flex justify-center my-10 ml-32 font-fungis text-3xl text-white">
          <p>
            Graeme Paterson. Software Developer.
            <br /> Career Switcher. London. UK
          </p>
        </div>
      </section>
    </main>
  );
}
