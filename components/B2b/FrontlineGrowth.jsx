import { FrontlineTreeMap } from "@/public";
import Certifications from "@components/common/Certifications";
import PrimaryTitle from "@components/Title/PrimaryTitle";
import Image from "next/image";

const data = [
  {
    title: "Employee Unproductivity",
    desc: "It costs as much as ~35% loss in the profit-potential due to this unproductivity",
    style: "top-48 lg:top-80 lg:left-0",
  },
  {
    title: "Unattended Employees",
    desc: "40% of employees suffer from common mental-health problems, a loss of one month",
    style: "left-10 top-16 lg:top-32 lg:left-32",
  },
  {
    title: "Fragile Culture",
    desc: "58% of employees would go with a competitor if they had a better culture.",
    style: "right-2 top-16 lg:right-44 lg:top-28",
  },
  {
    title: "Employee Attrition",
    desc: "It costs as much as 66% the role's annual CTC to replace someone in time & money.",
    style: "right-0 top-48 lg:top-80",
  },
];

export default function FrontlineGrowth() {
  return (
    <section className="px-2 xl:px-10 bg-primary-two">
      <div className="mx-auto xl:w-[1024px]">
        <PrimaryTitle text="Your Frontline takes care of YOUR growth & YOUR profits." />
        <PrimaryTitle text=" BUT, who takes care of your Frontline?" />

        <div className="mb-8 relative">
          {data.map((value, i) => (
            <div
              key={i}
              className={`border border-slate-400 hover:border-primary-one group transition-all hover:bg-primary-one absolute w-32 lg:w-80 ${value.style} bg-black`}
            >
              <h2 className="text-[8px] lg:text-xl group-hover:text-black font-semibold text-white p-2 border-b border-slate-400">
                {value.title}
              </h2>
              <p className="text-slate-300 group-hover:text-black text-[9px] lg:text-base p-2">
                {value.desc}
              </p>
            </div>
          ))}

          <div className="pt-40 lg:pt-64">
            <Image
              src={FrontlineTreeMap}
              alt="frontline map"
              width={250}
              className="mx-auto lg:w-[450px]"
            />
          </div>
        </div>

        <div>
          <PrimaryTitle text="Growth and Profit Loss?" />
          <br />
          <Certifications />
        </div>
      </div>
    </section>
  );
}
