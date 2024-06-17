import { faAngleRight, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function MenuLink({ url, text, subpages, close }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <li className="relative">
      <div
        onClick={url == "" ? toggleDropdown : close}
        className="xl:px-0 flex justify-between border-slate-200 text-gray-300 px-6 cursor-pointer py-2.5 text-lg font-semibold transition-all hover:text-primary-one"
      >
        <Link href={url}>{text}</Link>
        {subpages && (
          <span className="block pl-6">
            <FontAwesomeIcon icon={showDropdown ? faAngleUp : faAngleRight} />
          </span>
        )}
      </div>

      {subpages && (
        <ul
          className={`z-10 divide-y divide-slate-700 bg-slate-800 ${
            showDropdown ? " block " : " hidden "
          }`}
        >
          {subpages.map((value, index) => {
            return (
              <Link
                key={index}
                href={value[1]}
                className="submenu-link"
                onClick={close}
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
