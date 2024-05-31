import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function WhyExecutiveCoaching({ data }) {
  return (
    <section className="text-center bg-black">
      <div className="container mx-auto">
        <h2 className="subheading mb-3 pt-10 text-white">
          <span>Why </span>
          <span className="heading-primary">Executive Coaching</span>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          className="mt-5"
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{ delay: 3000 }}
          speed={400}
          loop={true}
        >
          {data.map((value, i) => {
            return (
              <SwiperSlide
                className="mb-2 cursor-pointer rounded-xl border-[1px] border-slate-500 p-3 py-8 shadow-md shadow-yellow-300 hover:bg-primary-10 lg:mb-12 lg:p-5"
                key={i}
              >
                <figure className="h-full">
                  <div>
                    <Image
                      src={value.image}
                      alt=""
                      className="mx-auto mb-2 w-16 lg:w-28"
                      width={112}
                      height={112}
                    />
                  </div>
                  <figcaption>
                    <h2 className="heading-primary mb-1 inline-block font-bold text-primary-one lg:mb-3 lg:text-xl">
                      {value.title}
                    </h2>
                    <p className="text-xs font-semibold text-slate-300 lg:text-base">
                      {value.desc}
                    </p>
                  </figcaption>
                </figure>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
