"use client";
// Components
import { useState } from "react";
import { therapy_details } from "@data/therapy";
import DetailHeader from "@components/Therapy/Detail/Header";
import Symptoms from "@components/Therapy/Detail/Symptoms";
import WlenessApproach from "@components/Therapy/Detail/WlenessApproach";
import DoctorSlider from "@components/Sliders/DoctorSlider";
import Community from "@components/Therapy/Detail/Community";
import IssueQuote from "@components/Therapy/Detail/IssueQuote";
import { notFound } from "next/navigation";
import CouplesTherapy from "./CouplesTherapy";

export default function TherapyDetailPage({ params }) {
  if (params.therapy_slug == "couples-therapy") {
    return <CouplesTherapy />;
  }
  const info = therapy_details[params.therapy_slug];
  if (!info) {
    return notFound();
  }

  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const [rediredurl, setRediredurl] = useState(null);
  const resetBookNow = () => {
    openAssessmentModal();

    setRediredurl({
      title: "Find a Therapist",
      name: "Find a Therapist",
      url: "/experts/all",
    });
  };
  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };

  return (
    <>
      <DetailHeader
        data={info.header}
        openAssessmentModal={() => resetBookNow()}
      />
      <Symptoms data={info.symptoms} />
      <WlenessApproach data={info.approach} />
      <DoctorSlider
        data={info.doctors}
        openAssessmentModal={openAssessmentModal}
        setUrl={setRediredurl}
      />
      <Community />
      <IssueQuote quote={info.quote} />
      {/* <Assessment
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
        buttons={rediredurl}
      /> */}
    </>
  );
}
