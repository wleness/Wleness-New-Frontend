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
import getCanonical from "@utils/getCanonical";
import { COUPLES_THERAPY } from "@data/urls";

export const generateMetadata = ({ params }) => {
  if (params.therapy_slug == "couples-therapy") {
    return {
      title: "Couples Therapy | Wleness Wellbeing",
      description:
        "Wleness Couples Therapy program help you to achieve your goals and live a fulfilling life. Schedule a consultation today!",
      alternates: {
        canonical: getCanonical(COUPLES_THERAPY),
      },
    };
  } else {
    return {
      title: `${therapy_details[params.therapy_slug]?.meta_title}`,
      description: `${therapy_details[params.therapy_slug]?.meta_desc}`,
      alternates: {
        canonical: getCanonical(therapy_details[params.therapy_slug]?.slug),
      },
    };
  }
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
