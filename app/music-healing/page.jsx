// Data
import { music_healing } from "@data/activities";
// Components
import Header from "@components/Activities/Header";
import Services from "@components/MusicHealing/Services";
import Tracks from "@components/MusicHealing/Tracks";
import Benefits from "@components/MusicHealing/Benefits";
import HappyClient from "@components/Sliders/HappyClient";
import { musicalTherapyClient } from "@data/clients";
import { musicalTherapyFaq } from "@data/faqs";
import FaqWithImage from "@components/Therapy/CoupleTherapy/FaqWithImage";
import getCanonical from "@utils/getCanonical";
import { MUSICAL_HEALING } from "@data/urls";

export const metadata = {
  title: "Music Therapy for Mental Wellness | Wleness",
  description:
    " Wleness Life Coaching program help you to achieve your goals and live a fulfilling life. Schedule a consultation today!",
  alternates: {
    canonical: getCanonical(MUSICAL_HEALING),
  },
};

export default function MusicHealingPage() {
  return (
    <>
      <Header
        name={music_healing.name}
        title={music_healing.header.title}
        desc={music_healing.header.desc}
        image={music_healing.header.image}
        alt={music_healing.header.alt}
        button={{ text: "Enquire Now" }}
      />
      <Services data={music_healing.activities} name={music_healing.name} />

      <Tracks />
      <Benefits data={music_healing.benefits} />

      <HappyClient data={musicalTherapyClient} />
      <FaqWithImage data={musicalTherapyFaq} />
    </>
  );
}
