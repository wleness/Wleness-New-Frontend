import Header from "@components/Activities/Header";
import MeditationTechniques from "@components/Activities/MeditationTechniques";
import { meditation } from "@data/activities";
import { MEDITATION } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Guided Meditation for Beginners | Wleness",
  description:
    " Wleness Life Coaching program help you to achieve your goals and live a fulfilling life. Schedule a consultation today!",
  alternates: {
    canonical: getCanonical(MEDITATION),
  },
};

export default function MeditationPage() {
  return (
    <>
      <Header
        name={meditation.name}
        title={meditation.header.title}
        desc={meditation.header.desc}
        image={meditation.header.image}
        alt={meditation.header.alt}
        button={{ text: "Enquire Now" }}
      />
      <MeditationTechniques
        name={meditation.name}
        title={meditation.activities.title}
        desc={meditation.activities.desc}
        types={meditation.activities.types}
      />
    </>
  );
}
