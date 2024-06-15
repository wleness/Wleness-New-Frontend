"use client";
import axios from "axios";
import { useEffect, useState } from "react";

import { expertsWhy1, expertsWhy2, expertsWhy3 } from "@public";
import Header from "@components/Experts/Header";
import Specialist from "@components/Experts/Specialist";
import WhyUs from "@components/Experts/WhyUs";
import Appointment from "@components/Experts/Appointment";
import HappyClient from "@components/Sliders/HappyClient";
import { EXPERTS_URI } from "@data/api";
import { doctorsPageClient } from "@data/clients";
import { COUPLES_THERAPY, PSYCHIATRIST, THERAPY } from "@data/urls";
import getExperts from "@utils/getExperts";

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
  const [isAssessmentModalOpen, setShowAssessmentModal] = useState(false);
  const [rediredurl, setRediredurl] = useState(null);
  const [experts, setExperts] = useState([]);
  const { status, doctorDetails } = getExperts();

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
      url: "/experts/all",
    });
  };

  useEffect(() => {
    setExperts(doctorDetails.splice(0, 6));
  }, [doctorDetails]);

  if (!status) {
    return <div className="mb-5 text-center">Loading...</div>;
  }
  return (
    <>
      <Header />
      <Specialist doctorDetails={experts} />
      <WhyUs
        expertsTherapy={expertsTherapy}
        expertsPsychiatrist={expertsPsychiatrist}
        expertsCoupleTherapy={expertsCoupleTherapy}
      />
      <Appointment resetBookNow={resetBookNow} />
      <HappyClient data={doctorsPageClient} />
    </>
  );
}
