import AssessmentQuestionPage from "@components/Assessment/AssessmentQuestionPage";
import { self_assessments } from "@data/self_assessment";
import { ASSESSMENT } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const generateMetadata = ({ params }) => {
  const get_assessment = self_assessments.filter(
    (assment) => assment.slug == params.question
  )[0];
  return {
    title: `${get_assessment?.name} | Self Assessment`,
    description:
      "Take the self assessment test to better understand your mental health status.",
    alternates: {
      canonical: getCanonical(`${ASSESSMENT}/${get_assessment?.slug}`),
    },
  };
};

export default function AssessmentCategoryPage({ params }) {
  return <AssessmentQuestionPage params={params} />;
}
