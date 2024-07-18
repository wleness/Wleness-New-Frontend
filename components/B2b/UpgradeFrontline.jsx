"use client";
import {
  FrontlineArmour1,
  FrontlineArmour2,
  FrontlineArmour3,
  FrontlineArmour4,
} from "@/public";
import B2BForm from "@components/Forms/B2BForm";
import Image from "next/image";
import { useState } from "react";

const frontline_armour = [
  {
    title: "Data Insights",
    subtitle: "Soft Insights: Otherwise lost",
    image: FrontlineArmour4,
    increase: "Reduced attrition rates by 10-20%",
    decrease: "Increased job satisfaction by 70%",
    desc: "Gain actionable soft insights to boost human efficiency & predict team challenges way in advance.",
  },
  {
    title: "Tactical Upgrades",
    subtitle: "Strong Company Culture",
    image: FrontlineArmour1,
    increase: "4x Increase in Revenue Growth",
    decrease: "51% increase in team efficiency",
    desc: "Enhance leadership morale through focused trainings & workshops to amplify human performance.",
  },
  {
    title: "Default Tuning",
    subtitle: "Increased Wellbeing",
    image: FrontlineArmour2,
    increase: "Upto 35% increase in productivity",
    decrease: "Upto 28% decrease in Sick Leaves",
    desc: "Ensure peak performance and employee satisfaction with continuous, integrated support.",
  },
  {
    title: "Cultural Huddles",
    subtitle: "Focused Training Programs",
    image: FrontlineArmour3,
    increase: "7.9x Return on Investment",
    decrease: "60-70% increase in Productivity",
    desc: "Outsource team-building and best practices to strengthen your company's core values while you focus on your core.",
  },
];

export default function UpgradeFrontline() {
  const [frontlineTab, setFrontlineTab] = useState(frontline_armour[0]);
  const [b2bForm, setB2bForm] = useState(false);

  // Toggle form
  const toggleForm = () => {
    setB2bForm(!b2bForm);
  };

  return (
    <>
      <section className="px-4 xl:px-10 pt-10 bg-primary-two">
        <div className="mt-40">
          <div className="mt-9">
            <div className="grid grid-cols-2 xl:grid-cols-4">
              {frontline_armour.map((value, i) => (
                <button
                  key={i}
                  onClick={() => setFrontlineTab(value)}
                  className={`${
                    value.title == frontlineTab.title
                      ? "border-primary-one bg-primary-one"
                      : "border-slate-400 text-white"
                  } border-2 font-bold py-3 text-xs lg:text-base`}
                  name={value.title}
                >
                  {value.title}
                </button>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-y-9 xl:grid-cols-4 mt-6 lg:gap-5">
              {frontline_armour.map((value, i) => (
                <div className="text-center border pt-8" key={i}>
                  <Image
                    src={value.image}
                    alt={value.title}
                    width={180}
                    className="mb-4 mx-auto xl:w-60"
                  />
                  <h4 className="text-xs lg:text-base text-slate-500 font-semibold">
                    {value.subtitle}
                  </h4>
                  <p className="text-xs lg:text-base font-semibold text-primary-one">
                    {value.increase}
                  </p>
                  <p className="text-xs lg:text-base font-semibold text-primary-three mb-4">
                    {value.decrease}
                  </p>
                  <p
                    className={`p-4 ${
                      value.title == frontlineTab.title
                        ? "bg-primary-one"
                        : "text-gray-400"
                    }`}
                  >
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button onClick={toggleForm} className="btn-2 bg-primary-one">
                Amplify Human Performance
              </button>
            </div>
          </div>
        </div>
      </section>

      <B2BForm isOpen={b2bForm} onClose={toggleForm} />
    </>
  );
}
