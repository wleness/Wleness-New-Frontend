import { expertsWhy1, expertsWhy2, expertsWhy3 } from "@public";
import Header from "@components/Experts/Header";
import Specialist from "@components/Experts/Specialist";
import WhyUs from "@components/Experts/WhyUs";
import Appointment from "@components/Experts/Appointment";
import HappyClient from "@components/Sliders/HappyClient";
import { doctorsPageClient } from "@data/clients";
import { COUPLES_THERAPY, EXPERTS, PSYCHIATRIST, THERAPY } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
    title: "At wleness you Find the Best Psychologists in India and wellness therapist",
    keywords: [
        "psychologist near me",
        "Best psychologist in India",
        "best therapist in india",
        "therapist near me",
        "best psychologist near me",
        "best counsellor in india",
        "top psychologist in india",
    ],
    description:
        "Looking for a therapist near you or the best psychologist near you? Consult the best counsellor in India or a top psychologist in India for professional help.",
    alternates: {
        canonical: getCanonical(EXPERTS),
    },
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
