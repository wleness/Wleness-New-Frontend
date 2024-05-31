import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { textColorize } from "@utils";

export default function Header({ data }) {
  return (
    <>
      <header className="bg-primary-two py-4 lg:py-10">
        <div className="container relative mx-auto flex flex-col items-center rounded-3xl py-2 lg:flex-row lg:bg-slate-950 lg:px-10 lg:py-6 xl:py-14 2xl:justify-between">
          {/* Desktop Image */}
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect={"fade"}
            slidesPerView={1}
            className="mb-4 w-full rounded-2xl lg:order-2 lg:mb-0 lg:w-[55%] 2xl:flex 2xl:justify-end"
            autoplay={{ delay: 2000 }}
            speed={400}
            loop={true}
          >
            {data.images.map((value, i) => {
              return (
                <SwiperSlide className="rounded-2xl">
                  <Image
                    key={i}
                    src={value}
                    alt=""
                    className="block w-fit object-cover"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div className="mb-4 rounded-3xl py-5 text-center md:mb-6 lg:order-1 lg:m-0 lg:mb-0 lg:w-[45%] lg:rounded-none xl:pl-0">
            <hgroup className="md:mb-3 xl:pr-6">
              <h1 className="subheading mb-4 lg:text-left">
                {textColorize(data.title)}
              </h1>
              <h5 className="mb-8 font-medium lg:text-left text-slate-300">
                {data.desc}
              </h5>
            </hgroup>
            <div className="lg:text-left">
              <button
                className="btn-one mr-2"
                // onClick={props.openAssessmentModal}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
