"use client";
import PrimaryTitle from "@components/Title/PrimaryTitle";
import "@public/styles/b2b.css";
import { useState } from "react";

// Range Bar
const Range = ({ title, value, handle_change }) => {
  return (
    <div className="justify-self-center">
      <h4 className="text-white">{title}</h4>
      <label htmlFor={title} className="block">
        <input
          type="range"
          name={title}
          id={title}
          value={value}
          onChange={handle_change}
          min={0}
          max={100}
          className="white-range w-64 xl:w-96"
        />
      </label>
    </div>
  );
};

// Algo Data Box
const AlgoDataBox = ({ title, value }) => {
  return (
    <div className="bg-slate-900">
      <h2 className="text-center text-xl font-semibold py-2.5 border-2 text-white border-[#EB0000] px-4 xl:px-7 bg-[#790000]">
        {title}
      </h2>
      <p className="text-4xl text-center font-bold py-5 xl:py-8 text-red-500">
        {value}
      </p>
    </div>
  );
};

export default function Potential() {
  const [range1, setRange1] = useState(50);
  const [range2, setRange2] = useState(50);
  const [data, setData] = useState({
    mental_issue: 0.4 * range1,
    unproductivity: 0.35 * range2,
    attrition: (range2 / (0.25 * range1)) * 0.66,
  });

  const handleRange1 = (event) => {
    setRange1(event.target.value);
    setData({
      mental_issue: 0.4 * event.target.value,
      unproductivity: 0.35 * range2,
      attrition: (range2 / (0.25 * event.target.value)) * 0.66,
    });
  };

  const handleRange2 = (event) => {
    setRange2(event.target.value);
    setData({
      mental_issue: 0.4 * range1,
      unproductivity: 0.35 * event.target.value,
      attrition: (event.target.value / (0.25 * range1)) * 0.66,
    });
  };

  return (
    <section className="px-4 xl:px-10 pt-36 bg-primary-two">
      <PrimaryTitle text={"Calculate your Potential Loss"} />
      <p className="text-gray-400 text-center">
        What can&apos;t be measured, can&apos;t be improved.
      </p>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 my-20">
          <Range
            handle_change={handleRange1}
            title="Organization Size"
            value={range1}
          />
          <Range
            handle_change={handleRange2}
            title="Annulalized Revenue"
            value={range2}
          />
        </div>
        <div className="grid xl:grid-cols-3 gap-4">
          <AlgoDataBox
            title={"Employees w/ chronic mental issues"}
            value={Math.floor(data.mental_issue)}
          />
          <AlgoDataBox
            title={"Potential Revenue Loss due to unproductivity"}
            value={Math.floor(data.unproductivity)}
          />
          <AlgoDataBox
            title={"Potential Revenue Loss due to attrition"}
            value={Math.floor(data.attrition)}
          />
        </div>
      </div>
    </section>
  );
}
