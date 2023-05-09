import Link from "next/link";

export default async function Headless() {
  const headlessURL = "https://headless-iota-five.vercel.app/";

  return (
    <main>
      <section>
        <div className="flex flex-col justify-center gap-2 ml-10">
          <Link href={headlessURL} target="_blank">
            <h2 className="font-fungis text-8xl text-blu -mt-10">HEADLESS</h2>
          </Link>
        </div>
      </section>
    </main>
  );
}
