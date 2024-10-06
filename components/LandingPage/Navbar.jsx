"use client";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const links = [
  {
    name: "Home",
    slug: "/registration",
  },
  {
    name: "Learn",
    slug: "#learn",
  },
  {
    name: "Webinar",
    slug: "#webinar",
  },
  {
    name: "Testimonials",
    slug: "#testimonials",
  },
  {
    name: "FAQs",
    slug: "#faqs",
  },
];

export default function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <nav className="bg-black py-10">
      <div className="flex container mx-auto justify-between">
        <Link
          href="/registration"
          className="font-extrabold text-primary-one text-3xl"
        >
          Wleness
        </Link>

        <div className="relative">
          <ul
            className={`absolute right-0 top-10 p-4 z-20 rounded-lg w-52 bg-slate-800 lg:bg-transparent lg:static lg:w-auto gap-3 lg:gap-10 lg:flex font-semibold text-gray-400 cursor-pointer ${
              active ? "grid gap-4" : "hidden"
            }`}
          >
            {links.map((value, i) => {
              return (
                <li
                  key={i}
                  className="hover:text-primary-one"
                  onClick={() => setActive(false)}
                >
                  <Link href={value.slug}>{value.name}</Link>
                </li>
              );
            })}
          </ul>

          <button className="lg:hidden" onClick={() => setActive(!active)}>
            <FontAwesomeIcon icon={faBars} className="text-white text-3xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}
