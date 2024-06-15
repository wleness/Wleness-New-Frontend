"use client";
import { useState } from "react";
// Data
import { lifeStyleCoachingFaqs } from "@data/faqs";
import { coaches, lifestyle_coaching } from "@data/coach";
// Components
import FaqWithImage from "@components/Therapy/CoupleTherapy/FaqWithImage";
import LifeCoachingForm from "@components/Forms/LifecoachingForm";
import CoachRequestForm from "@components/Forms/CoachRequestForm";
import Coaches from "@components/Coach/Coaches";
import Header from "@components/Coach/Life/Header";
import WlenessCoaching from "@components/Coach/Life/WlenessCoaching";
import Results from "@components/Coach/Life/Results";
import PropelForward from "@components/Coach/Life/PropelForward";

export default function LifeCoachingPage() {
  const [lifecoachingForm, setLifeCoachingForm] = useState(false);

  // Toggle form
  const toggleForm = () => {
    setLifeCoachingForm(!lifecoachingForm);
  };

  // Filter executive coaches
  const lifestyle_coaches = coaches.filter(
    (value) => value.category == "lifestyle"
  );

  return (
    <>
      <Header data={lifestyle_coaching.header} toggleForm={toggleForm} />

      <Coaches title="Life Coaches" coaches={lifestyle_coaches} />

      <WlenessCoaching data={lifestyle_coaching.coaching} />

      <Results data={lifestyle_coaching.results} />

      <PropelForward data={lifestyle_coaching.forward} />

      <FaqWithImage data={lifeStyleCoachingFaqs} />

      <LifeCoachingForm isOpen={lifecoachingForm} onClose={toggleForm} />

      <CoachRequestForm name="Life Coaching" onClose={toggleForm} />
    </>
  );
}
