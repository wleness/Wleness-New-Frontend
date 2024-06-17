"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {
  ResolveCommunity,
  ResolveImage,
  ResolveSelfHelp,
  ResolveSession,
} from "@/public";
import { COMMUNITY, EXPERTS, USER_DASHBOARD } from "@data/urls";
import PrimaryTitle from "@components/Title/PrimaryTitle";
import { StarIcon } from "@components/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const tabData = [
  {
    id: 1,
    label: "Self Help",
    title: "Self Care",
    image: ResolveSelfHelp,
    button: false,
  },
  {
    id: 2,
    label: "Book a Session",
    title: "Book a Session",
    image: ResolveSession,
    button: {
      text: "Book Session",
      slug: EXPERTS,
    },
  },
  {
    id: 3,
    label: "Community",
    title: "Join Community",
    image: ResolveCommunity,
    button: false,
  },
];

export default function Resolve() {
  const [activeTab, setActiveTab] = useState(tabData[1]);
  const [sessions, setSessions] = useState(1);

  return (
    <section className="px-4 xl:px-10 pt-28 xl:pt-36 bg-primary-two">
      <PrimaryTitle text={"let's resolve now."} />
      <div className="pt-8">
        <div className="grid grid-cols-3">
          {tabData.map((value, i) => (
            <div>
              <button
                key={i}
                onClick={() => setActiveTab(value)}
                className={`block mb-6 w-full border-2 text-sm md:text-base font-bold py-3 ${
                  value.id == activeTab.id
                    ? "border-primary-one bg-primary-one"
                    : "border-slate-400 text-white"
                }`}
                name={value.label}
              >
                {value.label}
              </button>
              <div className="bg-[#000D15] border border-primary-one py-20">
                <div>
                  <Image
                    src={value.image}
                    alt="resolve image"
                    width={450}
                    className="w-48 h-48 mx-auto object-contain"
                  />
                </div>
              </div>
              {value.id == activeTab.id && value.button && (
                <div className="bg-[#000D15] text-center py-4 border border-primary-one">
                  <div className="mb-4">
                    <button
                      onClick={() =>
                        setSessions(sessions > 1 ? sessions - 1 : sessions)
                      }
                      className="btn-2 bg-primary-one border-primary-one"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className="text-primary-one text-xl px-4">
                      {sessions}
                    </span>
                    <button
                      onClick={() => setSessions(sessions + 1)}
                      className="btn-2 bg-primary-one border-primary-one"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <button className="btn-2 bg-primary-one">
                    {value.button.text}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
