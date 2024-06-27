"use client";
import Image from "next/image";
// Swiper Js & Styles
import { montserrat, PrimaryHeaderImage, roboto_flex } from "@/public";
// Swiper Js & Styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { StarIcon } from "@components/Icons";

export default function PrimaryHeader({
  title,
  desc,
  subtitle,
  clients,
  handleScrollToComponent,
}) {
  return (
    <header className="py-14 bg-primary-two pb-36">
      <div className="grid gap-y-3 mb-12 px-4 xl:px-20">
        <h1 className="text-center grid p-2">
          <span
            className={`text-4xl xl:text-[56px] leading-[56px] text-primary-one ${roboto_flex.className}`}
          >
            wleness
          </span>
          <span
            className={`text-white text-xs xl:text-base font-bold ${montserrat.className}`}
          >
            {desc}
          </span>
        </h1>
        <div>
          <p
            className={`${montserrat.className} mb-2 font-semibold text-primary-one text-xs text-center xl:text-[20px]`}
          >
            {subtitle}
          </p>
          <h2
            className={`${montserrat.className} text-lg font-bold text-white text-center xl:text-2xl grid xl:block`}
          >
            {title}
          </h2>
        </div>
        <div className="text-center">
          <button
            onClick={handleScrollToComponent}
            className={`${montserrat.className} btn-2 border-primary-one text-primary-one`}
          >
            <span className="flex items-center gap-x-2">
              <span>Connect</span>
              <StarIcon theme={"light"} />
            </span>
          </button>
        </div>
      </div>

      <div className="overflow-x-hidden">
        <Image
          src={PrimaryHeaderImage}
          alt="header image"
          className="w-[1024px] max-w-[1024px] -translate-x-[40%] xl:-translate-x-0 mx-auto xl:max-w-full xl:w-full"
        />
      </div>

      <div className="pt-5 px-4 xl:px-10">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          className="!overflow-x-clip overflow-y-visible"
          autoplay={{ delay: 3000 }}
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
                  className={`${value.bg} py-2 px-4 space-y-2 rounded-lg`}
                >
                  <div className="flex gap-x-4">
                    <div>
                      <Image
                        src={value.image}
                        alt={value.name}
                        width={60}
                        height={60}
                        className="rounded-lg xl:w-20 xl:h-20"
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
      </div>
    </header>
  );
}
