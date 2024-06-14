import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

import DesktopMenuLink from "./DesktopMenuLink";
import DesktopDropdown from "./DesktopDropdown";
import {
  resourcesSubpages,
  seldCareSubpages,
  serviceMenuPages,
} from "@data/navigation";
import { montserrat } from "@public";
import { StarIcon } from "@components/Icons";

export default function DesktopNavbar({
  toggleJoinUs,
  token,
  username,
  user_type,
}) {
  return (
    <>
      <ul className="hidden w-fit justify-self-end space-x-4 p-6 xl:flex">
        <DesktopDropdown url="" text="Services" pages={serviceMenuPages} />
        <DesktopMenuLink url="/experts" text="Our Experts" />
        <DesktopDropdown
          url=""
          text="Self Assessment"
          pages={seldCareSubpages}
        />
        <DesktopDropdown url="" text="Resources" pages={resourcesSubpages} />
        <DesktopMenuLink url="/about-us" text="About Us" />
      </ul>

      {/* Authentication */}
      {/* <div className="hidden xl:flex xl:items-center">
        <button
          onClick={toggleJoinUs}
          className="btn-primary mr-2 !w-fit !rounded-full border-2 border-primary-one !py-1.5"
        >
          Join Us
        </button>

        {!token ? (
          <Link
            href="/login"
            className="btn-primary !w-fit !rounded-full !bg-transparent !py-2 font-semibold  !text-primary-one border-primary-one border-2"
          >
            Sign In
          </Link>
        ) : (
          <Link
            href={
              user_type == "expert" ? "/experts/dashboard" : "/user/dashboard"
            }
            className="btn-primary flex !w-fit items-center !rounded-full !bg-transparent !py-2.5 font-semibold !text-primary-one !border-primary-one !border-2"
          >
            <FontAwesomeIcon icon={faUserCircle} className="mr-1" />
            <span className="text-sm">
              {username ? username.split(" ")[0] : "User"}
            </span>
          </Link>
        )}
      </div> */}

      <div className="flex gap-x-2 items-center justify-end">
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
      </div>
    </>
  );
}
