import Link from "next/link";

export default async function Bloggy() {
  const bloggyURL = "https://bloggy-inky.vercel.app/";

  return (
    <main>
      <section>
        <div className="flex flex-col justify-center gap-6 ml-10">
          <Link href={bloggyURL} target="_blank">
            <h2 className="font-fungis text-8xl text-blu -mt-10">Bloggy</h2>
          </Link>
        </div>
      </section>
    </main>
  );
}
