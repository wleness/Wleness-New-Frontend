"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Image from "next/image";

import { montserrat } from "@/public";
import {
  faClose,
  faHeart as solidHeart,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import PrimaryTitle from "@components/Title/PrimaryTitle";
import { same_patterns } from "@data/b2c";

export default function Patterns({ handleScrollToComponent }) {
  const [activeTab, setActiveTab] = useState(same_patterns[0]);
  const [myPatterns, setMyPatterns] = useState([
    "Sexual Wellness",
    "PTSD3",
    "Dreams",
    "TagBadge",
  ]);

  const handlePatterns = (text) => {
    if (!myPatterns.includes(text)) {
      setMyPatterns([...myPatterns, text]);
    }
  };

  const removePattern = (text) => {
    setMyPatterns(myPatterns.filter((pattern) => pattern !== text));
  };
  return (
    <section className="px-4 bg-primary-two xl:px-10 py-10 pt-48">
      <PrimaryTitle text={"Same species. Same patterns."} />
      <p className="text-gray-400 text-center">
        you&apos;re not alone in what you&apos;re going through.
      </p>
      <p className="text-gray-400 text-center">
        you&apos;re biologically wired to face what you&apos;re facing.
      </p>
      <div className="py-6 xl:py-8">
        {/* Buttons / Tabs */}
        <div className="grid grid-cols-3">
          {same_patterns.map((value, i) => (
            <h2
              key={i}
              className={`z-10 sticky top-0 font-semibold text-sm lg:text-lg cursor-pointer text-center py-1.5  ${
                value.label == activeTab.label
                  ? "bg-primary-one"
                  : "bg-slate-600 text-white"
              }`}
              onClick={() => setActiveTab(value)}
            >
              {value.label}
            </h2>
          ))}
        </div>
        <div className="grid xl:grid-cols-3">
          {same_patterns.map((value, i) => (
            <div
              key={i}
              className={`border pb-4 h-[340px] overflow-y-scroll pattern-scrollbar ${
                value.label == activeTab.label
                  ? "border-primary-one"
                  : "border-slate-600 hidden xl:block"
              }`}
            >
              <div className="px-1">
                {value.patterns.map((key, j) => (
                  <div
                    key={j}
                    className={`grid grid-cols-[2fr_4fr] lg:grid-cols-[1fr_3fr] py-2 `}
                  >
                    <div>
                      <Image
                        src={key.image}
                        alt={key.title}
                        className={`w-24 h-24 mx-auto object-contain ${
                          myPatterns.includes(key.title) ||
                          (value.label != activeTab.label && "grayscale")
                        }`}
                      />
                    </div>
                    <div className="pr-3">
                      <h4
                        className={`font-bold flex items-center justify-between ${
                          value.label == activeTab.label ||
                          myPatterns.includes(key.title)
                            ? "text-primary-one"
                            : "text-white"
                        }`}
                      >
                        <span>{key.title}</span>
                        {myPatterns.includes(key.title) ? (
                          <FontAwesomeIcon
                            icon={solidHeart}
                            className="cursor-pointer text-primary-one"
                            onClick={() => handlePatterns(key.title)}
                          />
                        ) : (
                          <FontAwesomeIcon
                            icon={regularHeart}
                            className="cursor-pointer hover:text-primary-one"
                            onClick={() => handlePatterns(key.title)}
                          />
                        )}
                      </h4>
                      <p
                        className={`text-slate-400 group-even:text-white text-xs lg:text-sm ${montserrat.className}`}
                      >
                        {key.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="xl:w-[450px] mx-auto border-2 border-primary-one">
        <div className="text-center border-2 border-primary-one p-2 flex gap-2 flex-wrap">
          {myPatterns?.map((value, i) => (
            <span
              key={i}
              onClick={() => removePattern(value)}
              className="inline-block text-xs py-1 px-4 rounded-md font-medium bg-primary-one relative group hover:pr-7 transition-all"
            >
              {value}
              <FontAwesomeIcon
                icon={faClose}
                className="font-bold text-primary-one bg-red-600 w-3 h-3 p-1 right-1 rounded-sm hidden cursor-pointer transition-all group-hover:block absolute  top-1/2 -translate-y-1/2"
              />
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-8 grid place-items-center mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="66"
          viewBox="0 0 29 66"
          fill="none"
        >
          <path
            d="M14.5 -6.33815e-07L14.5 65M14.5 65C14.4233 58.0517 22.3254 44.1552 29 44.1552M14.5 65C14.5767 58.0517 6.6746 44.1552 -2.0791e-06 44.1552"
            stroke="white"
            strokeWidth={2}
          />
        </svg>
        <button
          onClick={handleScrollToComponent}
          className="btn-2 bg-primary-one"
        >
          Let&apos;s solve now
        </button>
      </div>
    </section>
  );
}
