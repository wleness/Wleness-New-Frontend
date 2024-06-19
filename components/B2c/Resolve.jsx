"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ResolveCommunity, ResolveSelfHelp, ResolveSession } from "@/public";
import { COMMUNITY, EXPERTS } from "@data/urls";
import PrimaryTitle from "@components/Title/PrimaryTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const Box = ({ value }) => {
  return (
    <div className="bg-[#000D15] border  py-20">
      <div>
        <Image
          src={value.image}
          alt="resolve image"
          width={450}
          className="w-48 h-48 mx-auto object-contain"
        />
        <p className="text-gray-400 text-center text-lg xl:px-16">
          {value.desc}
        </p>
        <div className="text-center mt-4">
          <Link href={value.btn.slug} className="btn-2 bg-primary-one">
            {value.btn.text}
          </Link>
        </div>
      </div>
    </div>
  );
};

const tabData = [
  {
    id: 1,
    label: "Self Help Kit",
    desc: "Empower yourself with curated tools and resources for personal growth.",
    title: "Self Care",
    image: ResolveSelfHelp,
    btn: {
      text: "Get your Free Kit",
      slug: "/",
    },
  },
  {
    id: 2,
    label: "Book a Session",
    desc: "Talk to a human being experienced in helping you overcome your obstacles.",
    title: "Book a Session",
    image: ResolveSession,
    btn: {
      text: "Book Session",
      slug: "/booking",
    },
  },
  {
    id: 3,
    label: "Join our Community",
    desc: "Connect, share, & grow with a supportive network of fellow human beings.",
    title: "Join Community",
    image: ResolveCommunity,
    btn: {
      text: "Join Our Community",
      slug: COMMUNITY,
    },
  },
];

export default function Resolve() {
  const [activeTab, setActiveTab] = useState(tabData[1]);
  const [sessions, setSessions] = useState(1);

  return (
    <section className="px-4 xl:px-10 pt-28 xl:pt-36 bg-primary-two">
      <PrimaryTitle text={"All humans have the same problems. "} />
      <p className="text-gray-400 font-semibold xl:text-2xl text-center text-xl">
        You&apos;re not alone. You&apos;re one of the many.
      </p>
      <div className="pt-8">
        <div className="grid grid-cols-3">
          {tabData.map((value, i) => (
            <div key={i}>
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
              {value.id == activeTab.id && value.button && (
                <div className="bg-[#000D15] text-center py-4 border">
                  <div className="mb-4">
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

        <div className="grid grid-cols-3 items-start">
          <Box value={tabData[0]} />

          <div className="border pb-10">
            <div className="bg-[#000D15] pt-20 pb-10">
              <div>
                <Image
                  src={tabData[1].image}
                  alt="resolve image"
                  width={450}
                  className="w-48 h-48 mx-auto object-contain"
                />
                <p className="text-gray-400 text-center text-lg">
                  {tabData[1].desc}
                </p>

                <div className="text-center mt-4">
                  <Link
                    href={tabData[1].btn.slug}
                    className="btn-2 bg-primary-one"
                  >
                    {tabData[1].btn.text}
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-[#000D15] text-center py-4">
              <div className="mb-4">
                <SessionBtn
                  icon={faMinus}
                  click={() =>
                    setSessions(sessions > 1 ? sessions - 1 : sessions)
                  }
                />
                <span className="text-primary-one text-xl px-4">
                  {sessions}
                </span>
                <SessionBtn
                  icon={faPlus}
                  click={() => setSessions(sessions + 1)}
                />
              </div>

              <p className="text-lg grid mb-4">
                <del className="text-gray-400">₹ 2800</del>
                <span className="text-white">You save ₹ 300</span>
                <span className="font-bold text-primary-one text-3xl">
                  ₹ 2500
                </span>
              </p>
              <button className="btn-2 bg-primary-one">Book Sessions</button>
            </div>
          </div>
          <Box value={tabData[2]} />
        </div>
      </div>
    </section>
  );
}

const SessionBtn = ({ icon, click }) => {
  return (
    <button onClick={click} className="btn-2 bg-primary-one border-primary-one">
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};
