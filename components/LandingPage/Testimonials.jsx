"use client";
// Swiper
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import {
  testimonial1,
  testimonial2,
  testimonial3,
  testimonial4,
} from "@public";
import Image from "next/image";

const reviews = [
  {
    name: "Amit",
    designation: "Full-time trader",
    review:
      "Since applying the stress management techniques, I've been able to trade more calmly and avoid those emotional, costly mistakes",
    image: testimonial3,
  },
  {
    name: "Priya",
    designation: "Day trader",
    review:
      "I can finally think clearly during high-pressure trades. This program really works!",
    image: testimonial2,
  },
  {
    name: "Amruta",
    designation: "Full-time trader",
    review:
      "Since applying the stress management techniques, I've been able to trade more calmly and avoid those emotional, costly mistakes",
    image: testimonial1,
  },
  {
    name: "Saniya",
    designation: "Investor",
    review:
      "Since applying the stress management techniques, I've been able to trade more calmly and avoid those emotional, costly mistakes",
    image: testimonial4,
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 lg:py-24 bg-black" id="testimonials">
      <div>
        <div className="mb-10 xl:mb-16 container mx-auto">
          <h3 className="text-3xl lg:text-4xl text-center font-bold text-white">
            Trusted by <span className="text-primary-one"> Traders </span> Think
            Like You
          </h3>
        </div>
        <div className="px-4 lg:px-10">
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            className="!overflow-x-clip overflow-y-visible"
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            speed={1000}
            loop={true}
          >
            {reviews.map((value, i) => {
              return (
                <SwiperSlide key={i}>
                  <figure
                    key={i}
                    className="bg-slate-900 px-6 space-y-2 rounded-lg"
                  >
                    <figcaption className="text-slate-200 py-6 xl:py-8 text-sm font-medium">
                      {value.review}
                    </figcaption>
                    <div className="flex items-center py-6 gap-x-4 border-t border-slate-600">
                      <Image
                        src={value.image}
                        alt={value.name}
                        className="rounded-full xl:w-14 xl:h-14 object-cover"
                      />
                      <div className="flex flex-col items-start">
                        <span className="text-white font-medium">
                          {value.name}
                        </span>
                        <p className="text-sm text-slate-400 font-semibold">
                          {value.designation}
                        </p>
                      </div>
                    </div>
                  </figure>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
