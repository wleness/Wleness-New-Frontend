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
    button: ["connect", "/#patterns"],
    clients: false,
  },
  {
    desc: "your safe-space. just yours. ",
    subtitle: "find qualified psychologists and therapists",
    title: "confidential & secure",
    button: ["view experts", ALL_EXPERTS],
    clients: false,
  },
  {
    desc: "your safe-space. just yours. ",
    subtitle: "access your mental fitness",
    title: "free & insightful",
    button: ["start test", ASSESSMENT],
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
