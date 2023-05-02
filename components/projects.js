import NavBar from "@/components/navbar";
import Smiley from "@/components/smiley";
import Link from "next/link";

export default function Projects({ homeRef, id, title, content, photo, slug }) {
  return (
    <main className="h-full bg-blu">
      <NavBar homeRef={homeRef} />
      <section className="h-full bg-blu">
        <div className="flex justify-center">
          <ul className="flex flex-col font-fungis text-8xl text-white gap-2">
            <Link className="hover:underline" href={"/posts/" + slug}>
              ECOLIDAY
            </Link>
            <Link className="pl-8 hover:underline" href={"/posts/" + slug}>
              MR BLOGGY
            </Link>
            <Link className="pl-16 hover:underline" href={"/posts/" + slug}>
              DECODE CARE
            </Link>
            <Link className="pl-24 hover:underline" href={"/posts/" + slug}>
              HEADLESS
            </Link>
          </ul>
        </div>
      </section>
      <Smiley />
    </main>
  );
}
