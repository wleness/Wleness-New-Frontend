"use client";
import AboutCoach from "@components/Coach/Profile/AboutCoach";
import CoachCertificates from "@components/Coach/Profile/CoachCertificates";
import CoachExpertise from "@components/Coach/Profile/CoachExpertise";
import CoachesHeader from "@components/Coach/Profile/Header";
import PricingCards from "@components/Coach/Profile/PricingCards";
import WhyCoach from "@components/Coach/Profile/WhyCoach";
import CoachingUserDetailsForm from "@components/Forms/CoachingUserDetailsForm";
import CoachRequestForm from "@components/Forms/CoachRequestForm";
import HappyClient from "@components/Sliders/HappyClient";
import { coaches } from "@data/coach";
import useEnquiryForm from "@utils/useEnquiryForm";
import { useState } from "react";

const reviewsHeading = {
  heading: [
    {
      color: false,
      text: "Our Special ",
    },
    {
      color: true,
      text: "Testimonials ",
    },
  ],
};

export default function CoachPage({ params }) {
  const coach = coaches.filter(
    (value) => value.slug == "/coach/" + params.slug
  )[0];

  const { enquiryForm, toggleForm } = useEnquiryForm();
  const [plan, setPlan] = useState({
    coach_name: coach.name,
  });

  const userDetailsForm = (data) => {
    setPlan({ ...plan, ...data });
    toggleForm();
  };

  return (
    <>
      <CoachesHeader
        name={coach.name}
        profession={coach.profession}
        image={coach.image}
        desc={coach.desc}
      />
      <AboutCoach name={coach.about?.title} paras={coach.about?.desc} />
      <WhyCoach
        name={coach.whyCoach.title}
        image={coach.whyCoach.image}
        lists={coach.whyCoach.reason}
      />
      <CoachExpertise
        heading="Expertise"
        image={coach.expertise.image}
        lists={coach.expertise.list}
      />

      {coach.displayPricing ? (
        <PricingCards packages={coach.packages} openForm={userDetailsForm} />
      ) : null}

      <CoachCertificates certificates={coach.certifications} />

      {coach.reviews ? (
        <HappyClient data={{ ...reviewsHeading, clients: coach.reviews }} />
      ) : null}

      <CoachRequestForm name={coach.name} />

      {coach.displayPricing ? (
        <CoachingUserDetailsForm
          plan={plan}
          isOpen={enquiryForm}
          onClose={toggleForm}
        />
      ) : null}
    </>
  );
}
