"use client";
// Data
import { coaches, executive_coaching } from "@data/coach";
import useEnquiryForm from "@utils/useEnquiryForm";
// Components
import Header from "@components/Coach/Executive/Header";
import Coaches from "@components/Coach/Coaches";
import WhyExecutiveCoaching from "@components/Coach/Executive/WhyExecutiveCoaching";
import Pointers from "@components/Coach/Executive/Pointers";
import OurApproach from "@components/Coach/Executive/OurApproach";
import CoachRequestForm from "@components/Forms/CoachRequestForm";
import ActivityForm from "@components/Forms/ActivityForm";
import Guide from "@components/Coach/Executive/Guide";

export default function ExecutiveCoachPage() {
  const { enquiryForm, toggleForm } = useEnquiryForm();
  // Filter executive coaches
  const executive_coaches = coaches.filter(
    (value) => value.category == "executive"
  );

  return (
    <>
      <Header toggleForm={toggleForm} />
      <WhyExecutiveCoaching data={executive_coaching.coaching} />
      <Coaches title="Executive Experts" coaches={executive_coaches} />
      <Guide data={executive_coaching.guide} />
      <Pointers data={executive_coaching.points} />
      <OurApproach data={executive_coaching.approach} />
      <CoachRequestForm name="Executive Coaching" onClose={toggleForm} />
      <ActivityForm
        purpose="Executive Coaching"
        isOpen={enquiryForm}
        onClose={toggleForm}
      />
    </>
  );
}
