import Blogs from "@components/B2c/Blogs";
import Community from "@components/B2c/Community";
import Patterns from "@components/B2c/Patterns";
import Resolve from "@components/B2c/Resolve";
import CTA from "@components/common/CTA";
import MainHeaderSlider from "@components/B2c/MainHeaderSlider";
import { WLENESS_URL } from "@data/urls";
import HeaderTestimonialSlider from "@components/Sliders/HeaderTestimonialSlider";

export const metadata = {
  title:
    "Consult Best Psychologists in India with Virtual Therapy sessions",
  description:
    "Find expert online psychologist services and online therapy in India. Access professional mental health clinic support for effective therapy and well-being.Wleness offers besamp; therapy with top psychologists in India. Address anxiety, depression, or any mental health concern through convenient chat, call, or video sessions.",
  alternates: {
    canonical: WLENESS_URL,
  },
};

export default function Home() {
  return (
    <>
      <MainHeaderSlider />
      <Community />
      <Patterns />
      <Resolve />
      <HeaderTestimonialSlider />
      <Blogs />
      <CTA isMobile={true} />
    </>
  );
}
