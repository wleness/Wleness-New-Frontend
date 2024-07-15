import DoctorSlider from "@components/Sliders/DoctorSlider";
import HappyClient from "@components/Sliders/HappyClient";
import FaqWithImage from "@components/Therapy/CoupleTherapy/FaqWithImage";
import Header from "@components/Therapy/CoupleTherapy/Header";
import RelationshipHelp from "@components/Therapy/CoupleTherapy/RelationshipHelp";
import { coupleTherapyClient } from "@data/clients";
import { coupleTherapyFaq } from "@data/faqs";
import { coupleTherapyData } from "@data/therapy";

export default function CouplesTherapy() {
  return (
    <>
      <Header data={coupleTherapyData.header} />

      <RelationshipHelp data={coupleTherapyData.help} />

      <DoctorSlider data={coupleTherapyData.doctors} />

      <HappyClient data={coupleTherapyClient} />

      <FaqWithImage data={coupleTherapyFaq} />
    </>
  );
}
