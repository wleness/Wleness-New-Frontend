"use client";
import DoctorSlider from "@components/Sliders/DoctorSlider";
import HappyClient from "@components/Sliders/HappyClient";
import FaqWithImage from "@components/Therapy/CoupleTherapy/FaqWithImage";
import Header from "@components/Therapy/CoupleTherapy/Header";
import RelationshipHelp from "@components/Therapy/CoupleTherapy/RelationshipHelp";
import { coupleTherapyClient } from "@data/clients";
import { coupleTherapyFaq } from "@data/faqs";
import { coupleTherapyData } from "@data/therapy";
import { useRef, useState } from "react";

export default function CouplesTherapy() {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const [rediredurl, setRediredurl] = useState(null);

  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };

  const ref = useRef(null);

  const handleScrollToComponent = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const resetBookNow = () => {
    openAssessmentModal();

    setRediredurl({
      title: "Find a Therapist",
      name: "Find a Therapist",
      url: "/experts/all",
    });
  };

  return (
    <>
      <Header
        data={coupleTherapyData.header}
        handleScrollToComponent={() => handleScrollToComponent()}
        openAssessmentModal={() => resetBookNow()}
      />
      <p ref={ref}></p>

      {/* How Section  */}
      <RelationshipHelp data={coupleTherapyData.help} />

      {/* Doctors */}
      <DoctorSlider
        data={coupleTherapyData.doctors}
        openAssessmentModal={openAssessmentModal}
        setUrl={setRediredurl}
      />
      <HappyClient data={coupleTherapyClient} />
      <FaqWithImage data={coupleTherapyFaq} />
      {/* <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
        buttons={rediredurl}
      /> */}
    </>
  );
}
