import MainPage from "@components/Corporate/MainPage";
import { CORPORATE_WELLBEING } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Corporate | Wleness",
  description:
    "Find the perfect match for your needs. Wleness connects you with India's top-rated psychologists for online therapy & counseling. Affordable & convenient. Get started now!",
  alternates: {
    canonical: getCanonical(CORPORATE_WELLBEING),
  },
};

export default function CorporatePage() {
  return <MainPage />;
}
