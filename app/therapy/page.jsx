import TherapyMainPage from "@components/Therapy/TherapyMainPage";
import { THERAPY } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Transform Your Life with Best Therapists in India",
  description:
    "Discover the best online therapy in India with the best psychologist. Access affordable therapy through our therapy website and professional counseling services.",
  alternates: {
    canonical: getCanonical(THERAPY),
  },
};

export default function TherapyPage() {
  return <TherapyMainPage />;
}
