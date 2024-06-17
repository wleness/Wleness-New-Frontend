"use client";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import { Favicon, montserrat } from "@/public";
import MenuLink from "./Navbar/MenuLink";
import { ASSESSMENT, BLOGS, COMMUNITY } from "@data/urls";
import { services_subpages } from "@data/navigation";
import { StarIcon } from "@components/Icons";
import useNavbar from "./Navbar/useNavbar";

export default function PrimaryNavbar() {
  const { menu, openMenu, closeMenu } = useNavbar();

  return (
    <nav className="p-4 xl:px-10 py-3 bg-primary-two">
      <div className="flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image
              src={Favicon}
              alt="website favicon"
              className="w-10 xl:w-12"
            />
          </Link>
        </div>

        <div className="flex gap-x-3 items-center justify-end">
          <Link
            className="btn-2 border-primary-one text-primary-one"
            href={"/b2b"}
          >
            For your team
          </Link>

          <Link
            href={"/"}
            className={`${montserrat.className} btn-2 border-primary-one bg-primary-one`}
          >
            <span className="flex items-center gap-x-2">
              <span>Connect</span>
              <StarIcon theme={"dark"} />
            </span>
          </Link>
          <button name="menu-button" type="button" onClick={openMenu}>
            <FontAwesomeIcon
              icon={faBars}
              className="text-white text-3xl hover:text-primary-one transition-all ml-4"
            />
          </button>
        </div>

        <div
          className={`fixed w-72 top-0 bg-slate-900 z-50 transition-all px-8 bottom-0 pt-5 overflow-y-scroll overflow-x-clip ${
            menu ? "right-0" : "-right-[500px]"
          }`}
        >
          <button
            name="menu-button"
            className="text-right w-full"
            type="button"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faClose} className="text-white text-3xl" />
          </button>
          <ul>
            <MenuLink
              url=""
              text="Services"
              subpages={services_subpages}
              close={closeMenu}
            />
            <MenuLink
              url={ASSESSMENT}
              text="Self Assessment"
              close={closeMenu}
            />
            <MenuLink
              url=""
              text="Resources"
              subpages={[
                ["Blogs", BLOGS],
                ["Community", COMMUNITY],
              ]}
              close={closeMenu}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}
