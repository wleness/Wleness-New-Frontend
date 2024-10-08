"use client";
import { faBars, faClose, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import { Favicon, montserrat } from "@/public";
import MenuLink from "./Navbar/MenuLink";
import {
  ALL_EXPERTS,
  ASSESSMENT,
  BLOGS,
  COMMUNITY,
  LOGIN,
  USER_DASHBOARD,
} from "@data/urls";
import { aboutus_subpages, services_pages } from "@data/navigation";
import { StarIcon } from "@components/Icons";
import useNavbar from "./Navbar/useNavbar";
import { getUserInfo } from "@utils/useEnquiryForm";
import { useRouter } from "next/navigation";

export default function PrimaryNavbar() {
  const { menu, openMenu, closeMenu } = useNavbar();
  const { userData } = getUserInfo();

  return (
    <nav className="p-4 xl:px-10 py-3 bg-primary-two">
      <div className="flex items-center justify-between">
        <div>
          <Link href={"/"}>
            <Image
              src={Favicon}
              alt="website favicon"
              className="w-8 xl:w-12"
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
            href={"/#patterns"}
            className={`${montserrat.className} btn-2 border-primary-one bg-primary-one`}
          >
            <span className="flex items-center gap-x-2">
              <span>For You</span>
              <StarIcon theme={"dark"} />
            </span>
          </Link>

          <Link
            className="text-primary-one font-medium lg:ml-2"
            href={"/registration"}
          >
            Webinar
          </Link>
          <button name="menu-button" type="button" onClick={openMenu}>
            <FontAwesomeIcon
              icon={faBars}
              className="text-white text-2xl xl:text-3xl hover:text-primary-one transition-all ml-1 xl:ml-4"
            />
          </button>
        </div>

        <div
          className={`fixed w-56 xl:w-72 top-0 bg-slate-900 z-50 transition-all px-5 xl:px-8 bottom-0 pt-5 overflow-y-scroll overflow-x-clip ${
            menu ? "right-0" : "-right-[500px]"
          }`}
        >
          <button
            name="menu-button"
            className="text-right w-full"
            type="button"
            onClick={closeMenu}
          >
            <FontAwesomeIcon
              icon={faClose}
              className="text-white text-2xl xl:text-3xl"
            />
          </button>
          <ul>
            <MenuLink
              url=""
              text="Services"
              pages={services_pages}
              close={closeMenu}
            />
            <MenuLink url={ALL_EXPERTS} text="Our Experts" close={closeMenu} />
            <MenuLink url={"/registration"} text="Webinar" close={closeMenu} />
            <MenuLink
              url={ASSESSMENT}
              text="Self Assessment"
              close={closeMenu}
            />
            <MenuLink
              url=""
              text="Resources"
              pages={[
                ["Blogs", BLOGS],
                ["Community", COMMUNITY],
              ]}
              close={closeMenu}
            />
            <MenuLink
              url=""
              text="About Us"
              close={closeMenu}
              pages={aboutus_subpages}
            />
          </ul>
          <br />
          <Link
            href={userData ? USER_DASHBOARD : LOGIN}
            className="block py-2.5 bg-primary-one text-center font-medium rounded-lg"
          >
            {userData ? (
              <div className="flex gap-x-2 items-center justify-center">
                <FontAwesomeIcon icon={faUser} />
                <p>{userData?.name.split(" ")[0]}</p>
              </div>
            ) : (
              "Login / Signup"
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
