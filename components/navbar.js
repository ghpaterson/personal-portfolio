import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link
        href="/"
        className="font-fungis text-7xl text-blu flex justify-end px-20 py-10"
      >
        HOME
      </Link>
    </nav>
  );
}
