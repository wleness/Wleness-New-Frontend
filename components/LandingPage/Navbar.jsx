import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black py-10">
      <div className="flex container mx-auto justify-between">
        <Link
          href="/registration"
          className="font-extrabold text-primary-one text-3xl"
        >
          Wleness
        </Link>
        <ul className="flex gap-8 font-semibold text-gray-400 justify-center items-center cursor-pointer">
          <li className="hover:text-primary-one">
            <Link href="/registration">Home</Link>
          </li>
          <li className="hover:text-primary-one">
            <a href="#">Contact</a>
          </li>
          <li className="hover:text-primary-one">
            <a href="#">About us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
