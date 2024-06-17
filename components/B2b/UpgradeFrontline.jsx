"use client";
import {
  FrontlineArmour1,
  FrontlineArmour2,
  FrontlineArmour3,
  FrontlineArmour4,
  ResolveImage,
} from "@/public";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { COMMUNITY, EXPERTS } from "@data/urls";
import PrimaryTitle from "@components/Title/PrimaryTitle";
import { StarIcon } from "@components/Icons";

const tabData = [
  {
    id: 1,
    label: "Workshops",
    title: "Workshops Title Goes Here",
    image: ResolveImage,
    button: {
      text: "Get Started",
      slug: "/",
    },
  },
  {
    id: 2,
    label: "Tactical Upgrades",
    title: "Tactical Upgrades Title",
    image: ResolveImage,
    button: {
      text: "Book Session",
      slug: EXPERTS,
    },
  },
  {
    id: 3,
    label: "Data Insight",
    title: "Data Insight Title",
    image: ResolveImage,
    button: {
      text: "Join Community",
      slug: COMMUNITY,
    },
  },
  {
    id: 3,
    label: "Data Insights",
    title: "Data Insights Title",
    image: ResolveImage,
    button: {
      text: "Book a Demo",
      slug: "/",
    },
  },
];

const frontline_armour = [
  {
    title: "Cultural Huddles",
    subtitle: "Strong Company Culture",
    image: FrontlineArmour1,
    increase: "4x Increase in Revenue Growth",
    decrease: "51% increase in team efficiency",
  },
  {
    title: "Default Tuning",
    subtitle: "Increased Wellbeing",
    image: FrontlineArmour2,
    increase: "Upto 35% increase in productivity",
    decrease: "Upto 28% decrease in Sick Leaves",
  },
  {
    title: "Tactical Upgrades",
    subtitle: "Focused Training Programs",
    image: FrontlineArmour3,
    increase: "7.9x Return on Investment",
    decrease: "60-70% increase in Productivity",
  },
  {
    title: "Backdoor Insights",
    subtitle: "Soft Insights (otherwise lost)",
    image: FrontlineArmour4,
    increase: "Reduced attrition rates by 10-20%",
    decrease: "Increased job satisfaction by 70%",
  },
];

export default function UpgradeFrontline() {
  const [frontlineTab, setFrontlineTab] = useState(tabData[0]);

  return (
    <section className="px-4 xl:px-10 pt-10 xl:pt-20 bg-primary-two">
      <div className="mt-40">
        <div className="mt-9">
          <div className="grid grid-cols-2 xl:grid-cols-4">
            {tabData.map((value, i) => (
              <button
                key={i}
                onClick={() => setFrontlineTab(value)}
                className={`${
                  value.label == frontlineTab.label
                    ? "border-primary-one bg-primary-one"
                    : "border-slate-400 text-white"
                } border-2 font-bold py-3 text-xs lg:text-base`}
                name={value.label}
              >
                {value.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-y-9 xl:grid-cols-4 mt-6 lg:gap-5">
            {frontline_armour.map((value, i) => (
              <div className="text-center border py-8" key={i}>
                <Image
                  src={value.image}
                  alt={value.title}
                  width={180}
                  className="mb-4 mx-auto xl:w-60"
                />
                <h2 className="text-sm xl:text-lg text-white font-semibold">
                  {value.title}
                </h2>
                <h4 className="text-xs lg:text-base text-slate-500 font-semibold">
                  {value.subtitle}
                </h4>
                <p className="text-xs lg:text-base font-semibold text-primary-one">
                  {value.increase}
                </p>
                <p className="text-xs lg:text-base font-semibold text-primary-three">
                  {value.decrease}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
