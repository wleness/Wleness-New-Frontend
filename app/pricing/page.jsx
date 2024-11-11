import PricingCards from "@components/Cards/PricingCards";
import { PRICING } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Get Online Psychologist Consultation and talk to Experts Today",
  description:
    "Consult an online psychologist for expert advice. Experience the best online therapy in India with the best psychologist. Consult now to enhance your mental health.",
  alternates: {
    canonical: getCanonical(PRICING),
  },
};

export default function PricingPage() {
  return <PricingCards />;
}
