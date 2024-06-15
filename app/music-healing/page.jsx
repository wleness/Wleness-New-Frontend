"use client";
import { useState } from "react";
// Data
import { music_healing } from "@data/activities";
// Components
import Header from "@components/Activities/Header";
import Services from "@components/MusicHealing/Services";
import useEnquiryForm from "@utils/useEnquiryForm";
import ActivityForm from "@components/Forms/ActivityForm";
import Tracks from "@components/MusicHealing/Tracks";
import Benefits from "@components/MusicHealing/Benefits";
import HappyClient from "@components/Sliders/HappyClient";
import { musicalTherapyClient } from "@data/clients";
import { musicalTherapyFaq } from "@data/faqs";
import FaqWithImage from "@components/Therapy/CoupleTherapy/FaqWithImage";

export default function MusicHealingPage() {
  const { enquiryForm, toggleForm } = useEnquiryForm();

  return (
    <>
      <Header
        title={music_healing.header.title}
        desc={music_healing.header.desc}
        image={music_healing.header.image}
        alt={music_healing.header.alt}
        button={{ text: "Enquire Now", action: toggleForm }}
      />
      <Services data={music_healing.activities} openEnquiry={toggleForm} />

      <Tracks />
      <Benefits data={music_healing.benefits} />

      <HappyClient data={musicalTherapyClient} />
      <FaqWithImage data={musicalTherapyFaq} />

      <ActivityForm
        purpose={music_healing.name}
        isOpen={enquiryForm}
        onClose={toggleForm}
      />
    </>
  );
}
