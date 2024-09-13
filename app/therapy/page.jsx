import TherapyMainPage from "@components/Therapy/TherapyMainPage";
import { THERAPY } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Beat Stress & Anxiety | Best Online Therapists at Wleness",
  description:
    "Achieve mental well-being with Wleness, India's leading platform for affordable online therapy. Book a session with the best online psychologists for anxiety, stress, relationships, and more. Chat, call, or video - get started on your wellness journey today.",
  alternates: {
    canonical: getCanonical(THERAPY),
  },
};

export default function TherapyPage() {
  return <TherapyMainPage />;
}
