import PricingCards from "@components/Cards/PricingCards";
import { PRICING } from "@data/urls";
import getCanonical from "@utils/getCanonical";

export const metadata = {
  title: "Wleness Online Therapy & Counesling plan",
  description:
    "Find the perfect Wleness Online Therapy Plan for your needs. Affordable online therapy sessions with top-rated psychologists. Get effective treatment for anxiety, depression, and more through convenient chat, call, or video sessions. Start your mental health journey today!",
  alternates: {
    canonical: getCanonical(PRICING),
  },
};

export default function PricingPage() {
  return <PricingCards />;
}
