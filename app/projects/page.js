import NavBar from "@/components/navbar";
import Smiley from "@/components/smiley";
import Link from "next/link";

export default function Projects() {
  return (
    <main>
      <NavBar />
      <section>
        <div className="flex justify-center">
          <ul className="flex flex-col font-fungis text-8xl text-blu gap-2">
            <Link className="hover:underline" href="#">
              ECOLIDAY
            </Link>
            <Link className="pl-8 hover:underline" href="#">
              MR BLOGGY
            </Link>
            <Link className="pl-16 hover:underline" href="#">
              DECODE CARE
            </Link>
            <Link className="pl-24 hover:underline" href="#">
              HEADLESS
            </Link>
          </ul>
        </div>
      </section>
      <Smiley />
    </main>
  );
}
