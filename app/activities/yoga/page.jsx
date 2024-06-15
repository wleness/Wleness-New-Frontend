"use client";
import Header from "@components/Activities/Header";
import YogaBenefits from "@components/Activities/YogaBenefits";
import YogaGuidedPath from "@components/Activities/YogaGuidedPath";
import YogaSession from "@components/Activities/YogaSession";
import YogaTechniques from "@components/Activities/YogaTechniques";
import ActivityForm from "@components/Forms/ActivityForm";
import HappyClient from "@components/Sliders/HappyClient";
import YogaSlider from "@components/Sliders/YogaSlider";
import { yoga } from "@data/activities";
import { yogaClients } from "@data/clients";
import useEnquiryForm from "@utils/useEnquiryForm";

export default function Yogapage() {
  const { enquiryForm, toggleForm } = useEnquiryForm();
  return (
    <>
      <Header
        title={yoga.header.title}
        desc={yoga.header.desc}
        image={yoga.header.image}
        alt={yoga.header.alt}
        button={{ text: "Enquire Now", action: toggleForm }}
      />

      <YogaTechniques data={yoga.activities} openEnquiry={toggleForm} />
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
      <ActivityForm
        purpose={yoga.name}
        isOpen={enquiryForm}
        onClose={toggleForm}
      />
      <HappyClient data={yogaClients} />
    </>
  );
}
