"use client";
import Therapies from "@components/Home/Therapies";
import HappyClient from "@components/Sliders/HappyClient";
import Header from "@components/Therapy/Header";
import SelectBest from "@components/Therapy/SelectBest";
import WhyChooseGrid from "@components/Therapy/WhyChooseGrid";
import { therapyClient } from "@data/clients";
import { TherapyData } from "@data/therapy";
import { useRef } from "react";

export default function TherapyMainPage() {
  const ref = useRef(null);

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header
        name={TherapyData.name}
        image={TherapyData.image}
        desc={TherapyData.desc}
        handleScrollToComponent={() => handleScrollToComponent()}
      />
      <WhyChooseGrid data={TherapyData.whyChoose} />
      <SelectBest
        ref={ref}
        name={TherapyData.name}
        heading={TherapyData.bestTherapist.heading}
        image={TherapyData.bestTherapist.featureImage}
        features={TherapyData.bestTherapist.features}
        btn={TherapyData.bestTherapist.startBtn}
        headingBg={true}
      />
      {/* Therapies */}
      <Therapies is_title={false} is_bg={true} />
      <HappyClient data={therapyClient} />
    </>
  );
}
