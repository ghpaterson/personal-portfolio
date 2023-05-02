import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <Link
        href="/"
        className="flex justify-end text-7xl text-blu font-fungis px-20 py-10 hover:cursor-pointer"
      >
        HOME
      </Link>
    </nav>
  );
}
