import Blogs from "@components/B2c/Blogs";
import Community from "@components/B2c/Community";
import Patterns from "@components/B2c/Patterns";
import Resolve from "@components/B2c/Resolve";
import dynamic from "next/dynamic";
const CTA = dynamic(() => import("@components/common/CTA"), { ssr: false });
import MainHeaderSlider from "@components/B2c/MainHeaderSlider";
import { WLENESS_URL } from "@data/urls";
import HeaderTestimonialSlider from "@components/Sliders/HeaderTestimonialSlider";
import Therapies from "@components/Home/Therapies";
import { TherapyData2 } from "@data/therapy";
import WhyChooseGrid from "@components/Therapy/WhyChooseGrid";

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
      <Therapies is_title={true} is_bg={true} headingClasses={'text-3xl font-bold heading-primary'} description={true} therapyCard={{
          buttonText: 'Know More',
        }}
      />
      <Patterns />
      <Resolve />
      <HeaderTestimonialSlider />
      <div className="py-20 bg-primary-two"> 
        <WhyChooseGrid data={TherapyData2.whyChoose} />
      </div>
      <Blogs />
      <CTA isMobile={true} />
    </>
  );
}
