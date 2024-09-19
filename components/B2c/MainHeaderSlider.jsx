"use client";
// Swiper
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Components
import PrimaryHeader from "./PrimaryHeader";
import { ALL_EXPERTS, ASSESSMENT } from "@data/urls";

const headerSlider = [
  {
    desc: "your safe-space. just yours. ",
    subtitle: "vent. whisper. confess. discuss. laugh. cry. live.",
    title: "we listen. we understand. we resolve.",
    button: ["Connect", "/#patterns"],
    clients: false,
  },
  {
    desc: "your safe-space. just yours. ",
    subtitle: "Find Qualified Psychologists and Therapists",
    title: "Confidential & Secure",
    button: ["View Experts", ALL_EXPERTS],
    clients: false,
  },
  {
    desc: "your safe-space. just yours. ",
    subtitle: "Access your Mental Fitness",
    title: "Free & Insightful",
    button: ["Start Test", ASSESSMENT],
    clients: false,
  },
];

export default function MainHeaderSlider() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      className="!overflow-hidden"
      speed={1000}
      loop={true}
    >
      {headerSlider.map((value, i) => {
        return (
          <SwiperSlide key={i}>
            <PrimaryHeader
              title={value.title}
              subtitle={value.subtitle}
              desc={value.desc}
              button={value.button}
              clients={value.clients}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
