import Link from "next/link";

export default async function Decode() {
  const decodeURL = "https://decode-care.vercel.app/";

  return (
    <main>
      <section>
        <div className="flex flex-col justify-center gap-2 ml-10">
          <Link href={decodeURL} target="_blank">
            <h2 className="font-fungis text-8xl text-blu -mt-10">
              DECODE CARE
            </h2>
          </Link>
        </div>
      </section>
    </main>
  );
}
