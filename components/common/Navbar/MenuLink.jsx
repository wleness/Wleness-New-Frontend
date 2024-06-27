import { faAngleRight, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function MenuLink({ url, text, pages, close }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showSubDropdown, setSubDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleSubDropdown = () => {
    setSubDropdown(!showSubDropdown);
  };

  return (
    <li className="relative">
      <div
        onClick={url == "" ? toggleDropdown : close}
        className="xl:px-0 flex justify-between border-slate-200 text-gray-300 px-6 cursor-pointer py-2.5 xl:text-lg font-semibold transition-all hover:text-primary-one"
      >
        <Link href={url}>{text}</Link>
        {pages && (
          <span className="block pl-6">
            <FontAwesomeIcon icon={showDropdown ? faAngleUp : faAngleRight} />
          </span>
        )}
      </div>

      {pages && (
        <ul
          className={`z-10 divide-y divide-slate-700 rounded-lg ${
            showDropdown ? "block" : "hidden"
          }`}
        >
          {pages.map((value, index) => {
            return (
              <li key={index}>
                <div className="flex justify-between items-center">
                  <Link
                    onClick={close}
                    href={value[1]}
                    className="submenu-link"
                  >
                    {value[0]}
                  </Link>

                  {value.length == 3 && (
                    <span
                      className="block pr-3 text-gray-300 cursor-pointer hover:text-primary-one"
                      onClick={toggleSubDropdown}
                    >
                      <FontAwesomeIcon
                        icon={showSubDropdown ? faAngleUp : faAngleRight}
                      />
                    </span>
                  )}
                </div>
                {value.length == 3 && (
                  <ul
                    className={`z-10 divide-y divide-slate-700 bg-slate-900 ${
                      showSubDropdown ? "block" : "hidden"
                    }`}
                  >
                    {value[2].map((key, i) => {
                      return (
                        <li key={i}>
                          <Link
                            onClick={close}
                            href={key[1]}
                            className="flex justify-between px-6 py-2 text-sm font-semibold text-slate-400 transition-all hover:text-primary-one"
                          >
                            {key[0]}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}
