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
    desc: [
      "Corporate workshops in the workplace are essential for fostering employee well-being and productivity. By providing stress management, resilience building, and work-life balance seminars, you can empower your employees to better cope with challenges and thrive in their roles.",
      "Wleness assists corporations by offering access to ICF-certified counsellors who are mental health and well-being experts. The counsellors conduct workshops tailored to your workforce's specific needs, providing valuable insights and strategies for maintaining mental wellness in the workplace. Wleness also offers workshops covering holistic well-being, including mindfulness, nutrition, and fitness, to support employees in achieving a balanced and healthy lifestyle. Unlock increased productivity, job satisfaction, and outcomes. Associate with your company and get mental health support for all employees. Take your corporate well-being to the next level with Wleness.",
    ],
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
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis nobis rem itaque consectetur, natus ad sapiente non est doloremque tenetur enim ab quam delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis nobis rem itaque consectetur, natus ad sapiente non est doloremque tenetur enim ab quam delectus.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis nobis rem itaque consectetur, natus ad sapiente non est doloremque tenetur enim ab quam delectus. Quaerat suscipit, laborum cumque dolore iure nisi placeat praesentium iusto omnis sint sed alias provident eum ratione quas fugit ipsa optio exercitationem harum consectetur corrupti. Quaerat suscipit, laborum  Quaerat suscipit, laborum cumque dolore iure nisi placeat praesentium iusto omnis sint sed alias provident eum ratione quas fugit ipsa optio exercitationem harum consectetur corrupti. Quaerat suscipit, laborum",
    ],
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
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis nobis rem itaque consectetur, natus ad sapiente non est doloremque tenetur enim ab quam delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis nobis rem itaque consectetur, natus ad sapiente non est doloremque tenetur enim ab quam delectus.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis nobis rem itaque consectetur, natus ad sapiente non est doloremque tenetur enim ab quam delectus. Quaerat suscipit, laborum cumque dolore iure nisi placeat praesentium iusto omnis sint sed alias provident eum ratione quas fugit ipsa optio exercitationem harum consectetur corrupti. Quaerat suscipit, laborum  Quaerat suscipit, laborum cumque dolore iure nisi placeat praesentium iusto omnis sint sed alias provident eum ratione quas fugit ipsa optio exercitationem harum consectetur corrupti. Quaerat suscipit, laborum",
    ],
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
    desc: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis nobis rem itaque consectetur, natus ad sapiente non est doloremque tenetur enim ab quam delectus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis nobis rem itaque consectetur, natus ad sapiente non est doloremque tenetur enim ab quam delectus.",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, veritatis nobis rem itaque consectetur, natus ad sapiente non est doloremque tenetur enim ab quam delectus. Quaerat suscipit, laborum cumque dolore iure nisi placeat praesentium iusto omnis sint sed alias provident eum ratione quas fugit ipsa optio exercitationem harum consectetur corrupti. Quaerat suscipit, laborum  Quaerat suscipit, laborum cumque dolore iure nisi placeat praesentium iusto omnis sint sed alias provident eum ratione quas fugit ipsa optio exercitationem harum consectetur corrupti. Quaerat suscipit, laborum",
    ],
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
      <div className="my-28 xl:my-32">
        <PrimaryTitle text={"Frontline Armour"} />
        <div className="grid md:grid-cols-2 gap-y-9 xl:grid-cols-4 mt-14 lg:gap-5">
          {frontline_armour.map((value, i) => (
            <div className="text-center" key={i}>
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

      <div className="mt-40">
        <PrimaryTitle text={"Upgrade your Frontline"} />
        <div className="mt-9">
          <div className="grid grid-cols-2 xl:grid-cols-4">
            {tabData.map((value, i) => (
              <button
                key={i}
                onClick={() => setFrontlineTab(value)}
                className={`${
                  value.label == frontlineTab.label
                    ? "border-primary-three bg-primary-three"
                    : "border-slate-400"
                } text-white border-2 font-bold py-3 text-xs lg:text-base`}
                name={value.label}
              >
                {value.label}
              </button>
            ))}
          </div>
          <div className="grid xl:grid-cols-2 bg-[#000D15] xl:p-4 mt-4 xl:mt-0 gap-8">
            <div>
              <Image
                src={ResolveImage}
                alt="resolve image"
                width={450}
                className="rounded-xl w-full h-64 xl:h-96 object-cover"
              />
            </div>
            <div>
              <h2 className="text-white font-bold text-xl mb-2 xl:text-2xl">
                {frontlineTab.title}
              </h2>
              <p className="text-light !text-base grid gap-4">
                <span>{frontlineTab.desc[0]}</span>
                <span>{frontlineTab.desc[1]}</span>
              </p>
              <div className="text-right mt-4">
                <Link
                  href={frontlineTab.button.slug}
                  className="btn-2 bg-primary-one inline-block"
                >
                  <span className="flex items-center gap-x-2">
                    {frontlineTab.button.text}
                    <StarIcon theme={"dark"} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
