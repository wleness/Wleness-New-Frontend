import { B2CCommunity, montserrat, rubik } from "@/public";
import Image from "next/image";
import PrimaryTitle from "@components/Title/PrimaryTitle";
import Certifications from "@components/common/Certifications";

export default function Community() {
  return (
    <section className="bg-primary-two">
      <div className="space-y-6 xl:space-y-9 mx-auto xl:w-[1280px] xl:px-[184px]">
        <hgroup className="grid">
          <PrimaryTitle text={"Engineers build. Marketers sell."} />
          <PrimaryTitle text={"Designers create. Operators run."} />
        </hgroup>

        <div className="my-6 grid xl:grid-cols-2 xl:gap-28">
          <div className="space-y-2 mb-6 xl:mb-0">
            <p className="text-light">
              You're trained to solve for specific problems of your fellow
              humans, with your unique skills.
            </p>
            <span className="text-xl font-bold inline-block text-white xl:text-2xl">
              Similarly
            </span>
            <h4
              className={`text-xl text-primary-one xl:text-2xl leading-7  ${montserrat.className}`}
            >
              <span>we're </span>
              <span className="font-bold"> trained</span>
              <span> to solve your </span>
              <span className="font-bold"> emotional & mental states</span>
            </h4>
            <p className="text-light">so you feel & perform at your peak.</p>
          </div>
          <div>
            <Image
              src={B2CCommunity}
              alt="community image"
              className="xl:w-full"
            />
          </div>
        </div>

        <div>
          <p className="text-white font-semibold xl:text-xl flex items-center gap-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="30"
              viewBox="0 0 66 30"
              fill="none"
            >
              <path
                d="M0 14.9219H65M65 14.9219C58.0517 14.9986 44.1552 7.09648 44.1552 0.421875M65 14.9219C58.0517 14.8452 44.1552 22.7473 44.1552 29.4219"
                stroke="white"
                stroke-width="3"
              />
            </svg>
            <span> We're an exclusive community of</span>
          </p>
          <h2 className={`text-3xl text-primary-one font-rubik-one`}>
            Therapists. Psychologists. Psychiatrists. Coaches.
          </h2>
        </div>
        <Certifications />
      </div>
    </section>
  );
}
