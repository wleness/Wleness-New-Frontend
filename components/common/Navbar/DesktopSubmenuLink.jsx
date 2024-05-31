"use client";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function DesktopSubmenuLink(props) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const openDropdown = () => {
    setDropdownOpen(true);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };
  return (
    <li
      className="subdropdown relative"
      onMouseOver={openDropdown}
      onMouseOut={closeDropdown}
    >
      <Link href={props.url} className="submenu-link" onClick={props.onClick}>
        <span>{props.text}</span>
        {props.subpages ? <FontAwesomeIcon icon={faAngleRight} /> : null}
      </Link>

      {props.subpages && isDropdownOpen && (
        <ul className="subdropdown-pages absolute left-60 top-0  z-10  w-52 rounded-xl border-[1px] border-primary-one bg-slate-900 py-4 shadow-md xl:w-60">
          {props.subpages.map((value, index) => {
            return (
              <Link
                key={index}
                href={value[1]}
                className="submenu-link"
                onClick={props.onClick}
              >
                {value[0]}
              </Link>
            );
          })}
        </ul>
      )}
    </li>
  );
}
