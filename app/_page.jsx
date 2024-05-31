"use client";

import { useState } from "react";

import RequestForm from "@components/Forms/RequestForm";
import Certifications from "@components/Home/Certifications";
import Community from "@components/Home/Community";
import Faqs from "@components/Home/Faqs";
import Header from "@components/Home/Header";
import Internship from "@components/Home/Internship";
import Resources from "@components/Home/Resources";
import ServiceBanner from "@components/Home/ServiceBanner";
import Services from "@components/Home/Services";
import Therapies from "@components/Home/Therapies";
import WhyWleness from "@components/Home/WhyWleness";
import WlenessWork from "@components/Home/WlenessWork";
import FeaturedIn from "@components/Home/FeaturedIn";
import SelfCare from "@components/Home/SelfCare";
import { homeFaqs } from "@data/home";

export default function Home() {
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const [rediredurl, setRediredurl] = useState(null);

  // Assessment Slides
  const openAssessmentModal = () => {
    setShowAssessmentModal(true);
  };

  const closeAssessmentModal = () => {
    setShowAssessmentModal(false);
  };

  const resetBookNow = () => {
    openAssessmentModal();

    setRediredurl({
      title: "Find a Therapist",
      name: "Find a Therapist",
      url: ALL_EXPERTS,
    });
  };

  return (
    <main>
      {/* Hero Section */}
      <Header openAssessmentModal={() => resetBookNow()} />

      {/* ========== Services Banner ========== */}
      <ServiceBanner />

      {/* ========== Why Wleness ========== */}
      <WhyWleness />

      {/* ========== How wleness work ========== */}
      <WlenessWork />

      {/* ========== Our Services ========== */}
      <Services />

      {/* ========== Featured In Section ========== */}
      <FeaturedIn />

      {/* ========== Our Therapies ========== */}
      <Therapies is_title={true} is_bg={false} />

      {/* ========== Doctors Slider ========== */}
      {/* <DoctorSlider
        data={homePageDoctors}
        openAssessmentModal={openAssessmentModal}
        setUrl={setRediredurl}
      /> */}

      {/* ========== Our Certifications ========== */}
      <Certifications />

      {/* ========== Self Care Section ========== */}
      <SelfCare />

      {/* ========== Community ========== */}
      <Community />

      {/* ========== Internship section ========== */}
      <Internship />

      {/* ========== Blogs ========== */}
      <Resources />

      {/* ========== Our Testimonial ========== */}
      {/* <Testimonials /> */}

      {/* ========== Request Form ========== */}
      <RequestForm />

      {/* ========== FAQ's ========== */}
      <Faqs data={homeFaqs} />

      {/* ========== Modals ========== */}
      {/* <BasicInfo
        isAssessmentOpen={isAssessmentModalOpen}
        onAssessmentClose={closeAssessmentModal}
        buttons={rediredurl}
      /> */}
    </main>
  );
}
