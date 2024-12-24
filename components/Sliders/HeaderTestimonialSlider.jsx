"use client";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { clients } from "@data/b2c";
import { montserrat } from "@public";
import Image from "next/image";

export default function HeaderTestimonialSlider() {
  return (
    <section className="pt-5 px-4 xl:px-10 bg-primary-two">
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
        {clients.map((value, i) => {
          return (
            <SwiperSlide key={i}>
              <figure
                key={i}
                className={`${value.bg} py-2 px-4 3xl:py-6 space-y-2 rounded-lg`}
              >
                <div className="flex gap-x-4">
                  <div>
                    <Image
                      src={value.image}
                      alt={value.altText}
                      width={60}
                      height={60}
                      className="rounded-lg xl:w-20 xl:h-20 object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] sm:text-xs font-medium">
                      {value.name}
                    </span>
                    <p className="text-[10px] sm:text-base font-semibold">
                      {value.designation}
                    </p>
                    <p className="space-x-1">
                      {value.categories.map((element, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 inline-block text-[10px] sm:text-base bg-primary-two text-white rounded-md"
                        >
                          {element}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
                <figcaption
                  className={`${montserrat.className} text-xs xl:text-sm font-medium`}
                >
                  {value.review}
                </figcaption>
              </figure>
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div className="grid xl:grid-cols-3 gap-3">
        {clients.map((value, i) => {
          return (
            <figure
              key={i}
              className={`${value.bg} p-4 space-y-2 rounded-lg`}
            >
              <div className="flex gap-x-4">
                <div>
                  <Image
                    src={value.image}
                    alt={value.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-xs font-medium">{value.name}</span>
                  <p className="font-semibold">{value.designation}</p>
                  <p className="space-x-1">
                    {value.categories.map((element, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-[10px] bg-primary text-white rounded-md"
                      >
                        {element}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
              <figcaption className="text-xs xl:text-sm font-medium">
                {value.review}
              </figcaption>
            </figure>
          );
        })}
      </div> */}
    </section>
  );
}
