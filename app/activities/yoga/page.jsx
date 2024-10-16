import Header from "@components/Activities/Header";
import YogaBenefits from "@components/Activities/YogaBenefits";
import YogaGuidedPath from "@components/Activities/YogaGuidedPath";
import YogaSession from "@components/Activities/YogaSession";
import YogaTechniques from "@components/Activities/YogaTechniques";
import HappyClient from "@components/Sliders/HappyClient";
import YogaSlider from "@components/Sliders/YogaSlider";
import { yoga } from "@data/activities";
import { yogaClients } from "@data/clients";
import { YOGA } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Wleness: Yoga for a Balanced Mind and Body",
  description:
    " Wleness Life Coaching program help you to achieve your goals and live a fulfilling life. Schedule a consultation today!",
  alternates: {
    canonical: getCanonical(YOGA),
  },
};

export default function Yogapage() {
  return (
    <>
      <Header
        name={yoga.name}
        title={yoga.header.title}
        desc={yoga.header.desc}
        image={yoga.header.image}
        alt={yoga.header.alt}
        button={{ text: "Enquire Now" }}
      />

      <YogaTechniques data={yoga.activities} />
      <YogaSession
        title={[
          {
            color: false,
            text: "Grab Your ",
          },
          {
            color: true,
            text: "Monthly Pass ",
          },
        ]}
        one_time={false}
        one_month={true}
      />
      <YogaGuidedPath
        title={[
          {
            color: false,
            text: "Your Guided ",
          },
          {
            color: true,
            text: "Yoga Path ",
          },
        ]}
      />
      <YogaSlider />
      <YogaBenefits />
      <HappyClient data={yogaClients} />
    </>
  );
}
