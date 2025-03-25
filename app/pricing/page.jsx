import PricingCards from "@components/Cards/PricingCards";
import { PRICING } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
    title: "Connect with the Top-rated Psychologist in India at wleness and Talk to Experts Today",
    keywords: [
        "online psychologist consultation",
        "Best online therapy india",
        "Best psychologist",
        "consult a psychologist online",
    ],
    description:
        "Join wleness therapy community and find the best psychologist near you. Consult the best counselor in India for expert support in improving mental well-being.",
    alternates: {
        canonical: getCanonical(PRICING),
    },
};

export default function PricingPage() {
    return <PricingCards />;
}
