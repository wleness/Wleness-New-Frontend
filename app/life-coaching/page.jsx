import LifeCoachPage from "@components/Coach/Life/LifeCoachPage";
import { LIFESTYLE_COACHING } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Build Your Personal Growth with Wleness Life Coaching Program",
  description:
    " Wleness Life Coaching program help you to achieve your goals and live a fulfilling life. Schedule a consultation today!",
  alternates: {
    canonical: getCanonical(LIFESTYLE_COACHING),
  },
};

export default function page() {
  return <LifeCoachPage />;
}
