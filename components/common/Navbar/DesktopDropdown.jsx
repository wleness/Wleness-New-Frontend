"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import DesktopSubmenuLink from "./DesktopSubmenuLink";
import Link from "next/link";

export default function DesktopDropdown(props) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <li
      className="relative"
      onMouseOver={openDropdown}
      onMouseOut={closeDropdown}
    >
      <Link href={props.url} className="menu-link">
        {props.text} <FontAwesomeIcon icon={faAngleDown} />
      </Link>

      {isDropdownOpen && (
        <ul className="absolute z-10 w-52 rounded-xl border-[1px] border-primary-one bg-slate-900 py-4 shadow-md xl:w-60">
          {props.pages.map((value, index) => {
            return (
              <DesktopSubmenuLink
                key={index}
                url={value.slug}
                text={value.name}
                subpages={value.subPages}
                onClick={closeDropdown}
              />
            );
          })}
        </ul>
      )}
    </li>
  );
}
