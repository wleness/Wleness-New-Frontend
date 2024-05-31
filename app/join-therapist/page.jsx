import { THERAPIST_JOIN_URI } from "@data/api";
import { therapistApplyHeader } from "@public";
// Components
import ExpertsApplyForm from "@components/Forms/ExpertsApplyForm";
import Header from "@components/JoinUs/Experts/Header";
import HowItWorks from "@components/JoinUs/Experts/HowItWorks";

export default function page() {
  return (
    <>
      <Header name="Therapists" image={therapistApplyHeader} />
      <ExpertsApplyForm name="Therapists" url={THERAPIST_JOIN_URI} />
      <HowItWorks />
    </>
  );
}
