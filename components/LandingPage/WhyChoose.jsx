import { faCheckToSlot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LandingPageImage } from "@public";
import Image from "next/image";

const points = [
  "The unpredictability of the markets",
  "High stakes and financial pressure",
  "Constant fear of missing out (FOMO)",
  "The mental drain of non-stop decision-making",
];

export default function WhyChoose() {
  return (
    <section className="py-16 lg:py-24 bg-black flex flex-col gap-5">
      <div className="container mx-auto">
        <h3 className="text-3xl lg:text-4xl mb-2 font-bold text-white">
          Why Is
          <span className="text-primary-one"> Trading </span> So Stressful?
        </h3>
        <p className="lg:w-[28rem] lg:text-lg text-slate-300">
          Allow you to get secure and private online counseling via your own
          smartphone or tablet.
        </p>
        <div className="grid lg:grid-cols-2 items-center gap-5 mt-5">
          <div className="relative flex justify-center items-center lg:order-2">
            <div className="bg-white bg-opacity-70 w-20 h-20 absolute rounded-full flex justify-center items-center text-2xl text-[#3ac8b8]">
              <i className="fa-solid fa-play"></i>
            </div>
            <Image className="rounded-xl" src={LandingPageImage} alt="" />
          </div>
          <div className="space-y-6 lg:space-y-7 lg:order-1">
            {points.map((value, i) => {
              return (
                <div className="flex gap-2 items-center" key={i}>
                  <FontAwesomeIcon
                    icon={faCheckToSlot}
                    className="text-primary-one w-5"
                  />
                  <h5 className="lg:text-xl text-white font-medium">{value}</h5>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
