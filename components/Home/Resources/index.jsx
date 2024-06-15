"use client";

import { useState } from "react";
import ResourceAssessment from "./ResourceAssessment";
import ResourceBlogs from "./ResourceBlogs";
import ResourceVideos from "./ResourceVideos";

export default function Resources() {
  const [activeTab, setActiveTab] = useState("Videos");

  const tabs = [
    {
      name: "Assessments",
      component: ResourceAssessment,
    },
    {
      name: "Blogs",
      component: ResourceBlogs,
    },
    {
      name: "Videos",
      component: ResourceVideos,
    },
  ];

  return (
    <section className="container mx-auto my-8 rounded-xl bg-primary-10 py-10 lg:my-14 lg:min-h-[520px]">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="subheading">Our Resources</h2>
      </div>
      <div className="mb-8 mt-4">
        <ul className="flex justify-center gap-x-2">
          {tabs.map((value, i) => (
            <li
              key={i}
              onClick={() => setActiveTab(value.name)}
              className={`cursor-pointer select-none px-4 py-2 text-sm font-bold lg:px-7 ${
                value.name == activeTab
                  ? "border-b-2 border-primary-300 text-primary-300"
                  : ""
              }`}
            >
              {value.name}
            </li>
          ))}
        </ul>
      </div>

      {tabs
        .filter((tab) => tab.name == activeTab)
        .map((value, i) => {
          return <value.component key={i} />;
        })}
    </section>
  );
}
