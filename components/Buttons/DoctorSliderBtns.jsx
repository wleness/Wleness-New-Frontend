import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Swiper
import { useSwiper } from "swiper/react";

export default function DoctorSliderBtns() {
  const swiper = useSwiper();

  return (
    <div className="absolute bottom-0 left-0 flex w-full items-center justify-between z-10">
      <button
        onClick={() => swiper.slidePrev()}
        className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-primary-one transition-all hover:bg-primary-one lg:h-12 lg:w-12"
      >
        <FontAwesomeIcon
          icon={faCaretLeft}
          className="text-2xl text-primary-one group-hover:text-black lg:text-4xl"
        />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="group flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary-one hover:border-2 hover:border-primary-one hover:bg-transparent lg:h-12 lg:w-12"
      >
        <FontAwesomeIcon
          icon={faCaretRight}
          className="text-2xl text-black group-hover:text-primary-one lg:text-4xl"
        />
      </button>
    </div>
  );
}
