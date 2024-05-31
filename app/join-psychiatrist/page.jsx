import { PSYCHIATRIST_JOIN_URI } from "@data/api";
import { psychiatristApplyHeader } from "@public";
// Components
import ExpertsApplyForm from "@components/Forms/ExpertsApplyForm";
import Header from "@components/JoinUs/Experts/Header";
import HowItWorks from "@components/JoinUs/Experts/HowItWorks";

export default function page() {
  return (
    <>
      <Header name="Psychiatrists" image={psychiatristApplyHeader} />
      <ExpertsApplyForm name="Psychiatrist" url={PSYCHIATRIST_JOIN_URI} />
      <HowItWorks />
    </>
  );
}
