import { expertsWhy1, expertsWhy2, expertsWhy3 } from "@public";
import Header from "@components/Experts/Header";
import Specialist from "@components/Experts/Specialist";
import WhyUs from "@components/Experts/WhyUs";
import Appointment from "@components/Experts/Appointment";
import HappyClient from "@components/Sliders/HappyClient";
import { doctorsPageClient } from "@data/clients";
import { COUPLES_THERAPY, PSYCHIATRIST, THERAPY } from "@data/urls";

export const metadata = {
  title: "Best Psychologist in India | Wleness",
  description:
    "Find the perfect match for your needs. Wleness connects you with India's top-rated psychologists for online therapy & counseling. Affordable & convenient. Get started now!",
};

const expertsTherapy = {
  title: "Therapy",
  desc: "A holistic approach to therapy that considers the whole person - mind, body, and spirit. Our therapeutic services are tailored to meet each client's individual needs, ensuring personalized and effective care.",
  image: expertsWhy1,
  slug: THERAPY,
};

const expertsPsychiatrist = {
  title: "Psychiatrist",
  desc: "A psychiatry is grounded in the principles of empathy, compassion, and evidence-based practice. Our psychiatrists employ a holistic view of mental health, considering biological, psychological, and social factors that may impact an individual's well-being.",
  image: expertsWhy2,
  slug: PSYCHIATRIST,
};

const expertsCoupleTherapy = {
  title: "Couple Therapy",
  desc: "We believe that every couple is unique, and their therapy should reflect that. Our couple therapy approach is tailored to meet each relationship's specific needs and dynamics.",
  image: expertsWhy3,
  slug: COUPLES_THERAPY,
};

export default function ExpertsPage() {
  return (
    <>
      <Header />
      <Specialist />
      <WhyUs
        expertsTherapy={expertsTherapy}
        expertsPsychiatrist={expertsPsychiatrist}
        expertsCoupleTherapy={expertsCoupleTherapy}
      />
      <Appointment />
      <HappyClient data={doctorsPageClient} />
    </>
  );
}
