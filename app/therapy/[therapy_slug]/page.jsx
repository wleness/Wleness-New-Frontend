// Components
import { therapy_details } from "@data/therapy";
import DetailHeader from "@components/Therapy/Detail/Header";
import Symptoms from "@components/Therapy/Detail/Symptoms";
import WlenessApproach from "@components/Therapy/Detail/WlenessApproach";
import DoctorSlider from "@components/Sliders/DoctorSlider";
import Community from "@components/Therapy/Detail/Community";
import IssueQuote from "@components/Therapy/Detail/IssueQuote";
import { notFound } from "next/navigation";
import CouplesTherapy from "./CouplesTherapy";

export const generateMetadata = ({ params }) => {
  return {
    title: `${therapy_details[params.therapy_slug]?.meta_title}`,
    description: `${therapy_details[params.therapy_slug]?.meta_desc}`,
  };
};

export default function TherapyDetailPage({ params }) {
  if (params.therapy_slug == "couples-therapy") {
    return <CouplesTherapy />;
  }
  const info = therapy_details[params.therapy_slug];

  if (!info) {
    return notFound();
  }
  return (
    <>
      <DetailHeader data={info.header} />
      <Symptoms data={info.symptoms} />
      <WlenessApproach data={info.approach} />
      <DoctorSlider data={info.doctors} />
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
