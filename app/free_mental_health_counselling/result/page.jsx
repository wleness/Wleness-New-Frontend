import getCanonical from "@utils/getCanonical";
import ResultPage from "./ResultPage";
import { ASSESSMENT_RESULT } from "@data/urls";

export const metadata = {
  title: "Assessment Results | Wleness - Online Mental Health Platform",
  description:
    " Wleness Life Coaching program help you to achieve your goals and live a fulfilling life. Schedule a consultation today!",
  alternates: {
    canonical: getCanonical(ASSESSMENT_RESULT),
  },
};

export default function AssessmentResult() {
  return <ResultPage />;
}
