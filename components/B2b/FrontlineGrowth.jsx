import {
  FrontlineTreeMap,
  Icon1,
  Icon2,
  Icon3,
  Icon4,
  Icon5,
  Icon6,
} from "@/public";
import Certifications from "@components/common/Certifications";
import PrimaryTitle from "@components/Title/PrimaryTitle";
import Image from "next/image";

const data = [
  {
    title: "Employee Unproductivity",
    image: Icon6,
    desc: "It costs as much as ~35% loss in the profit-potential due to this unproductivity",
    style: "top-48 lg:top-80 lg:left-0",
  },
  {
    title: "Unattended Employees",
    image: Icon4,
    desc: "40% of employees suffer from common mental-health problems, a loss of one month",
    style: "left-10 top-16 lg:top-32 lg:left-32",
  },
  {
    title: "Fragile Culture",
    image: Icon2,
    desc: "58% of employees would go with a competitor if they had a better culture.",
    style: "right-2 top-16 lg:right-44 lg:top-28",
  },
  {
    title: "Employee Attrition",
    image: Icon5,
    desc: "It costs as much as 66% the role's annual CTC to replace someone in time & money.",
    style: "right-0 top-48 lg:top-80",
  },
];

export default function FrontlineGrowth() {
  return (
    <section className="px-2 xl:px-10 bg-primary-two">
      <div className="mx-auto xl:w-[1024px]">
        <div className="pb-8 relative grid xl:grid-cols-2 gap-6">
          {data.map((value, i) => (
            <div className="grid odd:grid-cols-[1fr_3fr] even:grid-cols-[3fr_1fr] group rounded-md">
              <Image
                src={value.image}
                alt={value.title}
                className="w-24 h-24 object-contain mx-auto group-even:order-2"
              />
              <div
                key={i}
                className="border-2 border-primary-one group-even:order-1"
              >
                <h4 className="p-1 bg-primary-one text-black font-medium">
                  {value.title}
                </h4>
                <p className="text-slate-300 p-4">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Image
            src={Icon3}
            alt="Growth profit and loss"
            className="w-24 h-24 object-contain mx-auto group-even:order-2"
          />
          <h4 className="text-[#FF5500] text-2xl font-medium text-center">
            Growth & Profit Losss!
          </h4>
        </div>
      </div>
    </section>
  );
}
