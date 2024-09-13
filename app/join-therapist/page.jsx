import { THERAPIST_JOIN_URI } from "@data/api";
import { therapistApplyHeader } from "@public";
// Components
import ExpertsApplyForm from "@components/Forms/ExpertsApplyForm";
import Header from "@components/JoinUs/Experts/Header";
import HowItWorks from "@components/JoinUs/Experts/HowItWorks";
import { THERAPIST_JOIN } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Join Therapists | Wleness",
  description:
    "Find the perfect Wleness Online Therapy Plan for your needs. Affordable online therapy sessions with top-rated psychologists. Get effective treatment for anxiety, depression, and more through convenient chat, call, or video sessions. Start your mental health journey today!",
  alternates: {
    canonical: getCanonical(THERAPIST_JOIN),
  },
};

export default function page() {
  return (
    <>
      <Header name="Therapists" image={therapistApplyHeader} />
      <ExpertsApplyForm name="Therapists" url={THERAPIST_JOIN_URI} />
      <HowItWorks />
    </>
  );
}
