import Image from "next/image";
import { PotentialBarGraph, PotentialChartGraph } from "@/public";
import PrimaryTitle from "@components/Title/PrimaryTitle";
import "@public/styles/b2b.css";

const data = [
  {
    title: "Organization Size",
    value: 30,
  },
  {
    title: "Annual Revenue",
    value: 50,
  },
  {
    title: "Company Culture",
    value: 80,
  },
];

const data2 = [
  {
    title: "Employees w/ chronic mental issues",
    value: 25,
  },
  {
    title: "Potential Revenue Loss due to unproductivity",
    value: 55,
  },
  {
    title: "Potential Revenue Loss due to attrition",
    value: 70,
  },
];

export default function Potential() {
  return (
    <section className="px-4 xl:px-10 pt-36 bg-primary-two">
      <PrimaryTitle text={"Calculate your Potential Loss"} />
      <p className="text-gray-400 text-center">
        What can&apos;t be measured, can&apos;t be improved.
      </p>
      <div className="grid gap-y-10 lg:gap-y-0 xl:grid-cols-2 p-8 mt-10 rounded-md">
        <div className="space-y-6 xl:space-y-12 grid place-items-center">
          {data.map((value, i) => (
            <div key={i}>
              <h4 className="text-white">{value.title}</h4>
              <label htmlFor={value.title} className="block">
                <input
                  type="range"
                  name={value.title}
                  id={value.title}
                  className="white-range"
                />
              </label>
            </div>
          ))}
        </div>

        <div className="space-y-6 xl:space-y-12 grid place-items-center">
          {data2.map((value, i) => (
            <div key={i}>
              <h4 className="text-white mb-3">{value.title}</h4>
              <label htmlFor={value.title} className="block">
                <input
                  type="range"
                  name={value.title}
                  id={value.title}
                  className="red-range"
                />
              </label>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
