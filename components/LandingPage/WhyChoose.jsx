import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LandingPageImage } from "@public";
import Image from "next/image";

export default function WhyChoose() {
  return (
    <section className="py-24 bg-black flex flex-col gap-5">
      <div className="container mx-auto">
        <h3 className="text-4xl mb-2 font-bold text-white">
          Why Is
          <span className="text-primary-one">Trading</span> So Stressful?
        </h3>
        <p className="w-[28rem] text-lg text-slate-300">
          Allow you to get secure and private online counseling via your own
          smartphone or tablet.
        </p>
        <div className="grid grid-cols-2 items-center gap-5 mt-5">
          <div className="flex flex-col gap-7">
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faCheckToSlot}
                className="text-primary-one w-5"
              />
              <h5 className="text-xl text-white font-medium">
                The unpredictability of the markets
              </h5>
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faCheckToSlot}
                className="text-primary-one w-5"
              />
              <h5 className="text-xl text-white font-medium">
                High stakes and financial pressure
              </h5>
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faCheckToSlot}
                className="text-primary-one w-5"
              />
              <h5 className="text-xl text-white font-medium">
                Constant fear of missing out (FOMO)
              </h5>
            </div>
            <div className="flex gap-2 items-center">
              <FontAwesomeIcon
                icon={faCheckToSlot}
                className="text-primary-one w-5"
              />
              <h5 className="text-xl text-white font-medium">
                The mental drain of non-stop decision-making
              </h5>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="bg-white bg-opacity-70 w-20 h-20 absolute rounded-full flex justify-center items-center text-2xl text-[#3ac8b8]">
              <i className="fa-solid fa-play"></i>
            </div>
            <Image className="rounded-xl" src={LandingPageImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
