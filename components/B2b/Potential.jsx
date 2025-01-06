"use client";
import PrimaryTitle from "@components/Title/PrimaryTitle";
import "@public/styles/b2b.css";
import { useState } from "react";

// Range Bar
const Range = ({ title, value, handle_change, max }) => {
  return (
    <div className="justify-self-center">
      <h4 className="text-white flex items-center justify-between">
        <span>{title}</span>
        <small>
          {value >= 100001
            ? String(Math.floor(value / 10000000) + " Cr")
            : value}
        </small>
      </h4>
      <label htmlFor={title} className="block">
        <input
          type="range"
          name={title}
          id={title}
          value={value}
          onChange={handle_change}
          min={0}
          step={1}
          max={max}
          className="white-range w-64 xl:w-96"
        />
      </label>
      {max > 100000 && <small className="text-slate-400">Value in crore</small>}
    </div>
  );
};

// Algo Data Box
const AlgoDataBox = ({ title, value, range, rangeVal }) => {
  let computedValue = typeof rangeVal === 'number' ? rangeVal : parseInt(value.split(' ')[0])
  return (
    <div className="bg-slate-900">
      <h2 className="text-center text-xl font-semibold py-2.5 border-2 text-white border-[#EB0000] px-4 xl:px-7 bg-[#790000]">
        {title}
      </h2>
      <p className={`text-4xl text-center font-bold py-5 xl:py-8 ${(range === 'range-1' && computedValue <= 16000) || (range === 'range-2' && computedValue <= 16) || ((range === 'range-3' && computedValue <= 3100)) ? 'text-yellow-500': 'text-red-500'} `}>
        {value}
      </p>
    </div>
  );
};

export default function Potential() {
  const [range1, setRange1] = useState(50000);
  const [range2, setRange2] = useState(50000);
  const [data, setData] = useState({
    mental_issue: 0.4 * range1,
    unproductivity: 0.082 * range2,
    attrition: (range2 / range1) * 0.66 * 25,
  });

  const handleRange1 = (event) => {
    setRange1(event.target.value);
    setData({
      mental_issue: 0.4 * event.target.value,
      unproductivity: 0.082 * range2,
      attrition: (range2 / event.target.value) * 0.66 * 25,
    });
  };

  const handleRange2 = (event) => {
    setRange2(event.target.value);
    setData({
      mental_issue: 0.4 * range1,
      unproductivity: 0.082 * event.target.value,
      attrition: (event.target.value / range1) * 0.66 * 25,
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
            min={1}
            max={100000}
          />
          <Range
            handle_change={handleRange2}
            title="Annulalized Revenue"
            value={range2}
            min={1}
            max={1000000000000}
          />
        </div>
        <div className="grid xl:grid-cols-3 gap-4">
          <AlgoDataBox
            title={"Employees w/ chronic mental issues"}
            value={Math.floor(data.mental_issue)}
            range={'range-1'}
            rangeVal={Math.floor(data.mental_issue)}
          />
          <AlgoDataBox
            title={"Potential Revenue Loss due to unproductivity"}
            value={`${Math.floor(data.unproductivity / 10000000)} Cr`}
            range='range-3'
            rangeVal={
              typeof data.attrition === 'number' && !isNaN(data.attrition)
                ? `${Math.floor(data.attrition / 10000000)} Cr`
                : "0 Cr"
            }
          />
          <AlgoDataBox
            title={"Potential Revenue Loss due to attrition"}
            value={
              typeof data.attrition === 'number' && !isNaN(data.attrition)
                ? `${Math.floor(data.attrition / 10000000)} Cr`
                : "0 Cr"
            }
            range={'range-2'}
            rangeVal={
              typeof data.attrition === 'number' && !isNaN(data.attrition)
                ? `${Math.floor(data.attrition / 10000000)} Cr`
                : "0 Cr"
            }
          />
        </div>
      </div>
    </section>
  );
}
