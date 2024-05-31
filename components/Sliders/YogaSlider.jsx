import { useEffect, useState } from "react";
import axios from "axios";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
// Data
import { YOGA_EXPERTS_URI } from "@data/api";
import YogaInstructorCard from "@components/Cards/YogaInstructorCard";
import { textColorize } from "@utils";

export default function YogaSlider() {
  const [swiper, setSwiper] = useState(null); // Store Swiper instance

  const handleMouseEnter = () => {
    swiper ? swiper.autoplay.stop() : "";
  };

  const handleMouseLeave = () => {
    swiper ? swiper.autoplay.start() : "";
  };

  const [experts, setExperts] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Doctors list
  useEffect(() => {
    // Make a GET request using Axios
    axios
      .get(YOGA_EXPERTS_URI)
      .then((response) => {
        let data = response.data["experts"];
        if (response.status == 200) {
          setExperts(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching doctor details:", error);
      });
  }, []);

  if (loading) {
    return <div className="mb-5 text-center">Loading...</div>;
  }

  return (
    <section className="py-5 bg-primary-two">
      <div className="container relative mx-auto ">
        <div className="pb-6 text-center sm:pt-6 lg:pb-14 2xl:pb-8 ">
          <h1 className="subheading sm:pb-0 lg:mb-4 text-white">
            {textColorize([
              {
                color: false,
                text: "Our ",
              },
              {
                color: true,
                text: "Yoga Instructors ",
              },
            ])}
          </h1>

          <p className="para mx-auto w-4/5">
            Meet the skilled and dedicated yoga instructors who guide you on
            your wellness journey with expertise and passion.
          </p>
        </div>

        {/* Yoga Instructors */}
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Swiper
            modules={[Autoplay, Pagination]}
            className="mySwiper overflow-y-visible rounded-2xl pb-12"
            grabCursor={true}
            spaceBetween={15}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            onSwiper={(swiper) => setSwiper(swiper)} // Store Swiper instance
            speed={600}
          >
            {experts?.map((value, index) => {
              return (
                <SwiperSlide key={index}>
                  <YogaInstructorCard data={value} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
