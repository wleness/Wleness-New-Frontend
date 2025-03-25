import TherapyMainPage from "@components/Therapy/TherapyMainPage";
import { THERAPY } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
    title: "Wleness -Transform Your Life with a certified psychologist for mental health in India    ",
    keywords: [
        "therapy for stress",
        "Therapist Online",
        "best counsellor",
        "Best online therapy india",
        "Best psychologist",
        "therapy website",
        "affordable therapy",
        "Counseling service",
    ],
    description:
        "Discover the best online therapy in India with the best psychologist. Access affordable therapy through our therapy website and professional counseling services.",
    alternates: {
        canonical: getCanonical(THERAPY),
    },
};

export default function TherapyPage() {
    return <TherapyMainPage />;
}
