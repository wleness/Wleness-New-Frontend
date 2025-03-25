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
import FAQs from "@components/LandingPage/FAQs";

export const metadata = {
    title: "Best Psychologist in India | Mental Health Clinic – Wleness",
    keywords: [
        "Best Psychologist in India",
        "Free online therapist",
        "Online psychologist",
        "online therapy india",
        "Mental health clinic",
    ],
    description:
        "If you need help with mental health solutions. Find the best psychologist in India for wleness. Book NOW.",
    alternates: {
        canonical: WLENESS_URL,
    },
};

export default function Home() {
    return (
        <>
            <MainHeaderSlider />
            <Community />
            <Therapies
                is_title={true}
                is_bg={true}
                headingClasses={"text-3xl font-bold heading-primary"}
                description={true}
                therapyCard={{
                    buttonText: "Know More",
                }}
            />
            <Patterns />
            <Resolve />
            <HeaderTestimonialSlider />
            <div className="py-20 bg-primary-two">
                <WhyChooseGrid
                    title={TherapyData2.title}
                    data={TherapyData2.whyChoose}
                />
            </div>
            <Blogs />
            <CTA isMobile={true} />
            <FAQs faqLanding={true} />
        </>
    );
}
