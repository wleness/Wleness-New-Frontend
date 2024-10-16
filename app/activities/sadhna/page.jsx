import Header from "@components/Activities/Header";
import SadhnaTechniques from "@components/Activities/SadhnaTechniques";
import { sadhna } from "@data/activities";
import { SADHNA } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Sadhana for Mental Well-being | Wleness",
  description:
    " Wleness Life Coaching program help you to achieve your goals and live a fulfilling life. Schedule a consultation today!",
  alternates: {
    canonical: getCanonical(SADHNA),
  },
};

export default function Sadhnapage() {
  return (
    <>
      <Header
        name={sadhna.name}
        title={sadhna.header.title}
        desc={sadhna.header.desc}
        image={sadhna.header.image}
        alt={sadhna.header.alt}
        button={{ text: "Enquire Now" }}
      />

      <SadhnaTechniques
        name={sadhna.name}
        title={sadhna.activities.title}
        desc={sadhna.activities.desc}
        types={sadhna.activities.types}
      />
    </>
  );
}
