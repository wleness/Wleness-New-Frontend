import Challenges from "@components/About/Challenges";
import Header from "@components/About/Header";
import Journey from "@components/About/Journey";
import Visionaries from "@components/About/Visionaries";
import { ABOUT_US } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "About Us | Wleness",
  description:
    "Get to know more about Wleness, your trusted partner in mental health & well-being. We offer online therapy, life coaching, and menta health counselling to help you thrive.",
  alternates: {
    canonical: getCanonical(ABOUT_US),
  },
};

export default function page() {
  return (
    <>
      <Header />
      <Challenges />
      <Journey />
      <Visionaries />
    </>
  );
}
