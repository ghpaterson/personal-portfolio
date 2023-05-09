import Link from "next/link";

export default async function Ecoliday() {
  const ecolidayURL = "https://ecoliday-cxyz.onrender.com/";

  return (
    <main>
      <section>
        <div className="flex gap-2 ml-10 text-blu font-fungis">
          <Link href={ecolidayURL} target="_blank">
            <h2 className="text-6xl text-blu -mt-10">ECOLIDAY</h2>
          </Link>
        </div>
      </section>
    </main>
  );
}
